'use strict';
import {Device} from "./app/new-device.js";
import {MqttClientWrapper} from "./app/mqtt/mqtt-client-wrapper.js";
import usp from "./app/usp/usp.js";
import {v4 as uuid} from 'uuid';
import {logger} from "./app/log/logger.js";
import {TextDecoder} from "util";
const CONTROLLER_ID = 'self::aws-dm-controller';
const FACTORY_VERSION = '1.2.1';
const PayloadSecurity = usp.usp_record.Record.PayloadSecurity;
const Response = usp.usp.Response;
const USPMessage = usp.usp.Msg;
const USPRecord = usp.usp_record.Record;
const Request = usp.usp.Request;
const Body = usp.usp.Body;
const Header = usp.usp.Header;
const MsgType = usp.usp.Header.MsgType;
const decoder = new TextDecoder('utf8');
let client = null;
let clientId = null;
let version = FACTORY_VERSION;
let config = {};

const main = async (config) => {
    config.clientId = config.clientId || "sim-" + Math.floor(Math.random() * 100000000);

    clientId = config.clientId;
    const controllerTopic = `controllers/${CONTROLLER_ID}/agents/${clientId}/response`;
    config.controllerTopic = controllerTopic;

    const device = new Device({thingName: clientId, logger: logger});
    await device.createThing();
    let response = await device.createKeysAndCertificate();
    await device.attachPolicyToCertificate(response);
    await device.attachCertificateToThing(response);
    config.endpoint = await device.configureEndpoint();
    config.cert = response.certificate;
    config.key = response.key;
    config.logger = logger;

    runSimulator(config)
        .then(async () => {
            logger.info(' [Main] Started');
            setTimeout(async () => {
                //first boot.
                await doBoot(CONTROLLER_ID, false, null,FACTORY_VERSION, controllerTopic, 'FirstBoot');
            }, 30 * 1000);
        })
        .catch(err => logger.error('[Main] ', err));
};

const runSimulator = async (config) => {
    client = new MqttClientWrapper(config);

    client.on('connected', async () => {
        await client.subscribe(`agents/${clientId}/usp/request/#`, 1, onMessage);
        logger.info('[Main] OnConnected');
    });
    client.on('disconnected', async () => {
        logger.info('[Main] OnDisconnected');
    });

    const result = await client.start();
    logger.info('[Main] StartResult', result);
}

