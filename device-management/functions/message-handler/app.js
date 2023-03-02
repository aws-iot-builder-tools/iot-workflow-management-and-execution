import {PublishCommand, SNSClient} from "@aws-sdk/client-sns";

const snsClient = new SNSClient({});

export const lambdaHandler = async (event) => {
    console.log('MessageHandler', {handleEvent: JSON.stringify(event)});
    if (shouldHandle(event)) {
        const eventName = event.payload?.body?.request?.notify?.event?.eventName;
        const thingName = event.thingName;
        let message = {};
        if (eventName === 'Boot!') {
            const eventParams = event.payload?.body?.request?.notify?.event?.params || {};
            const parameterMap = JSON.parse(eventParams.ParameterMap);
            console.log('ParameterMap', {paramMap: parameterMap});
            //TODO: store version in thing attributes
            message = {
                id: eventParams.CommandKey,
                operationId: eventParams.CommandKey,
                thingName: thingName,
                name: "DEVICE_REBOOTED",
                firmwareVersion: parameterMap['Device.DeviceInfo.SoftwareVersion'] || 'NA',
                status: eventParams.FirmwareUpdated ? "SUCCESS" : 'FAIL'
            };
        } else if (eventName === 'TransferComplete!') {
            const eventParams = event.payload?.body?.request?.notify?.event?.params || {};

            message = {
                id: eventParams.CommandKey,
                operationId: eventParams.CommandKey,
                thingName: thingName,
                name: "FIRMWARE_TRANSFERRED",
                status: eventParams.FaultCode === '0' ? 'SUCCESS' : 'FAIL'
            };
        } else {
            const operComplete = event.payload?.body?.request?.notify?.operComplete || {};
            message = {
                id: operComplete.commandKey,
                operationId: operComplete.commandKey,
                thingName: thingName,
                name: "DOWNLOAD_OPERATION_DONE",
                status: operComplete.cmdFailure ? "FAIL" : "SUCCESS"
            };
        }
        const params = {
            Message: JSON.stringify(message),
            TopicArn: process.env.EVENT_TOPIC_ARN
        };
        await snsClient.send(new PublishCommand(params));
    }
};

const shouldHandle = (event) => {
    const eventName = event.payload?.body?.request?.notify?.event?.eventName;
    const commandName = event.payload?.body?.request?.notify?.operComplete?.commandName;
    const msgType = event.payload.header.msgType;
    return (msgType === 'NOTIFY' && (eventName === 'Boot!' || eventName === 'TransferComplete!'))
        || (msgType === 'NOTIFY' && commandName === 'Download()');
}
