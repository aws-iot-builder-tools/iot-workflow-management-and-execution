import EventEmitter from 'events';
import {AwsCredentialsProvider} from "aws-crt/dist/native/auth.js";
import {AwsIotMqttConnectionConfigBuilder} from "aws-crt/dist/native/aws_iot.js";
import {ClientBootstrap} from "aws-crt/dist/native/io.js";
import {MqttClient} from "aws-crt/dist/native/mqtt.js";


export class ResilientMqttClient extends EventEmitter {
    constructor(options) {
        super();
        this._options = options;
        this._clientId = this._options.clientId;
    }

    async start(iotEndpoint) {
        this._options.endpoint = iotEndpoint;
        console.log('[MqttClient] MqttClient_Start', {clientId: this._clientId});
        try {
            if ((await this.createClient()) && (await this.configureConnection()) && (await this.connect())) {
                console.log('[MqttClient] MqttClient_Start_Started', {clientId: this._clientId});
                return true;
            } else {
                console.log('[MqttClient] MqttClient_Start_NotStarted', {clientId: this._clientId});
                return false;
            }
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async stop() {
        console.log('[MqttClient] MqttClient_Stop', {clientId: this._clientId});
        const result = await this.disconnect();
        this._connected = false;
        this._connection = undefined;
        this._client = undefined;
        this._clientBootstrap = undefined;
        return result;
    }

    async publish(topic, payload, qos, retain) {
        console.log('[MqttClient] MqttClient_Publish', {clientId: this._clientId});
        if (!this._connection) {
            console.log('[MqttClient] MqttClient_Publish_ConnectionDoesNotExist', {clientId: this._clientId});
            return false;
        }
        try {
            await this._connection.publish(topic, payload, qos.valueOf(), retain);
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async subscribe(
        topic,
        qos,
        onMessage
    ) {
        console.log('[MqttClient] MqttClient_Subscribe', {clientId: this._clientId, topic});
        if (!this._connection) {
            console.log('[MqttClient] MqttClient_Subscribe_ConnectionDoesNotExist', {clientId: this._clientId});
            return false;
        }
        try {
            await this._connection.subscribe(topic, qos.valueOf(), onMessage);
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async unsubscribe(topic) {
        console.log('[MqttClient] MqttClient_Unsubscribe', {clientId: this._clientId, topic});
        if (!this._connection) {
            console.log('[MqttClient] MqttClient_ConnectionDoesNotExist', {clientId: this._clientId});
            return false;
        }
        try {
            await this._connection.unsubscribe(topic);
            return true;
        } catch (error) {
            console.log(error)
            return false;
        }
    }

    async createClient() {
        console.log('[MqttClient] MqttClient_CreateClient', {clientId: this._clientId});
        if (this._client) {
            return true;
        }
        this._clientBootstrap = this.clientBootstrapFactory();
        this._client = this.clientFactory();
        console.log('MqttClient_CreateClient_Created', {clientId: this._clientId});
        return true;
    }

    async configureConnection() {
        console.log('[MqttClient] MqttClient_ConfigureConnection', {clientId: this._clientId});
        if (!this._client || !this._clientBootstrap) {
            return false;
        }
        if (this._connection) {
            return true;
        }
        const config = this.mqttConnectionConfigFactory();
        this._connection = this._client.new_connection(config);
        if (!this._connection) {
            console.log('[MqttClient] MqttClient_ConfigureConnection_NotCreated', {clientId: this._clientId});
            return false;
        }
        this._connection.on('connect', (sessionPresent) => {
            console.log('[MqttClient] MqttClient_ConfigureConnection_OnConnect', {clientId: this._clientId, sessionPresent});
            this._connected = true;
            this.emit('connected');
        });
        this._connection.on('disconnect', () => {
            console.log('[MqttClient] MqttClient_ConfigureConnection_OnDisconnect', {clientId: this._clientId});
            this._connected = false;
            this.emit('disconnected');
        });
        this._connection.on('error', (error) => {
            console.log('[MqttClient] MqttClient_ConfigureConnection_OnError', {clientId: this._clientId, error: error.toString()});
            // Example: Failed to connect: aws-c-io: AWS_IO_DNS_INVALID_NAME, Host name was invalid for dns resolution.
        });
        this._connection.on('interrupt', (error) => {
            console.log('[MqttClient] MqttClient_ConfigureConnection_OnInterrupt', {
                clientId: this._clientId,
                error: error.toString()
            });
            // Example: libaws-c-mqtt: AWS_ERROR_MQTT_UNEXPECTED_HANGUP, The connection was closed unexpectedly.
            // Example: libaws-c-mqtt: AWS_ERROR_MQTT_TIMEOUT, Time limit between request and response has been exceeded.
        });
        this._connection.on('resume', (returnCode, sessionPresent) => {
            console.log('[MqttClient] MqttClient_ConfigureConnection_OnResume', {
                clientId: this._clientId,
                returnCode,
                sessionPresent
            });
            this._connected = true;
            if (!sessionPresent) {
                this.emit('connected');
            }
        });
        const handleError = (error) => {
            if (error.toString && error.toString().includes('AWS')) {
                console.log(error)
            } else {
                console.log(error)
                throw error;
            }
        };
        process.on('uncaughtException', handleError);
        process.on('unhandledRejection', handleError);
        console.log('[MqttClient] MqttClient_ConfigureConnection_Configured', {clientId: this._clientId});
        return true;
    }

    async connect() {
        console.log('[MqttClient] MqttClient_Connect', {clientId: this._clientId});
        if (!this._connection) {
            return false;
        }
        if (this._connected) {
            return true;
        }
        try {
            const connectionIsNew = await this._connection.connect();
            console.log('[MqttClient] MqttClient_Connect_Connected', {clientId: this._clientId, connectionIsNew});
            return true;
        } catch (error) {
            console.log(error)
            return false;
        }
    }

    async disconnect() {
        console.log('[MqttClient] MqttClient_Disconnect', {clientId: this._clientId});
        if (!this._connection) {
            return false;
        }
        try {
            await this._connection.disconnect();
            console.log('[MqttClient] MqttClient_Disconnect_Disconnected', {clientId: this._clientId});
            return true;
        } catch (error) {
            console.log(error)
            return false;
        }
    }

    mqttConnectionConfigFactory() {
        const configBuilder = AwsIotMqttConnectionConfigBuilder.new_with_websockets({
            credentials_provider: this.credentialsProviderFactory(),
            region: this._options.region
        });
        configBuilder.with_clean_session(false);
        configBuilder.with_endpoint(this._options.endpoint);
        configBuilder.with_client_id(this._clientId);
        configBuilder.with_keep_alive_seconds(this._options.keepAlive);
        return configBuilder.build();
    }

    credentialsProviderFactory() {
        if (!this._clientBootstrap) {
            throw new Error('clientBootstrap is not defined');
        }
        return AwsCredentialsProvider.newDefault(this._clientBootstrap);
    }

    clientBootstrapFactory() {
        return new ClientBootstrap();
    }

    clientFactory() {
        if (!this._clientBootstrap) {
            throw new Error('clientBootstrap is not defined');
        }
        return new MqttClient(this._clientBootstrap);
    }

    get connected() {
        return this._connected;
    }

    get options() {
        return this._options;
    }
}
