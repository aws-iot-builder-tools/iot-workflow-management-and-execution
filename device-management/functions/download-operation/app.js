import {PublishCommand, SNSClient} from "@aws-sdk/client-sns";
import {MqttMtp} from "./mtp/mqtt-mtp.js";
import {FirmwareDownloadRequest} from "./firmware-download-request.js";
import {v4 as uuid} from "uuid";
const snsClient = new SNSClient({});
const lambdaUUID = uuid();
const controllerId = 'self::aws-usp-controller';
const mqttMtp = new MqttMtp(lambdaUUID, controllerId);

export const lambdaHandler = async (event) => {
    const messageRaw = event.Records[0].Sns?.Message;
    const message = JSON.parse(messageRaw);
    console.log('DMDownloadOperationHandler', {message: message});

    //Send download command to device:
    const response = await downloadFirmware(message);

    const newMessage = {
        id: message.id,
        thingName: message.thingName,
        token: message.token,
        firmwareVersion: message.firmwareVersion,
        name: response ? "DEVICE_STARTED_DOWNLOAD_SUCCESS" : "DEVICE_STARTED_DOWNLOAD_FAIL"
    };

    const params = {
        Message: JSON.stringify(newMessage),
        TopicArn: process.env.EVENT_TOPIC_ARN
    };

    await snsClient.send(new PublishCommand(params));
};


// TODO: Check the Thing exists and is connected.
const downloadFirmware = async (message) => {
    console.log('message', {handleEvent: message});
    await mqttMtp.prepareMTP();
    const mtpRequest = new FirmwareDownloadRequest(message);
    const mtpResponse = await mqttMtp.sendRequest(message.thingName, message.thingName, mtpRequest.toMessage());
    return createFirmwareDownloadResult(mtpResponse);
}

const createFirmwareDownloadResult = (message) => {
    const operateResp = message?.body?.response?.operateResp;
    if (operateResp &&
        Array.isArray(operateResp.operationResults) &&
        (operateResp.operationResults.length === 1)) {
        const operationResult = operateResp.operationResults[0];
        if (operationResult.cmdFailure) {
            return {
                error: {
                    errCode: operationResult.cmdFailure.errCode,
                    errMsg: operationResult.cmdFailure.errMsg
                },
                success: false
            };
        } else {
            return {
                success: true
            };
        }
    } else {
        throw new Error({message: 'Unexpected USP message structure.'});
    }
}