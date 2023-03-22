import {
    DescribeEndpointCommand,
    IoTClient,
    DescribeJobTemplateCommand,
    CreateJobCommand
} from '@aws-sdk/client-iot';
import {
    IoTJobsDataPlaneClient,
} from '@aws-sdk/client-iot-jobs-data-plane';
import ShortUniqueId from 'short-unique-id';

const REGION = process.env.REGION;
const iotClient = new IoTClient({region: REGION});
let iotJobsDataPlaneClient;
const stateMachineName = process.env.FWU_STATE_MACHINE;

const uid = new ShortUniqueId({length: 10});
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

    async _describeJobTemplate (input) {
        const describeJobTemplateCommand = new DescribeJobTemplateCommand(input);
        return iotClient.send(describeJobTemplateCommand);
    }

    async _createJob (createJobCommandInput)  {
        const createJobCommand = new CreateJobCommand(createJobCommandInput);
        return iotClient.send(createJobCommand);
    }

    async createJobFromEvent (event) {
        console.log('CreateJob', {handleEvent: JSON.stringify(event)});
        const describeJobTemplateResult = await this._describeJobTemplate({
            jobTemplateId: stateMachineName
        });
        console.log('DescribeJobTemplateResult', {describeJobTemplateResult});
        const jobDocument = JSON.parse(describeJobTemplateResult.document);
        jobDocument.firmwareVersion = event.firmwareVersion;
        jobDocument.upgradeTrigger = event.upgradeTrigger;

        // Create Job.
        const createJobResult = await this._createJob({
            document: JSON.stringify(jobDocument),
            jobId: `${stateMachineName}-${uid()}`,
            targetSelection: event.targetSelection,
            targets: [
                event.targetArn
            ]
        });
        console.log('CreateJobResult', {createJobResult});
        return {};
    }
}
