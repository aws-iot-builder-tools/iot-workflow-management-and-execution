import {JobsService} from "./jobs-service.js";
const jobsService = new JobsService();

/** Event must have the following structure:
 * {
 *     firmwareVersion: "1.2.3",
 *     upgradeTrigger: "manual",
 *     targetArn:""
 * }
 * @param event
 * @returns {Promise<void>}
 */
export const lambdaHandler = async (event) => {
    console.log('CreateJobHandler', {handleEvent: event});
    await jobsService.createJobFromEvent(event);
};