const onMessage = async (topic, payload) => {
    const controllerTopic = `controllers/self::aws-dm-controller/agents/${clientId}/response`;

    const replyTo = decodeURIComponent(topic.split('=')[1]);
    logger.info('[Main] Message Received', {topic, replyTo, payload: decoder.decode(payload)});
    try {
        const decodedRecord = USPRecord.decode(new Uint8Array(payload));
        logger.info('[Main] Decoded Record', {decodedRecord});
        let decodedMessage = undefined;
        if (decodedRecord.noSessionContext?.payload) {
            const encodedMessage = decodedRecord.noSessionContext?.payload;
            decodedMessage = USPMessage.decode(encodedMessage);
        } else {
            logger.log('[Main] Session context not implemented');
        }
        if (decodedMessage) {
            logger.info('[Main] DecodedMessage', {decodedMessage});
            const msgType = decodedMessage.header?.msgType;
            const messageId = decodedMessage.header?.msgId;
            const request = decodedMessage.body?.request;

            if ((msgType === MsgType.OPERATE) && request.operate) {
                const operate = request.operate;
                logger.info('[Main] Received Operate', {operate});
                const response = new Response({
                    operateResp: {
                        operationResults: [
                            {
                                executedCommand: operate.command,
                                reqOutputArgs: operate.inputArgs
                            }
                        ]
                    }
                });
                const responseMessage = new USPMessage({
                    body: new Body({response: response}),
                    header: new Header({msgId: messageId, msgType: MsgType.OPERATE_RESP})
                });
                logger.info('[Main] ResponseMessage', {responseMessage});
                await sendMessage(replyTo, clientId, decodedRecord.fromId, responseMessage);
                if (operate.command?.includes('Download()')) {
                    const commandKey = operate.commandKey;
                    let sendBoot = true;
                    setTimeout(async () => {
                        logger.info(`[Main] SendTransferComplete. ${operate.commandKey}`);
                        const request = new Request({
                            notify: {
                                subscriptionId: uuid(),
                                event: {
                                    objPath: 'Device.LocalAgent.',
                                    eventName: 'TransferComplete!',
                                    params: {
                                        Command: operate.command,
                                        CommandKey: commandKey,
                                        Requestor: decodedRecord.fromId,
                                        TransferType: 'Download',
                                        Affected: 'Device.DeviceInfo.FirmwareImage.1.',
                                        TransferURL: operate?.inputArgs?.URL,
                                        StartTime: '',
                                        CompleteTime: '',
                                        FaultCode: '0',
                                        FaultString: ''
                                    }
                                },
                                sendResp: false
                            }
                        });
                        const is404 = `${operate?.inputArgs?.URL}`.includes('404');
                        logger.info('[Main] URL', {URL: `${operate?.inputArgs?.URL}`, is404: is404})
                        if (is404) {
                            sendBoot = false;
                            Object.assign(request.notify.event.params, {
                                FaultCode: '1478164480',
                                FaultString: 'Download operation is failed, fault code (404)'
                            });
                        }
                        const message = new USPMessage({
                            body: new Body({request: request}),
                            header: new Header({msgId: uuid(), msgType: MsgType.NOTIFY})
                        });
                        logger.info('[Main] Message' );
                        await sendMessage(controllerTopic, clientId, decodedRecord.fromId, message);
                    }, 10 * 1000);
                    setTimeout(async () => {
                        logger.info('[Main] SendOperationComplete');
                        const request = new Request({
                            notify: {
                                subscriptionId: uuid(),
                                operComplete: {
                                    commandName: 'Download()',
                                    commandKey: commandKey,
                                    reqOutputArgs: operate.inputArgs
                                },
                                sendResp: false
                            }
                        });
                        const is404 = `${operate?.inputArgs?.URL}`.includes('404');
                        logger.info('[Main] URL', {URL: `${operate?.inputArgs?.URL}`, is404: is404})
                        if (is404) {
                            sendBoot = false;
                            Object.assign(request.notify.operComplete, {
                                cmdFailure: {
                                    errCode: 7022,
                                    errMsg: 'Error not specified by vendor'
                                }
                            });
                        }
                        const message = new USPMessage({
                            body: new Body({request: request}),
                            header: new Header({
                                msgId: uuid(),
                                msgType: MsgType.NOTIFY
                            })
                        });
                        logger.info('[Main] Message', {message});
                        await sendMessage(controllerTopic, clientId, decodedRecord.fromId, message);
                    }, 15 * 1000);
                    if (sendBoot && operate.inputArgs?.AutoActivate === 'true') {
                        setTimeout(async () => {
                            logger.info('[Main] SendBoot');
                            const url = operate?.inputArgs?.URL;
                            const bootError = `${operate?.inputArgs?.URL}`.includes('boot_error');

                            if(!bootError) {
                                const versionIndex = url.lastIndexOf('/');
                                version = url.substring(versionIndex + 1, url.length);
                            }
                            await doBoot(decodedRecord.fromId, !bootError, bootError,version, controllerTopic, commandKey);
                        }, 20 * 1000);
                    }
                }
            } else {
                logger.info('[Main] ResponseNotCreated');
            }
        } else {
            logger.info('[Main] UnexpectedMessageStructure');
        }
    } catch (err) {
        logger.error(err);
    }
};

const sendMessage = async (topic, agentId, controllerId, message) => {
    const encodedMessage = USPMessage.encode(message);
    const record = new USPRecord({
        fromId: agentId,
        payloadSecurity: PayloadSecurity.PLAINTEXT,
        noSessionContext: {
            payload: encodedMessage.finish()
        },
        toId: controllerId
    });
    logger.info('Record', {record});
    const encodedRecord = USPRecord.encode(record).finish();
    return client.publish(topic, encodedRecord, 1, false);
}

const doBoot = async (controllerId, firmwareUpdated, bootError, version, controllerTopic, commandKey) => {
    logger.info('SendingBoot ...', commandKey, version);
    let parameterMap;
    if (bootError) {
        //boots in the old version if error. More params like a log could be added here.
        parameterMap = `{"Device.DeviceInfo.SoftwareVersion":${FACTORY_VERSION}"}`;
    } else {
        parameterMap = JSON.stringify({
            'Device.DeviceInfo.SoftwareVersion': version
        });
    }
    const request = new Request({
        notify: {
            subscriptionId: uuid(),
            event: {
                objPath: 'path',
                eventName: 'Boot!',
                params: {
                    CommandKey: commandKey,
                    Cause: 'RemoteReboot',
                    FirmwareUpdated: `${firmwareUpdated}`,
                    ParameterMap: parameterMap
                }
            },
            sendResp: false
        }
    });
    const message = new USPMessage({
        body: new Body({request: request}),
        header: new Header({msgId: uuid(), msgType: MsgType.NOTIFY})
    });
    logger.info('Boot Message', {message});
    await sendMessage(controllerTopic, clientId, controllerId, message);
}


await main(config);


