import {SendTaskFailureCommand, SendTaskSuccessCommand, SFNClient} from "@aws-sdk/client-sfn";
import {
    DynamoDBClient,
    QueryCommand
} from '@aws-sdk/client-dynamodb';
import {unmarshall} from '@aws-sdk/util-dynamodb';
const sfnClient = new SFNClient({});
const dynamodb = new DynamoDBClient({});
const TOKENS_TABLE_NAME = process.env.TOKENS_TABLE_NAME;

/**
 * Here we receive events coming from DM. We retrieve the corresponding task for device for job and for event and
 * we correctly close the state machine state.
 * Relevant events are:
 * DOWNLOAD_OPERATION_DONE
 * FIRMWARE_TRANSFERRED
 * DEVICE_REBOOTED
 * @param event
 */
export const lambdaHandler = async (event) => {
    const messageRaw = event.Records[0].Sns?.Message;
    const message = JSON.parse(messageRaw);
    console.log('[WME-UpgradeStatusFromEvents]UpgradeStatusDeviceEvents', {message: message});

    if (message.name && message.operationId && message.thingName) {
        const tokenResult = await query(message.operationId, message.name, message.thingName);
        if (tokenResult?.token) {
            if (message.status === 'SUCCESS' || message.status === 'FAIL' ) {
                const outputParameters = {status: message.status, event: message.name, token: tokenResult.token,};
                if(message.name === "DEVICE_REBOOTED") {
                    outputParameters.newFirmwareVersion = message.firmwareVersion;
                }
                const parameters = {
                    output: JSON.stringify(outputParameters),
                    taskToken: tokenResult.token
                };
                return await sfnClient.send(new SendTaskSuccessCommand(parameters));
            } else {
                const parameters = {
                    cause: message.name,
                    error: message.name,
                    taskToken: tokenResult.token
                };
                return await sfnClient.send(new SendTaskFailureCommand(parameters));
            }
        } else {
            console.log("[WME-UpgradeStatusFromEvents] Missing token, cant terminate.");
            return;
        }
    } else {
        console.log(`[WME-UpgradeStatusFromEvents] Missing operationId or name in ${message}, cant terminate.`);
        return;
    }
};

const query = async (operationId, notificationKey, thingName) => {
    const queryInput = {
        ExpressionAttributeNames: {
            '#operationId': 'operationId',
            '#deviceId': 'deviceId',
            '#notificationKey': 'notificationKey',
            '#status': 'status'
        },
        ExpressionAttributeValues: {
            ':operationId': {
                S: operationId
            },
            ':deviceId': {
                S: thingName
            },
            ':notificationKey': {
                S: notificationKey
            },
            ':status': {
                S: "ACTIVE"
            }
        },
        FilterExpression: '#notificationKey=:notificationKey AND #status=:status AND #deviceId=:deviceId',
        KeyConditionExpression: '#operationId = :operationId',
        TableName: TOKENS_TABLE_NAME
    };

    const response = await dynamodb.send(new QueryCommand(queryInput));
    if (response.Count === 0) {
        console.log(`[WME-UpgradeStatusFromEvents] operationId: ${operationId}, error: No ACTIVE Entry found for ${notificationKey} and ${operationId} and ${thingName}.`);
        return;
    } else if (response.Items && (response.Count === 1)) {
        const item = unmarshall(response.Items[0]);

        const {
            operationId,
            token,
            notificationKey,
            deviceId,
            status
        } = item;

        const taskExecution = {
            operationId,
            notificationKey,
            deviceId,
            status,
            token
        };
        console.log('[WME-UpgradeStatusFromEvents] QueryByOperationId', {taskExecution: taskExecution});
        return taskExecution;
    } else {
        //Error.
        console.error('[WME-UpgradeStatusFromEvents] QueryByOperationId', {
            operationId: operationId,
            error: `More than one entry on Query for ${notificationKey} and ${operationId} and ${thingName}.`
        });
        return;
    }
}