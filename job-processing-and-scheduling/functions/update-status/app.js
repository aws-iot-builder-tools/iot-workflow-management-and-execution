import {JobsService} from "./jobs-service.js";

const jobsService = new JobsService();

export const lambdaHandler = async (event) => {
    const messageRaw = event.Records[0].Sns?.Message;
    const message = JSON.parse(messageRaw);
    console.log('UpdateStatusHandler', {message: message});
    const jobId = message.operationId;
    const thingName = message.thingName;

    if (thingName && jobId) {
        return await jobsService.updateJobExecution(thingName
        , jobId, message);
    } else {
        console.log("Missing thingName or jobId, cant update job status.");
        return;
    }
};
