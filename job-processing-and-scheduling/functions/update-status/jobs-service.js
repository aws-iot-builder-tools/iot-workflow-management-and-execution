import {
    DescribeEndpointCommand,
    IoTClient,
} from '@aws-sdk/client-iot';
import {
    IoTJobsDataPlaneClient, JobExecutionStatus,
    UpdateJobExecutionCommand,
} from '@aws-sdk/client-iot-jobs-data-plane';

const REGION = process.env.REGION;
const iotClient = new IoTClient({region: REGION});
let iotJobsDataPlaneClient;

export class JobsService {
    async _configure() {
        if (!iotJobsDataPlaneClient) {
            const describeEndpointCommand = new DescribeEndpointCommand({
                endpointType: 'iot:Jobs'
            });
            const result = await iotClient.send(describeEndpointCommand);
            iotJobsDataPlaneClient = new IoTJobsDataPlaneClient({
                endpoint: `https://${result.endpointAddress}`,
                region: REGION
            });
        }
    };

    async updateJobExecution(thingName, jobId, message) {
        await this._configure();
        const input = {
            jobId: jobId,
            status: message.name === 'FIRMWARE_UPGRADE_SUCCESS' ? JobExecutionStatus.SUCCEEDED : JobExecutionStatus.FAILED,
            thingName: thingName
        };

        if(message.details) {
            input.statusDetails = message.details;
        }
        const updateJobExecutionCommand = new UpdateJobExecutionCommand(input);
        return iotJobsDataPlaneClient.send(updateJobExecutionCommand);
    }
}
