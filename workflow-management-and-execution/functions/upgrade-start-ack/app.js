import {SendTaskFailureCommand, SendTaskSuccessCommand, SFNClient} from "@aws-sdk/client-sfn";
const sfnClient = new SFNClient({});

export const lambdaHandler = async (event) => {
    const messageRaw = event.Records[0].Sns?.Message;
    const message = JSON.parse(messageRaw);
    console.log('UpgradeStartACKHandler', {message: message});

    if (message.name && message.token) {
        if (message.name === 'DEVICE_STARTED_DOWNLOAD_SUCCESS') {
            const outputParameters = {status: 'SUCCESS', token: message.token};
            const parameters = {
                output: JSON.stringify(outputParameters),
                taskToken: message.token
            };
            return await sfnClient.send(new SendTaskSuccessCommand(parameters));
        } else {
            const parameters = {
                cause: message.name,
                error: message.name,
                taskToken: message.token
            };
            return await sfnClient.send(new SendTaskFailureCommand(parameters));
        }
    } else {
        console.log("Missing token, cant terminate.");
        return;
    }
};
