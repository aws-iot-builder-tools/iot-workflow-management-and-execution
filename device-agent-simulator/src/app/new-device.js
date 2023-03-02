import {
    IoTClient,
    CreateThingCommand,
    CreateKeysAndCertificateCommand, AttachPolicyCommand, AttachThingPrincipalCommand, DescribeEndpointCommand
} from "@aws-sdk/client-iot";

const REGION = process.env.AWS_REGION;
const client = new IoTClient({region: REGION});
const DEFAULT_FIRMWARE = "1.2.1";

export class Device {
    constructor(options = {}) {
      this._thingName = options.thingName;
      this._firmwareVersion = options.firmwareVersion || DEFAULT_FIRMWARE;
      this._logger = options.logger;
    }

    get thingName () {
        return this._thingName;
    }

    async createThing() {
        this._logger.info('[Device] Creating or Updating thing ', this.thingName);
        const command = new CreateThingCommand({thingName: this.thingName, attributePayload: {attributes: {
            firmwareVersion: this._firmwareVersion
                }}});
        return await client.send(command);
    }

    async createKeysAndCertificate() {
        this._logger.info('[Device] Creating key and cert for ', this.thingName);

        const command = new CreateKeysAndCertificateCommand({setAsActive: true});
        const response = await client.send(command);
        return {
            certificate: response.certificatePem,
            certificateArn: response.certificateArn,
            certificateId: response.certificateId,
            key: response.keyPair.PrivateKey
        }
    }

    async attachPolicyToCertificate(certResponse) {
        //TODO: this must exist. Must create full citizen policy in CF.
        this._logger.info('[Device] Attaching policy to principal ', this.thingName);

        const command = new AttachPolicyCommand({policyName: 'fullCitizen', target: certResponse.certificateArn});
        return await client.send(command);
      }

    async attachCertificateToThing(certResponse) {
        this._logger.info('[Device] Attaching cert to thing ', this.thingName);

        const command = new AttachThingPrincipalCommand({thingName: this.thingName, principal: certResponse.certificateArn});
        return await client.send(command);
    }

    async configureEndpoint () {
        const describeEndpointCommand = new DescribeEndpointCommand({
            endpointType: 'iot:Data-ATS'
        });
        const response = await client.send(describeEndpointCommand);
        return response.endpointAddress;
    }
}
