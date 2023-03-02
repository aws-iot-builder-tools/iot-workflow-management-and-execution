const COMMAND = 'Device.DeviceInfo.FirmwareImage.[Status==Available].Download()';
import usp from "./usp/usp.js";

const USPMessage = usp.usp.Msg;

const Request = usp.usp.Request;
const Body = usp.usp.Body;
const Header = usp.usp.Header;
const MessageType = usp.usp.Header.MsgType;

export class FirmwareDownloadRequest {

	constructor(input) {
		this.input = input;
	}

	get messageIdPrefix() {
		return 'FIRMWARE-DOWNLOAD';
	}

	 get command() {
		return COMMAND;
	}

	 get commandKey() {
		console.log('COMMANDKEY', this.input.id)
		return this.input.id;
	}

	 get inputArgs() {
		return {
			'AutoActivate': `${this.input.autoActivate || true}`,
			'Password': this.input.password || 'pass',
			'URL': this.input.url || `https://theupgradeurl.com/${this.input.firmwareVersion}`,
			'Username': this.input.username || 'admin'
		};
	}

	 get sendResp() {
		return true;
	}
	get messageId() {
		if (!this._messageId) {
			this._messageId = `${this.messageIdPrefix}@${Date.now()}`;
		}
		return this._messageId;
	}

	 toMessage() {
		const operateRequest = new Request({
			operate: {
				command: this.command,
				commandKey: this.commandKey,
				inputArgs: this.inputArgs,
				sendResp: this.sendResp || false
			}
		});
		const operateMessage = new USPMessage({
			body: new Body({
				request: operateRequest
			}),
			header: new Header({
				msgId: this.messageId,
				msgType: MessageType.OPERATE
			})
		});
		return operateMessage;
	}
}
