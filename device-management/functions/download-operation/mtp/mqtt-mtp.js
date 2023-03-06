import {ResilientMqttClient} from './resilient-client.js';
import usp from "../usp/usp.js";
import {QoS} from "aws-crt/dist/common/mqtt.js";
import {IoTClient, DescribeEndpointCommand} from "@aws-sdk/client-iot";

const USPMessage = usp.usp.Msg;
const USPRecord = usp.usp_record.Record;
const PayloadSecurity = usp.usp_record.Record.PayloadSecurity;
const REGION = process.env.REGION || '';
const DEFAULT_REQUEST_TIMEOUT = 5000;
const USP_REQUEST_TIMEOUT = DEFAULT_REQUEST_TIMEOUT;
const USP_RECORD_VERSION = '1.1';
const client = new IoTClient({region: REGION});

export class MqttMtp {
    constructor(lambdaUUID, controllerId, mqttClient) {
        this.lambdaUUID = lambdaUUID;
        this.controllerId = controllerId;
        this.responseTopic = `controllers/${this.controllerId}/usp/reply-to/${this.lambdaUUID}`;

        this.mqttClient = mqttClient || new ResilientMqttClient({
            clientId: this.lambdaUUID,
            keepAlive: 1200,
            region: REGION
        });
        this.mqttClient.on('connected', async () => {
            await this.onConnected();
        });
        this.responseCallbackMap = {};
    }

    async _configureEndpoint () {
        const describeEndpointCommand = new DescribeEndpointCommand({
            endpointType: 'iot:Data-ATS'
        });
        const response = await client.send(describeEndpointCommand);
        return response.endpointAddress;
    }

    async prepareMTP() {
        const iotEndpoint = await this._configureEndpoint();
        return this.mqttClient.start(iotEndpoint);
    }

    async sendRequest(agentId, thingName, requestMessage) {
        const messageId = requestMessage.header?.msgId ?? 'undefined';
        const encodedRequestMessage = USPMessage.encode(requestMessage);
        const requestRecord = new USPRecord({
            fromId: this.controllerId,
            noSessionContext: {
                payload: encodedRequestMessage.finish()
            },
            payloadSecurity: PayloadSecurity.PLAINTEXT,
            toId: agentId,
            version: USP_RECORD_VERSION
        });
        console.log('[MqttMtp] MTP_SendRequest', {
            agentId,
            messageId,
            requestMessage: requestMessage.toJSON(),
            requestRecord: requestRecord.toJSON(),
            thingName
        });
        const encodedRequestRecord = USPRecord.encode(requestRecord).finish();
        return this.createResponseHandlerPromise(messageId, agentId, thingName, encodedRequestRecord);
    }

    async onConnected() {
        console.log('[MqttMtp] MTP_OnConnected');
        try {
            await this.mqttClient.subscribe(this.responseTopic, QoS.AtMostOnce, async (topic, payload) => {
                await this.subscriptionCallback(payload);
            });
        } catch (error) {
            console.log('[MqttMtp] Error', error);
        }
    }

    async subscriptionCallback(encodedRecord) {
        try {
            const decodedRecord = USPRecord.decode(new Uint8Array(encodedRecord));
            if (decodedRecord.toId === this.controllerId) {
                const encodedMessage = decodedRecord.noSessionContext?.payload;
                if (encodedMessage) {
                    const decodedMessage = USPMessage.decode(encodedMessage);
                    console.log('[MqttMtp] MTP_SubscriptionCallback', {
                        decodedMessage: decodedMessage.toJSON(),
                        decodedRecord: decodedRecord.toJSON()
                    });
                    const messageId = decodedMessage.header?.msgId ?? 'undefined';
                    const key = `${decodedRecord.fromId}|${messageId}`;
                    if (this.responseCallbackMap[key]) {
                        this.responseCallbackMap[key](decodedMessage);
                    } else {
                        console.log('[MqttMtp] MTP_SubscriptionCallback_UnexpectedResponseIds', {
                            fromId: decodedRecord.fromId,
                            messageId: messageId
                        });
                    }
                } else {
                    console.log('[MqttMtp] MTP_SubscriptionCallback_UnexpectedResponseStructure');
                }
            } else {
                console.log('[MqttMtp] MTP_SubscriptionCallback_UnexpectedResponseToId', {toId: decodedRecord.toId});
            }
        } catch (error) {
            console.log("Err", error);
        }
    }

    async createResponseHandlerPromise(messageId, agentId, thingName, encodedRequestRecord) {
        return new Promise((resolve, reject) => {
            const timeout = setTimeout(() => {
                this.unregister(agentId, messageId);
                reject(new Error('[MqttMtp] Timed out waiting for USP response.'));
            }, USP_REQUEST_TIMEOUT);
            const reset = () => {
                clearTimeout(timeout);
                this.unregister(agentId, messageId);
            };
            const responseCallback = (responseMessage) => {
                reset();
                const responseMessageId = responseMessage.header?.msgId;
                const responseMessageType = responseMessage.header?.msgType || 0;
                if (messageId === responseMessageId) {
                    resolve(responseMessage);
                } else {
                    reject(new Error('[MqttMtp] USP response message type is unexpected.'));
                }
            };
            this.register(agentId, messageId, responseCallback);
            this.send(thingName, encodedRequestRecord)
                .then((result) => {
                    if (!result) {
                        reset();
                        reject(new Error('[MqttMtp] Unable to send USP request.'));
                    }
                })
                .catch(error => {
                    reset();
                    reject(error);
                });
        });
    }

    async send(thingName, record) {
        return this.mqttClient.publish(this.buildTopic(thingName), record, QoS.AtMostOnce, false);
    }

    buildTopic(thingName) {
        const replyTo = `controllers/${this.controllerId}/usp/reply-to/${this.lambdaUUID}`;
        return `agents/${thingName}/usp/request/reply-to=${replyTo.replace(/\//g, '%2F')}`;
    }

    register(agentId, messageId, callback) {
        this.responseCallbackMap[`${agentId}|${messageId}`] = callback;
    }

    unregister(agentId, messageId) {
        this.responseCallbackMap[`${agentId}|${messageId}`] = () => {
        };
    }
}
