// THIS IS AN AUTO-GENERATED FILE, generated with the protobufjs CLI. More details here: CLI reference: https://github.com/protobufjs/protobuf.js/tree/master/cli

/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import $protobuf from "protobufjs/minimal.js";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const usp = $root.usp = (() => {

    /**
     * Namespace usp.
     * @exports usp
     * @namespace
     */
    const usp = {};

    usp.Msg = (function() {

        /**
         * Properties of a Msg.
         * @memberof usp
         * @interface IMsg
         * @property {usp.IHeader|null} [header] Msg header
         * @property {usp.IBody|null} [body] Msg body
         */

        /**
         * Constructs a new Msg.
         * @memberof usp
         * @classdesc Represents a Msg.
         * @implements IMsg
         * @constructor
         * @param {usp.IMsg=} [properties] Properties to set
         */
        function Msg(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Msg header.
         * @member {usp.IHeader|null|undefined} header
         * @memberof usp.Msg
         * @instance
         */
        Msg.prototype.header = null;

        /**
         * Msg body.
         * @member {usp.IBody|null|undefined} body
         * @memberof usp.Msg
         * @instance
         */
        Msg.prototype.body = null;

        /**
         * Creates a new Msg instance using the specified properties.
         * @function create
         * @memberof usp.Msg
         * @static
         * @param {usp.IMsg=} [properties] Properties to set
         * @returns {usp.Msg} Msg instance
         */
        Msg.create = function create(properties) {
            return new Msg(properties);
        };

        /**
         * Encodes the specified Msg message. Does not implicitly {@link usp.Msg.verify|verify} messages.
         * @function encode
         * @memberof usp.Msg
         * @static
         * @param {usp.IMsg} message Msg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Msg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.header != null && Object.hasOwnProperty.call(message, "header"))
                $root.usp.Header.encode(message.header, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.body != null && Object.hasOwnProperty.call(message, "body"))
                $root.usp.Body.encode(message.body, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Msg message, length delimited. Does not implicitly {@link usp.Msg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof usp.Msg
         * @static
         * @param {usp.IMsg} message Msg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Msg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Msg message from the specified reader or buffer.
         * @function decode
         * @memberof usp.Msg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {usp.Msg} Msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Msg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.usp.Msg();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.header = $root.usp.Header.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.body = $root.usp.Body.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Msg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof usp.Msg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {usp.Msg} Msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Msg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Msg message.
         * @function verify
         * @memberof usp.Msg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Msg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.header != null && message.hasOwnProperty("header")) {
                let error = $root.usp.Header.verify(message.header);
                if (error)
                    return "header." + error;
            }
            if (message.body != null && message.hasOwnProperty("body")) {
                let error = $root.usp.Body.verify(message.body);
                if (error)
                    return "body." + error;
            }
            return null;
        };

        /**
         * Creates a Msg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof usp.Msg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {usp.Msg} Msg
         */
        Msg.fromObject = function fromObject(object) {
            if (object instanceof $root.usp.Msg)
                return object;
            let message = new $root.usp.Msg();
            if (object.header != null) {
                if (typeof object.header !== "object")
                    throw TypeError(".usp.Msg.header: object expected");
                message.header = $root.usp.Header.fromObject(object.header);
            }
            if (object.body != null) {
                if (typeof object.body !== "object")
                    throw TypeError(".usp.Msg.body: object expected");
                message.body = $root.usp.Body.fromObject(object.body);
            }
            return message;
        };

        /**
         * Creates a plain object from a Msg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof usp.Msg
         * @static
         * @param {usp.Msg} message Msg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Msg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.header = null;
                object.body = null;
            }
            if (message.header != null && message.hasOwnProperty("header"))
                object.header = $root.usp.Header.toObject(message.header, options);
            if (message.body != null && message.hasOwnProperty("body"))
                object.body = $root.usp.Body.toObject(message.body, options);
            return object;
        };

        /**
         * Converts this Msg to JSON.
         * @function toJSON
         * @memberof usp.Msg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Msg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Msg
         * @function getTypeUrl
         * @memberof usp.Msg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Msg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/usp.Msg";
        };

        return Msg;
    })();

    usp.Header = (function() {

        /**
         * Properties of a Header.
         * @memberof usp
         * @interface IHeader
         * @property {string|null} [msgId] Header msgId
         * @property {usp.Header.MsgType|null} [msgType] Header msgType
         */

        /**
         * Constructs a new Header.
         * @memberof usp
         * @classdesc Represents a Header.
         * @implements IHeader
         * @constructor
         * @param {usp.IHeader=} [properties] Properties to set
         */
        function Header(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Header msgId.
         * @member {string} msgId
         * @memberof usp.Header
         * @instance
         */
        Header.prototype.msgId = "";

        /**
         * Header msgType.
         * @member {usp.Header.MsgType} msgType
         * @memberof usp.Header
         * @instance
         */
        Header.prototype.msgType = 0;

        /**
         * Creates a new Header instance using the specified properties.
         * @function create
         * @memberof usp.Header
         * @static
         * @param {usp.IHeader=} [properties] Properties to set
         * @returns {usp.Header} Header instance
         */
        Header.create = function create(properties) {
            return new Header(properties);
        };

        /**
         * Encodes the specified Header message. Does not implicitly {@link usp.Header.verify|verify} messages.
         * @function encode
         * @memberof usp.Header
         * @static
         * @param {usp.IHeader} message Header message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Header.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.msgId != null && Object.hasOwnProperty.call(message, "msgId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.msgId);
            if (message.msgType != null && Object.hasOwnProperty.call(message, "msgType"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.msgType);
            return writer;
        };

        /**
         * Encodes the specified Header message, length delimited. Does not implicitly {@link usp.Header.verify|verify} messages.
         * @function encodeDelimited
         * @memberof usp.Header
         * @static
         * @param {usp.IHeader} message Header message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Header.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Header message from the specified reader or buffer.
         * @function decode
         * @memberof usp.Header
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {usp.Header} Header
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Header.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.usp.Header();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.msgId = reader.string();
                        break;
                    }
                case 2: {
                        message.msgType = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Header message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof usp.Header
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {usp.Header} Header
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Header.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Header message.
         * @function verify
         * @memberof usp.Header
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Header.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.msgId != null && message.hasOwnProperty("msgId"))
                if (!$util.isString(message.msgId))
                    return "msgId: string expected";
            if (message.msgType != null && message.hasOwnProperty("msgType"))
                switch (message.msgType) {
                default:
                    return "msgType: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                case 10:
                case 11:
                case 12:
                case 13:
                case 14:
                case 15:
                case 16:
                case 17:
                case 18:
                    break;
                }
            return null;
        };

        /**
         * Creates a Header message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof usp.Header
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {usp.Header} Header
         */
        Header.fromObject = function fromObject(object) {
            if (object instanceof $root.usp.Header)
                return object;
            let message = new $root.usp.Header();
            if (object.msgId != null)
                message.msgId = String(object.msgId);
            switch (object.msgType) {
            default:
                if (typeof object.msgType === "number") {
                    message.msgType = object.msgType;
                    break;
                }
                break;
            case "ERROR":
            case 0:
                message.msgType = 0;
                break;
            case "GET":
            case 1:
                message.msgType = 1;
                break;
            case "GET_RESP":
            case 2:
                message.msgType = 2;
                break;
            case "NOTIFY":
            case 3:
                message.msgType = 3;
                break;
            case "SET":
            case 4:
                message.msgType = 4;
                break;
            case "SET_RESP":
            case 5:
                message.msgType = 5;
                break;
            case "OPERATE":
            case 6:
                message.msgType = 6;
                break;
            case "OPERATE_RESP":
            case 7:
                message.msgType = 7;
                break;
            case "ADD":
            case 8:
                message.msgType = 8;
                break;
            case "ADD_RESP":
            case 9:
                message.msgType = 9;
                break;
            case "DELETE":
            case 10:
                message.msgType = 10;
                break;
            case "DELETE_RESP":
            case 11:
                message.msgType = 11;
                break;
            case "GET_SUPPORTED_DM":
            case 12:
                message.msgType = 12;
                break;
            case "GET_SUPPORTED_DM_RESP":
            case 13:
                message.msgType = 13;
                break;
            case "GET_INSTANCES":
            case 14:
                message.msgType = 14;
                break;
            case "GET_INSTANCES_RESP":
            case 15:
                message.msgType = 15;
                break;
            case "NOTIFY_RESP":
            case 16:
                message.msgType = 16;
                break;
            case "GET_SUPPORTED_PROTO":
            case 17:
                message.msgType = 17;
                break;
            case "GET_SUPPORTED_PROTO_RESP":
            case 18:
                message.msgType = 18;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a Header message. Also converts values to other types if specified.
         * @function toObject
         * @memberof usp.Header
         * @static
         * @param {usp.Header} message Header
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Header.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.msgId = "";
                object.msgType = options.enums === String ? "ERROR" : 0;
            }
            if (message.msgId != null && message.hasOwnProperty("msgId"))
                object.msgId = message.msgId;
            if (message.msgType != null && message.hasOwnProperty("msgType"))
                object.msgType = options.enums === String ? $root.usp.Header.MsgType[message.msgType] === undefined ? message.msgType : $root.usp.Header.MsgType[message.msgType] : message.msgType;
            return object;
        };

        /**
         * Converts this Header to JSON.
         * @function toJSON
         * @memberof usp.Header
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Header.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Header
         * @function getTypeUrl
         * @memberof usp.Header
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Header.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/usp.Header";
        };

        /**
         * MsgType enum.
         * @name usp.Header.MsgType
         * @enum {number}
         * @property {number} ERROR=0 ERROR value
         * @property {number} GET=1 GET value
         * @property {number} GET_RESP=2 GET_RESP value
         * @property {number} NOTIFY=3 NOTIFY value
         * @property {number} SET=4 SET value
         * @property {number} SET_RESP=5 SET_RESP value
         * @property {number} OPERATE=6 OPERATE value
         * @property {number} OPERATE_RESP=7 OPERATE_RESP value
         * @property {number} ADD=8 ADD value
         * @property {number} ADD_RESP=9 ADD_RESP value
         * @property {number} DELETE=10 DELETE value
         * @property {number} DELETE_RESP=11 DELETE_RESP value
         * @property {number} GET_SUPPORTED_DM=12 GET_SUPPORTED_DM value
         * @property {number} GET_SUPPORTED_DM_RESP=13 GET_SUPPORTED_DM_RESP value
         * @property {number} GET_INSTANCES=14 GET_INSTANCES value
         * @property {number} GET_INSTANCES_RESP=15 GET_INSTANCES_RESP value
         * @property {number} NOTIFY_RESP=16 NOTIFY_RESP value
         * @property {number} GET_SUPPORTED_PROTO=17 GET_SUPPORTED_PROTO value
         * @property {number} GET_SUPPORTED_PROTO_RESP=18 GET_SUPPORTED_PROTO_RESP value
         */
        Header.MsgType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "ERROR"] = 0;
            values[valuesById[1] = "GET"] = 1;
            values[valuesById[2] = "GET_RESP"] = 2;
            values[valuesById[3] = "NOTIFY"] = 3;
            values[valuesById[4] = "SET"] = 4;
            values[valuesById[5] = "SET_RESP"] = 5;
            values[valuesById[6] = "OPERATE"] = 6;
            values[valuesById[7] = "OPERATE_RESP"] = 7;
            values[valuesById[8] = "ADD"] = 8;
            values[valuesById[9] = "ADD_RESP"] = 9;
            values[valuesById[10] = "DELETE"] = 10;
            values[valuesById[11] = "DELETE_RESP"] = 11;
            values[valuesById[12] = "GET_SUPPORTED_DM"] = 12;
            values[valuesById[13] = "GET_SUPPORTED_DM_RESP"] = 13;
            values[valuesById[14] = "GET_INSTANCES"] = 14;
            values[valuesById[15] = "GET_INSTANCES_RESP"] = 15;
            values[valuesById[16] = "NOTIFY_RESP"] = 16;
            values[valuesById[17] = "GET_SUPPORTED_PROTO"] = 17;
            values[valuesById[18] = "GET_SUPPORTED_PROTO_RESP"] = 18;
            return values;
        })();

        return Header;
    })();

    usp.Body = (function() {

        /**
         * Properties of a Body.
         * @memberof usp
         * @interface IBody
         * @property {usp.IRequest|null} [request] Body request
         * @property {usp.IResponse|null} [response] Body response
         * @property {usp.IError|null} [error] Body error
         */

        /**
         * Constructs a new Body.
         * @memberof usp
         * @classdesc Represents a Body.
         * @implements IBody
         * @constructor
         * @param {usp.IBody=} [properties] Properties to set
         */
        function Body(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Body request.
         * @member {usp.IRequest|null|undefined} request
         * @memberof usp.Body
         * @instance
         */
        Body.prototype.request = null;

        /**
         * Body response.
         * @member {usp.IResponse|null|undefined} response
         * @memberof usp.Body
         * @instance
         */
        Body.prototype.response = null;

        /**
         * Body error.
         * @member {usp.IError|null|undefined} error
         * @memberof usp.Body
         * @instance
         */
        Body.prototype.error = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * Body msgBody.
         * @member {"request"|"response"|"error"|undefined} msgBody
         * @memberof usp.Body
         * @instance
         */
        Object.defineProperty(Body.prototype, "msgBody", {
            get: $util.oneOfGetter($oneOfFields = ["request", "response", "error"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new Body instance using the specified properties.
         * @function create
         * @memberof usp.Body
         * @static
         * @param {usp.IBody=} [properties] Properties to set
         * @returns {usp.Body} Body instance
         */
        Body.create = function create(properties) {
            return new Body(properties);
        };

        /**
         * Encodes the specified Body message. Does not implicitly {@link usp.Body.verify|verify} messages.
         * @function encode
         * @memberof usp.Body
         * @static
         * @param {usp.IBody} message Body message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Body.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.request != null && Object.hasOwnProperty.call(message, "request"))
                $root.usp.Request.encode(message.request, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.response != null && Object.hasOwnProperty.call(message, "response"))
                $root.usp.Response.encode(message.response, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.error != null && Object.hasOwnProperty.call(message, "error"))
                $root.usp.Error.encode(message.error, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Body message, length delimited. Does not implicitly {@link usp.Body.verify|verify} messages.
         * @function encodeDelimited
         * @memberof usp.Body
         * @static
         * @param {usp.IBody} message Body message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Body.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Body message from the specified reader or buffer.
         * @function decode
         * @memberof usp.Body
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {usp.Body} Body
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Body.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.usp.Body();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.request = $root.usp.Request.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.response = $root.usp.Response.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.error = $root.usp.Error.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Body message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof usp.Body
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {usp.Body} Body
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Body.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Body message.
         * @function verify
         * @memberof usp.Body
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Body.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.request != null && message.hasOwnProperty("request")) {
                properties.msgBody = 1;
                {
                    let error = $root.usp.Request.verify(message.request);
                    if (error)
                        return "request." + error;
                }
            }
            if (message.response != null && message.hasOwnProperty("response")) {
                if (properties.msgBody === 1)
                    return "msgBody: multiple values";
                properties.msgBody = 1;
                {
                    let error = $root.usp.Response.verify(message.response);
                    if (error)
                        return "response." + error;
                }
            }
            if (message.error != null && message.hasOwnProperty("error")) {
                if (properties.msgBody === 1)
                    return "msgBody: multiple values";
                properties.msgBody = 1;
                {
                    let error = $root.usp.Error.verify(message.error);
                    if (error)
                        return "error." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Body message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof usp.Body
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {usp.Body} Body
         */
        Body.fromObject = function fromObject(object) {
            if (object instanceof $root.usp.Body)
                return object;
            let message = new $root.usp.Body();
            if (object.request != null) {
                if (typeof object.request !== "object")
                    throw TypeError(".usp.Body.request: object expected");
                message.request = $root.usp.Request.fromObject(object.request);
            }
            if (object.response != null) {
                if (typeof object.response !== "object")
                    throw TypeError(".usp.Body.response: object expected");
                message.response = $root.usp.Response.fromObject(object.response);
            }
            if (object.error != null) {
                if (typeof object.error !== "object")
                    throw TypeError(".usp.Body.error: object expected");
                message.error = $root.usp.Error.fromObject(object.error);
            }
            return message;
        };

        /**
         * Creates a plain object from a Body message. Also converts values to other types if specified.
         * @function toObject
         * @memberof usp.Body
         * @static
         * @param {usp.Body} message Body
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Body.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (message.request != null && message.hasOwnProperty("request")) {
                object.request = $root.usp.Request.toObject(message.request, options);
                if (options.oneofs)
                    object.msgBody = "request";
            }
            if (message.response != null && message.hasOwnProperty("response")) {
                object.response = $root.usp.Response.toObject(message.response, options);
                if (options.oneofs)
                    object.msgBody = "response";
            }
            if (message.error != null && message.hasOwnProperty("error")) {
                object.error = $root.usp.Error.toObject(message.error, options);
                if (options.oneofs)
                    object.msgBody = "error";
            }
            return object;
        };

        /**
         * Converts this Body to JSON.
         * @function toJSON
         * @memberof usp.Body
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Body.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Body
         * @function getTypeUrl
         * @memberof usp.Body
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Body.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/usp.Body";
        };

        return Body;
    })();

    usp.Request = (function() {

        /**
         * Properties of a Request.
         * @memberof usp
         * @interface IRequest
         * @property {usp.IGet|null} [get] Request get
         * @property {usp.IGetSupportedDM|null} [getSupportedDm] Request getSupportedDm
         * @property {usp.IGetInstances|null} [getInstances] Request getInstances
         * @property {usp.ISet|null} [set] Request set
         * @property {usp.IAdd|null} [add] Request add
         * @property {usp.IDelete|null} ["delete"] Request delete
         * @property {usp.IOperate|null} [operate] Request operate
         * @property {usp.INotify|null} [notify] Request notify
         * @property {usp.IGetSupportedProtocol|null} [getSupportedProtocol] Request getSupportedProtocol
         */

        /**
         * Constructs a new Request.
         * @memberof usp
         * @classdesc Represents a Request.
         * @implements IRequest
         * @constructor
         * @param {usp.IRequest=} [properties] Properties to set
         */
        function Request(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Request get.
         * @member {usp.IGet|null|undefined} get
         * @memberof usp.Request
         * @instance
         */
        Request.prototype.get = null;

        /**
         * Request getSupportedDm.
         * @member {usp.IGetSupportedDM|null|undefined} getSupportedDm
         * @memberof usp.Request
         * @instance
         */
        Request.prototype.getSupportedDm = null;

        /**
         * Request getInstances.
         * @member {usp.IGetInstances|null|undefined} getInstances
         * @memberof usp.Request
         * @instance
         */
        Request.prototype.getInstances = null;

        /**
         * Request set.
         * @member {usp.ISet|null|undefined} set
         * @memberof usp.Request
         * @instance
         */
        Request.prototype.set = null;

        /**
         * Request add.
         * @member {usp.IAdd|null|undefined} add
         * @memberof usp.Request
         * @instance
         */
        Request.prototype.add = null;

        /**
         * Request delete.
         * @member {usp.IDelete|null|undefined} delete
         * @memberof usp.Request
         * @instance
         */
        Request.prototype["delete"] = null;

        /**
         * Request operate.
         * @member {usp.IOperate|null|undefined} operate
         * @memberof usp.Request
         * @instance
         */
        Request.prototype.operate = null;

        /**
         * Request notify.
         * @member {usp.INotify|null|undefined} notify
         * @memberof usp.Request
         * @instance
         */
        Request.prototype.notify = null;

        /**
         * Request getSupportedProtocol.
         * @member {usp.IGetSupportedProtocol|null|undefined} getSupportedProtocol
         * @memberof usp.Request
         * @instance
         */
        Request.prototype.getSupportedProtocol = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * Request reqType.
         * @member {"get"|"getSupportedDm"|"getInstances"|"set"|"add"|"delete"|"operate"|"notify"|"getSupportedProtocol"|undefined} reqType
         * @memberof usp.Request
         * @instance
         */
        Object.defineProperty(Request.prototype, "reqType", {
            get: $util.oneOfGetter($oneOfFields = ["get", "getSupportedDm", "getInstances", "set", "add", "delete", "operate", "notify", "getSupportedProtocol"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new Request instance using the specified properties.
         * @function create
         * @memberof usp.Request
         * @static
         * @param {usp.IRequest=} [properties] Properties to set
         * @returns {usp.Request} Request instance
         */
        Request.create = function create(properties) {
            return new Request(properties);
        };

        /**
         * Encodes the specified Request message. Does not implicitly {@link usp.Request.verify|verify} messages.
         * @function encode
         * @memberof usp.Request
         * @static
         * @param {usp.IRequest} message Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.get != null && Object.hasOwnProperty.call(message, "get"))
                $root.usp.Get.encode(message.get, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.getSupportedDm != null && Object.hasOwnProperty.call(message, "getSupportedDm"))
                $root.usp.GetSupportedDM.encode(message.getSupportedDm, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.getInstances != null && Object.hasOwnProperty.call(message, "getInstances"))
                $root.usp.GetInstances.encode(message.getInstances, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.set != null && Object.hasOwnProperty.call(message, "set"))
                $root.usp.Set.encode(message.set, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.add != null && Object.hasOwnProperty.call(message, "add"))
                $root.usp.Add.encode(message.add, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message["delete"] != null && Object.hasOwnProperty.call(message, "delete"))
                $root.usp.Delete.encode(message["delete"], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.operate != null && Object.hasOwnProperty.call(message, "operate"))
                $root.usp.Operate.encode(message.operate, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.notify != null && Object.hasOwnProperty.call(message, "notify"))
                $root.usp.Notify.encode(message.notify, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.getSupportedProtocol != null && Object.hasOwnProperty.call(message, "getSupportedProtocol"))
                $root.usp.GetSupportedProtocol.encode(message.getSupportedProtocol, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Request message, length delimited. Does not implicitly {@link usp.Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof usp.Request
         * @static
         * @param {usp.IRequest} message Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Request message from the specified reader or buffer.
         * @function decode
         * @memberof usp.Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {usp.Request} Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.usp.Request();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.get = $root.usp.Get.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.getSupportedDm = $root.usp.GetSupportedDM.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.getInstances = $root.usp.GetInstances.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        message.set = $root.usp.Set.decode(reader, reader.uint32());
                        break;
                    }
                case 5: {
                        message.add = $root.usp.Add.decode(reader, reader.uint32());
                        break;
                    }
                case 6: {
                        message["delete"] = $root.usp.Delete.decode(reader, reader.uint32());
                        break;
                    }
                case 7: {
                        message.operate = $root.usp.Operate.decode(reader, reader.uint32());
                        break;
                    }
                case 8: {
                        message.notify = $root.usp.Notify.decode(reader, reader.uint32());
                        break;
                    }
                case 9: {
                        message.getSupportedProtocol = $root.usp.GetSupportedProtocol.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof usp.Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {usp.Request} Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Request message.
         * @function verify
         * @memberof usp.Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.get != null && message.hasOwnProperty("get")) {
                properties.reqType = 1;
                {
                    let error = $root.usp.Get.verify(message.get);
                    if (error)
                        return "get." + error;
                }
            }
            if (message.getSupportedDm != null && message.hasOwnProperty("getSupportedDm")) {
                if (properties.reqType === 1)
                    return "reqType: multiple values";
                properties.reqType = 1;
                {
                    let error = $root.usp.GetSupportedDM.verify(message.getSupportedDm);
                    if (error)
                        return "getSupportedDm." + error;
                }
            }
            if (message.getInstances != null && message.hasOwnProperty("getInstances")) {
                if (properties.reqType === 1)
                    return "reqType: multiple values";
                properties.reqType = 1;
                {
                    let error = $root.usp.GetInstances.verify(message.getInstances);
                    if (error)
                        return "getInstances." + error;
                }
            }
            if (message.set != null && message.hasOwnProperty("set")) {
                if (properties.reqType === 1)
                    return "reqType: multiple values";
                properties.reqType = 1;
                {
                    let error = $root.usp.Set.verify(message.set);
                    if (error)
                        return "set." + error;
                }
            }
            if (message.add != null && message.hasOwnProperty("add")) {
                if (properties.reqType === 1)
                    return "reqType: multiple values";
                properties.reqType = 1;
                {
                    let error = $root.usp.Add.verify(message.add);
                    if (error)
                        return "add." + error;
                }
            }
            if (message["delete"] != null && message.hasOwnProperty("delete")) {
                if (properties.reqType === 1)
                    return "reqType: multiple values";
                properties.reqType = 1;
                {
                    let error = $root.usp.Delete.verify(message["delete"]);
                    if (error)
                        return "delete." + error;
                }
            }
            if (message.operate != null && message.hasOwnProperty("operate")) {
                if (properties.reqType === 1)
                    return "reqType: multiple values";
                properties.reqType = 1;
                {
                    let error = $root.usp.Operate.verify(message.operate);
                    if (error)
                        return "operate." + error;
                }
            }
            if (message.notify != null && message.hasOwnProperty("notify")) {
                if (properties.reqType === 1)
                    return "reqType: multiple values";
                properties.reqType = 1;
                {
                    let error = $root.usp.Notify.verify(message.notify);
                    if (error)
                        return "notify." + error;
                }
            }
            if (message.getSupportedProtocol != null && message.hasOwnProperty("getSupportedProtocol")) {
                if (properties.reqType === 1)
                    return "reqType: multiple values";
                properties.reqType = 1;
                {
                    let error = $root.usp.GetSupportedProtocol.verify(message.getSupportedProtocol);
                    if (error)
                        return "getSupportedProtocol." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof usp.Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {usp.Request} Request
         */
        Request.fromObject = function fromObject(object) {
            if (object instanceof $root.usp.Request)
                return object;
            let message = new $root.usp.Request();
            if (object.get != null) {
                if (typeof object.get !== "object")
                    throw TypeError(".usp.Request.get: object expected");
                message.get = $root.usp.Get.fromObject(object.get);
            }
            if (object.getSupportedDm != null) {
                if (typeof object.getSupportedDm !== "object")
                    throw TypeError(".usp.Request.getSupportedDm: object expected");
                message.getSupportedDm = $root.usp.GetSupportedDM.fromObject(object.getSupportedDm);
            }
            if (object.getInstances != null) {
                if (typeof object.getInstances !== "object")
                    throw TypeError(".usp.Request.getInstances: object expected");
                message.getInstances = $root.usp.GetInstances.fromObject(object.getInstances);
            }
            if (object.set != null) {
                if (typeof object.set !== "object")
                    throw TypeError(".usp.Request.set: object expected");
                message.set = $root.usp.Set.fromObject(object.set);
            }
            if (object.add != null) {
                if (typeof object.add !== "object")
                    throw TypeError(".usp.Request.add: object expected");
                message.add = $root.usp.Add.fromObject(object.add);
            }
            if (object["delete"] != null) {
                if (typeof object["delete"] !== "object")
                    throw TypeError(".usp.Request.delete: object expected");
                message["delete"] = $root.usp.Delete.fromObject(object["delete"]);
            }
            if (object.operate != null) {
                if (typeof object.operate !== "object")
                    throw TypeError(".usp.Request.operate: object expected");
                message.operate = $root.usp.Operate.fromObject(object.operate);
            }
            if (object.notify != null) {
                if (typeof object.notify !== "object")
                    throw TypeError(".usp.Request.notify: object expected");
                message.notify = $root.usp.Notify.fromObject(object.notify);
            }
            if (object.getSupportedProtocol != null) {
                if (typeof object.getSupportedProtocol !== "object")
                    throw TypeError(".usp.Request.getSupportedProtocol: object expected");
                message.getSupportedProtocol = $root.usp.GetSupportedProtocol.fromObject(object.getSupportedProtocol);
            }
            return message;
        };

        /**
         * Creates a plain object from a Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof usp.Request
         * @static
         * @param {usp.Request} message Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (message.get != null && message.hasOwnProperty("get")) {
                object.get = $root.usp.Get.toObject(message.get, options);
                if (options.oneofs)
                    object.reqType = "get";
            }
            if (message.getSupportedDm != null && message.hasOwnProperty("getSupportedDm")) {
                object.getSupportedDm = $root.usp.GetSupportedDM.toObject(message.getSupportedDm, options);
                if (options.oneofs)
                    object.reqType = "getSupportedDm";
            }
            if (message.getInstances != null && message.hasOwnProperty("getInstances")) {
                object.getInstances = $root.usp.GetInstances.toObject(message.getInstances, options);
                if (options.oneofs)
                    object.reqType = "getInstances";
            }
            if (message.set != null && message.hasOwnProperty("set")) {
                object.set = $root.usp.Set.toObject(message.set, options);
                if (options.oneofs)
                    object.reqType = "set";
            }
            if (message.add != null && message.hasOwnProperty("add")) {
                object.add = $root.usp.Add.toObject(message.add, options);
                if (options.oneofs)
                    object.reqType = "add";
            }
            if (message["delete"] != null && message.hasOwnProperty("delete")) {
                object["delete"] = $root.usp.Delete.toObject(message["delete"], options);
                if (options.oneofs)
                    object.reqType = "delete";
            }
            if (message.operate != null && message.hasOwnProperty("operate")) {
                object.operate = $root.usp.Operate.toObject(message.operate, options);
                if (options.oneofs)
                    object.reqType = "operate";
            }
            if (message.notify != null && message.hasOwnProperty("notify")) {
                object.notify = $root.usp.Notify.toObject(message.notify, options);
                if (options.oneofs)
                    object.reqType = "notify";
            }
            if (message.getSupportedProtocol != null && message.hasOwnProperty("getSupportedProtocol")) {
                object.getSupportedProtocol = $root.usp.GetSupportedProtocol.toObject(message.getSupportedProtocol, options);
                if (options.oneofs)
                    object.reqType = "getSupportedProtocol";
            }
            return object;
        };

        /**
         * Converts this Request to JSON.
         * @function toJSON
         * @memberof usp.Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Request
         * @function getTypeUrl
         * @memberof usp.Request
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Request.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/usp.Request";
        };

        return Request;
    })();

    usp.Response = (function() {

        /**
         * Properties of a Response.
         * @memberof usp
         * @interface IResponse
         * @property {usp.IGetResp|null} [getResp] Response getResp
         * @property {usp.IGetSupportedDMResp|null} [getSupportedDmResp] Response getSupportedDmResp
         * @property {usp.IGetInstancesResp|null} [getInstancesResp] Response getInstancesResp
         * @property {usp.ISetResp|null} [setResp] Response setResp
         * @property {usp.IAddResp|null} [addResp] Response addResp
         * @property {usp.IDeleteResp|null} [deleteResp] Response deleteResp
         * @property {usp.IOperateResp|null} [operateResp] Response operateResp
         * @property {usp.INotifyResp|null} [notifyResp] Response notifyResp
         * @property {usp.IGetSupportedProtocolResp|null} [getSupportedProtocolResp] Response getSupportedProtocolResp
         */

        /**
         * Constructs a new Response.
         * @memberof usp
         * @classdesc Represents a Response.
         * @implements IResponse
         * @constructor
         * @param {usp.IResponse=} [properties] Properties to set
         */
        function Response(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Response getResp.
         * @member {usp.IGetResp|null|undefined} getResp
         * @memberof usp.Response
         * @instance
         */
        Response.prototype.getResp = null;

        /**
         * Response getSupportedDmResp.
         * @member {usp.IGetSupportedDMResp|null|undefined} getSupportedDmResp
         * @memberof usp.Response
         * @instance
         */
        Response.prototype.getSupportedDmResp = null;

        /**
         * Response getInstancesResp.
         * @member {usp.IGetInstancesResp|null|undefined} getInstancesResp
         * @memberof usp.Response
         * @instance
         */
        Response.prototype.getInstancesResp = null;

        /**
         * Response setResp.
         * @member {usp.ISetResp|null|undefined} setResp
         * @memberof usp.Response
         * @instance
         */
        Response.prototype.setResp = null;

        /**
         * Response addResp.
         * @member {usp.IAddResp|null|undefined} addResp
         * @memberof usp.Response
         * @instance
         */
        Response.prototype.addResp = null;

        /**
         * Response deleteResp.
         * @member {usp.IDeleteResp|null|undefined} deleteResp
         * @memberof usp.Response
         * @instance
         */
        Response.prototype.deleteResp = null;

        /**
         * Response operateResp.
         * @member {usp.IOperateResp|null|undefined} operateResp
         * @memberof usp.Response
         * @instance
         */
        Response.prototype.operateResp = null;

        /**
         * Response notifyResp.
         * @member {usp.INotifyResp|null|undefined} notifyResp
         * @memberof usp.Response
         * @instance
         */
        Response.prototype.notifyResp = null;

        /**
         * Response getSupportedProtocolResp.
         * @member {usp.IGetSupportedProtocolResp|null|undefined} getSupportedProtocolResp
         * @memberof usp.Response
         * @instance
         */
        Response.prototype.getSupportedProtocolResp = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * Response respType.
         * @member {"getResp"|"getSupportedDmResp"|"getInstancesResp"|"setResp"|"addResp"|"deleteResp"|"operateResp"|"notifyResp"|"getSupportedProtocolResp"|undefined} respType
         * @memberof usp.Response
         * @instance
         */
        Object.defineProperty(Response.prototype, "respType", {
            get: $util.oneOfGetter($oneOfFields = ["getResp", "getSupportedDmResp", "getInstancesResp", "setResp", "addResp", "deleteResp", "operateResp", "notifyResp", "getSupportedProtocolResp"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new Response instance using the specified properties.
         * @function create
         * @memberof usp.Response
         * @static
         * @param {usp.IResponse=} [properties] Properties to set
         * @returns {usp.Response} Response instance
         */
        Response.create = function create(properties) {
            return new Response(properties);
        };

        /**
         * Encodes the specified Response message. Does not implicitly {@link usp.Response.verify|verify} messages.
         * @function encode
         * @memberof usp.Response
         * @static
         * @param {usp.IResponse} message Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.getResp != null && Object.hasOwnProperty.call(message, "getResp"))
                $root.usp.GetResp.encode(message.getResp, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.getSupportedDmResp != null && Object.hasOwnProperty.call(message, "getSupportedDmResp"))
                $root.usp.GetSupportedDMResp.encode(message.getSupportedDmResp, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.getInstancesResp != null && Object.hasOwnProperty.call(message, "getInstancesResp"))
                $root.usp.GetInstancesResp.encode(message.getInstancesResp, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.setResp != null && Object.hasOwnProperty.call(message, "setResp"))
                $root.usp.SetResp.encode(message.setResp, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.addResp != null && Object.hasOwnProperty.call(message, "addResp"))
                $root.usp.AddResp.encode(message.addResp, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.deleteResp != null && Object.hasOwnProperty.call(message, "deleteResp"))
                $root.usp.DeleteResp.encode(message.deleteResp, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.operateResp != null && Object.hasOwnProperty.call(message, "operateResp"))
                $root.usp.OperateResp.encode(message.operateResp, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.notifyResp != null && Object.hasOwnProperty.call(message, "notifyResp"))
                $root.usp.NotifyResp.encode(message.notifyResp, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.getSupportedProtocolResp != null && Object.hasOwnProperty.call(message, "getSupportedProtocolResp"))
                $root.usp.GetSupportedProtocolResp.encode(message.getSupportedProtocolResp, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Response message, length delimited. Does not implicitly {@link usp.Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof usp.Response
         * @static
         * @param {usp.IResponse} message Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Response message from the specified reader or buffer.
         * @function decode
         * @memberof usp.Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {usp.Response} Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.usp.Response();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.getResp = $root.usp.GetResp.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.getSupportedDmResp = $root.usp.GetSupportedDMResp.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.getInstancesResp = $root.usp.GetInstancesResp.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        message.setResp = $root.usp.SetResp.decode(reader, reader.uint32());
                        break;
                    }
                case 5: {
                        message.addResp = $root.usp.AddResp.decode(reader, reader.uint32());
                        break;
                    }
                case 6: {
                        message.deleteResp = $root.usp.DeleteResp.decode(reader, reader.uint32());
                        break;
                    }
                case 7: {
                        message.operateResp = $root.usp.OperateResp.decode(reader, reader.uint32());
                        break;
                    }
                case 8: {
                        message.notifyResp = $root.usp.NotifyResp.decode(reader, reader.uint32());
                        break;
                    }
                case 9: {
                        message.getSupportedProtocolResp = $root.usp.GetSupportedProtocolResp.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof usp.Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {usp.Response} Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Response message.
         * @function verify
         * @memberof usp.Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.getResp != null && message.hasOwnProperty("getResp")) {
                properties.respType = 1;
                {
                    let error = $root.usp.GetResp.verify(message.getResp);
                    if (error)
                        return "getResp." + error;
                }
            }
            if (message.getSupportedDmResp != null && message.hasOwnProperty("getSupportedDmResp")) {
                if (properties.respType === 1)
                    return "respType: multiple values";
                properties.respType = 1;
                {
                    let error = $root.usp.GetSupportedDMResp.verify(message.getSupportedDmResp);
                    if (error)
                        return "getSupportedDmResp." + error;
                }
            }
            if (message.getInstancesResp != null && message.hasOwnProperty("getInstancesResp")) {
                if (properties.respType === 1)
                    return "respType: multiple values";
                properties.respType = 1;
                {
                    let error = $root.usp.GetInstancesResp.verify(message.getInstancesResp);
                    if (error)
                        return "getInstancesResp." + error;
                }
            }
            if (message.setResp != null && message.hasOwnProperty("setResp")) {
                if (properties.respType === 1)
                    return "respType: multiple values";
                properties.respType = 1;
                {
                    let error = $root.usp.SetResp.verify(message.setResp);
                    if (error)
                        return "setResp." + error;
                }
            }
            if (message.addResp != null && message.hasOwnProperty("addResp")) {
                if (properties.respType === 1)
                    return "respType: multiple values";
                properties.respType = 1;
                {
                    let error = $root.usp.AddResp.verify(message.addResp);
                    if (error)
                        return "addResp." + error;
                }
            }
            if (message.deleteResp != null && message.hasOwnProperty("deleteResp")) {
                if (properties.respType === 1)
                    return "respType: multiple values";
                properties.respType = 1;
                {
                    let error = $root.usp.DeleteResp.verify(message.deleteResp);
                    if (error)
                        return "deleteResp." + error;
                }
            }
            if (message.operateResp != null && message.hasOwnProperty("operateResp")) {
                if (properties.respType === 1)
                    return "respType: multiple values";
                properties.respType = 1;
                {
                    let error = $root.usp.OperateResp.verify(message.operateResp);
                    if (error)
                        return "operateResp." + error;
                }
            }
            if (message.notifyResp != null && message.hasOwnProperty("notifyResp")) {
                if (properties.respType === 1)
                    return "respType: multiple values";
                properties.respType = 1;
                {
                    let error = $root.usp.NotifyResp.verify(message.notifyResp);
                    if (error)
                        return "notifyResp." + error;
                }
            }
            if (message.getSupportedProtocolResp != null && message.hasOwnProperty("getSupportedProtocolResp")) {
                if (properties.respType === 1)
                    return "respType: multiple values";
                properties.respType = 1;
                {
                    let error = $root.usp.GetSupportedProtocolResp.verify(message.getSupportedProtocolResp);
                    if (error)
                        return "getSupportedProtocolResp." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof usp.Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {usp.Response} Response
         */
        Response.fromObject = function fromObject(object) {
            if (object instanceof $root.usp.Response)
                return object;
            let message = new $root.usp.Response();
            if (object.getResp != null) {
                if (typeof object.getResp !== "object")
                    throw TypeError(".usp.Response.getResp: object expected");
                message.getResp = $root.usp.GetResp.fromObject(object.getResp);
            }
            if (object.getSupportedDmResp != null) {
                if (typeof object.getSupportedDmResp !== "object")
                    throw TypeError(".usp.Response.getSupportedDmResp: object expected");
                message.getSupportedDmResp = $root.usp.GetSupportedDMResp.fromObject(object.getSupportedDmResp);
            }
            if (object.getInstancesResp != null) {
                if (typeof object.getInstancesResp !== "object")
                    throw TypeError(".usp.Response.getInstancesResp: object expected");
                message.getInstancesResp = $root.usp.GetInstancesResp.fromObject(object.getInstancesResp);
            }
            if (object.setResp != null) {
                if (typeof object.setResp !== "object")
                    throw TypeError(".usp.Response.setResp: object expected");
                message.setResp = $root.usp.SetResp.fromObject(object.setResp);
            }
            if (object.addResp != null) {
                if (typeof object.addResp !== "object")
                    throw TypeError(".usp.Response.addResp: object expected");
                message.addResp = $root.usp.AddResp.fromObject(object.addResp);
            }
            if (object.deleteResp != null) {
                if (typeof object.deleteResp !== "object")
                    throw TypeError(".usp.Response.deleteResp: object expected");
                message.deleteResp = $root.usp.DeleteResp.fromObject(object.deleteResp);
            }
            if (object.operateResp != null) {
                if (typeof object.operateResp !== "object")
                    throw TypeError(".usp.Response.operateResp: object expected");
                message.operateResp = $root.usp.OperateResp.fromObject(object.operateResp);
            }
            if (object.notifyResp != null) {
                if (typeof object.notifyResp !== "object")
                    throw TypeError(".usp.Response.notifyResp: object expected");
                message.notifyResp = $root.usp.NotifyResp.fromObject(object.notifyResp);
            }
            if (object.getSupportedProtocolResp != null) {
                if (typeof object.getSupportedProtocolResp !== "object")
                    throw TypeError(".usp.Response.getSupportedProtocolResp: object expected");
                message.getSupportedProtocolResp = $root.usp.GetSupportedProtocolResp.fromObject(object.getSupportedProtocolResp);
            }
            return message;
        };

        /**
         * Creates a plain object from a Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof usp.Response
         * @static
         * @param {usp.Response} message Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Response.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (message.getResp != null && message.hasOwnProperty("getResp")) {
                object.getResp = $root.usp.GetResp.toObject(message.getResp, options);
                if (options.oneofs)
                    object.respType = "getResp";
            }
            if (message.getSupportedDmResp != null && message.hasOwnProperty("getSupportedDmResp")) {
                object.getSupportedDmResp = $root.usp.GetSupportedDMResp.toObject(message.getSupportedDmResp, options);
                if (options.oneofs)
                    object.respType = "getSupportedDmResp";
            }
            if (message.getInstancesResp != null && message.hasOwnProperty("getInstancesResp")) {
                object.getInstancesResp = $root.usp.GetInstancesResp.toObject(message.getInstancesResp, options);
                if (options.oneofs)
                    object.respType = "getInstancesResp";
            }
            if (message.setResp != null && message.hasOwnProperty("setResp")) {
                object.setResp = $root.usp.SetResp.toObject(message.setResp, options);
                if (options.oneofs)
                    object.respType = "setResp";
            }
            if (message.addResp != null && message.hasOwnProperty("addResp")) {
                object.addResp = $root.usp.AddResp.toObject(message.addResp, options);
                if (options.oneofs)
                    object.respType = "addResp";
            }
            if (message.deleteResp != null && message.hasOwnProperty("deleteResp")) {
                object.deleteResp = $root.usp.DeleteResp.toObject(message.deleteResp, options);
                if (options.oneofs)
                    object.respType = "deleteResp";
            }
            if (message.operateResp != null && message.hasOwnProperty("operateResp")) {
                object.operateResp = $root.usp.OperateResp.toObject(message.operateResp, options);
                if (options.oneofs)
                    object.respType = "operateResp";
            }
            if (message.notifyResp != null && message.hasOwnProperty("notifyResp")) {
                object.notifyResp = $root.usp.NotifyResp.toObject(message.notifyResp, options);
                if (options.oneofs)
                    object.respType = "notifyResp";
            }
            if (message.getSupportedProtocolResp != null && message.hasOwnProperty("getSupportedProtocolResp")) {
                object.getSupportedProtocolResp = $root.usp.GetSupportedProtocolResp.toObject(message.getSupportedProtocolResp, options);
                if (options.oneofs)
                    object.respType = "getSupportedProtocolResp";
            }
            return object;
        };

        /**
         * Converts this Response to JSON.
         * @function toJSON
         * @memberof usp.Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Response
         * @function getTypeUrl
         * @memberof usp.Response
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Response.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/usp.Response";
        };

        return Response;
    })();

    usp.Error = (function() {

        /**
         * Properties of an Error.
         * @memberof usp
         * @interface IError
         * @property {number|null} [errCode] Error errCode
         * @property {string|null} [errMsg] Error errMsg
         * @property {Array.<usp.Error.IParamError>|null} [paramErrs] Error paramErrs
         */

        /**
         * Constructs a new Error.
         * @memberof usp
         * @classdesc Represents an Error.
         * @implements IError
         * @constructor
         * @param {usp.IError=} [properties] Properties to set
         */
        function Error(properties) {
            this.paramErrs = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Error errCode.
         * @member {number} errCode
         * @memberof usp.Error
         * @instance
         */
        Error.prototype.errCode = 0;

        /**
         * Error errMsg.
         * @member {string} errMsg
         * @memberof usp.Error
         * @instance
         */
        Error.prototype.errMsg = "";

        /**
         * Error paramErrs.
         * @member {Array.<usp.Error.IParamError>} paramErrs
         * @memberof usp.Error
         * @instance
         */
        Error.prototype.paramErrs = $util.emptyArray;

        /**
         * Creates a new Error instance using the specified properties.
         * @function create
         * @memberof usp.Error
         * @static
         * @param {usp.IError=} [properties] Properties to set
         * @returns {usp.Error} Error instance
         */
        Error.create = function create(properties) {
            return new Error(properties);
        };

        /**
         * Encodes the specified Error message. Does not implicitly {@link usp.Error.verify|verify} messages.
         * @function encode
         * @memberof usp.Error
         * @static
         * @param {usp.IError} message Error message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Error.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.errCode != null && Object.hasOwnProperty.call(message, "errCode"))
                writer.uint32(/* id 1, wireType 5 =*/13).fixed32(message.errCode);
            if (message.errMsg != null && Object.hasOwnProperty.call(message, "errMsg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.errMsg);
            if (message.paramErrs != null && message.paramErrs.length)
                for (let i = 0; i < message.paramErrs.length; ++i)
                    $root.usp.Error.ParamError.encode(message.paramErrs[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Error message, length delimited. Does not implicitly {@link usp.Error.verify|verify} messages.
         * @function encodeDelimited
         * @memberof usp.Error
         * @static
         * @param {usp.IError} message Error message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Error.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Error message from the specified reader or buffer.
         * @function decode
         * @memberof usp.Error
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {usp.Error} Error
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Error.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.usp.Error();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.errCode = reader.fixed32();
                        break;
                    }
                case 2: {
                        message.errMsg = reader.string();
                        break;
                    }
                case 3: {
                        if (!(message.paramErrs && message.paramErrs.length))
                            message.paramErrs = [];
                        message.paramErrs.push($root.usp.Error.ParamError.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Error message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof usp.Error
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {usp.Error} Error
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Error.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Error message.
         * @function verify
         * @memberof usp.Error
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Error.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.errCode != null && message.hasOwnProperty("errCode"))
                if (!$util.isInteger(message.errCode))
                    return "errCode: integer expected";
            if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                if (!$util.isString(message.errMsg))
                    return "errMsg: string expected";
            if (message.paramErrs != null && message.hasOwnProperty("paramErrs")) {
                if (!Array.isArray(message.paramErrs))
                    return "paramErrs: array expected";
                for (let i = 0; i < message.paramErrs.length; ++i) {
                    let error = $root.usp.Error.ParamError.verify(message.paramErrs[i]);
                    if (error)
                        return "paramErrs." + error;
                }
            }
            return null;
        };

        /**
         * Creates an Error message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof usp.Error
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {usp.Error} Error
         */
        Error.fromObject = function fromObject(object) {
            if (object instanceof $root.usp.Error)
                return object;
            let message = new $root.usp.Error();
            if (object.errCode != null)
                message.errCode = object.errCode >>> 0;
            if (object.errMsg != null)
                message.errMsg = String(object.errMsg);
            if (object.paramErrs) {
                if (!Array.isArray(object.paramErrs))
                    throw TypeError(".usp.Error.paramErrs: array expected");
                message.paramErrs = [];
                for (let i = 0; i < object.paramErrs.length; ++i) {
                    if (typeof object.paramErrs[i] !== "object")
                        throw TypeError(".usp.Error.paramErrs: object expected");
                    message.paramErrs[i] = $root.usp.Error.ParamError.fromObject(object.paramErrs[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an Error message. Also converts values to other types if specified.
         * @function toObject
         * @memberof usp.Error
         * @static
         * @param {usp.Error} message Error
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Error.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.paramErrs = [];
            if (options.defaults) {
                object.errCode = 0;
                object.errMsg = "";
            }
            if (message.errCode != null && message.hasOwnProperty("errCode"))
                object.errCode = message.errCode;
            if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                object.errMsg = message.errMsg;
            if (message.paramErrs && message.paramErrs.length) {
                object.paramErrs = [];
                for (let j = 0; j < message.paramErrs.length; ++j)
                    object.paramErrs[j] = $root.usp.Error.ParamError.toObject(message.paramErrs[j], options);
            }
            return object;
        };

        /**
         * Converts this Error to JSON.
         * @function toJSON
         * @memberof usp.Error
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Error.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Error
         * @function getTypeUrl
         * @memberof usp.Error
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Error.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/usp.Error";
        };

        Error.ParamError = (function() {

            /**
             * Properties of a ParamError.
             * @memberof usp.Error
             * @interface IParamError
             * @property {string|null} [paramPath] ParamError paramPath
             * @property {number|null} [errCode] ParamError errCode
             * @property {string|null} [errMsg] ParamError errMsg
             */

            /**
             * Constructs a new ParamError.
             * @memberof usp.Error
             * @classdesc Represents a ParamError.
             * @implements IParamError
             * @constructor
             * @param {usp.Error.IParamError=} [properties] Properties to set
             */
            function ParamError(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ParamError paramPath.
             * @member {string} paramPath
             * @memberof usp.Error.ParamError
             * @instance
             */
            ParamError.prototype.paramPath = "";

            /**
             * ParamError errCode.
             * @member {number} errCode
             * @memberof usp.Error.ParamError
             * @instance
             */
            ParamError.prototype.errCode = 0;

            /**
             * ParamError errMsg.
             * @member {string} errMsg
             * @memberof usp.Error.ParamError
             * @instance
             */
            ParamError.prototype.errMsg = "";

            /**
             * Creates a new ParamError instance using the specified properties.
             * @function create
             * @memberof usp.Error.ParamError
             * @static
             * @param {usp.Error.IParamError=} [properties] Properties to set
             * @returns {usp.Error.ParamError} ParamError instance
             */
            ParamError.create = function create(properties) {
                return new ParamError(properties);
            };

            /**
             * Encodes the specified ParamError message. Does not implicitly {@link usp.Error.ParamError.verify|verify} messages.
             * @function encode
             * @memberof usp.Error.ParamError
             * @static
             * @param {usp.Error.IParamError} message ParamError message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ParamError.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.paramPath != null && Object.hasOwnProperty.call(message, "paramPath"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.paramPath);
                if (message.errCode != null && Object.hasOwnProperty.call(message, "errCode"))
                    writer.uint32(/* id 2, wireType 5 =*/21).fixed32(message.errCode);
                if (message.errMsg != null && Object.hasOwnProperty.call(message, "errMsg"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.errMsg);
                return writer;
            };

            /**
             * Encodes the specified ParamError message, length delimited. Does not implicitly {@link usp.Error.ParamError.verify|verify} messages.
             * @function encodeDelimited
             * @memberof usp.Error.ParamError
             * @static
             * @param {usp.Error.IParamError} message ParamError message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ParamError.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ParamError message from the specified reader or buffer.
             * @function decode
             * @memberof usp.Error.ParamError
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {usp.Error.ParamError} ParamError
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ParamError.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.usp.Error.ParamError();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.paramPath = reader.string();
                            break;
                        }
                    case 2: {
                            message.errCode = reader.fixed32();
                            break;
                        }
                    case 3: {
                            message.errMsg = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ParamError message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof usp.Error.ParamError
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {usp.Error.ParamError} ParamError
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ParamError.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ParamError message.
             * @function verify
             * @memberof usp.Error.ParamError
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ParamError.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.paramPath != null && message.hasOwnProperty("paramPath"))
                    if (!$util.isString(message.paramPath))
                        return "paramPath: string expected";
                if (message.errCode != null && message.hasOwnProperty("errCode"))
                    if (!$util.isInteger(message.errCode))
                        return "errCode: integer expected";
                if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                    if (!$util.isString(message.errMsg))
                        return "errMsg: string expected";
                return null;
            };

            /**
             * Creates a ParamError message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof usp.Error.ParamError
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {usp.Error.ParamError} ParamError
             */
            ParamError.fromObject = function fromObject(object) {
                if (object instanceof $root.usp.Error.ParamError)
                    return object;
                let message = new $root.usp.Error.ParamError();
                if (object.paramPath != null)
                    message.paramPath = String(object.paramPath);
                if (object.errCode != null)
                    message.errCode = object.errCode >>> 0;
                if (object.errMsg != null)
                    message.errMsg = String(object.errMsg);
                return message;
            };

            /**
             * Creates a plain object from a ParamError message. Also converts values to other types if specified.
             * @function toObject
             * @memberof usp.Error.ParamError
             * @static
             * @param {usp.Error.ParamError} message ParamError
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ParamError.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.paramPath = "";
                    object.errCode = 0;
                    object.errMsg = "";
                }
                if (message.paramPath != null && message.hasOwnProperty("paramPath"))
                    object.paramPath = message.paramPath;
                if (message.errCode != null && message.hasOwnProperty("errCode"))
                    object.errCode = message.errCode;
                if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                    object.errMsg = message.errMsg;
                return object;
            };

            /**
             * Converts this ParamError to JSON.
             * @function toJSON
             * @memberof usp.Error.ParamError
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ParamError.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ParamError
             * @function getTypeUrl
             * @memberof usp.Error.ParamError
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ParamError.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/usp.Error.ParamError";
            };

            return ParamError;
        })();

        return Error;
    })();

    usp.Get = (function() {

        /**
         * Properties of a Get.
         * @memberof usp
         * @interface IGet
         * @property {Array.<string>|null} [paramPaths] Get paramPaths
         */

        /**
         * Constructs a new Get.
         * @memberof usp
         * @classdesc Represents a Get.
         * @implements IGet
         * @constructor
         * @param {usp.IGet=} [properties] Properties to set
         */
        function Get(properties) {
            this.paramPaths = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Get paramPaths.
         * @member {Array.<string>} paramPaths
         * @memberof usp.Get
         * @instance
         */
        Get.prototype.paramPaths = $util.emptyArray;

        /**
         * Creates a new Get instance using the specified properties.
         * @function create
         * @memberof usp.Get
         * @static
         * @param {usp.IGet=} [properties] Properties to set
         * @returns {usp.Get} Get instance
         */
        Get.create = function create(properties) {
            return new Get(properties);
        };

        /**
         * Encodes the specified Get message. Does not implicitly {@link usp.Get.verify|verify} messages.
         * @function encode
         * @memberof usp.Get
         * @static
         * @param {usp.IGet} message Get message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Get.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.paramPaths != null && message.paramPaths.length)
                for (let i = 0; i < message.paramPaths.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.paramPaths[i]);
            return writer;
        };

        /**
         * Encodes the specified Get message, length delimited. Does not implicitly {@link usp.Get.verify|verify} messages.
         * @function encodeDelimited
         * @memberof usp.Get
         * @static
         * @param {usp.IGet} message Get message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Get.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Get message from the specified reader or buffer.
         * @function decode
         * @memberof usp.Get
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {usp.Get} Get
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Get.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.usp.Get();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.paramPaths && message.paramPaths.length))
                            message.paramPaths = [];
                        message.paramPaths.push(reader.string());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Get message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof usp.Get
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {usp.Get} Get
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Get.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Get message.
         * @function verify
         * @memberof usp.Get
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Get.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.paramPaths != null && message.hasOwnProperty("paramPaths")) {
                if (!Array.isArray(message.paramPaths))
                    return "paramPaths: array expected";
                for (let i = 0; i < message.paramPaths.length; ++i)
                    if (!$util.isString(message.paramPaths[i]))
                        return "paramPaths: string[] expected";
            }
            return null;
        };

        /**
         * Creates a Get message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof usp.Get
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {usp.Get} Get
         */
        Get.fromObject = function fromObject(object) {
            if (object instanceof $root.usp.Get)
                return object;
            let message = new $root.usp.Get();
            if (object.paramPaths) {
                if (!Array.isArray(object.paramPaths))
                    throw TypeError(".usp.Get.paramPaths: array expected");
                message.paramPaths = [];
                for (let i = 0; i < object.paramPaths.length; ++i)
                    message.paramPaths[i] = String(object.paramPaths[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a Get message. Also converts values to other types if specified.
         * @function toObject
         * @memberof usp.Get
         * @static
         * @param {usp.Get} message Get
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Get.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.paramPaths = [];
            if (message.paramPaths && message.paramPaths.length) {
                object.paramPaths = [];
                for (let j = 0; j < message.paramPaths.length; ++j)
                    object.paramPaths[j] = message.paramPaths[j];
            }
            return object;
        };

        /**
         * Converts this Get to JSON.
         * @function toJSON
         * @memberof usp.Get
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Get.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Get
         * @function getTypeUrl
         * @memberof usp.Get
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Get.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/usp.Get";
        };

        return Get;
    })();

    usp.GetResp = (function() {

        /**
         * Properties of a GetResp.
         * @memberof usp
         * @interface IGetResp
         * @property {Array.<usp.GetResp.IRequestedPathResult>|null} [reqPathResults] GetResp reqPathResults
         */

        /**
         * Constructs a new GetResp.
         * @memberof usp
         * @classdesc Represents a GetResp.
         * @implements IGetResp
         * @constructor
         * @param {usp.IGetResp=} [properties] Properties to set
         */
        function GetResp(properties) {
            this.reqPathResults = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetResp reqPathResults.
         * @member {Array.<usp.GetResp.IRequestedPathResult>} reqPathResults
         * @memberof usp.GetResp
         * @instance
         */
        GetResp.prototype.reqPathResults = $util.emptyArray;

        /**
         * Creates a new GetResp instance using the specified properties.
         * @function create
         * @memberof usp.GetResp
         * @static
         * @param {usp.IGetResp=} [properties] Properties to set
         * @returns {usp.GetResp} GetResp instance
         */
        GetResp.create = function create(properties) {
            return new GetResp(properties);
        };

        /**
         * Encodes the specified GetResp message. Does not implicitly {@link usp.GetResp.verify|verify} messages.
         * @function encode
         * @memberof usp.GetResp
         * @static
         * @param {usp.IGetResp} message GetResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.reqPathResults != null && message.reqPathResults.length)
                for (let i = 0; i < message.reqPathResults.length; ++i)
                    $root.usp.GetResp.RequestedPathResult.encode(message.reqPathResults[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetResp message, length delimited. Does not implicitly {@link usp.GetResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof usp.GetResp
         * @static
         * @param {usp.IGetResp} message GetResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetResp message from the specified reader or buffer.
         * @function decode
         * @memberof usp.GetResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {usp.GetResp} GetResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.usp.GetResp();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.reqPathResults && message.reqPathResults.length))
                            message.reqPathResults = [];
                        message.reqPathResults.push($root.usp.GetResp.RequestedPathResult.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof usp.GetResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {usp.GetResp} GetResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetResp message.
         * @function verify
         * @memberof usp.GetResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.reqPathResults != null && message.hasOwnProperty("reqPathResults")) {
                if (!Array.isArray(message.reqPathResults))
                    return "reqPathResults: array expected";
                for (let i = 0; i < message.reqPathResults.length; ++i) {
                    let error = $root.usp.GetResp.RequestedPathResult.verify(message.reqPathResults[i]);
                    if (error)
                        return "reqPathResults." + error;
                }
            }
            return null;
        };

        /**
         * Creates a GetResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof usp.GetResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {usp.GetResp} GetResp
         */
        GetResp.fromObject = function fromObject(object) {
            if (object instanceof $root.usp.GetResp)
                return object;
            let message = new $root.usp.GetResp();
            if (object.reqPathResults) {
                if (!Array.isArray(object.reqPathResults))
                    throw TypeError(".usp.GetResp.reqPathResults: array expected");
                message.reqPathResults = [];
                for (let i = 0; i < object.reqPathResults.length; ++i) {
                    if (typeof object.reqPathResults[i] !== "object")
                        throw TypeError(".usp.GetResp.reqPathResults: object expected");
                    message.reqPathResults[i] = $root.usp.GetResp.RequestedPathResult.fromObject(object.reqPathResults[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GetResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof usp.GetResp
         * @static
         * @param {usp.GetResp} message GetResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.reqPathResults = [];
            if (message.reqPathResults && message.reqPathResults.length) {
                object.reqPathResults = [];
                for (let j = 0; j < message.reqPathResults.length; ++j)
                    object.reqPathResults[j] = $root.usp.GetResp.RequestedPathResult.toObject(message.reqPathResults[j], options);
            }
            return object;
        };

        /**
         * Converts this GetResp to JSON.
         * @function toJSON
         * @memberof usp.GetResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetResp
         * @function getTypeUrl
         * @memberof usp.GetResp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/usp.GetResp";
        };

        GetResp.RequestedPathResult = (function() {

            /**
             * Properties of a RequestedPathResult.
             * @memberof usp.GetResp
             * @interface IRequestedPathResult
             * @property {string|null} [requestedPath] RequestedPathResult requestedPath
             * @property {number|null} [errCode] RequestedPathResult errCode
             * @property {string|null} [errMsg] RequestedPathResult errMsg
             * @property {Array.<usp.GetResp.IResolvedPathResult>|null} [resolvedPathResults] RequestedPathResult resolvedPathResults
             */

            /**
             * Constructs a new RequestedPathResult.
             * @memberof usp.GetResp
             * @classdesc Represents a RequestedPathResult.
             * @implements IRequestedPathResult
             * @constructor
             * @param {usp.GetResp.IRequestedPathResult=} [properties] Properties to set
             */
            function RequestedPathResult(properties) {
                this.resolvedPathResults = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * RequestedPathResult requestedPath.
             * @member {string} requestedPath
             * @memberof usp.GetResp.RequestedPathResult
             * @instance
             */
            RequestedPathResult.prototype.requestedPath = "";

            /**
             * RequestedPathResult errCode.
             * @member {number} errCode
             * @memberof usp.GetResp.RequestedPathResult
             * @instance
             */
            RequestedPathResult.prototype.errCode = 0;

            /**
             * RequestedPathResult errMsg.
             * @member {string} errMsg
             * @memberof usp.GetResp.RequestedPathResult
             * @instance
             */
            RequestedPathResult.prototype.errMsg = "";

            /**
             * RequestedPathResult resolvedPathResults.
             * @member {Array.<usp.GetResp.IResolvedPathResult>} resolvedPathResults
             * @memberof usp.GetResp.RequestedPathResult
             * @instance
             */
            RequestedPathResult.prototype.resolvedPathResults = $util.emptyArray;

            /**
             * Creates a new RequestedPathResult instance using the specified properties.
             * @function create
             * @memberof usp.GetResp.RequestedPathResult
             * @static
             * @param {usp.GetResp.IRequestedPathResult=} [properties] Properties to set
             * @returns {usp.GetResp.RequestedPathResult} RequestedPathResult instance
             */
            RequestedPathResult.create = function create(properties) {
                return new RequestedPathResult(properties);
            };

            /**
             * Encodes the specified RequestedPathResult message. Does not implicitly {@link usp.GetResp.RequestedPathResult.verify|verify} messages.
             * @function encode
             * @memberof usp.GetResp.RequestedPathResult
             * @static
             * @param {usp.GetResp.IRequestedPathResult} message RequestedPathResult message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RequestedPathResult.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.requestedPath != null && Object.hasOwnProperty.call(message, "requestedPath"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.requestedPath);
                if (message.errCode != null && Object.hasOwnProperty.call(message, "errCode"))
                    writer.uint32(/* id 2, wireType 5 =*/21).fixed32(message.errCode);
                if (message.errMsg != null && Object.hasOwnProperty.call(message, "errMsg"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.errMsg);
                if (message.resolvedPathResults != null && message.resolvedPathResults.length)
                    for (let i = 0; i < message.resolvedPathResults.length; ++i)
                        $root.usp.GetResp.ResolvedPathResult.encode(message.resolvedPathResults[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified RequestedPathResult message, length delimited. Does not implicitly {@link usp.GetResp.RequestedPathResult.verify|verify} messages.
             * @function encodeDelimited
             * @memberof usp.GetResp.RequestedPathResult
             * @static
             * @param {usp.GetResp.IRequestedPathResult} message RequestedPathResult message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RequestedPathResult.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a RequestedPathResult message from the specified reader or buffer.
             * @function decode
             * @memberof usp.GetResp.RequestedPathResult
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {usp.GetResp.RequestedPathResult} RequestedPathResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RequestedPathResult.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.usp.GetResp.RequestedPathResult();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.requestedPath = reader.string();
                            break;
                        }
                    case 2: {
                            message.errCode = reader.fixed32();
                            break;
                        }
                    case 3: {
                            message.errMsg = reader.string();
                            break;
                        }
                    case 4: {
                            if (!(message.resolvedPathResults && message.resolvedPathResults.length))
                                message.resolvedPathResults = [];
                            message.resolvedPathResults.push($root.usp.GetResp.ResolvedPathResult.decode(reader, reader.uint32()));
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a RequestedPathResult message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof usp.GetResp.RequestedPathResult
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {usp.GetResp.RequestedPathResult} RequestedPathResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RequestedPathResult.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a RequestedPathResult message.
             * @function verify
             * @memberof usp.GetResp.RequestedPathResult
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RequestedPathResult.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.requestedPath != null && message.hasOwnProperty("requestedPath"))
                    if (!$util.isString(message.requestedPath))
                        return "requestedPath: string expected";
                if (message.errCode != null && message.hasOwnProperty("errCode"))
                    if (!$util.isInteger(message.errCode))
                        return "errCode: integer expected";
                if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                    if (!$util.isString(message.errMsg))
                        return "errMsg: string expected";
                if (message.resolvedPathResults != null && message.hasOwnProperty("resolvedPathResults")) {
                    if (!Array.isArray(message.resolvedPathResults))
                        return "resolvedPathResults: array expected";
                    for (let i = 0; i < message.resolvedPathResults.length; ++i) {
                        let error = $root.usp.GetResp.ResolvedPathResult.verify(message.resolvedPathResults[i]);
                        if (error)
                            return "resolvedPathResults." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a RequestedPathResult message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof usp.GetResp.RequestedPathResult
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {usp.GetResp.RequestedPathResult} RequestedPathResult
             */
            RequestedPathResult.fromObject = function fromObject(object) {
                if (object instanceof $root.usp.GetResp.RequestedPathResult)
                    return object;
                let message = new $root.usp.GetResp.RequestedPathResult();
                if (object.requestedPath != null)
                    message.requestedPath = String(object.requestedPath);
                if (object.errCode != null)
                    message.errCode = object.errCode >>> 0;
                if (object.errMsg != null)
                    message.errMsg = String(object.errMsg);
                if (object.resolvedPathResults) {
                    if (!Array.isArray(object.resolvedPathResults))
                        throw TypeError(".usp.GetResp.RequestedPathResult.resolvedPathResults: array expected");
                    message.resolvedPathResults = [];
                    for (let i = 0; i < object.resolvedPathResults.length; ++i) {
                        if (typeof object.resolvedPathResults[i] !== "object")
                            throw TypeError(".usp.GetResp.RequestedPathResult.resolvedPathResults: object expected");
                        message.resolvedPathResults[i] = $root.usp.GetResp.ResolvedPathResult.fromObject(object.resolvedPathResults[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a RequestedPathResult message. Also converts values to other types if specified.
             * @function toObject
             * @memberof usp.GetResp.RequestedPathResult
             * @static
             * @param {usp.GetResp.RequestedPathResult} message RequestedPathResult
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RequestedPathResult.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.resolvedPathResults = [];
                if (options.defaults) {
                    object.requestedPath = "";
                    object.errCode = 0;
                    object.errMsg = "";
                }
                if (message.requestedPath != null && message.hasOwnProperty("requestedPath"))
                    object.requestedPath = message.requestedPath;
                if (message.errCode != null && message.hasOwnProperty("errCode"))
                    object.errCode = message.errCode;
                if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                    object.errMsg = message.errMsg;
                if (message.resolvedPathResults && message.resolvedPathResults.length) {
                    object.resolvedPathResults = [];
                    for (let j = 0; j < message.resolvedPathResults.length; ++j)
                        object.resolvedPathResults[j] = $root.usp.GetResp.ResolvedPathResult.toObject(message.resolvedPathResults[j], options);
                }
                return object;
            };

            /**
             * Converts this RequestedPathResult to JSON.
             * @function toJSON
             * @memberof usp.GetResp.RequestedPathResult
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RequestedPathResult.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for RequestedPathResult
             * @function getTypeUrl
             * @memberof usp.GetResp.RequestedPathResult
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            RequestedPathResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/usp.GetResp.RequestedPathResult";
            };

            return RequestedPathResult;
        })();

        GetResp.ResolvedPathResult = (function() {

            /**
             * Properties of a ResolvedPathResult.
             * @memberof usp.GetResp
             * @interface IResolvedPathResult
             * @property {string|null} [resolvedPath] ResolvedPathResult resolvedPath
             * @property {Object.<string,string>|null} [resultParams] ResolvedPathResult resultParams
             */

            /**
             * Constructs a new ResolvedPathResult.
             * @memberof usp.GetResp
             * @classdesc Represents a ResolvedPathResult.
             * @implements IResolvedPathResult
             * @constructor
             * @param {usp.GetResp.IResolvedPathResult=} [properties] Properties to set
             */
            function ResolvedPathResult(properties) {
                this.resultParams = {};
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ResolvedPathResult resolvedPath.
             * @member {string} resolvedPath
             * @memberof usp.GetResp.ResolvedPathResult
             * @instance
             */
            ResolvedPathResult.prototype.resolvedPath = "";

            /**
             * ResolvedPathResult resultParams.
             * @member {Object.<string,string>} resultParams
             * @memberof usp.GetResp.ResolvedPathResult
             * @instance
             */
            ResolvedPathResult.prototype.resultParams = $util.emptyObject;

            /**
             * Creates a new ResolvedPathResult instance using the specified properties.
             * @function create
             * @memberof usp.GetResp.ResolvedPathResult
             * @static
             * @param {usp.GetResp.IResolvedPathResult=} [properties] Properties to set
             * @returns {usp.GetResp.ResolvedPathResult} ResolvedPathResult instance
             */
            ResolvedPathResult.create = function create(properties) {
                return new ResolvedPathResult(properties);
            };

            /**
             * Encodes the specified ResolvedPathResult message. Does not implicitly {@link usp.GetResp.ResolvedPathResult.verify|verify} messages.
             * @function encode
             * @memberof usp.GetResp.ResolvedPathResult
             * @static
             * @param {usp.GetResp.IResolvedPathResult} message ResolvedPathResult message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResolvedPathResult.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.resolvedPath != null && Object.hasOwnProperty.call(message, "resolvedPath"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.resolvedPath);
                if (message.resultParams != null && Object.hasOwnProperty.call(message, "resultParams"))
                    for (let keys = Object.keys(message.resultParams), i = 0; i < keys.length; ++i)
                        writer.uint32(/* id 2, wireType 2 =*/18).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.resultParams[keys[i]]).ldelim();
                return writer;
            };

            /**
             * Encodes the specified ResolvedPathResult message, length delimited. Does not implicitly {@link usp.GetResp.ResolvedPathResult.verify|verify} messages.
             * @function encodeDelimited
             * @memberof usp.GetResp.ResolvedPathResult
             * @static
             * @param {usp.GetResp.IResolvedPathResult} message ResolvedPathResult message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResolvedPathResult.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ResolvedPathResult message from the specified reader or buffer.
             * @function decode
             * @memberof usp.GetResp.ResolvedPathResult
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {usp.GetResp.ResolvedPathResult} ResolvedPathResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResolvedPathResult.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.usp.GetResp.ResolvedPathResult(), key, value;
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.resolvedPath = reader.string();
                            break;
                        }
                    case 2: {
                            if (message.resultParams === $util.emptyObject)
                                message.resultParams = {};
                            let end2 = reader.uint32() + reader.pos;
                            key = "";
                            value = "";
                            while (reader.pos < end2) {
                                let tag2 = reader.uint32();
                                switch (tag2 >>> 3) {
                                case 1:
                                    key = reader.string();
                                    break;
                                case 2:
                                    value = reader.string();
                                    break;
                                default:
                                    reader.skipType(tag2 & 7);
                                    break;
                                }
                            }
                            message.resultParams[key] = value;
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ResolvedPathResult message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof usp.GetResp.ResolvedPathResult
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {usp.GetResp.ResolvedPathResult} ResolvedPathResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResolvedPathResult.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ResolvedPathResult message.
             * @function verify
             * @memberof usp.GetResp.ResolvedPathResult
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ResolvedPathResult.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.resolvedPath != null && message.hasOwnProperty("resolvedPath"))
                    if (!$util.isString(message.resolvedPath))
                        return "resolvedPath: string expected";
                if (message.resultParams != null && message.hasOwnProperty("resultParams")) {
                    if (!$util.isObject(message.resultParams))
                        return "resultParams: object expected";
                    let key = Object.keys(message.resultParams);
                    for (let i = 0; i < key.length; ++i)
                        if (!$util.isString(message.resultParams[key[i]]))
                            return "resultParams: string{k:string} expected";
                }
                return null;
            };

            /**
             * Creates a ResolvedPathResult message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof usp.GetResp.ResolvedPathResult
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {usp.GetResp.ResolvedPathResult} ResolvedPathResult
             */
            ResolvedPathResult.fromObject = function fromObject(object) {
                if (object instanceof $root.usp.GetResp.ResolvedPathResult)
                    return object;
                let message = new $root.usp.GetResp.ResolvedPathResult();
                if (object.resolvedPath != null)
                    message.resolvedPath = String(object.resolvedPath);
                if (object.resultParams) {
                    if (typeof object.resultParams !== "object")
                        throw TypeError(".usp.GetResp.ResolvedPathResult.resultParams: object expected");
                    message.resultParams = {};
                    for (let keys = Object.keys(object.resultParams), i = 0; i < keys.length; ++i)
                        message.resultParams[keys[i]] = String(object.resultParams[keys[i]]);
                }
                return message;
            };

            /**
             * Creates a plain object from a ResolvedPathResult message. Also converts values to other types if specified.
             * @function toObject
             * @memberof usp.GetResp.ResolvedPathResult
             * @static
             * @param {usp.GetResp.ResolvedPathResult} message ResolvedPathResult
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ResolvedPathResult.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.objects || options.defaults)
                    object.resultParams = {};
                if (options.defaults)
                    object.resolvedPath = "";
                if (message.resolvedPath != null && message.hasOwnProperty("resolvedPath"))
                    object.resolvedPath = message.resolvedPath;
                let keys2;
                if (message.resultParams && (keys2 = Object.keys(message.resultParams)).length) {
                    object.resultParams = {};
                    for (let j = 0; j < keys2.length; ++j)
                        object.resultParams[keys2[j]] = message.resultParams[keys2[j]];
                }
                return object;
            };

            /**
             * Converts this ResolvedPathResult to JSON.
             * @function toJSON
             * @memberof usp.GetResp.ResolvedPathResult
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ResolvedPathResult.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ResolvedPathResult
             * @function getTypeUrl
             * @memberof usp.GetResp.ResolvedPathResult
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ResolvedPathResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/usp.GetResp.ResolvedPathResult";
            };

            return ResolvedPathResult;
        })();

        return GetResp;
    })();

    usp.GetSupportedDM = (function() {

        /**
         * Properties of a GetSupportedDM.
         * @memberof usp
         * @interface IGetSupportedDM
         * @property {Array.<string>|null} [objPaths] GetSupportedDM objPaths
         * @property {boolean|null} [firstLevelOnly] GetSupportedDM firstLevelOnly
         * @property {boolean|null} [returnCommands] GetSupportedDM returnCommands
         * @property {boolean|null} [returnEvents] GetSupportedDM returnEvents
         * @property {boolean|null} [returnParams] GetSupportedDM returnParams
         */

        /**
         * Constructs a new GetSupportedDM.
         * @memberof usp
         * @classdesc Represents a GetSupportedDM.
         * @implements IGetSupportedDM
         * @constructor
         * @param {usp.IGetSupportedDM=} [properties] Properties to set
         */
        function GetSupportedDM(properties) {
            this.objPaths = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetSupportedDM objPaths.
         * @member {Array.<string>} objPaths
         * @memberof usp.GetSupportedDM
         * @instance
         */
        GetSupportedDM.prototype.objPaths = $util.emptyArray;

        /**
         * GetSupportedDM firstLevelOnly.
         * @member {boolean} firstLevelOnly
         * @memberof usp.GetSupportedDM
         * @instance
         */
        GetSupportedDM.prototype.firstLevelOnly = false;

        /**
         * GetSupportedDM returnCommands.
         * @member {boolean} returnCommands
         * @memberof usp.GetSupportedDM
         * @instance
         */
        GetSupportedDM.prototype.returnCommands = false;

        /**
         * GetSupportedDM returnEvents.
         * @member {boolean} returnEvents
         * @memberof usp.GetSupportedDM
         * @instance
         */
        GetSupportedDM.prototype.returnEvents = false;

        /**
         * GetSupportedDM returnParams.
         * @member {boolean} returnParams
         * @memberof usp.GetSupportedDM
         * @instance
         */
        GetSupportedDM.prototype.returnParams = false;

        /**
         * Creates a new GetSupportedDM instance using the specified properties.
         * @function create
         * @memberof usp.GetSupportedDM
         * @static
         * @param {usp.IGetSupportedDM=} [properties] Properties to set
         * @returns {usp.GetSupportedDM} GetSupportedDM instance
         */
        GetSupportedDM.create = function create(properties) {
            return new GetSupportedDM(properties);
        };

        /**
         * Encodes the specified GetSupportedDM message. Does not implicitly {@link usp.GetSupportedDM.verify|verify} messages.
         * @function encode
         * @memberof usp.GetSupportedDM
         * @static
         * @param {usp.IGetSupportedDM} message GetSupportedDM message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetSupportedDM.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.objPaths != null && message.objPaths.length)
                for (let i = 0; i < message.objPaths.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.objPaths[i]);
            if (message.firstLevelOnly != null && Object.hasOwnProperty.call(message, "firstLevelOnly"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.firstLevelOnly);
            if (message.returnCommands != null && Object.hasOwnProperty.call(message, "returnCommands"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.returnCommands);
            if (message.returnEvents != null && Object.hasOwnProperty.call(message, "returnEvents"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.returnEvents);
            if (message.returnParams != null && Object.hasOwnProperty.call(message, "returnParams"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.returnParams);
            return writer;
        };

        /**
         * Encodes the specified GetSupportedDM message, length delimited. Does not implicitly {@link usp.GetSupportedDM.verify|verify} messages.
         * @function encodeDelimited
         * @memberof usp.GetSupportedDM
         * @static
         * @param {usp.IGetSupportedDM} message GetSupportedDM message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetSupportedDM.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetSupportedDM message from the specified reader or buffer.
         * @function decode
         * @memberof usp.GetSupportedDM
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {usp.GetSupportedDM} GetSupportedDM
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetSupportedDM.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.usp.GetSupportedDM();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.objPaths && message.objPaths.length))
                            message.objPaths = [];
                        message.objPaths.push(reader.string());
                        break;
                    }
                case 2: {
                        message.firstLevelOnly = reader.bool();
                        break;
                    }
                case 3: {
                        message.returnCommands = reader.bool();
                        break;
                    }
                case 4: {
                        message.returnEvents = reader.bool();
                        break;
                    }
                case 5: {
                        message.returnParams = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetSupportedDM message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof usp.GetSupportedDM
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {usp.GetSupportedDM} GetSupportedDM
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetSupportedDM.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetSupportedDM message.
         * @function verify
         * @memberof usp.GetSupportedDM
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetSupportedDM.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.objPaths != null && message.hasOwnProperty("objPaths")) {
                if (!Array.isArray(message.objPaths))
                    return "objPaths: array expected";
                for (let i = 0; i < message.objPaths.length; ++i)
                    if (!$util.isString(message.objPaths[i]))
                        return "objPaths: string[] expected";
            }
            if (message.firstLevelOnly != null && message.hasOwnProperty("firstLevelOnly"))
                if (typeof message.firstLevelOnly !== "boolean")
                    return "firstLevelOnly: boolean expected";
            if (message.returnCommands != null && message.hasOwnProperty("returnCommands"))
                if (typeof message.returnCommands !== "boolean")
                    return "returnCommands: boolean expected";
            if (message.returnEvents != null && message.hasOwnProperty("returnEvents"))
                if (typeof message.returnEvents !== "boolean")
                    return "returnEvents: boolean expected";
            if (message.returnParams != null && message.hasOwnProperty("returnParams"))
                if (typeof message.returnParams !== "boolean")
                    return "returnParams: boolean expected";
            return null;
        };

        /**
         * Creates a GetSupportedDM message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof usp.GetSupportedDM
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {usp.GetSupportedDM} GetSupportedDM
         */
        GetSupportedDM.fromObject = function fromObject(object) {
            if (object instanceof $root.usp.GetSupportedDM)
                return object;
            let message = new $root.usp.GetSupportedDM();
            if (object.objPaths) {
                if (!Array.isArray(object.objPaths))
                    throw TypeError(".usp.GetSupportedDM.objPaths: array expected");
                message.objPaths = [];
                for (let i = 0; i < object.objPaths.length; ++i)
                    message.objPaths[i] = String(object.objPaths[i]);
            }
            if (object.firstLevelOnly != null)
                message.firstLevelOnly = Boolean(object.firstLevelOnly);
            if (object.returnCommands != null)
                message.returnCommands = Boolean(object.returnCommands);
            if (object.returnEvents != null)
                message.returnEvents = Boolean(object.returnEvents);
            if (object.returnParams != null)
                message.returnParams = Boolean(object.returnParams);
            return message;
        };

        /**
         * Creates a plain object from a GetSupportedDM message. Also converts values to other types if specified.
         * @function toObject
         * @memberof usp.GetSupportedDM
         * @static
         * @param {usp.GetSupportedDM} message GetSupportedDM
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetSupportedDM.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.objPaths = [];
            if (options.defaults) {
                object.firstLevelOnly = false;
                object.returnCommands = false;
                object.returnEvents = false;
                object.returnParams = false;
            }
            if (message.objPaths && message.objPaths.length) {
                object.objPaths = [];
                for (let j = 0; j < message.objPaths.length; ++j)
                    object.objPaths[j] = message.objPaths[j];
            }
            if (message.firstLevelOnly != null && message.hasOwnProperty("firstLevelOnly"))
                object.firstLevelOnly = message.firstLevelOnly;
            if (message.returnCommands != null && message.hasOwnProperty("returnCommands"))
                object.returnCommands = message.returnCommands;
            if (message.returnEvents != null && message.hasOwnProperty("returnEvents"))
                object.returnEvents = message.returnEvents;
            if (message.returnParams != null && message.hasOwnProperty("returnParams"))
                object.returnParams = message.returnParams;
            return object;
        };

        /**
         * Converts this GetSupportedDM to JSON.
         * @function toJSON
         * @memberof usp.GetSupportedDM
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetSupportedDM.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetSupportedDM
         * @function getTypeUrl
         * @memberof usp.GetSupportedDM
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetSupportedDM.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/usp.GetSupportedDM";
        };

        return GetSupportedDM;
    })();

    usp.GetSupportedDMResp = (function() {

        /**
         * Properties of a GetSupportedDMResp.
         * @memberof usp
         * @interface IGetSupportedDMResp
         * @property {Array.<usp.GetSupportedDMResp.IRequestedObjectResult>|null} [reqObjResults] GetSupportedDMResp reqObjResults
         */

        /**
         * Constructs a new GetSupportedDMResp.
         * @memberof usp
         * @classdesc Represents a GetSupportedDMResp.
         * @implements IGetSupportedDMResp
         * @constructor
         * @param {usp.IGetSupportedDMResp=} [properties] Properties to set
         */
        function GetSupportedDMResp(properties) {
            this.reqObjResults = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetSupportedDMResp reqObjResults.
         * @member {Array.<usp.GetSupportedDMResp.IRequestedObjectResult>} reqObjResults
         * @memberof usp.GetSupportedDMResp
         * @instance
         */
        GetSupportedDMResp.prototype.reqObjResults = $util.emptyArray;

        /**
         * Creates a new GetSupportedDMResp instance using the specified properties.
         * @function create
         * @memberof usp.GetSupportedDMResp
         * @static
         * @param {usp.IGetSupportedDMResp=} [properties] Properties to set
         * @returns {usp.GetSupportedDMResp} GetSupportedDMResp instance
         */
        GetSupportedDMResp.create = function create(properties) {
            return new GetSupportedDMResp(properties);
        };

        /**
         * Encodes the specified GetSupportedDMResp message. Does not implicitly {@link usp.GetSupportedDMResp.verify|verify} messages.
         * @function encode
         * @memberof usp.GetSupportedDMResp
         * @static
         * @param {usp.IGetSupportedDMResp} message GetSupportedDMResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetSupportedDMResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.reqObjResults != null && message.reqObjResults.length)
                for (let i = 0; i < message.reqObjResults.length; ++i)
                    $root.usp.GetSupportedDMResp.RequestedObjectResult.encode(message.reqObjResults[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetSupportedDMResp message, length delimited. Does not implicitly {@link usp.GetSupportedDMResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof usp.GetSupportedDMResp
         * @static
         * @param {usp.IGetSupportedDMResp} message GetSupportedDMResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetSupportedDMResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetSupportedDMResp message from the specified reader or buffer.
         * @function decode
         * @memberof usp.GetSupportedDMResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {usp.GetSupportedDMResp} GetSupportedDMResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetSupportedDMResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.usp.GetSupportedDMResp();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.reqObjResults && message.reqObjResults.length))
                            message.reqObjResults = [];
                        message.reqObjResults.push($root.usp.GetSupportedDMResp.RequestedObjectResult.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetSupportedDMResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof usp.GetSupportedDMResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {usp.GetSupportedDMResp} GetSupportedDMResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetSupportedDMResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetSupportedDMResp message.
         * @function verify
         * @memberof usp.GetSupportedDMResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetSupportedDMResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.reqObjResults != null && message.hasOwnProperty("reqObjResults")) {
                if (!Array.isArray(message.reqObjResults))
                    return "reqObjResults: array expected";
                for (let i = 0; i < message.reqObjResults.length; ++i) {
                    let error = $root.usp.GetSupportedDMResp.RequestedObjectResult.verify(message.reqObjResults[i]);
                    if (error)
                        return "reqObjResults." + error;
                }
            }
            return null;
        };

        /**
         * Creates a GetSupportedDMResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof usp.GetSupportedDMResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {usp.GetSupportedDMResp} GetSupportedDMResp
         */
        GetSupportedDMResp.fromObject = function fromObject(object) {
            if (object instanceof $root.usp.GetSupportedDMResp)
                return object;
            let message = new $root.usp.GetSupportedDMResp();
            if (object.reqObjResults) {
                if (!Array.isArray(object.reqObjResults))
                    throw TypeError(".usp.GetSupportedDMResp.reqObjResults: array expected");
                message.reqObjResults = [];
                for (let i = 0; i < object.reqObjResults.length; ++i) {
                    if (typeof object.reqObjResults[i] !== "object")
                        throw TypeError(".usp.GetSupportedDMResp.reqObjResults: object expected");
                    message.reqObjResults[i] = $root.usp.GetSupportedDMResp.RequestedObjectResult.fromObject(object.reqObjResults[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GetSupportedDMResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof usp.GetSupportedDMResp
         * @static
         * @param {usp.GetSupportedDMResp} message GetSupportedDMResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetSupportedDMResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.reqObjResults = [];
            if (message.reqObjResults && message.reqObjResults.length) {
                object.reqObjResults = [];
                for (let j = 0; j < message.reqObjResults.length; ++j)
                    object.reqObjResults[j] = $root.usp.GetSupportedDMResp.RequestedObjectResult.toObject(message.reqObjResults[j], options);
            }
            return object;
        };

        /**
         * Converts this GetSupportedDMResp to JSON.
         * @function toJSON
         * @memberof usp.GetSupportedDMResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetSupportedDMResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetSupportedDMResp
         * @function getTypeUrl
         * @memberof usp.GetSupportedDMResp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetSupportedDMResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/usp.GetSupportedDMResp";
        };

        GetSupportedDMResp.RequestedObjectResult = (function() {

            /**
             * Properties of a RequestedObjectResult.
             * @memberof usp.GetSupportedDMResp
             * @interface IRequestedObjectResult
             * @property {string|null} [reqObjPath] RequestedObjectResult reqObjPath
             * @property {number|null} [errCode] RequestedObjectResult errCode
             * @property {string|null} [errMsg] RequestedObjectResult errMsg
             * @property {string|null} [dataModelInstUri] RequestedObjectResult dataModelInstUri
             * @property {Array.<usp.GetSupportedDMResp.ISupportedObjectResult>|null} [supportedObjs] RequestedObjectResult supportedObjs
             */

            /**
             * Constructs a new RequestedObjectResult.
             * @memberof usp.GetSupportedDMResp
             * @classdesc Represents a RequestedObjectResult.
             * @implements IRequestedObjectResult
             * @constructor
             * @param {usp.GetSupportedDMResp.IRequestedObjectResult=} [properties] Properties to set
             */
            function RequestedObjectResult(properties) {
                this.supportedObjs = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * RequestedObjectResult reqObjPath.
             * @member {string} reqObjPath
             * @memberof usp.GetSupportedDMResp.RequestedObjectResult
             * @instance
             */
            RequestedObjectResult.prototype.reqObjPath = "";

            /**
             * RequestedObjectResult errCode.
             * @member {number} errCode
             * @memberof usp.GetSupportedDMResp.RequestedObjectResult
             * @instance
             */
            RequestedObjectResult.prototype.errCode = 0;

            /**
             * RequestedObjectResult errMsg.
             * @member {string} errMsg
             * @memberof usp.GetSupportedDMResp.RequestedObjectResult
             * @instance
             */
            RequestedObjectResult.prototype.errMsg = "";

            /**
             * RequestedObjectResult dataModelInstUri.
             * @member {string} dataModelInstUri
             * @memberof usp.GetSupportedDMResp.RequestedObjectResult
             * @instance
             */
            RequestedObjectResult.prototype.dataModelInstUri = "";

            /**
             * RequestedObjectResult supportedObjs.
             * @member {Array.<usp.GetSupportedDMResp.ISupportedObjectResult>} supportedObjs
             * @memberof usp.GetSupportedDMResp.RequestedObjectResult
             * @instance
             */
            RequestedObjectResult.prototype.supportedObjs = $util.emptyArray;

            /**
             * Creates a new RequestedObjectResult instance using the specified properties.
             * @function create
             * @memberof usp.GetSupportedDMResp.RequestedObjectResult
             * @static
             * @param {usp.GetSupportedDMResp.IRequestedObjectResult=} [properties] Properties to set
             * @returns {usp.GetSupportedDMResp.RequestedObjectResult} RequestedObjectResult instance
             */
            RequestedObjectResult.create = function create(properties) {
                return new RequestedObjectResult(properties);
            };

            /**
             * Encodes the specified RequestedObjectResult message. Does not implicitly {@link usp.GetSupportedDMResp.RequestedObjectResult.verify|verify} messages.
             * @function encode
             * @memberof usp.GetSupportedDMResp.RequestedObjectResult
             * @static
             * @param {usp.GetSupportedDMResp.IRequestedObjectResult} message RequestedObjectResult message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RequestedObjectResult.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.reqObjPath != null && Object.hasOwnProperty.call(message, "reqObjPath"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.reqObjPath);
                if (message.errCode != null && Object.hasOwnProperty.call(message, "errCode"))
                    writer.uint32(/* id 2, wireType 5 =*/21).fixed32(message.errCode);
                if (message.errMsg != null && Object.hasOwnProperty.call(message, "errMsg"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.errMsg);
                if (message.dataModelInstUri != null && Object.hasOwnProperty.call(message, "dataModelInstUri"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.dataModelInstUri);
                if (message.supportedObjs != null && message.supportedObjs.length)
                    for (let i = 0; i < message.supportedObjs.length; ++i)
                        $root.usp.GetSupportedDMResp.SupportedObjectResult.encode(message.supportedObjs[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified RequestedObjectResult message, length delimited. Does not implicitly {@link usp.GetSupportedDMResp.RequestedObjectResult.verify|verify} messages.
             * @function encodeDelimited
             * @memberof usp.GetSupportedDMResp.RequestedObjectResult
             * @static
             * @param {usp.GetSupportedDMResp.IRequestedObjectResult} message RequestedObjectResult message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RequestedObjectResult.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a RequestedObjectResult message from the specified reader or buffer.
             * @function decode
             * @memberof usp.GetSupportedDMResp.RequestedObjectResult
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {usp.GetSupportedDMResp.RequestedObjectResult} RequestedObjectResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RequestedObjectResult.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.usp.GetSupportedDMResp.RequestedObjectResult();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.reqObjPath = reader.string();
                            break;
                        }
                    case 2: {
                            message.errCode = reader.fixed32();
                            break;
                        }
                    case 3: {
                            message.errMsg = reader.string();
                            break;
                        }
                    case 4: {
                            message.dataModelInstUri = reader.string();
                            break;
                        }
                    case 5: {
                            if (!(message.supportedObjs && message.supportedObjs.length))
                                message.supportedObjs = [];
                            message.supportedObjs.push($root.usp.GetSupportedDMResp.SupportedObjectResult.decode(reader, reader.uint32()));
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a RequestedObjectResult message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof usp.GetSupportedDMResp.RequestedObjectResult
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {usp.GetSupportedDMResp.RequestedObjectResult} RequestedObjectResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RequestedObjectResult.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a RequestedObjectResult message.
             * @function verify
             * @memberof usp.GetSupportedDMResp.RequestedObjectResult
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RequestedObjectResult.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.reqObjPath != null && message.hasOwnProperty("reqObjPath"))
                    if (!$util.isString(message.reqObjPath))
                        return "reqObjPath: string expected";
                if (message.errCode != null && message.hasOwnProperty("errCode"))
                    if (!$util.isInteger(message.errCode))
                        return "errCode: integer expected";
                if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                    if (!$util.isString(message.errMsg))
                        return "errMsg: string expected";
                if (message.dataModelInstUri != null && message.hasOwnProperty("dataModelInstUri"))
                    if (!$util.isString(message.dataModelInstUri))
                        return "dataModelInstUri: string expected";
                if (message.supportedObjs != null && message.hasOwnProperty("supportedObjs")) {
                    if (!Array.isArray(message.supportedObjs))
                        return "supportedObjs: array expected";
                    for (let i = 0; i < message.supportedObjs.length; ++i) {
                        let error = $root.usp.GetSupportedDMResp.SupportedObjectResult.verify(message.supportedObjs[i]);
                        if (error)
                            return "supportedObjs." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a RequestedObjectResult message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof usp.GetSupportedDMResp.RequestedObjectResult
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {usp.GetSupportedDMResp.RequestedObjectResult} RequestedObjectResult
             */
            RequestedObjectResult.fromObject = function fromObject(object) {
                if (object instanceof $root.usp.GetSupportedDMResp.RequestedObjectResult)
                    return object;
                let message = new $root.usp.GetSupportedDMResp.RequestedObjectResult();
                if (object.reqObjPath != null)
                    message.reqObjPath = String(object.reqObjPath);
                if (object.errCode != null)
                    message.errCode = object.errCode >>> 0;
                if (object.errMsg != null)
                    message.errMsg = String(object.errMsg);
                if (object.dataModelInstUri != null)
                    message.dataModelInstUri = String(object.dataModelInstUri);
                if (object.supportedObjs) {
                    if (!Array.isArray(object.supportedObjs))
                        throw TypeError(".usp.GetSupportedDMResp.RequestedObjectResult.supportedObjs: array expected");
                    message.supportedObjs = [];
                    for (let i = 0; i < object.supportedObjs.length; ++i) {
                        if (typeof object.supportedObjs[i] !== "object")
                            throw TypeError(".usp.GetSupportedDMResp.RequestedObjectResult.supportedObjs: object expected");
                        message.supportedObjs[i] = $root.usp.GetSupportedDMResp.SupportedObjectResult.fromObject(object.supportedObjs[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a RequestedObjectResult message. Also converts values to other types if specified.
             * @function toObject
             * @memberof usp.GetSupportedDMResp.RequestedObjectResult
             * @static
             * @param {usp.GetSupportedDMResp.RequestedObjectResult} message RequestedObjectResult
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RequestedObjectResult.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.supportedObjs = [];
                if (options.defaults) {
                    object.reqObjPath = "";
                    object.errCode = 0;
                    object.errMsg = "";
                    object.dataModelInstUri = "";
                }
                if (message.reqObjPath != null && message.hasOwnProperty("reqObjPath"))
                    object.reqObjPath = message.reqObjPath;
                if (message.errCode != null && message.hasOwnProperty("errCode"))
                    object.errCode = message.errCode;
                if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                    object.errMsg = message.errMsg;
                if (message.dataModelInstUri != null && message.hasOwnProperty("dataModelInstUri"))
                    object.dataModelInstUri = message.dataModelInstUri;
                if (message.supportedObjs && message.supportedObjs.length) {
                    object.supportedObjs = [];
                    for (let j = 0; j < message.supportedObjs.length; ++j)
                        object.supportedObjs[j] = $root.usp.GetSupportedDMResp.SupportedObjectResult.toObject(message.supportedObjs[j], options);
                }
                return object;
            };

            /**
             * Converts this RequestedObjectResult to JSON.
             * @function toJSON
             * @memberof usp.GetSupportedDMResp.RequestedObjectResult
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RequestedObjectResult.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for RequestedObjectResult
             * @function getTypeUrl
             * @memberof usp.GetSupportedDMResp.RequestedObjectResult
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            RequestedObjectResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/usp.GetSupportedDMResp.RequestedObjectResult";
            };

            return RequestedObjectResult;
        })();

        GetSupportedDMResp.SupportedObjectResult = (function() {

            /**
             * Properties of a SupportedObjectResult.
             * @memberof usp.GetSupportedDMResp
             * @interface ISupportedObjectResult
             * @property {string|null} [supportedObjPath] SupportedObjectResult supportedObjPath
             * @property {usp.GetSupportedDMResp.ObjAccessType|null} [access] SupportedObjectResult access
             * @property {boolean|null} [isMultiInstance] SupportedObjectResult isMultiInstance
             * @property {Array.<usp.GetSupportedDMResp.ISupportedCommandResult>|null} [supportedCommands] SupportedObjectResult supportedCommands
             * @property {Array.<usp.GetSupportedDMResp.ISupportedEventResult>|null} [supportedEvents] SupportedObjectResult supportedEvents
             * @property {Array.<usp.GetSupportedDMResp.ISupportedParamResult>|null} [supportedParams] SupportedObjectResult supportedParams
             */

            /**
             * Constructs a new SupportedObjectResult.
             * @memberof usp.GetSupportedDMResp
             * @classdesc Represents a SupportedObjectResult.
             * @implements ISupportedObjectResult
             * @constructor
             * @param {usp.GetSupportedDMResp.ISupportedObjectResult=} [properties] Properties to set
             */
            function SupportedObjectResult(properties) {
                this.supportedCommands = [];
                this.supportedEvents = [];
                this.supportedParams = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SupportedObjectResult supportedObjPath.
             * @member {string} supportedObjPath
             * @memberof usp.GetSupportedDMResp.SupportedObjectResult
             * @instance
             */
            SupportedObjectResult.prototype.supportedObjPath = "";

            /**
             * SupportedObjectResult access.
             * @member {usp.GetSupportedDMResp.ObjAccessType} access
             * @memberof usp.GetSupportedDMResp.SupportedObjectResult
             * @instance
             */
            SupportedObjectResult.prototype.access = 0;

            /**
             * SupportedObjectResult isMultiInstance.
             * @member {boolean} isMultiInstance
             * @memberof usp.GetSupportedDMResp.SupportedObjectResult
             * @instance
             */
            SupportedObjectResult.prototype.isMultiInstance = false;

            /**
             * SupportedObjectResult supportedCommands.
             * @member {Array.<usp.GetSupportedDMResp.ISupportedCommandResult>} supportedCommands
             * @memberof usp.GetSupportedDMResp.SupportedObjectResult
             * @instance
             */
            SupportedObjectResult.prototype.supportedCommands = $util.emptyArray;

            /**
             * SupportedObjectResult supportedEvents.
             * @member {Array.<usp.GetSupportedDMResp.ISupportedEventResult>} supportedEvents
             * @memberof usp.GetSupportedDMResp.SupportedObjectResult
             * @instance
             */
            SupportedObjectResult.prototype.supportedEvents = $util.emptyArray;

            /**
             * SupportedObjectResult supportedParams.
             * @member {Array.<usp.GetSupportedDMResp.ISupportedParamResult>} supportedParams
             * @memberof usp.GetSupportedDMResp.SupportedObjectResult
             * @instance
             */
            SupportedObjectResult.prototype.supportedParams = $util.emptyArray;

            /**
             * Creates a new SupportedObjectResult instance using the specified properties.
             * @function create
             * @memberof usp.GetSupportedDMResp.SupportedObjectResult
             * @static
             * @param {usp.GetSupportedDMResp.ISupportedObjectResult=} [properties] Properties to set
             * @returns {usp.GetSupportedDMResp.SupportedObjectResult} SupportedObjectResult instance
             */
            SupportedObjectResult.create = function create(properties) {
                return new SupportedObjectResult(properties);
            };

            /**
             * Encodes the specified SupportedObjectResult message. Does not implicitly {@link usp.GetSupportedDMResp.SupportedObjectResult.verify|verify} messages.
             * @function encode
             * @memberof usp.GetSupportedDMResp.SupportedObjectResult
             * @static
             * @param {usp.GetSupportedDMResp.ISupportedObjectResult} message SupportedObjectResult message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SupportedObjectResult.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.supportedObjPath != null && Object.hasOwnProperty.call(message, "supportedObjPath"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.supportedObjPath);
                if (message.access != null && Object.hasOwnProperty.call(message, "access"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.access);
                if (message.isMultiInstance != null && Object.hasOwnProperty.call(message, "isMultiInstance"))
                    writer.uint32(/* id 3, wireType 0 =*/24).bool(message.isMultiInstance);
                if (message.supportedCommands != null && message.supportedCommands.length)
                    for (let i = 0; i < message.supportedCommands.length; ++i)
                        $root.usp.GetSupportedDMResp.SupportedCommandResult.encode(message.supportedCommands[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.supportedEvents != null && message.supportedEvents.length)
                    for (let i = 0; i < message.supportedEvents.length; ++i)
                        $root.usp.GetSupportedDMResp.SupportedEventResult.encode(message.supportedEvents[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                if (message.supportedParams != null && message.supportedParams.length)
                    for (let i = 0; i < message.supportedParams.length; ++i)
                        $root.usp.GetSupportedDMResp.SupportedParamResult.encode(message.supportedParams[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified SupportedObjectResult message, length delimited. Does not implicitly {@link usp.GetSupportedDMResp.SupportedObjectResult.verify|verify} messages.
             * @function encodeDelimited
             * @memberof usp.GetSupportedDMResp.SupportedObjectResult
             * @static
             * @param {usp.GetSupportedDMResp.ISupportedObjectResult} message SupportedObjectResult message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SupportedObjectResult.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SupportedObjectResult message from the specified reader or buffer.
             * @function decode
             * @memberof usp.GetSupportedDMResp.SupportedObjectResult
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {usp.GetSupportedDMResp.SupportedObjectResult} SupportedObjectResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SupportedObjectResult.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.usp.GetSupportedDMResp.SupportedObjectResult();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.supportedObjPath = reader.string();
                            break;
                        }
                    case 2: {
                            message.access = reader.int32();
                            break;
                        }
                    case 3: {
                            message.isMultiInstance = reader.bool();
                            break;
                        }
                    case 4: {
                            if (!(message.supportedCommands && message.supportedCommands.length))
                                message.supportedCommands = [];
                            message.supportedCommands.push($root.usp.GetSupportedDMResp.SupportedCommandResult.decode(reader, reader.uint32()));
                            break;
                        }
                    case 5: {
                            if (!(message.supportedEvents && message.supportedEvents.length))
                                message.supportedEvents = [];
                            message.supportedEvents.push($root.usp.GetSupportedDMResp.SupportedEventResult.decode(reader, reader.uint32()));
                            break;
                        }
                    case 6: {
                            if (!(message.supportedParams && message.supportedParams.length))
                                message.supportedParams = [];
                            message.supportedParams.push($root.usp.GetSupportedDMResp.SupportedParamResult.decode(reader, reader.uint32()));
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a SupportedObjectResult message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof usp.GetSupportedDMResp.SupportedObjectResult
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {usp.GetSupportedDMResp.SupportedObjectResult} SupportedObjectResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SupportedObjectResult.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SupportedObjectResult message.
             * @function verify
             * @memberof usp.GetSupportedDMResp.SupportedObjectResult
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SupportedObjectResult.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.supportedObjPath != null && message.hasOwnProperty("supportedObjPath"))
                    if (!$util.isString(message.supportedObjPath))
                        return "supportedObjPath: string expected";
                if (message.access != null && message.hasOwnProperty("access"))
                    switch (message.access) {
                    default:
                        return "access: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                        break;
                    }
                if (message.isMultiInstance != null && message.hasOwnProperty("isMultiInstance"))
                    if (typeof message.isMultiInstance !== "boolean")
                        return "isMultiInstance: boolean expected";
                if (message.supportedCommands != null && message.hasOwnProperty("supportedCommands")) {
                    if (!Array.isArray(message.supportedCommands))
                        return "supportedCommands: array expected";
                    for (let i = 0; i < message.supportedCommands.length; ++i) {
                        let error = $root.usp.GetSupportedDMResp.SupportedCommandResult.verify(message.supportedCommands[i]);
                        if (error)
                            return "supportedCommands." + error;
                    }
                }
                if (message.supportedEvents != null && message.hasOwnProperty("supportedEvents")) {
                    if (!Array.isArray(message.supportedEvents))
                        return "supportedEvents: array expected";
                    for (let i = 0; i < message.supportedEvents.length; ++i) {
                        let error = $root.usp.GetSupportedDMResp.SupportedEventResult.verify(message.supportedEvents[i]);
                        if (error)
                            return "supportedEvents." + error;
                    }
                }
                if (message.supportedParams != null && message.hasOwnProperty("supportedParams")) {
                    if (!Array.isArray(message.supportedParams))
                        return "supportedParams: array expected";
                    for (let i = 0; i < message.supportedParams.length; ++i) {
                        let error = $root.usp.GetSupportedDMResp.SupportedParamResult.verify(message.supportedParams[i]);
                        if (error)
                            return "supportedParams." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a SupportedObjectResult message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof usp.GetSupportedDMResp.SupportedObjectResult
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {usp.GetSupportedDMResp.SupportedObjectResult} SupportedObjectResult
             */
            SupportedObjectResult.fromObject = function fromObject(object) {
                if (object instanceof $root.usp.GetSupportedDMResp.SupportedObjectResult)
                    return object;
                let message = new $root.usp.GetSupportedDMResp.SupportedObjectResult();
                if (object.supportedObjPath != null)
                    message.supportedObjPath = String(object.supportedObjPath);
                switch (object.access) {
                default:
                    if (typeof object.access === "number") {
                        message.access = object.access;
                        break;
                    }
                    break;
                case "OBJ_READ_ONLY":
                case 0:
                    message.access = 0;
                    break;
                case "OBJ_ADD_DELETE":
                case 1:
                    message.access = 1;
                    break;
                case "OBJ_ADD_ONLY":
                case 2:
                    message.access = 2;
                    break;
                case "OBJ_DELETE_ONLY":
                case 3:
                    message.access = 3;
                    break;
                }
                if (object.isMultiInstance != null)
                    message.isMultiInstance = Boolean(object.isMultiInstance);
                if (object.supportedCommands) {
                    if (!Array.isArray(object.supportedCommands))
                        throw TypeError(".usp.GetSupportedDMResp.SupportedObjectResult.supportedCommands: array expected");
                    message.supportedCommands = [];
                    for (let i = 0; i < object.supportedCommands.length; ++i) {
                        if (typeof object.supportedCommands[i] !== "object")
                            throw TypeError(".usp.GetSupportedDMResp.SupportedObjectResult.supportedCommands: object expected");
                        message.supportedCommands[i] = $root.usp.GetSupportedDMResp.SupportedCommandResult.fromObject(object.supportedCommands[i]);
                    }
                }
                if (object.supportedEvents) {
                    if (!Array.isArray(object.supportedEvents))
                        throw TypeError(".usp.GetSupportedDMResp.SupportedObjectResult.supportedEvents: array expected");
                    message.supportedEvents = [];
                    for (let i = 0; i < object.supportedEvents.length; ++i) {
                        if (typeof object.supportedEvents[i] !== "object")
                            throw TypeError(".usp.GetSupportedDMResp.SupportedObjectResult.supportedEvents: object expected");
                        message.supportedEvents[i] = $root.usp.GetSupportedDMResp.SupportedEventResult.fromObject(object.supportedEvents[i]);
                    }
                }
                if (object.supportedParams) {
                    if (!Array.isArray(object.supportedParams))
                        throw TypeError(".usp.GetSupportedDMResp.SupportedObjectResult.supportedParams: array expected");
                    message.supportedParams = [];
                    for (let i = 0; i < object.supportedParams.length; ++i) {
                        if (typeof object.supportedParams[i] !== "object")
                            throw TypeError(".usp.GetSupportedDMResp.SupportedObjectResult.supportedParams: object expected");
                        message.supportedParams[i] = $root.usp.GetSupportedDMResp.SupportedParamResult.fromObject(object.supportedParams[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a SupportedObjectResult message. Also converts values to other types if specified.
             * @function toObject
             * @memberof usp.GetSupportedDMResp.SupportedObjectResult
             * @static
             * @param {usp.GetSupportedDMResp.SupportedObjectResult} message SupportedObjectResult
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SupportedObjectResult.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults) {
                    object.supportedCommands = [];
                    object.supportedEvents = [];
                    object.supportedParams = [];
                }
                if (options.defaults) {
                    object.supportedObjPath = "";
                    object.access = options.enums === String ? "OBJ_READ_ONLY" : 0;
                    object.isMultiInstance = false;
                }
                if (message.supportedObjPath != null && message.hasOwnProperty("supportedObjPath"))
                    object.supportedObjPath = message.supportedObjPath;
                if (message.access != null && message.hasOwnProperty("access"))
                    object.access = options.enums === String ? $root.usp.GetSupportedDMResp.ObjAccessType[message.access] === undefined ? message.access : $root.usp.GetSupportedDMResp.ObjAccessType[message.access] : message.access;
                if (message.isMultiInstance != null && message.hasOwnProperty("isMultiInstance"))
                    object.isMultiInstance = message.isMultiInstance;
                if (message.supportedCommands && message.supportedCommands.length) {
                    object.supportedCommands = [];
                    for (let j = 0; j < message.supportedCommands.length; ++j)
                        object.supportedCommands[j] = $root.usp.GetSupportedDMResp.SupportedCommandResult.toObject(message.supportedCommands[j], options);
                }
                if (message.supportedEvents && message.supportedEvents.length) {
                    object.supportedEvents = [];
                    for (let j = 0; j < message.supportedEvents.length; ++j)
                        object.supportedEvents[j] = $root.usp.GetSupportedDMResp.SupportedEventResult.toObject(message.supportedEvents[j], options);
                }
                if (message.supportedParams && message.supportedParams.length) {
                    object.supportedParams = [];
                    for (let j = 0; j < message.supportedParams.length; ++j)
                        object.supportedParams[j] = $root.usp.GetSupportedDMResp.SupportedParamResult.toObject(message.supportedParams[j], options);
                }
                return object;
            };

            /**
             * Converts this SupportedObjectResult to JSON.
             * @function toJSON
             * @memberof usp.GetSupportedDMResp.SupportedObjectResult
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SupportedObjectResult.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for SupportedObjectResult
             * @function getTypeUrl
             * @memberof usp.GetSupportedDMResp.SupportedObjectResult
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            SupportedObjectResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/usp.GetSupportedDMResp.SupportedObjectResult";
            };

            return SupportedObjectResult;
        })();

        GetSupportedDMResp.SupportedParamResult = (function() {

            /**
             * Properties of a SupportedParamResult.
             * @memberof usp.GetSupportedDMResp
             * @interface ISupportedParamResult
             * @property {string|null} [paramName] SupportedParamResult paramName
             * @property {usp.GetSupportedDMResp.ParamAccessType|null} [access] SupportedParamResult access
             */

            /**
             * Constructs a new SupportedParamResult.
             * @memberof usp.GetSupportedDMResp
             * @classdesc Represents a SupportedParamResult.
             * @implements ISupportedParamResult
             * @constructor
             * @param {usp.GetSupportedDMResp.ISupportedParamResult=} [properties] Properties to set
             */
            function SupportedParamResult(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SupportedParamResult paramName.
             * @member {string} paramName
             * @memberof usp.GetSupportedDMResp.SupportedParamResult
             * @instance
             */
            SupportedParamResult.prototype.paramName = "";

            /**
             * SupportedParamResult access.
             * @member {usp.GetSupportedDMResp.ParamAccessType} access
             * @memberof usp.GetSupportedDMResp.SupportedParamResult
             * @instance
             */
            SupportedParamResult.prototype.access = 0;

            /**
             * Creates a new SupportedParamResult instance using the specified properties.
             * @function create
             * @memberof usp.GetSupportedDMResp.SupportedParamResult
             * @static
             * @param {usp.GetSupportedDMResp.ISupportedParamResult=} [properties] Properties to set
             * @returns {usp.GetSupportedDMResp.SupportedParamResult} SupportedParamResult instance
             */
            SupportedParamResult.create = function create(properties) {
                return new SupportedParamResult(properties);
            };

            /**
             * Encodes the specified SupportedParamResult message. Does not implicitly {@link usp.GetSupportedDMResp.SupportedParamResult.verify|verify} messages.
             * @function encode
             * @memberof usp.GetSupportedDMResp.SupportedParamResult
             * @static
             * @param {usp.GetSupportedDMResp.ISupportedParamResult} message SupportedParamResult message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SupportedParamResult.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.paramName != null && Object.hasOwnProperty.call(message, "paramName"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.paramName);
                if (message.access != null && Object.hasOwnProperty.call(message, "access"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.access);
                return writer;
            };

            /**
             * Encodes the specified SupportedParamResult message, length delimited. Does not implicitly {@link usp.GetSupportedDMResp.SupportedParamResult.verify|verify} messages.
             * @function encodeDelimited
             * @memberof usp.GetSupportedDMResp.SupportedParamResult
             * @static
             * @param {usp.GetSupportedDMResp.ISupportedParamResult} message SupportedParamResult message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SupportedParamResult.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SupportedParamResult message from the specified reader or buffer.
             * @function decode
             * @memberof usp.GetSupportedDMResp.SupportedParamResult
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {usp.GetSupportedDMResp.SupportedParamResult} SupportedParamResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SupportedParamResult.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.usp.GetSupportedDMResp.SupportedParamResult();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.paramName = reader.string();
                            break;
                        }
                    case 2: {
                            message.access = reader.int32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a SupportedParamResult message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof usp.GetSupportedDMResp.SupportedParamResult
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {usp.GetSupportedDMResp.SupportedParamResult} SupportedParamResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SupportedParamResult.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SupportedParamResult message.
             * @function verify
             * @memberof usp.GetSupportedDMResp.SupportedParamResult
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SupportedParamResult.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.paramName != null && message.hasOwnProperty("paramName"))
                    if (!$util.isString(message.paramName))
                        return "paramName: string expected";
                if (message.access != null && message.hasOwnProperty("access"))
                    switch (message.access) {
                    default:
                        return "access: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
                return null;
            };

            /**
             * Creates a SupportedParamResult message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof usp.GetSupportedDMResp.SupportedParamResult
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {usp.GetSupportedDMResp.SupportedParamResult} SupportedParamResult
             */
            SupportedParamResult.fromObject = function fromObject(object) {
                if (object instanceof $root.usp.GetSupportedDMResp.SupportedParamResult)
                    return object;
                let message = new $root.usp.GetSupportedDMResp.SupportedParamResult();
                if (object.paramName != null)
                    message.paramName = String(object.paramName);
                switch (object.access) {
                default:
                    if (typeof object.access === "number") {
                        message.access = object.access;
                        break;
                    }
                    break;
                case "PARAM_READ_ONLY":
                case 0:
                    message.access = 0;
                    break;
                case "PARAM_READ_WRITE":
                case 1:
                    message.access = 1;
                    break;
                case "PARAM_WRITE_ONLY":
                case 2:
                    message.access = 2;
                    break;
                }
                return message;
            };

            /**
             * Creates a plain object from a SupportedParamResult message. Also converts values to other types if specified.
             * @function toObject
             * @memberof usp.GetSupportedDMResp.SupportedParamResult
             * @static
             * @param {usp.GetSupportedDMResp.SupportedParamResult} message SupportedParamResult
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SupportedParamResult.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.paramName = "";
                    object.access = options.enums === String ? "PARAM_READ_ONLY" : 0;
                }
                if (message.paramName != null && message.hasOwnProperty("paramName"))
                    object.paramName = message.paramName;
                if (message.access != null && message.hasOwnProperty("access"))
                    object.access = options.enums === String ? $root.usp.GetSupportedDMResp.ParamAccessType[message.access] === undefined ? message.access : $root.usp.GetSupportedDMResp.ParamAccessType[message.access] : message.access;
                return object;
            };

            /**
             * Converts this SupportedParamResult to JSON.
             * @function toJSON
             * @memberof usp.GetSupportedDMResp.SupportedParamResult
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SupportedParamResult.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for SupportedParamResult
             * @function getTypeUrl
             * @memberof usp.GetSupportedDMResp.SupportedParamResult
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            SupportedParamResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/usp.GetSupportedDMResp.SupportedParamResult";
            };

            return SupportedParamResult;
        })();

        GetSupportedDMResp.SupportedCommandResult = (function() {

            /**
             * Properties of a SupportedCommandResult.
             * @memberof usp.GetSupportedDMResp
             * @interface ISupportedCommandResult
             * @property {string|null} [commandName] SupportedCommandResult commandName
             * @property {Array.<string>|null} [inputArgNames] SupportedCommandResult inputArgNames
             * @property {Array.<string>|null} [outputArgNames] SupportedCommandResult outputArgNames
             */

            /**
             * Constructs a new SupportedCommandResult.
             * @memberof usp.GetSupportedDMResp
             * @classdesc Represents a SupportedCommandResult.
             * @implements ISupportedCommandResult
             * @constructor
             * @param {usp.GetSupportedDMResp.ISupportedCommandResult=} [properties] Properties to set
             */
            function SupportedCommandResult(properties) {
                this.inputArgNames = [];
                this.outputArgNames = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SupportedCommandResult commandName.
             * @member {string} commandName
             * @memberof usp.GetSupportedDMResp.SupportedCommandResult
             * @instance
             */
            SupportedCommandResult.prototype.commandName = "";

            /**
             * SupportedCommandResult inputArgNames.
             * @member {Array.<string>} inputArgNames
             * @memberof usp.GetSupportedDMResp.SupportedCommandResult
             * @instance
             */
            SupportedCommandResult.prototype.inputArgNames = $util.emptyArray;

            /**
             * SupportedCommandResult outputArgNames.
             * @member {Array.<string>} outputArgNames
             * @memberof usp.GetSupportedDMResp.SupportedCommandResult
             * @instance
             */
            SupportedCommandResult.prototype.outputArgNames = $util.emptyArray;

            /**
             * Creates a new SupportedCommandResult instance using the specified properties.
             * @function create
             * @memberof usp.GetSupportedDMResp.SupportedCommandResult
             * @static
             * @param {usp.GetSupportedDMResp.ISupportedCommandResult=} [properties] Properties to set
             * @returns {usp.GetSupportedDMResp.SupportedCommandResult} SupportedCommandResult instance
             */
            SupportedCommandResult.create = function create(properties) {
                return new SupportedCommandResult(properties);
            };

            /**
             * Encodes the specified SupportedCommandResult message. Does not implicitly {@link usp.GetSupportedDMResp.SupportedCommandResult.verify|verify} messages.
             * @function encode
             * @memberof usp.GetSupportedDMResp.SupportedCommandResult
             * @static
             * @param {usp.GetSupportedDMResp.ISupportedCommandResult} message SupportedCommandResult message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SupportedCommandResult.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.commandName != null && Object.hasOwnProperty.call(message, "commandName"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.commandName);
                if (message.inputArgNames != null && message.inputArgNames.length)
                    for (let i = 0; i < message.inputArgNames.length; ++i)
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.inputArgNames[i]);
                if (message.outputArgNames != null && message.outputArgNames.length)
                    for (let i = 0; i < message.outputArgNames.length; ++i)
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.outputArgNames[i]);
                return writer;
            };

            /**
             * Encodes the specified SupportedCommandResult message, length delimited. Does not implicitly {@link usp.GetSupportedDMResp.SupportedCommandResult.verify|verify} messages.
             * @function encodeDelimited
             * @memberof usp.GetSupportedDMResp.SupportedCommandResult
             * @static
             * @param {usp.GetSupportedDMResp.ISupportedCommandResult} message SupportedCommandResult message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SupportedCommandResult.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SupportedCommandResult message from the specified reader or buffer.
             * @function decode
             * @memberof usp.GetSupportedDMResp.SupportedCommandResult
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {usp.GetSupportedDMResp.SupportedCommandResult} SupportedCommandResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SupportedCommandResult.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.usp.GetSupportedDMResp.SupportedCommandResult();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.commandName = reader.string();
                            break;
                        }
                    case 2: {
                            if (!(message.inputArgNames && message.inputArgNames.length))
                                message.inputArgNames = [];
                            message.inputArgNames.push(reader.string());
                            break;
                        }
                    case 3: {
                            if (!(message.outputArgNames && message.outputArgNames.length))
                                message.outputArgNames = [];
                            message.outputArgNames.push(reader.string());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a SupportedCommandResult message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof usp.GetSupportedDMResp.SupportedCommandResult
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {usp.GetSupportedDMResp.SupportedCommandResult} SupportedCommandResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SupportedCommandResult.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SupportedCommandResult message.
             * @function verify
             * @memberof usp.GetSupportedDMResp.SupportedCommandResult
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SupportedCommandResult.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.commandName != null && message.hasOwnProperty("commandName"))
                    if (!$util.isString(message.commandName))
                        return "commandName: string expected";
                if (message.inputArgNames != null && message.hasOwnProperty("inputArgNames")) {
                    if (!Array.isArray(message.inputArgNames))
                        return "inputArgNames: array expected";
                    for (let i = 0; i < message.inputArgNames.length; ++i)
                        if (!$util.isString(message.inputArgNames[i]))
                            return "inputArgNames: string[] expected";
                }
                if (message.outputArgNames != null && message.hasOwnProperty("outputArgNames")) {
                    if (!Array.isArray(message.outputArgNames))
                        return "outputArgNames: array expected";
                    for (let i = 0; i < message.outputArgNames.length; ++i)
                        if (!$util.isString(message.outputArgNames[i]))
                            return "outputArgNames: string[] expected";
                }
                return null;
            };

            /**
             * Creates a SupportedCommandResult message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof usp.GetSupportedDMResp.SupportedCommandResult
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {usp.GetSupportedDMResp.SupportedCommandResult} SupportedCommandResult
             */
            SupportedCommandResult.fromObject = function fromObject(object) {
                if (object instanceof $root.usp.GetSupportedDMResp.SupportedCommandResult)
                    return object;
                let message = new $root.usp.GetSupportedDMResp.SupportedCommandResult();
                if (object.commandName != null)
                    message.commandName = String(object.commandName);
                if (object.inputArgNames) {
                    if (!Array.isArray(object.inputArgNames))
                        throw TypeError(".usp.GetSupportedDMResp.SupportedCommandResult.inputArgNames: array expected");
                    message.inputArgNames = [];
                    for (let i = 0; i < object.inputArgNames.length; ++i)
                        message.inputArgNames[i] = String(object.inputArgNames[i]);
                }
                if (object.outputArgNames) {
                    if (!Array.isArray(object.outputArgNames))
                        throw TypeError(".usp.GetSupportedDMResp.SupportedCommandResult.outputArgNames: array expected");
                    message.outputArgNames = [];
                    for (let i = 0; i < object.outputArgNames.length; ++i)
                        message.outputArgNames[i] = String(object.outputArgNames[i]);
                }
                return message;
            };

            /**
             * Creates a plain object from a SupportedCommandResult message. Also converts values to other types if specified.
             * @function toObject
             * @memberof usp.GetSupportedDMResp.SupportedCommandResult
             * @static
             * @param {usp.GetSupportedDMResp.SupportedCommandResult} message SupportedCommandResult
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SupportedCommandResult.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults) {
                    object.inputArgNames = [];
                    object.outputArgNames = [];
                }
                if (options.defaults)
                    object.commandName = "";
                if (message.commandName != null && message.hasOwnProperty("commandName"))
                    object.commandName = message.commandName;
                if (message.inputArgNames && message.inputArgNames.length) {
                    object.inputArgNames = [];
                    for (let j = 0; j < message.inputArgNames.length; ++j)
                        object.inputArgNames[j] = message.inputArgNames[j];
                }
                if (message.outputArgNames && message.outputArgNames.length) {
                    object.outputArgNames = [];
                    for (let j = 0; j < message.outputArgNames.length; ++j)
                        object.outputArgNames[j] = message.outputArgNames[j];
                }
                return object;
            };

            /**
             * Converts this SupportedCommandResult to JSON.
             * @function toJSON
             * @memberof usp.GetSupportedDMResp.SupportedCommandResult
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SupportedCommandResult.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for SupportedCommandResult
             * @function getTypeUrl
             * @memberof usp.GetSupportedDMResp.SupportedCommandResult
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            SupportedCommandResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/usp.GetSupportedDMResp.SupportedCommandResult";
            };

            return SupportedCommandResult;
        })();

        GetSupportedDMResp.SupportedEventResult = (function() {

            /**
             * Properties of a SupportedEventResult.
             * @memberof usp.GetSupportedDMResp
             * @interface ISupportedEventResult
             * @property {string|null} [eventName] SupportedEventResult eventName
             * @property {Array.<string>|null} [argNames] SupportedEventResult argNames
             */

            /**
             * Constructs a new SupportedEventResult.
             * @memberof usp.GetSupportedDMResp
             * @classdesc Represents a SupportedEventResult.
             * @implements ISupportedEventResult
             * @constructor
             * @param {usp.GetSupportedDMResp.ISupportedEventResult=} [properties] Properties to set
             */
            function SupportedEventResult(properties) {
                this.argNames = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SupportedEventResult eventName.
             * @member {string} eventName
             * @memberof usp.GetSupportedDMResp.SupportedEventResult
             * @instance
             */
            SupportedEventResult.prototype.eventName = "";

            /**
             * SupportedEventResult argNames.
             * @member {Array.<string>} argNames
             * @memberof usp.GetSupportedDMResp.SupportedEventResult
             * @instance
             */
            SupportedEventResult.prototype.argNames = $util.emptyArray;

            /**
             * Creates a new SupportedEventResult instance using the specified properties.
             * @function create
             * @memberof usp.GetSupportedDMResp.SupportedEventResult
             * @static
             * @param {usp.GetSupportedDMResp.ISupportedEventResult=} [properties] Properties to set
             * @returns {usp.GetSupportedDMResp.SupportedEventResult} SupportedEventResult instance
             */
            SupportedEventResult.create = function create(properties) {
                return new SupportedEventResult(properties);
            };

            /**
             * Encodes the specified SupportedEventResult message. Does not implicitly {@link usp.GetSupportedDMResp.SupportedEventResult.verify|verify} messages.
             * @function encode
             * @memberof usp.GetSupportedDMResp.SupportedEventResult
             * @static
             * @param {usp.GetSupportedDMResp.ISupportedEventResult} message SupportedEventResult message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SupportedEventResult.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.eventName != null && Object.hasOwnProperty.call(message, "eventName"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.eventName);
                if (message.argNames != null && message.argNames.length)
                    for (let i = 0; i < message.argNames.length; ++i)
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.argNames[i]);
                return writer;
            };

            /**
             * Encodes the specified SupportedEventResult message, length delimited. Does not implicitly {@link usp.GetSupportedDMResp.SupportedEventResult.verify|verify} messages.
             * @function encodeDelimited
             * @memberof usp.GetSupportedDMResp.SupportedEventResult
             * @static
             * @param {usp.GetSupportedDMResp.ISupportedEventResult} message SupportedEventResult message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SupportedEventResult.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SupportedEventResult message from the specified reader or buffer.
             * @function decode
             * @memberof usp.GetSupportedDMResp.SupportedEventResult
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {usp.GetSupportedDMResp.SupportedEventResult} SupportedEventResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SupportedEventResult.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.usp.GetSupportedDMResp.SupportedEventResult();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.eventName = reader.string();
                            break;
                        }
                    case 2: {
                            if (!(message.argNames && message.argNames.length))
                                message.argNames = [];
                            message.argNames.push(reader.string());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a SupportedEventResult message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof usp.GetSupportedDMResp.SupportedEventResult
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {usp.GetSupportedDMResp.SupportedEventResult} SupportedEventResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SupportedEventResult.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SupportedEventResult message.
             * @function verify
             * @memberof usp.GetSupportedDMResp.SupportedEventResult
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SupportedEventResult.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.eventName != null && message.hasOwnProperty("eventName"))
                    if (!$util.isString(message.eventName))
                        return "eventName: string expected";
                if (message.argNames != null && message.hasOwnProperty("argNames")) {
                    if (!Array.isArray(message.argNames))
                        return "argNames: array expected";
                    for (let i = 0; i < message.argNames.length; ++i)
                        if (!$util.isString(message.argNames[i]))
                            return "argNames: string[] expected";
                }
                return null;
            };

            /**
             * Creates a SupportedEventResult message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof usp.GetSupportedDMResp.SupportedEventResult
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {usp.GetSupportedDMResp.SupportedEventResult} SupportedEventResult
             */
            SupportedEventResult.fromObject = function fromObject(object) {
                if (object instanceof $root.usp.GetSupportedDMResp.SupportedEventResult)
                    return object;
                let message = new $root.usp.GetSupportedDMResp.SupportedEventResult();
                if (object.eventName != null)
                    message.eventName = String(object.eventName);
                if (object.argNames) {
                    if (!Array.isArray(object.argNames))
                        throw TypeError(".usp.GetSupportedDMResp.SupportedEventResult.argNames: array expected");
                    message.argNames = [];
                    for (let i = 0; i < object.argNames.length; ++i)
                        message.argNames[i] = String(object.argNames[i]);
                }
                return message;
            };

            /**
             * Creates a plain object from a SupportedEventResult message. Also converts values to other types if specified.
             * @function toObject
             * @memberof usp.GetSupportedDMResp.SupportedEventResult
             * @static
             * @param {usp.GetSupportedDMResp.SupportedEventResult} message SupportedEventResult
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SupportedEventResult.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.argNames = [];
                if (options.defaults)
                    object.eventName = "";
                if (message.eventName != null && message.hasOwnProperty("eventName"))
                    object.eventName = message.eventName;
                if (message.argNames && message.argNames.length) {
                    object.argNames = [];
                    for (let j = 0; j < message.argNames.length; ++j)
                        object.argNames[j] = message.argNames[j];
                }
                return object;
            };

            /**
             * Converts this SupportedEventResult to JSON.
             * @function toJSON
             * @memberof usp.GetSupportedDMResp.SupportedEventResult
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SupportedEventResult.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for SupportedEventResult
             * @function getTypeUrl
             * @memberof usp.GetSupportedDMResp.SupportedEventResult
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            SupportedEventResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/usp.GetSupportedDMResp.SupportedEventResult";
            };

            return SupportedEventResult;
        })();

        /**
         * ParamAccessType enum.
         * @name usp.GetSupportedDMResp.ParamAccessType
         * @enum {number}
         * @property {number} PARAM_READ_ONLY=0 PARAM_READ_ONLY value
         * @property {number} PARAM_READ_WRITE=1 PARAM_READ_WRITE value
         * @property {number} PARAM_WRITE_ONLY=2 PARAM_WRITE_ONLY value
         */
        GetSupportedDMResp.ParamAccessType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "PARAM_READ_ONLY"] = 0;
            values[valuesById[1] = "PARAM_READ_WRITE"] = 1;
            values[valuesById[2] = "PARAM_WRITE_ONLY"] = 2;
            return values;
        })();

        /**
         * ObjAccessType enum.
         * @name usp.GetSupportedDMResp.ObjAccessType
         * @enum {number}
         * @property {number} OBJ_READ_ONLY=0 OBJ_READ_ONLY value
         * @property {number} OBJ_ADD_DELETE=1 OBJ_ADD_DELETE value
         * @property {number} OBJ_ADD_ONLY=2 OBJ_ADD_ONLY value
         * @property {number} OBJ_DELETE_ONLY=3 OBJ_DELETE_ONLY value
         */
        GetSupportedDMResp.ObjAccessType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "OBJ_READ_ONLY"] = 0;
            values[valuesById[1] = "OBJ_ADD_DELETE"] = 1;
            values[valuesById[2] = "OBJ_ADD_ONLY"] = 2;
            values[valuesById[3] = "OBJ_DELETE_ONLY"] = 3;
            return values;
        })();

        return GetSupportedDMResp;
    })();

    usp.GetInstances = (function() {

        /**
         * Properties of a GetInstances.
         * @memberof usp
         * @interface IGetInstances
         * @property {Array.<string>|null} [objPaths] GetInstances objPaths
         * @property {boolean|null} [firstLevelOnly] GetInstances firstLevelOnly
         */

        /**
         * Constructs a new GetInstances.
         * @memberof usp
         * @classdesc Represents a GetInstances.
         * @implements IGetInstances
         * @constructor
         * @param {usp.IGetInstances=} [properties] Properties to set
         */
        function GetInstances(properties) {
            this.objPaths = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetInstances objPaths.
         * @member {Array.<string>} objPaths
         * @memberof usp.GetInstances
         * @instance
         */
        GetInstances.prototype.objPaths = $util.emptyArray;

        /**
         * GetInstances firstLevelOnly.
         * @member {boolean} firstLevelOnly
         * @memberof usp.GetInstances
         * @instance
         */
        GetInstances.prototype.firstLevelOnly = false;

        /**
         * Creates a new GetInstances instance using the specified properties.
         * @function create
         * @memberof usp.GetInstances
         * @static
         * @param {usp.IGetInstances=} [properties] Properties to set
         * @returns {usp.GetInstances} GetInstances instance
         */
        GetInstances.create = function create(properties) {
            return new GetInstances(properties);
        };

        /**
         * Encodes the specified GetInstances message. Does not implicitly {@link usp.GetInstances.verify|verify} messages.
         * @function encode
         * @memberof usp.GetInstances
         * @static
         * @param {usp.IGetInstances} message GetInstances message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetInstances.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.objPaths != null && message.objPaths.length)
                for (let i = 0; i < message.objPaths.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.objPaths[i]);
            if (message.firstLevelOnly != null && Object.hasOwnProperty.call(message, "firstLevelOnly"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.firstLevelOnly);
            return writer;
        };

        /**
         * Encodes the specified GetInstances message, length delimited. Does not implicitly {@link usp.GetInstances.verify|verify} messages.
         * @function encodeDelimited
         * @memberof usp.GetInstances
         * @static
         * @param {usp.IGetInstances} message GetInstances message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetInstances.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetInstances message from the specified reader or buffer.
         * @function decode
         * @memberof usp.GetInstances
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {usp.GetInstances} GetInstances
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetInstances.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.usp.GetInstances();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.objPaths && message.objPaths.length))
                            message.objPaths = [];
                        message.objPaths.push(reader.string());
                        break;
                    }
                case 2: {
                        message.firstLevelOnly = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetInstances message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof usp.GetInstances
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {usp.GetInstances} GetInstances
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetInstances.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetInstances message.
         * @function verify
         * @memberof usp.GetInstances
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetInstances.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.objPaths != null && message.hasOwnProperty("objPaths")) {
                if (!Array.isArray(message.objPaths))
                    return "objPaths: array expected";
                for (let i = 0; i < message.objPaths.length; ++i)
                    if (!$util.isString(message.objPaths[i]))
                        return "objPaths: string[] expected";
            }
            if (message.firstLevelOnly != null && message.hasOwnProperty("firstLevelOnly"))
                if (typeof message.firstLevelOnly !== "boolean")
                    return "firstLevelOnly: boolean expected";
            return null;
        };

        /**
         * Creates a GetInstances message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof usp.GetInstances
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {usp.GetInstances} GetInstances
         */
        GetInstances.fromObject = function fromObject(object) {
            if (object instanceof $root.usp.GetInstances)
                return object;
            let message = new $root.usp.GetInstances();
            if (object.objPaths) {
                if (!Array.isArray(object.objPaths))
                    throw TypeError(".usp.GetInstances.objPaths: array expected");
                message.objPaths = [];
                for (let i = 0; i < object.objPaths.length; ++i)
                    message.objPaths[i] = String(object.objPaths[i]);
            }
            if (object.firstLevelOnly != null)
                message.firstLevelOnly = Boolean(object.firstLevelOnly);
            return message;
        };

        /**
         * Creates a plain object from a GetInstances message. Also converts values to other types if specified.
         * @function toObject
         * @memberof usp.GetInstances
         * @static
         * @param {usp.GetInstances} message GetInstances
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetInstances.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.objPaths = [];
            if (options.defaults)
                object.firstLevelOnly = false;
            if (message.objPaths && message.objPaths.length) {
                object.objPaths = [];
                for (let j = 0; j < message.objPaths.length; ++j)
                    object.objPaths[j] = message.objPaths[j];
            }
            if (message.firstLevelOnly != null && message.hasOwnProperty("firstLevelOnly"))
                object.firstLevelOnly = message.firstLevelOnly;
            return object;
        };

        /**
         * Converts this GetInstances to JSON.
         * @function toJSON
         * @memberof usp.GetInstances
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetInstances.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetInstances
         * @function getTypeUrl
         * @memberof usp.GetInstances
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetInstances.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/usp.GetInstances";
        };

        return GetInstances;
    })();

    usp.GetInstancesResp = (function() {

        /**
         * Properties of a GetInstancesResp.
         * @memberof usp
         * @interface IGetInstancesResp
         * @property {Array.<usp.GetInstancesResp.IRequestedPathResult>|null} [reqPathResults] GetInstancesResp reqPathResults
         */

        /**
         * Constructs a new GetInstancesResp.
         * @memberof usp
         * @classdesc Represents a GetInstancesResp.
         * @implements IGetInstancesResp
         * @constructor
         * @param {usp.IGetInstancesResp=} [properties] Properties to set
         */
        function GetInstancesResp(properties) {
            this.reqPathResults = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetInstancesResp reqPathResults.
         * @member {Array.<usp.GetInstancesResp.IRequestedPathResult>} reqPathResults
         * @memberof usp.GetInstancesResp
         * @instance
         */
        GetInstancesResp.prototype.reqPathResults = $util.emptyArray;

        /**
         * Creates a new GetInstancesResp instance using the specified properties.
         * @function create
         * @memberof usp.GetInstancesResp
         * @static
         * @param {usp.IGetInstancesResp=} [properties] Properties to set
         * @returns {usp.GetInstancesResp} GetInstancesResp instance
         */
        GetInstancesResp.create = function create(properties) {
            return new GetInstancesResp(properties);
        };

        /**
         * Encodes the specified GetInstancesResp message. Does not implicitly {@link usp.GetInstancesResp.verify|verify} messages.
         * @function encode
         * @memberof usp.GetInstancesResp
         * @static
         * @param {usp.IGetInstancesResp} message GetInstancesResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetInstancesResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.reqPathResults != null && message.reqPathResults.length)
                for (let i = 0; i < message.reqPathResults.length; ++i)
                    $root.usp.GetInstancesResp.RequestedPathResult.encode(message.reqPathResults[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetInstancesResp message, length delimited. Does not implicitly {@link usp.GetInstancesResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof usp.GetInstancesResp
         * @static
         * @param {usp.IGetInstancesResp} message GetInstancesResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetInstancesResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetInstancesResp message from the specified reader or buffer.
         * @function decode
         * @memberof usp.GetInstancesResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {usp.GetInstancesResp} GetInstancesResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetInstancesResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.usp.GetInstancesResp();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.reqPathResults && message.reqPathResults.length))
                            message.reqPathResults = [];
                        message.reqPathResults.push($root.usp.GetInstancesResp.RequestedPathResult.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetInstancesResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof usp.GetInstancesResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {usp.GetInstancesResp} GetInstancesResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetInstancesResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetInstancesResp message.
         * @function verify
         * @memberof usp.GetInstancesResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetInstancesResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.reqPathResults != null && message.hasOwnProperty("reqPathResults")) {
                if (!Array.isArray(message.reqPathResults))
                    return "reqPathResults: array expected";
                for (let i = 0; i < message.reqPathResults.length; ++i) {
                    let error = $root.usp.GetInstancesResp.RequestedPathResult.verify(message.reqPathResults[i]);
                    if (error)
                        return "reqPathResults." + error;
                }
            }
            return null;
        };

        /**
         * Creates a GetInstancesResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof usp.GetInstancesResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {usp.GetInstancesResp} GetInstancesResp
         */
        GetInstancesResp.fromObject = function fromObject(object) {
            if (object instanceof $root.usp.GetInstancesResp)
                return object;
            let message = new $root.usp.GetInstancesResp();
            if (object.reqPathResults) {
                if (!Array.isArray(object.reqPathResults))
                    throw TypeError(".usp.GetInstancesResp.reqPathResults: array expected");
                message.reqPathResults = [];
                for (let i = 0; i < object.reqPathResults.length; ++i) {
                    if (typeof object.reqPathResults[i] !== "object")
                        throw TypeError(".usp.GetInstancesResp.reqPathResults: object expected");
                    message.reqPathResults[i] = $root.usp.GetInstancesResp.RequestedPathResult.fromObject(object.reqPathResults[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GetInstancesResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof usp.GetInstancesResp
         * @static
         * @param {usp.GetInstancesResp} message GetInstancesResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetInstancesResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.reqPathResults = [];
            if (message.reqPathResults && message.reqPathResults.length) {
                object.reqPathResults = [];
                for (let j = 0; j < message.reqPathResults.length; ++j)
                    object.reqPathResults[j] = $root.usp.GetInstancesResp.RequestedPathResult.toObject(message.reqPathResults[j], options);
            }
            return object;
        };

        /**
         * Converts this GetInstancesResp to JSON.
         * @function toJSON
         * @memberof usp.GetInstancesResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetInstancesResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetInstancesResp
         * @function getTypeUrl
         * @memberof usp.GetInstancesResp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetInstancesResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/usp.GetInstancesResp";
        };

        GetInstancesResp.RequestedPathResult = (function() {

            /**
             * Properties of a RequestedPathResult.
             * @memberof usp.GetInstancesResp
             * @interface IRequestedPathResult
             * @property {string|null} [requestedPath] RequestedPathResult requestedPath
             * @property {number|null} [errCode] RequestedPathResult errCode
             * @property {string|null} [errMsg] RequestedPathResult errMsg
             * @property {Array.<usp.GetInstancesResp.ICurrInstance>|null} [currInsts] RequestedPathResult currInsts
             */

            /**
             * Constructs a new RequestedPathResult.
             * @memberof usp.GetInstancesResp
             * @classdesc Represents a RequestedPathResult.
             * @implements IRequestedPathResult
             * @constructor
             * @param {usp.GetInstancesResp.IRequestedPathResult=} [properties] Properties to set
             */
            function RequestedPathResult(properties) {
                this.currInsts = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * RequestedPathResult requestedPath.
             * @member {string} requestedPath
             * @memberof usp.GetInstancesResp.RequestedPathResult
             * @instance
             */
            RequestedPathResult.prototype.requestedPath = "";

            /**
             * RequestedPathResult errCode.
             * @member {number} errCode
             * @memberof usp.GetInstancesResp.RequestedPathResult
             * @instance
             */
            RequestedPathResult.prototype.errCode = 0;

            /**
             * RequestedPathResult errMsg.
             * @member {string} errMsg
             * @memberof usp.GetInstancesResp.RequestedPathResult
             * @instance
             */
            RequestedPathResult.prototype.errMsg = "";

            /**
             * RequestedPathResult currInsts.
             * @member {Array.<usp.GetInstancesResp.ICurrInstance>} currInsts
             * @memberof usp.GetInstancesResp.RequestedPathResult
             * @instance
             */
            RequestedPathResult.prototype.currInsts = $util.emptyArray;

            /**
             * Creates a new RequestedPathResult instance using the specified properties.
             * @function create
             * @memberof usp.GetInstancesResp.RequestedPathResult
             * @static
             * @param {usp.GetInstancesResp.IRequestedPathResult=} [properties] Properties to set
             * @returns {usp.GetInstancesResp.RequestedPathResult} RequestedPathResult instance
             */
            RequestedPathResult.create = function create(properties) {
                return new RequestedPathResult(properties);
            };

            /**
             * Encodes the specified RequestedPathResult message. Does not implicitly {@link usp.GetInstancesResp.RequestedPathResult.verify|verify} messages.
             * @function encode
             * @memberof usp.GetInstancesResp.RequestedPathResult
             * @static
             * @param {usp.GetInstancesResp.IRequestedPathResult} message RequestedPathResult message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RequestedPathResult.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.requestedPath != null && Object.hasOwnProperty.call(message, "requestedPath"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.requestedPath);
                if (message.errCode != null && Object.hasOwnProperty.call(message, "errCode"))
                    writer.uint32(/* id 2, wireType 5 =*/21).fixed32(message.errCode);
                if (message.errMsg != null && Object.hasOwnProperty.call(message, "errMsg"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.errMsg);
                if (message.currInsts != null && message.currInsts.length)
                    for (let i = 0; i < message.currInsts.length; ++i)
                        $root.usp.GetInstancesResp.CurrInstance.encode(message.currInsts[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified RequestedPathResult message, length delimited. Does not implicitly {@link usp.GetInstancesResp.RequestedPathResult.verify|verify} messages.
             * @function encodeDelimited
             * @memberof usp.GetInstancesResp.RequestedPathResult
             * @static
             * @param {usp.GetInstancesResp.IRequestedPathResult} message RequestedPathResult message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RequestedPathResult.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a RequestedPathResult message from the specified reader or buffer.
             * @function decode
             * @memberof usp.GetInstancesResp.RequestedPathResult
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {usp.GetInstancesResp.RequestedPathResult} RequestedPathResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RequestedPathResult.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.usp.GetInstancesResp.RequestedPathResult();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.requestedPath = reader.string();
                            break;
                        }
                    case 2: {
                            message.errCode = reader.fixed32();
                            break;
                        }
                    case 3: {
                            message.errMsg = reader.string();
                            break;
                        }
                    case 4: {
                            if (!(message.currInsts && message.currInsts.length))
                                message.currInsts = [];
                            message.currInsts.push($root.usp.GetInstancesResp.CurrInstance.decode(reader, reader.uint32()));
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a RequestedPathResult message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof usp.GetInstancesResp.RequestedPathResult
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {usp.GetInstancesResp.RequestedPathResult} RequestedPathResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RequestedPathResult.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a RequestedPathResult message.
             * @function verify
             * @memberof usp.GetInstancesResp.RequestedPathResult
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RequestedPathResult.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.requestedPath != null && message.hasOwnProperty("requestedPath"))
                    if (!$util.isString(message.requestedPath))
                        return "requestedPath: string expected";
                if (message.errCode != null && message.hasOwnProperty("errCode"))
                    if (!$util.isInteger(message.errCode))
                        return "errCode: integer expected";
                if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                    if (!$util.isString(message.errMsg))
                        return "errMsg: string expected";
                if (message.currInsts != null && message.hasOwnProperty("currInsts")) {
                    if (!Array.isArray(message.currInsts))
                        return "currInsts: array expected";
                    for (let i = 0; i < message.currInsts.length; ++i) {
                        let error = $root.usp.GetInstancesResp.CurrInstance.verify(message.currInsts[i]);
                        if (error)
                            return "currInsts." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a RequestedPathResult message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof usp.GetInstancesResp.RequestedPathResult
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {usp.GetInstancesResp.RequestedPathResult} RequestedPathResult
             */
            RequestedPathResult.fromObject = function fromObject(object) {
                if (object instanceof $root.usp.GetInstancesResp.RequestedPathResult)
                    return object;
                let message = new $root.usp.GetInstancesResp.RequestedPathResult();
                if (object.requestedPath != null)
                    message.requestedPath = String(object.requestedPath);
                if (object.errCode != null)
                    message.errCode = object.errCode >>> 0;
                if (object.errMsg != null)
                    message.errMsg = String(object.errMsg);
                if (object.currInsts) {
                    if (!Array.isArray(object.currInsts))
                        throw TypeError(".usp.GetInstancesResp.RequestedPathResult.currInsts: array expected");
                    message.currInsts = [];
                    for (let i = 0; i < object.currInsts.length; ++i) {
                        if (typeof object.currInsts[i] !== "object")
                            throw TypeError(".usp.GetInstancesResp.RequestedPathResult.currInsts: object expected");
                        message.currInsts[i] = $root.usp.GetInstancesResp.CurrInstance.fromObject(object.currInsts[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a RequestedPathResult message. Also converts values to other types if specified.
             * @function toObject
             * @memberof usp.GetInstancesResp.RequestedPathResult
             * @static
             * @param {usp.GetInstancesResp.RequestedPathResult} message RequestedPathResult
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RequestedPathResult.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.currInsts = [];
                if (options.defaults) {
                    object.requestedPath = "";
                    object.errCode = 0;
                    object.errMsg = "";
                }
                if (message.requestedPath != null && message.hasOwnProperty("requestedPath"))
                    object.requestedPath = message.requestedPath;
                if (message.errCode != null && message.hasOwnProperty("errCode"))
                    object.errCode = message.errCode;
                if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                    object.errMsg = message.errMsg;
                if (message.currInsts && message.currInsts.length) {
                    object.currInsts = [];
                    for (let j = 0; j < message.currInsts.length; ++j)
                        object.currInsts[j] = $root.usp.GetInstancesResp.CurrInstance.toObject(message.currInsts[j], options);
                }
                return object;
            };

            /**
             * Converts this RequestedPathResult to JSON.
             * @function toJSON
             * @memberof usp.GetInstancesResp.RequestedPathResult
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RequestedPathResult.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for RequestedPathResult
             * @function getTypeUrl
             * @memberof usp.GetInstancesResp.RequestedPathResult
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            RequestedPathResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/usp.GetInstancesResp.RequestedPathResult";
            };

            return RequestedPathResult;
        })();

        GetInstancesResp.CurrInstance = (function() {

            /**
             * Properties of a CurrInstance.
             * @memberof usp.GetInstancesResp
             * @interface ICurrInstance
             * @property {string|null} [instantiatedObjPath] CurrInstance instantiatedObjPath
             * @property {Object.<string,string>|null} [uniqueKeys] CurrInstance uniqueKeys
             */

            /**
             * Constructs a new CurrInstance.
             * @memberof usp.GetInstancesResp
             * @classdesc Represents a CurrInstance.
             * @implements ICurrInstance
             * @constructor
             * @param {usp.GetInstancesResp.ICurrInstance=} [properties] Properties to set
             */
            function CurrInstance(properties) {
                this.uniqueKeys = {};
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * CurrInstance instantiatedObjPath.
             * @member {string} instantiatedObjPath
             * @memberof usp.GetInstancesResp.CurrInstance
             * @instance
             */
            CurrInstance.prototype.instantiatedObjPath = "";

            /**
             * CurrInstance uniqueKeys.
             * @member {Object.<string,string>} uniqueKeys
             * @memberof usp.GetInstancesResp.CurrInstance
             * @instance
             */
            CurrInstance.prototype.uniqueKeys = $util.emptyObject;

            /**
             * Creates a new CurrInstance instance using the specified properties.
             * @function create
             * @memberof usp.GetInstancesResp.CurrInstance
             * @static
             * @param {usp.GetInstancesResp.ICurrInstance=} [properties] Properties to set
             * @returns {usp.GetInstancesResp.CurrInstance} CurrInstance instance
             */
            CurrInstance.create = function create(properties) {
                return new CurrInstance(properties);
            };

            /**
             * Encodes the specified CurrInstance message. Does not implicitly {@link usp.GetInstancesResp.CurrInstance.verify|verify} messages.
             * @function encode
             * @memberof usp.GetInstancesResp.CurrInstance
             * @static
             * @param {usp.GetInstancesResp.ICurrInstance} message CurrInstance message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CurrInstance.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.instantiatedObjPath != null && Object.hasOwnProperty.call(message, "instantiatedObjPath"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.instantiatedObjPath);
                if (message.uniqueKeys != null && Object.hasOwnProperty.call(message, "uniqueKeys"))
                    for (let keys = Object.keys(message.uniqueKeys), i = 0; i < keys.length; ++i)
                        writer.uint32(/* id 2, wireType 2 =*/18).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.uniqueKeys[keys[i]]).ldelim();
                return writer;
            };

            /**
             * Encodes the specified CurrInstance message, length delimited. Does not implicitly {@link usp.GetInstancesResp.CurrInstance.verify|verify} messages.
             * @function encodeDelimited
             * @memberof usp.GetInstancesResp.CurrInstance
             * @static
             * @param {usp.GetInstancesResp.ICurrInstance} message CurrInstance message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CurrInstance.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a CurrInstance message from the specified reader or buffer.
             * @function decode
             * @memberof usp.GetInstancesResp.CurrInstance
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {usp.GetInstancesResp.CurrInstance} CurrInstance
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CurrInstance.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.usp.GetInstancesResp.CurrInstance(), key, value;
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.instantiatedObjPath = reader.string();
                            break;
                        }
                    case 2: {
                            if (message.uniqueKeys === $util.emptyObject)
                                message.uniqueKeys = {};
                            let end2 = reader.uint32() + reader.pos;
                            key = "";
                            value = "";
                            while (reader.pos < end2) {
                                let tag2 = reader.uint32();
                                switch (tag2 >>> 3) {
                                case 1:
                                    key = reader.string();
                                    break;
                                case 2:
                                    value = reader.string();
                                    break;
                                default:
                                    reader.skipType(tag2 & 7);
                                    break;
                                }
                            }
                            message.uniqueKeys[key] = value;
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a CurrInstance message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof usp.GetInstancesResp.CurrInstance
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {usp.GetInstancesResp.CurrInstance} CurrInstance
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CurrInstance.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a CurrInstance message.
             * @function verify
             * @memberof usp.GetInstancesResp.CurrInstance
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CurrInstance.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.instantiatedObjPath != null && message.hasOwnProperty("instantiatedObjPath"))
                    if (!$util.isString(message.instantiatedObjPath))
                        return "instantiatedObjPath: string expected";
                if (message.uniqueKeys != null && message.hasOwnProperty("uniqueKeys")) {
                    if (!$util.isObject(message.uniqueKeys))
                        return "uniqueKeys: object expected";
                    let key = Object.keys(message.uniqueKeys);
                    for (let i = 0; i < key.length; ++i)
                        if (!$util.isString(message.uniqueKeys[key[i]]))
                            return "uniqueKeys: string{k:string} expected";
                }
                return null;
            };

            /**
             * Creates a CurrInstance message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof usp.GetInstancesResp.CurrInstance
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {usp.GetInstancesResp.CurrInstance} CurrInstance
             */
            CurrInstance.fromObject = function fromObject(object) {
                if (object instanceof $root.usp.GetInstancesResp.CurrInstance)
                    return object;
                let message = new $root.usp.GetInstancesResp.CurrInstance();
                if (object.instantiatedObjPath != null)
                    message.instantiatedObjPath = String(object.instantiatedObjPath);
                if (object.uniqueKeys) {
                    if (typeof object.uniqueKeys !== "object")
                        throw TypeError(".usp.GetInstancesResp.CurrInstance.uniqueKeys: object expected");
                    message.uniqueKeys = {};
                    for (let keys = Object.keys(object.uniqueKeys), i = 0; i < keys.length; ++i)
                        message.uniqueKeys[keys[i]] = String(object.uniqueKeys[keys[i]]);
                }
                return message;
            };

            /**
             * Creates a plain object from a CurrInstance message. Also converts values to other types if specified.
             * @function toObject
             * @memberof usp.GetInstancesResp.CurrInstance
             * @static
             * @param {usp.GetInstancesResp.CurrInstance} message CurrInstance
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CurrInstance.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.objects || options.defaults)
                    object.uniqueKeys = {};
                if (options.defaults)
                    object.instantiatedObjPath = "";
                if (message.instantiatedObjPath != null && message.hasOwnProperty("instantiatedObjPath"))
                    object.instantiatedObjPath = message.instantiatedObjPath;
                let keys2;
                if (message.uniqueKeys && (keys2 = Object.keys(message.uniqueKeys)).length) {
                    object.uniqueKeys = {};
                    for (let j = 0; j < keys2.length; ++j)
                        object.uniqueKeys[keys2[j]] = message.uniqueKeys[keys2[j]];
                }
                return object;
            };

            /**
             * Converts this CurrInstance to JSON.
             * @function toJSON
             * @memberof usp.GetInstancesResp.CurrInstance
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CurrInstance.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for CurrInstance
             * @function getTypeUrl
             * @memberof usp.GetInstancesResp.CurrInstance
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            CurrInstance.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/usp.GetInstancesResp.CurrInstance";
            };

            return CurrInstance;
        })();

        return GetInstancesResp;
    })();

    usp.GetSupportedProtocol = (function() {

        /**
         * Properties of a GetSupportedProtocol.
         * @memberof usp
         * @interface IGetSupportedProtocol
         * @property {string|null} [controllerSupportedProtocolVersions] GetSupportedProtocol controllerSupportedProtocolVersions
         */

        /**
         * Constructs a new GetSupportedProtocol.
         * @memberof usp
         * @classdesc Represents a GetSupportedProtocol.
         * @implements IGetSupportedProtocol
         * @constructor
         * @param {usp.IGetSupportedProtocol=} [properties] Properties to set
         */
        function GetSupportedProtocol(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetSupportedProtocol controllerSupportedProtocolVersions.
         * @member {string} controllerSupportedProtocolVersions
         * @memberof usp.GetSupportedProtocol
         * @instance
         */
        GetSupportedProtocol.prototype.controllerSupportedProtocolVersions = "";

        /**
         * Creates a new GetSupportedProtocol instance using the specified properties.
         * @function create
         * @memberof usp.GetSupportedProtocol
         * @static
         * @param {usp.IGetSupportedProtocol=} [properties] Properties to set
         * @returns {usp.GetSupportedProtocol} GetSupportedProtocol instance
         */
        GetSupportedProtocol.create = function create(properties) {
            return new GetSupportedProtocol(properties);
        };

        /**
         * Encodes the specified GetSupportedProtocol message. Does not implicitly {@link usp.GetSupportedProtocol.verify|verify} messages.
         * @function encode
         * @memberof usp.GetSupportedProtocol
         * @static
         * @param {usp.IGetSupportedProtocol} message GetSupportedProtocol message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetSupportedProtocol.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.controllerSupportedProtocolVersions != null && Object.hasOwnProperty.call(message, "controllerSupportedProtocolVersions"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.controllerSupportedProtocolVersions);
            return writer;
        };

        /**
         * Encodes the specified GetSupportedProtocol message, length delimited. Does not implicitly {@link usp.GetSupportedProtocol.verify|verify} messages.
         * @function encodeDelimited
         * @memberof usp.GetSupportedProtocol
         * @static
         * @param {usp.IGetSupportedProtocol} message GetSupportedProtocol message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetSupportedProtocol.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetSupportedProtocol message from the specified reader or buffer.
         * @function decode
         * @memberof usp.GetSupportedProtocol
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {usp.GetSupportedProtocol} GetSupportedProtocol
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetSupportedProtocol.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.usp.GetSupportedProtocol();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.controllerSupportedProtocolVersions = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetSupportedProtocol message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof usp.GetSupportedProtocol
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {usp.GetSupportedProtocol} GetSupportedProtocol
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetSupportedProtocol.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetSupportedProtocol message.
         * @function verify
         * @memberof usp.GetSupportedProtocol
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetSupportedProtocol.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.controllerSupportedProtocolVersions != null && message.hasOwnProperty("controllerSupportedProtocolVersions"))
                if (!$util.isString(message.controllerSupportedProtocolVersions))
                    return "controllerSupportedProtocolVersions: string expected";
            return null;
        };

        /**
         * Creates a GetSupportedProtocol message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof usp.GetSupportedProtocol
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {usp.GetSupportedProtocol} GetSupportedProtocol
         */
        GetSupportedProtocol.fromObject = function fromObject(object) {
            if (object instanceof $root.usp.GetSupportedProtocol)
                return object;
            let message = new $root.usp.GetSupportedProtocol();
            if (object.controllerSupportedProtocolVersions != null)
                message.controllerSupportedProtocolVersions = String(object.controllerSupportedProtocolVersions);
            return message;
        };

        /**
         * Creates a plain object from a GetSupportedProtocol message. Also converts values to other types if specified.
         * @function toObject
         * @memberof usp.GetSupportedProtocol
         * @static
         * @param {usp.GetSupportedProtocol} message GetSupportedProtocol
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetSupportedProtocol.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.controllerSupportedProtocolVersions = "";
            if (message.controllerSupportedProtocolVersions != null && message.hasOwnProperty("controllerSupportedProtocolVersions"))
                object.controllerSupportedProtocolVersions = message.controllerSupportedProtocolVersions;
            return object;
        };

        /**
         * Converts this GetSupportedProtocol to JSON.
         * @function toJSON
         * @memberof usp.GetSupportedProtocol
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetSupportedProtocol.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetSupportedProtocol
         * @function getTypeUrl
         * @memberof usp.GetSupportedProtocol
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetSupportedProtocol.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/usp.GetSupportedProtocol";
        };

        return GetSupportedProtocol;
    })();

    usp.GetSupportedProtocolResp = (function() {

        /**
         * Properties of a GetSupportedProtocolResp.
         * @memberof usp
         * @interface IGetSupportedProtocolResp
         * @property {string|null} [agentSupportedProtocolVersions] GetSupportedProtocolResp agentSupportedProtocolVersions
         */

        /**
         * Constructs a new GetSupportedProtocolResp.
         * @memberof usp
         * @classdesc Represents a GetSupportedProtocolResp.
         * @implements IGetSupportedProtocolResp
         * @constructor
         * @param {usp.IGetSupportedProtocolResp=} [properties] Properties to set
         */
        function GetSupportedProtocolResp(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetSupportedProtocolResp agentSupportedProtocolVersions.
         * @member {string} agentSupportedProtocolVersions
         * @memberof usp.GetSupportedProtocolResp
         * @instance
         */
        GetSupportedProtocolResp.prototype.agentSupportedProtocolVersions = "";

        /**
         * Creates a new GetSupportedProtocolResp instance using the specified properties.
         * @function create
         * @memberof usp.GetSupportedProtocolResp
         * @static
         * @param {usp.IGetSupportedProtocolResp=} [properties] Properties to set
         * @returns {usp.GetSupportedProtocolResp} GetSupportedProtocolResp instance
         */
        GetSupportedProtocolResp.create = function create(properties) {
            return new GetSupportedProtocolResp(properties);
        };

        /**
         * Encodes the specified GetSupportedProtocolResp message. Does not implicitly {@link usp.GetSupportedProtocolResp.verify|verify} messages.
         * @function encode
         * @memberof usp.GetSupportedProtocolResp
         * @static
         * @param {usp.IGetSupportedProtocolResp} message GetSupportedProtocolResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetSupportedProtocolResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.agentSupportedProtocolVersions != null && Object.hasOwnProperty.call(message, "agentSupportedProtocolVersions"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.agentSupportedProtocolVersions);
            return writer;
        };

        /**
         * Encodes the specified GetSupportedProtocolResp message, length delimited. Does not implicitly {@link usp.GetSupportedProtocolResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof usp.GetSupportedProtocolResp
         * @static
         * @param {usp.IGetSupportedProtocolResp} message GetSupportedProtocolResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetSupportedProtocolResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetSupportedProtocolResp message from the specified reader or buffer.
         * @function decode
         * @memberof usp.GetSupportedProtocolResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {usp.GetSupportedProtocolResp} GetSupportedProtocolResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetSupportedProtocolResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.usp.GetSupportedProtocolResp();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.agentSupportedProtocolVersions = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetSupportedProtocolResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof usp.GetSupportedProtocolResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {usp.GetSupportedProtocolResp} GetSupportedProtocolResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetSupportedProtocolResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetSupportedProtocolResp message.
         * @function verify
         * @memberof usp.GetSupportedProtocolResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetSupportedProtocolResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.agentSupportedProtocolVersions != null && message.hasOwnProperty("agentSupportedProtocolVersions"))
                if (!$util.isString(message.agentSupportedProtocolVersions))
                    return "agentSupportedProtocolVersions: string expected";
            return null;
        };

        /**
         * Creates a GetSupportedProtocolResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof usp.GetSupportedProtocolResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {usp.GetSupportedProtocolResp} GetSupportedProtocolResp
         */
        GetSupportedProtocolResp.fromObject = function fromObject(object) {
            if (object instanceof $root.usp.GetSupportedProtocolResp)
                return object;
            let message = new $root.usp.GetSupportedProtocolResp();
            if (object.agentSupportedProtocolVersions != null)
                message.agentSupportedProtocolVersions = String(object.agentSupportedProtocolVersions);
            return message;
        };

        /**
         * Creates a plain object from a GetSupportedProtocolResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof usp.GetSupportedProtocolResp
         * @static
         * @param {usp.GetSupportedProtocolResp} message GetSupportedProtocolResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetSupportedProtocolResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.agentSupportedProtocolVersions = "";
            if (message.agentSupportedProtocolVersions != null && message.hasOwnProperty("agentSupportedProtocolVersions"))
                object.agentSupportedProtocolVersions = message.agentSupportedProtocolVersions;
            return object;
        };

        /**
         * Converts this GetSupportedProtocolResp to JSON.
         * @function toJSON
         * @memberof usp.GetSupportedProtocolResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetSupportedProtocolResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetSupportedProtocolResp
         * @function getTypeUrl
         * @memberof usp.GetSupportedProtocolResp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetSupportedProtocolResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/usp.GetSupportedProtocolResp";
        };

        return GetSupportedProtocolResp;
    })();

    usp.Add = (function() {

        /**
         * Properties of an Add.
         * @memberof usp
         * @interface IAdd
         * @property {boolean|null} [allowPartial] Add allowPartial
         * @property {Array.<usp.Add.ICreateObject>|null} [createObjs] Add createObjs
         */

        /**
         * Constructs a new Add.
         * @memberof usp
         * @classdesc Represents an Add.
         * @implements IAdd
         * @constructor
         * @param {usp.IAdd=} [properties] Properties to set
         */
        function Add(properties) {
            this.createObjs = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Add allowPartial.
         * @member {boolean} allowPartial
         * @memberof usp.Add
         * @instance
         */
        Add.prototype.allowPartial = false;

        /**
         * Add createObjs.
         * @member {Array.<usp.Add.ICreateObject>} createObjs
         * @memberof usp.Add
         * @instance
         */
        Add.prototype.createObjs = $util.emptyArray;

        /**
         * Creates a new Add instance using the specified properties.
         * @function create
         * @memberof usp.Add
         * @static
         * @param {usp.IAdd=} [properties] Properties to set
         * @returns {usp.Add} Add instance
         */
        Add.create = function create(properties) {
            return new Add(properties);
        };

        /**
         * Encodes the specified Add message. Does not implicitly {@link usp.Add.verify|verify} messages.
         * @function encode
         * @memberof usp.Add
         * @static
         * @param {usp.IAdd} message Add message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Add.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.allowPartial != null && Object.hasOwnProperty.call(message, "allowPartial"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.allowPartial);
            if (message.createObjs != null && message.createObjs.length)
                for (let i = 0; i < message.createObjs.length; ++i)
                    $root.usp.Add.CreateObject.encode(message.createObjs[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Add message, length delimited. Does not implicitly {@link usp.Add.verify|verify} messages.
         * @function encodeDelimited
         * @memberof usp.Add
         * @static
         * @param {usp.IAdd} message Add message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Add.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Add message from the specified reader or buffer.
         * @function decode
         * @memberof usp.Add
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {usp.Add} Add
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Add.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.usp.Add();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.allowPartial = reader.bool();
                        break;
                    }
                case 2: {
                        if (!(message.createObjs && message.createObjs.length))
                            message.createObjs = [];
                        message.createObjs.push($root.usp.Add.CreateObject.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Add message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof usp.Add
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {usp.Add} Add
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Add.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Add message.
         * @function verify
         * @memberof usp.Add
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Add.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.allowPartial != null && message.hasOwnProperty("allowPartial"))
                if (typeof message.allowPartial !== "boolean")
                    return "allowPartial: boolean expected";
            if (message.createObjs != null && message.hasOwnProperty("createObjs")) {
                if (!Array.isArray(message.createObjs))
                    return "createObjs: array expected";
                for (let i = 0; i < message.createObjs.length; ++i) {
                    let error = $root.usp.Add.CreateObject.verify(message.createObjs[i]);
                    if (error)
                        return "createObjs." + error;
                }
            }
            return null;
        };

        /**
         * Creates an Add message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof usp.Add
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {usp.Add} Add
         */
        Add.fromObject = function fromObject(object) {
            if (object instanceof $root.usp.Add)
                return object;
            let message = new $root.usp.Add();
            if (object.allowPartial != null)
                message.allowPartial = Boolean(object.allowPartial);
            if (object.createObjs) {
                if (!Array.isArray(object.createObjs))
                    throw TypeError(".usp.Add.createObjs: array expected");
                message.createObjs = [];
                for (let i = 0; i < object.createObjs.length; ++i) {
                    if (typeof object.createObjs[i] !== "object")
                        throw TypeError(".usp.Add.createObjs: object expected");
                    message.createObjs[i] = $root.usp.Add.CreateObject.fromObject(object.createObjs[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an Add message. Also converts values to other types if specified.
         * @function toObject
         * @memberof usp.Add
         * @static
         * @param {usp.Add} message Add
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Add.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.createObjs = [];
            if (options.defaults)
                object.allowPartial = false;
            if (message.allowPartial != null && message.hasOwnProperty("allowPartial"))
                object.allowPartial = message.allowPartial;
            if (message.createObjs && message.createObjs.length) {
                object.createObjs = [];
                for (let j = 0; j < message.createObjs.length; ++j)
                    object.createObjs[j] = $root.usp.Add.CreateObject.toObject(message.createObjs[j], options);
            }
            return object;
        };

        /**
         * Converts this Add to JSON.
         * @function toJSON
         * @memberof usp.Add
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Add.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Add
         * @function getTypeUrl
         * @memberof usp.Add
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Add.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/usp.Add";
        };

        Add.CreateObject = (function() {

            /**
             * Properties of a CreateObject.
             * @memberof usp.Add
             * @interface ICreateObject
             * @property {string|null} [objPath] CreateObject objPath
             * @property {Array.<usp.Add.ICreateParamSetting>|null} [paramSettings] CreateObject paramSettings
             */

            /**
             * Constructs a new CreateObject.
             * @memberof usp.Add
             * @classdesc Represents a CreateObject.
             * @implements ICreateObject
             * @constructor
             * @param {usp.Add.ICreateObject=} [properties] Properties to set
             */
            function CreateObject(properties) {
                this.paramSettings = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * CreateObject objPath.
             * @member {string} objPath
             * @memberof usp.Add.CreateObject
             * @instance
             */
            CreateObject.prototype.objPath = "";

            /**
             * CreateObject paramSettings.
             * @member {Array.<usp.Add.ICreateParamSetting>} paramSettings
             * @memberof usp.Add.CreateObject
             * @instance
             */
            CreateObject.prototype.paramSettings = $util.emptyArray;

            /**
             * Creates a new CreateObject instance using the specified properties.
             * @function create
             * @memberof usp.Add.CreateObject
             * @static
             * @param {usp.Add.ICreateObject=} [properties] Properties to set
             * @returns {usp.Add.CreateObject} CreateObject instance
             */
            CreateObject.create = function create(properties) {
                return new CreateObject(properties);
            };

            /**
             * Encodes the specified CreateObject message. Does not implicitly {@link usp.Add.CreateObject.verify|verify} messages.
             * @function encode
             * @memberof usp.Add.CreateObject
             * @static
             * @param {usp.Add.ICreateObject} message CreateObject message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CreateObject.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.objPath != null && Object.hasOwnProperty.call(message, "objPath"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.objPath);
                if (message.paramSettings != null && message.paramSettings.length)
                    for (let i = 0; i < message.paramSettings.length; ++i)
                        $root.usp.Add.CreateParamSetting.encode(message.paramSettings[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified CreateObject message, length delimited. Does not implicitly {@link usp.Add.CreateObject.verify|verify} messages.
             * @function encodeDelimited
             * @memberof usp.Add.CreateObject
             * @static
             * @param {usp.Add.ICreateObject} message CreateObject message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CreateObject.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a CreateObject message from the specified reader or buffer.
             * @function decode
             * @memberof usp.Add.CreateObject
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {usp.Add.CreateObject} CreateObject
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CreateObject.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.usp.Add.CreateObject();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.objPath = reader.string();
                            break;
                        }
                    case 2: {
                            if (!(message.paramSettings && message.paramSettings.length))
                                message.paramSettings = [];
                            message.paramSettings.push($root.usp.Add.CreateParamSetting.decode(reader, reader.uint32()));
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a CreateObject message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof usp.Add.CreateObject
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {usp.Add.CreateObject} CreateObject
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CreateObject.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a CreateObject message.
             * @function verify
             * @memberof usp.Add.CreateObject
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CreateObject.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.objPath != null && message.hasOwnProperty("objPath"))
                    if (!$util.isString(message.objPath))
                        return "objPath: string expected";
                if (message.paramSettings != null && message.hasOwnProperty("paramSettings")) {
                    if (!Array.isArray(message.paramSettings))
                        return "paramSettings: array expected";
                    for (let i = 0; i < message.paramSettings.length; ++i) {
                        let error = $root.usp.Add.CreateParamSetting.verify(message.paramSettings[i]);
                        if (error)
                            return "paramSettings." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a CreateObject message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof usp.Add.CreateObject
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {usp.Add.CreateObject} CreateObject
             */
            CreateObject.fromObject = function fromObject(object) {
                if (object instanceof $root.usp.Add.CreateObject)
                    return object;
                let message = new $root.usp.Add.CreateObject();
                if (object.objPath != null)
                    message.objPath = String(object.objPath);
                if (object.paramSettings) {
                    if (!Array.isArray(object.paramSettings))
                        throw TypeError(".usp.Add.CreateObject.paramSettings: array expected");
                    message.paramSettings = [];
                    for (let i = 0; i < object.paramSettings.length; ++i) {
                        if (typeof object.paramSettings[i] !== "object")
                            throw TypeError(".usp.Add.CreateObject.paramSettings: object expected");
                        message.paramSettings[i] = $root.usp.Add.CreateParamSetting.fromObject(object.paramSettings[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a CreateObject message. Also converts values to other types if specified.
             * @function toObject
             * @memberof usp.Add.CreateObject
             * @static
             * @param {usp.Add.CreateObject} message CreateObject
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CreateObject.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.paramSettings = [];
                if (options.defaults)
                    object.objPath = "";
                if (message.objPath != null && message.hasOwnProperty("objPath"))
                    object.objPath = message.objPath;
                if (message.paramSettings && message.paramSettings.length) {
                    object.paramSettings = [];
                    for (let j = 0; j < message.paramSettings.length; ++j)
                        object.paramSettings[j] = $root.usp.Add.CreateParamSetting.toObject(message.paramSettings[j], options);
                }
                return object;
            };

            /**
             * Converts this CreateObject to JSON.
             * @function toJSON
             * @memberof usp.Add.CreateObject
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CreateObject.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for CreateObject
             * @function getTypeUrl
             * @memberof usp.Add.CreateObject
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            CreateObject.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/usp.Add.CreateObject";
            };

            return CreateObject;
        })();

        Add.CreateParamSetting = (function() {

            /**
             * Properties of a CreateParamSetting.
             * @memberof usp.Add
             * @interface ICreateParamSetting
             * @property {string|null} [param] CreateParamSetting param
             * @property {string|null} [value] CreateParamSetting value
             * @property {boolean|null} [required] CreateParamSetting required
             */

            /**
             * Constructs a new CreateParamSetting.
             * @memberof usp.Add
             * @classdesc Represents a CreateParamSetting.
             * @implements ICreateParamSetting
             * @constructor
             * @param {usp.Add.ICreateParamSetting=} [properties] Properties to set
             */
            function CreateParamSetting(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * CreateParamSetting param.
             * @member {string} param
             * @memberof usp.Add.CreateParamSetting
             * @instance
             */
            CreateParamSetting.prototype.param = "";

            /**
             * CreateParamSetting value.
             * @member {string} value
             * @memberof usp.Add.CreateParamSetting
             * @instance
             */
            CreateParamSetting.prototype.value = "";

            /**
             * CreateParamSetting required.
             * @member {boolean} required
             * @memberof usp.Add.CreateParamSetting
             * @instance
             */
            CreateParamSetting.prototype.required = false;

            /**
             * Creates a new CreateParamSetting instance using the specified properties.
             * @function create
             * @memberof usp.Add.CreateParamSetting
             * @static
             * @param {usp.Add.ICreateParamSetting=} [properties] Properties to set
             * @returns {usp.Add.CreateParamSetting} CreateParamSetting instance
             */
            CreateParamSetting.create = function create(properties) {
                return new CreateParamSetting(properties);
            };

            /**
             * Encodes the specified CreateParamSetting message. Does not implicitly {@link usp.Add.CreateParamSetting.verify|verify} messages.
             * @function encode
             * @memberof usp.Add.CreateParamSetting
             * @static
             * @param {usp.Add.ICreateParamSetting} message CreateParamSetting message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CreateParamSetting.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.param != null && Object.hasOwnProperty.call(message, "param"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.param);
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.value);
                if (message.required != null && Object.hasOwnProperty.call(message, "required"))
                    writer.uint32(/* id 3, wireType 0 =*/24).bool(message.required);
                return writer;
            };

            /**
             * Encodes the specified CreateParamSetting message, length delimited. Does not implicitly {@link usp.Add.CreateParamSetting.verify|verify} messages.
             * @function encodeDelimited
             * @memberof usp.Add.CreateParamSetting
             * @static
             * @param {usp.Add.ICreateParamSetting} message CreateParamSetting message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CreateParamSetting.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a CreateParamSetting message from the specified reader or buffer.
             * @function decode
             * @memberof usp.Add.CreateParamSetting
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {usp.Add.CreateParamSetting} CreateParamSetting
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CreateParamSetting.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.usp.Add.CreateParamSetting();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.param = reader.string();
                            break;
                        }
                    case 2: {
                            message.value = reader.string();
                            break;
                        }
                    case 3: {
                            message.required = reader.bool();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a CreateParamSetting message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof usp.Add.CreateParamSetting
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {usp.Add.CreateParamSetting} CreateParamSetting
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CreateParamSetting.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a CreateParamSetting message.
             * @function verify
             * @memberof usp.Add.CreateParamSetting
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CreateParamSetting.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.param != null && message.hasOwnProperty("param"))
                    if (!$util.isString(message.param))
                        return "param: string expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!$util.isString(message.value))
                        return "value: string expected";
                if (message.required != null && message.hasOwnProperty("required"))
                    if (typeof message.required !== "boolean")
                        return "required: boolean expected";
                return null;
            };

            /**
             * Creates a CreateParamSetting message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof usp.Add.CreateParamSetting
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {usp.Add.CreateParamSetting} CreateParamSetting
             */
            CreateParamSetting.fromObject = function fromObject(object) {
                if (object instanceof $root.usp.Add.CreateParamSetting)
                    return object;
                let message = new $root.usp.Add.CreateParamSetting();
                if (object.param != null)
                    message.param = String(object.param);
                if (object.value != null)
                    message.value = String(object.value);
                if (object.required != null)
                    message.required = Boolean(object.required);
                return message;
            };

            /**
             * Creates a plain object from a CreateParamSetting message. Also converts values to other types if specified.
             * @function toObject
             * @memberof usp.Add.CreateParamSetting
             * @static
             * @param {usp.Add.CreateParamSetting} message CreateParamSetting
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CreateParamSetting.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.param = "";
                    object.value = "";
                    object.required = false;
                }
                if (message.param != null && message.hasOwnProperty("param"))
                    object.param = message.param;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = message.value;
                if (message.required != null && message.hasOwnProperty("required"))
                    object.required = message.required;
                return object;
            };

            /**
             * Converts this CreateParamSetting to JSON.
             * @function toJSON
             * @memberof usp.Add.CreateParamSetting
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CreateParamSetting.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for CreateParamSetting
             * @function getTypeUrl
             * @memberof usp.Add.CreateParamSetting
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            CreateParamSetting.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/usp.Add.CreateParamSetting";
            };

            return CreateParamSetting;
        })();

        return Add;
    })();

    usp.AddResp = (function() {

        /**
         * Properties of an AddResp.
         * @memberof usp
         * @interface IAddResp
         * @property {Array.<usp.AddResp.ICreatedObjectResult>|null} [createdObjResults] AddResp createdObjResults
         */

        /**
         * Constructs a new AddResp.
         * @memberof usp
         * @classdesc Represents an AddResp.
         * @implements IAddResp
         * @constructor
         * @param {usp.IAddResp=} [properties] Properties to set
         */
        function AddResp(properties) {
            this.createdObjResults = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AddResp createdObjResults.
         * @member {Array.<usp.AddResp.ICreatedObjectResult>} createdObjResults
         * @memberof usp.AddResp
         * @instance
         */
        AddResp.prototype.createdObjResults = $util.emptyArray;

        /**
         * Creates a new AddResp instance using the specified properties.
         * @function create
         * @memberof usp.AddResp
         * @static
         * @param {usp.IAddResp=} [properties] Properties to set
         * @returns {usp.AddResp} AddResp instance
         */
        AddResp.create = function create(properties) {
            return new AddResp(properties);
        };

        /**
         * Encodes the specified AddResp message. Does not implicitly {@link usp.AddResp.verify|verify} messages.
         * @function encode
         * @memberof usp.AddResp
         * @static
         * @param {usp.IAddResp} message AddResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AddResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.createdObjResults != null && message.createdObjResults.length)
                for (let i = 0; i < message.createdObjResults.length; ++i)
                    $root.usp.AddResp.CreatedObjectResult.encode(message.createdObjResults[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified AddResp message, length delimited. Does not implicitly {@link usp.AddResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof usp.AddResp
         * @static
         * @param {usp.IAddResp} message AddResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AddResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AddResp message from the specified reader or buffer.
         * @function decode
         * @memberof usp.AddResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {usp.AddResp} AddResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AddResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.usp.AddResp();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.createdObjResults && message.createdObjResults.length))
                            message.createdObjResults = [];
                        message.createdObjResults.push($root.usp.AddResp.CreatedObjectResult.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AddResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof usp.AddResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {usp.AddResp} AddResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AddResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AddResp message.
         * @function verify
         * @memberof usp.AddResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AddResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.createdObjResults != null && message.hasOwnProperty("createdObjResults")) {
                if (!Array.isArray(message.createdObjResults))
                    return "createdObjResults: array expected";
                for (let i = 0; i < message.createdObjResults.length; ++i) {
                    let error = $root.usp.AddResp.CreatedObjectResult.verify(message.createdObjResults[i]);
                    if (error)
                        return "createdObjResults." + error;
                }
            }
            return null;
        };

        /**
         * Creates an AddResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof usp.AddResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {usp.AddResp} AddResp
         */
        AddResp.fromObject = function fromObject(object) {
            if (object instanceof $root.usp.AddResp)
                return object;
            let message = new $root.usp.AddResp();
            if (object.createdObjResults) {
                if (!Array.isArray(object.createdObjResults))
                    throw TypeError(".usp.AddResp.createdObjResults: array expected");
                message.createdObjResults = [];
                for (let i = 0; i < object.createdObjResults.length; ++i) {
                    if (typeof object.createdObjResults[i] !== "object")
                        throw TypeError(".usp.AddResp.createdObjResults: object expected");
                    message.createdObjResults[i] = $root.usp.AddResp.CreatedObjectResult.fromObject(object.createdObjResults[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an AddResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof usp.AddResp
         * @static
         * @param {usp.AddResp} message AddResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AddResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.createdObjResults = [];
            if (message.createdObjResults && message.createdObjResults.length) {
                object.createdObjResults = [];
                for (let j = 0; j < message.createdObjResults.length; ++j)
                    object.createdObjResults[j] = $root.usp.AddResp.CreatedObjectResult.toObject(message.createdObjResults[j], options);
            }
            return object;
        };

        /**
         * Converts this AddResp to JSON.
         * @function toJSON
         * @memberof usp.AddResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AddResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AddResp
         * @function getTypeUrl
         * @memberof usp.AddResp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AddResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/usp.AddResp";
        };

        AddResp.CreatedObjectResult = (function() {

            /**
             * Properties of a CreatedObjectResult.
             * @memberof usp.AddResp
             * @interface ICreatedObjectResult
             * @property {string|null} [requestedPath] CreatedObjectResult requestedPath
             * @property {usp.AddResp.CreatedObjectResult.IOperationStatus|null} [operStatus] CreatedObjectResult operStatus
             */

            /**
             * Constructs a new CreatedObjectResult.
             * @memberof usp.AddResp
             * @classdesc Represents a CreatedObjectResult.
             * @implements ICreatedObjectResult
             * @constructor
             * @param {usp.AddResp.ICreatedObjectResult=} [properties] Properties to set
             */
            function CreatedObjectResult(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * CreatedObjectResult requestedPath.
             * @member {string} requestedPath
             * @memberof usp.AddResp.CreatedObjectResult
             * @instance
             */
            CreatedObjectResult.prototype.requestedPath = "";

            /**
             * CreatedObjectResult operStatus.
             * @member {usp.AddResp.CreatedObjectResult.IOperationStatus|null|undefined} operStatus
             * @memberof usp.AddResp.CreatedObjectResult
             * @instance
             */
            CreatedObjectResult.prototype.operStatus = null;

            /**
             * Creates a new CreatedObjectResult instance using the specified properties.
             * @function create
             * @memberof usp.AddResp.CreatedObjectResult
             * @static
             * @param {usp.AddResp.ICreatedObjectResult=} [properties] Properties to set
             * @returns {usp.AddResp.CreatedObjectResult} CreatedObjectResult instance
             */
            CreatedObjectResult.create = function create(properties) {
                return new CreatedObjectResult(properties);
            };

            /**
             * Encodes the specified CreatedObjectResult message. Does not implicitly {@link usp.AddResp.CreatedObjectResult.verify|verify} messages.
             * @function encode
             * @memberof usp.AddResp.CreatedObjectResult
             * @static
             * @param {usp.AddResp.ICreatedObjectResult} message CreatedObjectResult message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CreatedObjectResult.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.requestedPath != null && Object.hasOwnProperty.call(message, "requestedPath"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.requestedPath);
                if (message.operStatus != null && Object.hasOwnProperty.call(message, "operStatus"))
                    $root.usp.AddResp.CreatedObjectResult.OperationStatus.encode(message.operStatus, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified CreatedObjectResult message, length delimited. Does not implicitly {@link usp.AddResp.CreatedObjectResult.verify|verify} messages.
             * @function encodeDelimited
             * @memberof usp.AddResp.CreatedObjectResult
             * @static
             * @param {usp.AddResp.ICreatedObjectResult} message CreatedObjectResult message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CreatedObjectResult.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a CreatedObjectResult message from the specified reader or buffer.
             * @function decode
             * @memberof usp.AddResp.CreatedObjectResult
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {usp.AddResp.CreatedObjectResult} CreatedObjectResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CreatedObjectResult.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.usp.AddResp.CreatedObjectResult();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.requestedPath = reader.string();
                            break;
                        }
                    case 2: {
                            message.operStatus = $root.usp.AddResp.CreatedObjectResult.OperationStatus.decode(reader, reader.uint32());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a CreatedObjectResult message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof usp.AddResp.CreatedObjectResult
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {usp.AddResp.CreatedObjectResult} CreatedObjectResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CreatedObjectResult.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a CreatedObjectResult message.
             * @function verify
             * @memberof usp.AddResp.CreatedObjectResult
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CreatedObjectResult.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.requestedPath != null && message.hasOwnProperty("requestedPath"))
                    if (!$util.isString(message.requestedPath))
                        return "requestedPath: string expected";
                if (message.operStatus != null && message.hasOwnProperty("operStatus")) {
                    let error = $root.usp.AddResp.CreatedObjectResult.OperationStatus.verify(message.operStatus);
                    if (error)
                        return "operStatus." + error;
                }
                return null;
            };

            /**
             * Creates a CreatedObjectResult message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof usp.AddResp.CreatedObjectResult
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {usp.AddResp.CreatedObjectResult} CreatedObjectResult
             */
            CreatedObjectResult.fromObject = function fromObject(object) {
                if (object instanceof $root.usp.AddResp.CreatedObjectResult)
                    return object;
                let message = new $root.usp.AddResp.CreatedObjectResult();
                if (object.requestedPath != null)
                    message.requestedPath = String(object.requestedPath);
                if (object.operStatus != null) {
                    if (typeof object.operStatus !== "object")
                        throw TypeError(".usp.AddResp.CreatedObjectResult.operStatus: object expected");
                    message.operStatus = $root.usp.AddResp.CreatedObjectResult.OperationStatus.fromObject(object.operStatus);
                }
                return message;
            };

            /**
             * Creates a plain object from a CreatedObjectResult message. Also converts values to other types if specified.
             * @function toObject
             * @memberof usp.AddResp.CreatedObjectResult
             * @static
             * @param {usp.AddResp.CreatedObjectResult} message CreatedObjectResult
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CreatedObjectResult.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.requestedPath = "";
                    object.operStatus = null;
                }
                if (message.requestedPath != null && message.hasOwnProperty("requestedPath"))
                    object.requestedPath = message.requestedPath;
                if (message.operStatus != null && message.hasOwnProperty("operStatus"))
                    object.operStatus = $root.usp.AddResp.CreatedObjectResult.OperationStatus.toObject(message.operStatus, options);
                return object;
            };

            /**
             * Converts this CreatedObjectResult to JSON.
             * @function toJSON
             * @memberof usp.AddResp.CreatedObjectResult
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CreatedObjectResult.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for CreatedObjectResult
             * @function getTypeUrl
             * @memberof usp.AddResp.CreatedObjectResult
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            CreatedObjectResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/usp.AddResp.CreatedObjectResult";
            };

            CreatedObjectResult.OperationStatus = (function() {

                /**
                 * Properties of an OperationStatus.
                 * @memberof usp.AddResp.CreatedObjectResult
                 * @interface IOperationStatus
                 * @property {usp.AddResp.CreatedObjectResult.OperationStatus.IOperationFailure|null} [operFailure] OperationStatus operFailure
                 * @property {usp.AddResp.CreatedObjectResult.OperationStatus.IOperationSuccess|null} [operSuccess] OperationStatus operSuccess
                 */

                /**
                 * Constructs a new OperationStatus.
                 * @memberof usp.AddResp.CreatedObjectResult
                 * @classdesc Represents an OperationStatus.
                 * @implements IOperationStatus
                 * @constructor
                 * @param {usp.AddResp.CreatedObjectResult.IOperationStatus=} [properties] Properties to set
                 */
                function OperationStatus(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * OperationStatus operFailure.
                 * @member {usp.AddResp.CreatedObjectResult.OperationStatus.IOperationFailure|null|undefined} operFailure
                 * @memberof usp.AddResp.CreatedObjectResult.OperationStatus
                 * @instance
                 */
                OperationStatus.prototype.operFailure = null;

                /**
                 * OperationStatus operSuccess.
                 * @member {usp.AddResp.CreatedObjectResult.OperationStatus.IOperationSuccess|null|undefined} operSuccess
                 * @memberof usp.AddResp.CreatedObjectResult.OperationStatus
                 * @instance
                 */
                OperationStatus.prototype.operSuccess = null;

                // OneOf field names bound to virtual getters and setters
                let $oneOfFields;

                /**
                 * OperationStatus operStatus.
                 * @member {"operFailure"|"operSuccess"|undefined} operStatus
                 * @memberof usp.AddResp.CreatedObjectResult.OperationStatus
                 * @instance
                 */
                Object.defineProperty(OperationStatus.prototype, "operStatus", {
                    get: $util.oneOfGetter($oneOfFields = ["operFailure", "operSuccess"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * Creates a new OperationStatus instance using the specified properties.
                 * @function create
                 * @memberof usp.AddResp.CreatedObjectResult.OperationStatus
                 * @static
                 * @param {usp.AddResp.CreatedObjectResult.IOperationStatus=} [properties] Properties to set
                 * @returns {usp.AddResp.CreatedObjectResult.OperationStatus} OperationStatus instance
                 */
                OperationStatus.create = function create(properties) {
                    return new OperationStatus(properties);
                };

                /**
                 * Encodes the specified OperationStatus message. Does not implicitly {@link usp.AddResp.CreatedObjectResult.OperationStatus.verify|verify} messages.
                 * @function encode
                 * @memberof usp.AddResp.CreatedObjectResult.OperationStatus
                 * @static
                 * @param {usp.AddResp.CreatedObjectResult.IOperationStatus} message OperationStatus message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                OperationStatus.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.operFailure != null && Object.hasOwnProperty.call(message, "operFailure"))
                        $root.usp.AddResp.CreatedObjectResult.OperationStatus.OperationFailure.encode(message.operFailure, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.operSuccess != null && Object.hasOwnProperty.call(message, "operSuccess"))
                        $root.usp.AddResp.CreatedObjectResult.OperationStatus.OperationSuccess.encode(message.operSuccess, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified OperationStatus message, length delimited. Does not implicitly {@link usp.AddResp.CreatedObjectResult.OperationStatus.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof usp.AddResp.CreatedObjectResult.OperationStatus
                 * @static
                 * @param {usp.AddResp.CreatedObjectResult.IOperationStatus} message OperationStatus message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                OperationStatus.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an OperationStatus message from the specified reader or buffer.
                 * @function decode
                 * @memberof usp.AddResp.CreatedObjectResult.OperationStatus
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {usp.AddResp.CreatedObjectResult.OperationStatus} OperationStatus
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                OperationStatus.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.usp.AddResp.CreatedObjectResult.OperationStatus();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.operFailure = $root.usp.AddResp.CreatedObjectResult.OperationStatus.OperationFailure.decode(reader, reader.uint32());
                                break;
                            }
                        case 2: {
                                message.operSuccess = $root.usp.AddResp.CreatedObjectResult.OperationStatus.OperationSuccess.decode(reader, reader.uint32());
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an OperationStatus message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof usp.AddResp.CreatedObjectResult.OperationStatus
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {usp.AddResp.CreatedObjectResult.OperationStatus} OperationStatus
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                OperationStatus.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an OperationStatus message.
                 * @function verify
                 * @memberof usp.AddResp.CreatedObjectResult.OperationStatus
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                OperationStatus.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    let properties = {};
                    if (message.operFailure != null && message.hasOwnProperty("operFailure")) {
                        properties.operStatus = 1;
                        {
                            let error = $root.usp.AddResp.CreatedObjectResult.OperationStatus.OperationFailure.verify(message.operFailure);
                            if (error)
                                return "operFailure." + error;
                        }
                    }
                    if (message.operSuccess != null && message.hasOwnProperty("operSuccess")) {
                        if (properties.operStatus === 1)
                            return "operStatus: multiple values";
                        properties.operStatus = 1;
                        {
                            let error = $root.usp.AddResp.CreatedObjectResult.OperationStatus.OperationSuccess.verify(message.operSuccess);
                            if (error)
                                return "operSuccess." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates an OperationStatus message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof usp.AddResp.CreatedObjectResult.OperationStatus
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {usp.AddResp.CreatedObjectResult.OperationStatus} OperationStatus
                 */
                OperationStatus.fromObject = function fromObject(object) {
                    if (object instanceof $root.usp.AddResp.CreatedObjectResult.OperationStatus)
                        return object;
                    let message = new $root.usp.AddResp.CreatedObjectResult.OperationStatus();
                    if (object.operFailure != null) {
                        if (typeof object.operFailure !== "object")
                            throw TypeError(".usp.AddResp.CreatedObjectResult.OperationStatus.operFailure: object expected");
                        message.operFailure = $root.usp.AddResp.CreatedObjectResult.OperationStatus.OperationFailure.fromObject(object.operFailure);
                    }
                    if (object.operSuccess != null) {
                        if (typeof object.operSuccess !== "object")
                            throw TypeError(".usp.AddResp.CreatedObjectResult.OperationStatus.operSuccess: object expected");
                        message.operSuccess = $root.usp.AddResp.CreatedObjectResult.OperationStatus.OperationSuccess.fromObject(object.operSuccess);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from an OperationStatus message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof usp.AddResp.CreatedObjectResult.OperationStatus
                 * @static
                 * @param {usp.AddResp.CreatedObjectResult.OperationStatus} message OperationStatus
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                OperationStatus.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (message.operFailure != null && message.hasOwnProperty("operFailure")) {
                        object.operFailure = $root.usp.AddResp.CreatedObjectResult.OperationStatus.OperationFailure.toObject(message.operFailure, options);
                        if (options.oneofs)
                            object.operStatus = "operFailure";
                    }
                    if (message.operSuccess != null && message.hasOwnProperty("operSuccess")) {
                        object.operSuccess = $root.usp.AddResp.CreatedObjectResult.OperationStatus.OperationSuccess.toObject(message.operSuccess, options);
                        if (options.oneofs)
                            object.operStatus = "operSuccess";
                    }
                    return object;
                };

                /**
                 * Converts this OperationStatus to JSON.
                 * @function toJSON
                 * @memberof usp.AddResp.CreatedObjectResult.OperationStatus
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                OperationStatus.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for OperationStatus
                 * @function getTypeUrl
                 * @memberof usp.AddResp.CreatedObjectResult.OperationStatus
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                OperationStatus.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/usp.AddResp.CreatedObjectResult.OperationStatus";
                };

                OperationStatus.OperationFailure = (function() {

                    /**
                     * Properties of an OperationFailure.
                     * @memberof usp.AddResp.CreatedObjectResult.OperationStatus
                     * @interface IOperationFailure
                     * @property {number|null} [errCode] OperationFailure errCode
                     * @property {string|null} [errMsg] OperationFailure errMsg
                     */

                    /**
                     * Constructs a new OperationFailure.
                     * @memberof usp.AddResp.CreatedObjectResult.OperationStatus
                     * @classdesc Represents an OperationFailure.
                     * @implements IOperationFailure
                     * @constructor
                     * @param {usp.AddResp.CreatedObjectResult.OperationStatus.IOperationFailure=} [properties] Properties to set
                     */
                    function OperationFailure(properties) {
                        if (properties)
                            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * OperationFailure errCode.
                     * @member {number} errCode
                     * @memberof usp.AddResp.CreatedObjectResult.OperationStatus.OperationFailure
                     * @instance
                     */
                    OperationFailure.prototype.errCode = 0;

                    /**
                     * OperationFailure errMsg.
                     * @member {string} errMsg
                     * @memberof usp.AddResp.CreatedObjectResult.OperationStatus.OperationFailure
                     * @instance
                     */
                    OperationFailure.prototype.errMsg = "";

                    /**
                     * Creates a new OperationFailure instance using the specified properties.
                     * @function create
                     * @memberof usp.AddResp.CreatedObjectResult.OperationStatus.OperationFailure
                     * @static
                     * @param {usp.AddResp.CreatedObjectResult.OperationStatus.IOperationFailure=} [properties] Properties to set
                     * @returns {usp.AddResp.CreatedObjectResult.OperationStatus.OperationFailure} OperationFailure instance
                     */
                    OperationFailure.create = function create(properties) {
                        return new OperationFailure(properties);
                    };

                    /**
                     * Encodes the specified OperationFailure message. Does not implicitly {@link usp.AddResp.CreatedObjectResult.OperationStatus.OperationFailure.verify|verify} messages.
                     * @function encode
                     * @memberof usp.AddResp.CreatedObjectResult.OperationStatus.OperationFailure
                     * @static
                     * @param {usp.AddResp.CreatedObjectResult.OperationStatus.IOperationFailure} message OperationFailure message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    OperationFailure.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.errCode != null && Object.hasOwnProperty.call(message, "errCode"))
                            writer.uint32(/* id 1, wireType 5 =*/13).fixed32(message.errCode);
                        if (message.errMsg != null && Object.hasOwnProperty.call(message, "errMsg"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.errMsg);
                        return writer;
                    };

                    /**
                     * Encodes the specified OperationFailure message, length delimited. Does not implicitly {@link usp.AddResp.CreatedObjectResult.OperationStatus.OperationFailure.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof usp.AddResp.CreatedObjectResult.OperationStatus.OperationFailure
                     * @static
                     * @param {usp.AddResp.CreatedObjectResult.OperationStatus.IOperationFailure} message OperationFailure message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    OperationFailure.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes an OperationFailure message from the specified reader or buffer.
                     * @function decode
                     * @memberof usp.AddResp.CreatedObjectResult.OperationStatus.OperationFailure
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {usp.AddResp.CreatedObjectResult.OperationStatus.OperationFailure} OperationFailure
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    OperationFailure.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.usp.AddResp.CreatedObjectResult.OperationStatus.OperationFailure();
                        while (reader.pos < end) {
                            let tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    message.errCode = reader.fixed32();
                                    break;
                                }
                            case 2: {
                                    message.errMsg = reader.string();
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes an OperationFailure message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof usp.AddResp.CreatedObjectResult.OperationStatus.OperationFailure
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {usp.AddResp.CreatedObjectResult.OperationStatus.OperationFailure} OperationFailure
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    OperationFailure.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies an OperationFailure message.
                     * @function verify
                     * @memberof usp.AddResp.CreatedObjectResult.OperationStatus.OperationFailure
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    OperationFailure.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.errCode != null && message.hasOwnProperty("errCode"))
                            if (!$util.isInteger(message.errCode))
                                return "errCode: integer expected";
                        if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                            if (!$util.isString(message.errMsg))
                                return "errMsg: string expected";
                        return null;
                    };

                    /**
                     * Creates an OperationFailure message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof usp.AddResp.CreatedObjectResult.OperationStatus.OperationFailure
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {usp.AddResp.CreatedObjectResult.OperationStatus.OperationFailure} OperationFailure
                     */
                    OperationFailure.fromObject = function fromObject(object) {
                        if (object instanceof $root.usp.AddResp.CreatedObjectResult.OperationStatus.OperationFailure)
                            return object;
                        let message = new $root.usp.AddResp.CreatedObjectResult.OperationStatus.OperationFailure();
                        if (object.errCode != null)
                            message.errCode = object.errCode >>> 0;
                        if (object.errMsg != null)
                            message.errMsg = String(object.errMsg);
                        return message;
                    };

                    /**
                     * Creates a plain object from an OperationFailure message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof usp.AddResp.CreatedObjectResult.OperationStatus.OperationFailure
                     * @static
                     * @param {usp.AddResp.CreatedObjectResult.OperationStatus.OperationFailure} message OperationFailure
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    OperationFailure.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        let object = {};
                        if (options.defaults) {
                            object.errCode = 0;
                            object.errMsg = "";
                        }
                        if (message.errCode != null && message.hasOwnProperty("errCode"))
                            object.errCode = message.errCode;
                        if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                            object.errMsg = message.errMsg;
                        return object;
                    };

                    /**
                     * Converts this OperationFailure to JSON.
                     * @function toJSON
                     * @memberof usp.AddResp.CreatedObjectResult.OperationStatus.OperationFailure
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    OperationFailure.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for OperationFailure
                     * @function getTypeUrl
                     * @memberof usp.AddResp.CreatedObjectResult.OperationStatus.OperationFailure
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    OperationFailure.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/usp.AddResp.CreatedObjectResult.OperationStatus.OperationFailure";
                    };

                    return OperationFailure;
                })();

                OperationStatus.OperationSuccess = (function() {

                    /**
                     * Properties of an OperationSuccess.
                     * @memberof usp.AddResp.CreatedObjectResult.OperationStatus
                     * @interface IOperationSuccess
                     * @property {string|null} [instantiatedPath] OperationSuccess instantiatedPath
                     * @property {Array.<usp.AddResp.IParameterError>|null} [paramErrs] OperationSuccess paramErrs
                     * @property {Object.<string,string>|null} [uniqueKeys] OperationSuccess uniqueKeys
                     */

                    /**
                     * Constructs a new OperationSuccess.
                     * @memberof usp.AddResp.CreatedObjectResult.OperationStatus
                     * @classdesc Represents an OperationSuccess.
                     * @implements IOperationSuccess
                     * @constructor
                     * @param {usp.AddResp.CreatedObjectResult.OperationStatus.IOperationSuccess=} [properties] Properties to set
                     */
                    function OperationSuccess(properties) {
                        this.paramErrs = [];
                        this.uniqueKeys = {};
                        if (properties)
                            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * OperationSuccess instantiatedPath.
                     * @member {string} instantiatedPath
                     * @memberof usp.AddResp.CreatedObjectResult.OperationStatus.OperationSuccess
                     * @instance
                     */
                    OperationSuccess.prototype.instantiatedPath = "";

                    /**
                     * OperationSuccess paramErrs.
                     * @member {Array.<usp.AddResp.IParameterError>} paramErrs
                     * @memberof usp.AddResp.CreatedObjectResult.OperationStatus.OperationSuccess
                     * @instance
                     */
                    OperationSuccess.prototype.paramErrs = $util.emptyArray;

                    /**
                     * OperationSuccess uniqueKeys.
                     * @member {Object.<string,string>} uniqueKeys
                     * @memberof usp.AddResp.CreatedObjectResult.OperationStatus.OperationSuccess
                     * @instance
                     */
                    OperationSuccess.prototype.uniqueKeys = $util.emptyObject;

                    /**
                     * Creates a new OperationSuccess instance using the specified properties.
                     * @function create
                     * @memberof usp.AddResp.CreatedObjectResult.OperationStatus.OperationSuccess
                     * @static
                     * @param {usp.AddResp.CreatedObjectResult.OperationStatus.IOperationSuccess=} [properties] Properties to set
                     * @returns {usp.AddResp.CreatedObjectResult.OperationStatus.OperationSuccess} OperationSuccess instance
                     */
                    OperationSuccess.create = function create(properties) {
                        return new OperationSuccess(properties);
                    };

                    /**
                     * Encodes the specified OperationSuccess message. Does not implicitly {@link usp.AddResp.CreatedObjectResult.OperationStatus.OperationSuccess.verify|verify} messages.
                     * @function encode
                     * @memberof usp.AddResp.CreatedObjectResult.OperationStatus.OperationSuccess
                     * @static
                     * @param {usp.AddResp.CreatedObjectResult.OperationStatus.IOperationSuccess} message OperationSuccess message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    OperationSuccess.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.instantiatedPath != null && Object.hasOwnProperty.call(message, "instantiatedPath"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.instantiatedPath);
                        if (message.paramErrs != null && message.paramErrs.length)
                            for (let i = 0; i < message.paramErrs.length; ++i)
                                $root.usp.AddResp.ParameterError.encode(message.paramErrs[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                        if (message.uniqueKeys != null && Object.hasOwnProperty.call(message, "uniqueKeys"))
                            for (let keys = Object.keys(message.uniqueKeys), i = 0; i < keys.length; ++i)
                                writer.uint32(/* id 3, wireType 2 =*/26).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.uniqueKeys[keys[i]]).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified OperationSuccess message, length delimited. Does not implicitly {@link usp.AddResp.CreatedObjectResult.OperationStatus.OperationSuccess.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof usp.AddResp.CreatedObjectResult.OperationStatus.OperationSuccess
                     * @static
                     * @param {usp.AddResp.CreatedObjectResult.OperationStatus.IOperationSuccess} message OperationSuccess message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    OperationSuccess.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes an OperationSuccess message from the specified reader or buffer.
                     * @function decode
                     * @memberof usp.AddResp.CreatedObjectResult.OperationStatus.OperationSuccess
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {usp.AddResp.CreatedObjectResult.OperationStatus.OperationSuccess} OperationSuccess
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    OperationSuccess.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.usp.AddResp.CreatedObjectResult.OperationStatus.OperationSuccess(), key, value;
                        while (reader.pos < end) {
                            let tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    message.instantiatedPath = reader.string();
                                    break;
                                }
                            case 2: {
                                    if (!(message.paramErrs && message.paramErrs.length))
                                        message.paramErrs = [];
                                    message.paramErrs.push($root.usp.AddResp.ParameterError.decode(reader, reader.uint32()));
                                    break;
                                }
                            case 3: {
                                    if (message.uniqueKeys === $util.emptyObject)
                                        message.uniqueKeys = {};
                                    let end2 = reader.uint32() + reader.pos;
                                    key = "";
                                    value = "";
                                    while (reader.pos < end2) {
                                        let tag2 = reader.uint32();
                                        switch (tag2 >>> 3) {
                                        case 1:
                                            key = reader.string();
                                            break;
                                        case 2:
                                            value = reader.string();
                                            break;
                                        default:
                                            reader.skipType(tag2 & 7);
                                            break;
                                        }
                                    }
                                    message.uniqueKeys[key] = value;
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes an OperationSuccess message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof usp.AddResp.CreatedObjectResult.OperationStatus.OperationSuccess
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {usp.AddResp.CreatedObjectResult.OperationStatus.OperationSuccess} OperationSuccess
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    OperationSuccess.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies an OperationSuccess message.
                     * @function verify
                     * @memberof usp.AddResp.CreatedObjectResult.OperationStatus.OperationSuccess
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    OperationSuccess.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.instantiatedPath != null && message.hasOwnProperty("instantiatedPath"))
                            if (!$util.isString(message.instantiatedPath))
                                return "instantiatedPath: string expected";
                        if (message.paramErrs != null && message.hasOwnProperty("paramErrs")) {
                            if (!Array.isArray(message.paramErrs))
                                return "paramErrs: array expected";
                            for (let i = 0; i < message.paramErrs.length; ++i) {
                                let error = $root.usp.AddResp.ParameterError.verify(message.paramErrs[i]);
                                if (error)
                                    return "paramErrs." + error;
                            }
                        }
                        if (message.uniqueKeys != null && message.hasOwnProperty("uniqueKeys")) {
                            if (!$util.isObject(message.uniqueKeys))
                                return "uniqueKeys: object expected";
                            let key = Object.keys(message.uniqueKeys);
                            for (let i = 0; i < key.length; ++i)
                                if (!$util.isString(message.uniqueKeys[key[i]]))
                                    return "uniqueKeys: string{k:string} expected";
                        }
                        return null;
                    };

                    /**
                     * Creates an OperationSuccess message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof usp.AddResp.CreatedObjectResult.OperationStatus.OperationSuccess
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {usp.AddResp.CreatedObjectResult.OperationStatus.OperationSuccess} OperationSuccess
                     */
                    OperationSuccess.fromObject = function fromObject(object) {
                        if (object instanceof $root.usp.AddResp.CreatedObjectResult.OperationStatus.OperationSuccess)
                            return object;
                        let message = new $root.usp.AddResp.CreatedObjectResult.OperationStatus.OperationSuccess();
                        if (object.instantiatedPath != null)
                            message.instantiatedPath = String(object.instantiatedPath);
                        if (object.paramErrs) {
                            if (!Array.isArray(object.paramErrs))
                                throw TypeError(".usp.AddResp.CreatedObjectResult.OperationStatus.OperationSuccess.paramErrs: array expected");
                            message.paramErrs = [];
                            for (let i = 0; i < object.paramErrs.length; ++i) {
                                if (typeof object.paramErrs[i] !== "object")
                                    throw TypeError(".usp.AddResp.CreatedObjectResult.OperationStatus.OperationSuccess.paramErrs: object expected");
                                message.paramErrs[i] = $root.usp.AddResp.ParameterError.fromObject(object.paramErrs[i]);
                            }
                        }
                        if (object.uniqueKeys) {
                            if (typeof object.uniqueKeys !== "object")
                                throw TypeError(".usp.AddResp.CreatedObjectResult.OperationStatus.OperationSuccess.uniqueKeys: object expected");
                            message.uniqueKeys = {};
                            for (let keys = Object.keys(object.uniqueKeys), i = 0; i < keys.length; ++i)
                                message.uniqueKeys[keys[i]] = String(object.uniqueKeys[keys[i]]);
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from an OperationSuccess message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof usp.AddResp.CreatedObjectResult.OperationStatus.OperationSuccess
                     * @static
                     * @param {usp.AddResp.CreatedObjectResult.OperationStatus.OperationSuccess} message OperationSuccess
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    OperationSuccess.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        let object = {};
                        if (options.arrays || options.defaults)
                            object.paramErrs = [];
                        if (options.objects || options.defaults)
                            object.uniqueKeys = {};
                        if (options.defaults)
                            object.instantiatedPath = "";
                        if (message.instantiatedPath != null && message.hasOwnProperty("instantiatedPath"))
                            object.instantiatedPath = message.instantiatedPath;
                        if (message.paramErrs && message.paramErrs.length) {
                            object.paramErrs = [];
                            for (let j = 0; j < message.paramErrs.length; ++j)
                                object.paramErrs[j] = $root.usp.AddResp.ParameterError.toObject(message.paramErrs[j], options);
                        }
                        let keys2;
                        if (message.uniqueKeys && (keys2 = Object.keys(message.uniqueKeys)).length) {
                            object.uniqueKeys = {};
                            for (let j = 0; j < keys2.length; ++j)
                                object.uniqueKeys[keys2[j]] = message.uniqueKeys[keys2[j]];
                        }
                        return object;
                    };

                    /**
                     * Converts this OperationSuccess to JSON.
                     * @function toJSON
                     * @memberof usp.AddResp.CreatedObjectResult.OperationStatus.OperationSuccess
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    OperationSuccess.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for OperationSuccess
                     * @function getTypeUrl
                     * @memberof usp.AddResp.CreatedObjectResult.OperationStatus.OperationSuccess
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    OperationSuccess.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/usp.AddResp.CreatedObjectResult.OperationStatus.OperationSuccess";
                    };

                    return OperationSuccess;
                })();

                return OperationStatus;
            })();

            return CreatedObjectResult;
        })();

        AddResp.ParameterError = (function() {

            /**
             * Properties of a ParameterError.
             * @memberof usp.AddResp
             * @interface IParameterError
             * @property {string|null} [param] ParameterError param
             * @property {number|null} [errCode] ParameterError errCode
             * @property {string|null} [errMsg] ParameterError errMsg
             */

            /**
             * Constructs a new ParameterError.
             * @memberof usp.AddResp
             * @classdesc Represents a ParameterError.
             * @implements IParameterError
             * @constructor
             * @param {usp.AddResp.IParameterError=} [properties] Properties to set
             */
            function ParameterError(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ParameterError param.
             * @member {string} param
             * @memberof usp.AddResp.ParameterError
             * @instance
             */
            ParameterError.prototype.param = "";

            /**
             * ParameterError errCode.
             * @member {number} errCode
             * @memberof usp.AddResp.ParameterError
             * @instance
             */
            ParameterError.prototype.errCode = 0;

            /**
             * ParameterError errMsg.
             * @member {string} errMsg
             * @memberof usp.AddResp.ParameterError
             * @instance
             */
            ParameterError.prototype.errMsg = "";

            /**
             * Creates a new ParameterError instance using the specified properties.
             * @function create
             * @memberof usp.AddResp.ParameterError
             * @static
             * @param {usp.AddResp.IParameterError=} [properties] Properties to set
             * @returns {usp.AddResp.ParameterError} ParameterError instance
             */
            ParameterError.create = function create(properties) {
                return new ParameterError(properties);
            };

            /**
             * Encodes the specified ParameterError message. Does not implicitly {@link usp.AddResp.ParameterError.verify|verify} messages.
             * @function encode
             * @memberof usp.AddResp.ParameterError
             * @static
             * @param {usp.AddResp.IParameterError} message ParameterError message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ParameterError.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.param != null && Object.hasOwnProperty.call(message, "param"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.param);
                if (message.errCode != null && Object.hasOwnProperty.call(message, "errCode"))
                    writer.uint32(/* id 2, wireType 5 =*/21).fixed32(message.errCode);
                if (message.errMsg != null && Object.hasOwnProperty.call(message, "errMsg"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.errMsg);
                return writer;
            };

            /**
             * Encodes the specified ParameterError message, length delimited. Does not implicitly {@link usp.AddResp.ParameterError.verify|verify} messages.
             * @function encodeDelimited
             * @memberof usp.AddResp.ParameterError
             * @static
             * @param {usp.AddResp.IParameterError} message ParameterError message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ParameterError.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ParameterError message from the specified reader or buffer.
             * @function decode
             * @memberof usp.AddResp.ParameterError
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {usp.AddResp.ParameterError} ParameterError
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ParameterError.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.usp.AddResp.ParameterError();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.param = reader.string();
                            break;
                        }
                    case 2: {
                            message.errCode = reader.fixed32();
                            break;
                        }
                    case 3: {
                            message.errMsg = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ParameterError message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof usp.AddResp.ParameterError
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {usp.AddResp.ParameterError} ParameterError
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ParameterError.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ParameterError message.
             * @function verify
             * @memberof usp.AddResp.ParameterError
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ParameterError.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.param != null && message.hasOwnProperty("param"))
                    if (!$util.isString(message.param))
                        return "param: string expected";
                if (message.errCode != null && message.hasOwnProperty("errCode"))
                    if (!$util.isInteger(message.errCode))
                        return "errCode: integer expected";
                if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                    if (!$util.isString(message.errMsg))
                        return "errMsg: string expected";
                return null;
            };

            /**
             * Creates a ParameterError message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof usp.AddResp.ParameterError
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {usp.AddResp.ParameterError} ParameterError
             */
            ParameterError.fromObject = function fromObject(object) {
                if (object instanceof $root.usp.AddResp.ParameterError)
                    return object;
                let message = new $root.usp.AddResp.ParameterError();
                if (object.param != null)
                    message.param = String(object.param);
                if (object.errCode != null)
                    message.errCode = object.errCode >>> 0;
                if (object.errMsg != null)
                    message.errMsg = String(object.errMsg);
                return message;
            };

            /**
             * Creates a plain object from a ParameterError message. Also converts values to other types if specified.
             * @function toObject
             * @memberof usp.AddResp.ParameterError
             * @static
             * @param {usp.AddResp.ParameterError} message ParameterError
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ParameterError.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.param = "";
                    object.errCode = 0;
                    object.errMsg = "";
                }
                if (message.param != null && message.hasOwnProperty("param"))
                    object.param = message.param;
                if (message.errCode != null && message.hasOwnProperty("errCode"))
                    object.errCode = message.errCode;
                if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                    object.errMsg = message.errMsg;
                return object;
            };

            /**
             * Converts this ParameterError to JSON.
             * @function toJSON
             * @memberof usp.AddResp.ParameterError
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ParameterError.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ParameterError
             * @function getTypeUrl
             * @memberof usp.AddResp.ParameterError
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ParameterError.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/usp.AddResp.ParameterError";
            };

            return ParameterError;
        })();

        return AddResp;
    })();

    usp.Delete = (function() {

        /**
         * Properties of a Delete.
         * @memberof usp
         * @interface IDelete
         * @property {boolean|null} [allowPartial] Delete allowPartial
         * @property {Array.<string>|null} [objPaths] Delete objPaths
         */

        /**
         * Constructs a new Delete.
         * @memberof usp
         * @classdesc Represents a Delete.
         * @implements IDelete
         * @constructor
         * @param {usp.IDelete=} [properties] Properties to set
         */
        function Delete(properties) {
            this.objPaths = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Delete allowPartial.
         * @member {boolean} allowPartial
         * @memberof usp.Delete
         * @instance
         */
        Delete.prototype.allowPartial = false;

        /**
         * Delete objPaths.
         * @member {Array.<string>} objPaths
         * @memberof usp.Delete
         * @instance
         */
        Delete.prototype.objPaths = $util.emptyArray;

        /**
         * Creates a new Delete instance using the specified properties.
         * @function create
         * @memberof usp.Delete
         * @static
         * @param {usp.IDelete=} [properties] Properties to set
         * @returns {usp.Delete} Delete instance
         */
        Delete.create = function create(properties) {
            return new Delete(properties);
        };

        /**
         * Encodes the specified Delete message. Does not implicitly {@link usp.Delete.verify|verify} messages.
         * @function encode
         * @memberof usp.Delete
         * @static
         * @param {usp.IDelete} message Delete message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Delete.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.allowPartial != null && Object.hasOwnProperty.call(message, "allowPartial"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.allowPartial);
            if (message.objPaths != null && message.objPaths.length)
                for (let i = 0; i < message.objPaths.length; ++i)
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.objPaths[i]);
            return writer;
        };

        /**
         * Encodes the specified Delete message, length delimited. Does not implicitly {@link usp.Delete.verify|verify} messages.
         * @function encodeDelimited
         * @memberof usp.Delete
         * @static
         * @param {usp.IDelete} message Delete message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Delete.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Delete message from the specified reader or buffer.
         * @function decode
         * @memberof usp.Delete
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {usp.Delete} Delete
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Delete.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.usp.Delete();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.allowPartial = reader.bool();
                        break;
                    }
                case 2: {
                        if (!(message.objPaths && message.objPaths.length))
                            message.objPaths = [];
                        message.objPaths.push(reader.string());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Delete message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof usp.Delete
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {usp.Delete} Delete
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Delete.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Delete message.
         * @function verify
         * @memberof usp.Delete
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Delete.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.allowPartial != null && message.hasOwnProperty("allowPartial"))
                if (typeof message.allowPartial !== "boolean")
                    return "allowPartial: boolean expected";
            if (message.objPaths != null && message.hasOwnProperty("objPaths")) {
                if (!Array.isArray(message.objPaths))
                    return "objPaths: array expected";
                for (let i = 0; i < message.objPaths.length; ++i)
                    if (!$util.isString(message.objPaths[i]))
                        return "objPaths: string[] expected";
            }
            return null;
        };

        /**
         * Creates a Delete message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof usp.Delete
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {usp.Delete} Delete
         */
        Delete.fromObject = function fromObject(object) {
            if (object instanceof $root.usp.Delete)
                return object;
            let message = new $root.usp.Delete();
            if (object.allowPartial != null)
                message.allowPartial = Boolean(object.allowPartial);
            if (object.objPaths) {
                if (!Array.isArray(object.objPaths))
                    throw TypeError(".usp.Delete.objPaths: array expected");
                message.objPaths = [];
                for (let i = 0; i < object.objPaths.length; ++i)
                    message.objPaths[i] = String(object.objPaths[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a Delete message. Also converts values to other types if specified.
         * @function toObject
         * @memberof usp.Delete
         * @static
         * @param {usp.Delete} message Delete
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Delete.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.objPaths = [];
            if (options.defaults)
                object.allowPartial = false;
            if (message.allowPartial != null && message.hasOwnProperty("allowPartial"))
                object.allowPartial = message.allowPartial;
            if (message.objPaths && message.objPaths.length) {
                object.objPaths = [];
                for (let j = 0; j < message.objPaths.length; ++j)
                    object.objPaths[j] = message.objPaths[j];
            }
            return object;
        };

        /**
         * Converts this Delete to JSON.
         * @function toJSON
         * @memberof usp.Delete
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Delete.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Delete
         * @function getTypeUrl
         * @memberof usp.Delete
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Delete.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/usp.Delete";
        };

        return Delete;
    })();

    usp.DeleteResp = (function() {

        /**
         * Properties of a DeleteResp.
         * @memberof usp
         * @interface IDeleteResp
         * @property {Array.<usp.DeleteResp.IDeletedObjectResult>|null} [deletedObjResults] DeleteResp deletedObjResults
         */

        /**
         * Constructs a new DeleteResp.
         * @memberof usp
         * @classdesc Represents a DeleteResp.
         * @implements IDeleteResp
         * @constructor
         * @param {usp.IDeleteResp=} [properties] Properties to set
         */
        function DeleteResp(properties) {
            this.deletedObjResults = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DeleteResp deletedObjResults.
         * @member {Array.<usp.DeleteResp.IDeletedObjectResult>} deletedObjResults
         * @memberof usp.DeleteResp
         * @instance
         */
        DeleteResp.prototype.deletedObjResults = $util.emptyArray;

        /**
         * Creates a new DeleteResp instance using the specified properties.
         * @function create
         * @memberof usp.DeleteResp
         * @static
         * @param {usp.IDeleteResp=} [properties] Properties to set
         * @returns {usp.DeleteResp} DeleteResp instance
         */
        DeleteResp.create = function create(properties) {
            return new DeleteResp(properties);
        };

        /**
         * Encodes the specified DeleteResp message. Does not implicitly {@link usp.DeleteResp.verify|verify} messages.
         * @function encode
         * @memberof usp.DeleteResp
         * @static
         * @param {usp.IDeleteResp} message DeleteResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeleteResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.deletedObjResults != null && message.deletedObjResults.length)
                for (let i = 0; i < message.deletedObjResults.length; ++i)
                    $root.usp.DeleteResp.DeletedObjectResult.encode(message.deletedObjResults[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified DeleteResp message, length delimited. Does not implicitly {@link usp.DeleteResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof usp.DeleteResp
         * @static
         * @param {usp.IDeleteResp} message DeleteResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeleteResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DeleteResp message from the specified reader or buffer.
         * @function decode
         * @memberof usp.DeleteResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {usp.DeleteResp} DeleteResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeleteResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.usp.DeleteResp();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.deletedObjResults && message.deletedObjResults.length))
                            message.deletedObjResults = [];
                        message.deletedObjResults.push($root.usp.DeleteResp.DeletedObjectResult.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DeleteResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof usp.DeleteResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {usp.DeleteResp} DeleteResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeleteResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DeleteResp message.
         * @function verify
         * @memberof usp.DeleteResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DeleteResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.deletedObjResults != null && message.hasOwnProperty("deletedObjResults")) {
                if (!Array.isArray(message.deletedObjResults))
                    return "deletedObjResults: array expected";
                for (let i = 0; i < message.deletedObjResults.length; ++i) {
                    let error = $root.usp.DeleteResp.DeletedObjectResult.verify(message.deletedObjResults[i]);
                    if (error)
                        return "deletedObjResults." + error;
                }
            }
            return null;
        };

        /**
         * Creates a DeleteResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof usp.DeleteResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {usp.DeleteResp} DeleteResp
         */
        DeleteResp.fromObject = function fromObject(object) {
            if (object instanceof $root.usp.DeleteResp)
                return object;
            let message = new $root.usp.DeleteResp();
            if (object.deletedObjResults) {
                if (!Array.isArray(object.deletedObjResults))
                    throw TypeError(".usp.DeleteResp.deletedObjResults: array expected");
                message.deletedObjResults = [];
                for (let i = 0; i < object.deletedObjResults.length; ++i) {
                    if (typeof object.deletedObjResults[i] !== "object")
                        throw TypeError(".usp.DeleteResp.deletedObjResults: object expected");
                    message.deletedObjResults[i] = $root.usp.DeleteResp.DeletedObjectResult.fromObject(object.deletedObjResults[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a DeleteResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof usp.DeleteResp
         * @static
         * @param {usp.DeleteResp} message DeleteResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DeleteResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.deletedObjResults = [];
            if (message.deletedObjResults && message.deletedObjResults.length) {
                object.deletedObjResults = [];
                for (let j = 0; j < message.deletedObjResults.length; ++j)
                    object.deletedObjResults[j] = $root.usp.DeleteResp.DeletedObjectResult.toObject(message.deletedObjResults[j], options);
            }
            return object;
        };

        /**
         * Converts this DeleteResp to JSON.
         * @function toJSON
         * @memberof usp.DeleteResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DeleteResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for DeleteResp
         * @function getTypeUrl
         * @memberof usp.DeleteResp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        DeleteResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/usp.DeleteResp";
        };

        DeleteResp.DeletedObjectResult = (function() {

            /**
             * Properties of a DeletedObjectResult.
             * @memberof usp.DeleteResp
             * @interface IDeletedObjectResult
             * @property {string|null} [requestedPath] DeletedObjectResult requestedPath
             * @property {usp.DeleteResp.DeletedObjectResult.IOperationStatus|null} [operStatus] DeletedObjectResult operStatus
             */

            /**
             * Constructs a new DeletedObjectResult.
             * @memberof usp.DeleteResp
             * @classdesc Represents a DeletedObjectResult.
             * @implements IDeletedObjectResult
             * @constructor
             * @param {usp.DeleteResp.IDeletedObjectResult=} [properties] Properties to set
             */
            function DeletedObjectResult(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * DeletedObjectResult requestedPath.
             * @member {string} requestedPath
             * @memberof usp.DeleteResp.DeletedObjectResult
             * @instance
             */
            DeletedObjectResult.prototype.requestedPath = "";

            /**
             * DeletedObjectResult operStatus.
             * @member {usp.DeleteResp.DeletedObjectResult.IOperationStatus|null|undefined} operStatus
             * @memberof usp.DeleteResp.DeletedObjectResult
             * @instance
             */
            DeletedObjectResult.prototype.operStatus = null;

            /**
             * Creates a new DeletedObjectResult instance using the specified properties.
             * @function create
             * @memberof usp.DeleteResp.DeletedObjectResult
             * @static
             * @param {usp.DeleteResp.IDeletedObjectResult=} [properties] Properties to set
             * @returns {usp.DeleteResp.DeletedObjectResult} DeletedObjectResult instance
             */
            DeletedObjectResult.create = function create(properties) {
                return new DeletedObjectResult(properties);
            };

            /**
             * Encodes the specified DeletedObjectResult message. Does not implicitly {@link usp.DeleteResp.DeletedObjectResult.verify|verify} messages.
             * @function encode
             * @memberof usp.DeleteResp.DeletedObjectResult
             * @static
             * @param {usp.DeleteResp.IDeletedObjectResult} message DeletedObjectResult message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DeletedObjectResult.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.requestedPath != null && Object.hasOwnProperty.call(message, "requestedPath"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.requestedPath);
                if (message.operStatus != null && Object.hasOwnProperty.call(message, "operStatus"))
                    $root.usp.DeleteResp.DeletedObjectResult.OperationStatus.encode(message.operStatus, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified DeletedObjectResult message, length delimited. Does not implicitly {@link usp.DeleteResp.DeletedObjectResult.verify|verify} messages.
             * @function encodeDelimited
             * @memberof usp.DeleteResp.DeletedObjectResult
             * @static
             * @param {usp.DeleteResp.IDeletedObjectResult} message DeletedObjectResult message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DeletedObjectResult.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a DeletedObjectResult message from the specified reader or buffer.
             * @function decode
             * @memberof usp.DeleteResp.DeletedObjectResult
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {usp.DeleteResp.DeletedObjectResult} DeletedObjectResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DeletedObjectResult.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.usp.DeleteResp.DeletedObjectResult();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.requestedPath = reader.string();
                            break;
                        }
                    case 2: {
                            message.operStatus = $root.usp.DeleteResp.DeletedObjectResult.OperationStatus.decode(reader, reader.uint32());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a DeletedObjectResult message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof usp.DeleteResp.DeletedObjectResult
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {usp.DeleteResp.DeletedObjectResult} DeletedObjectResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DeletedObjectResult.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a DeletedObjectResult message.
             * @function verify
             * @memberof usp.DeleteResp.DeletedObjectResult
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DeletedObjectResult.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.requestedPath != null && message.hasOwnProperty("requestedPath"))
                    if (!$util.isString(message.requestedPath))
                        return "requestedPath: string expected";
                if (message.operStatus != null && message.hasOwnProperty("operStatus")) {
                    let error = $root.usp.DeleteResp.DeletedObjectResult.OperationStatus.verify(message.operStatus);
                    if (error)
                        return "operStatus." + error;
                }
                return null;
            };

            /**
             * Creates a DeletedObjectResult message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof usp.DeleteResp.DeletedObjectResult
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {usp.DeleteResp.DeletedObjectResult} DeletedObjectResult
             */
            DeletedObjectResult.fromObject = function fromObject(object) {
                if (object instanceof $root.usp.DeleteResp.DeletedObjectResult)
                    return object;
                let message = new $root.usp.DeleteResp.DeletedObjectResult();
                if (object.requestedPath != null)
                    message.requestedPath = String(object.requestedPath);
                if (object.operStatus != null) {
                    if (typeof object.operStatus !== "object")
                        throw TypeError(".usp.DeleteResp.DeletedObjectResult.operStatus: object expected");
                    message.operStatus = $root.usp.DeleteResp.DeletedObjectResult.OperationStatus.fromObject(object.operStatus);
                }
                return message;
            };

            /**
             * Creates a plain object from a DeletedObjectResult message. Also converts values to other types if specified.
             * @function toObject
             * @memberof usp.DeleteResp.DeletedObjectResult
             * @static
             * @param {usp.DeleteResp.DeletedObjectResult} message DeletedObjectResult
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DeletedObjectResult.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.requestedPath = "";
                    object.operStatus = null;
                }
                if (message.requestedPath != null && message.hasOwnProperty("requestedPath"))
                    object.requestedPath = message.requestedPath;
                if (message.operStatus != null && message.hasOwnProperty("operStatus"))
                    object.operStatus = $root.usp.DeleteResp.DeletedObjectResult.OperationStatus.toObject(message.operStatus, options);
                return object;
            };

            /**
             * Converts this DeletedObjectResult to JSON.
             * @function toJSON
             * @memberof usp.DeleteResp.DeletedObjectResult
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DeletedObjectResult.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for DeletedObjectResult
             * @function getTypeUrl
             * @memberof usp.DeleteResp.DeletedObjectResult
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            DeletedObjectResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/usp.DeleteResp.DeletedObjectResult";
            };

            DeletedObjectResult.OperationStatus = (function() {

                /**
                 * Properties of an OperationStatus.
                 * @memberof usp.DeleteResp.DeletedObjectResult
                 * @interface IOperationStatus
                 * @property {usp.DeleteResp.DeletedObjectResult.OperationStatus.IOperationFailure|null} [operFailure] OperationStatus operFailure
                 * @property {usp.DeleteResp.DeletedObjectResult.OperationStatus.IOperationSuccess|null} [operSuccess] OperationStatus operSuccess
                 */

                /**
                 * Constructs a new OperationStatus.
                 * @memberof usp.DeleteResp.DeletedObjectResult
                 * @classdesc Represents an OperationStatus.
                 * @implements IOperationStatus
                 * @constructor
                 * @param {usp.DeleteResp.DeletedObjectResult.IOperationStatus=} [properties] Properties to set
                 */
                function OperationStatus(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * OperationStatus operFailure.
                 * @member {usp.DeleteResp.DeletedObjectResult.OperationStatus.IOperationFailure|null|undefined} operFailure
                 * @memberof usp.DeleteResp.DeletedObjectResult.OperationStatus
                 * @instance
                 */
                OperationStatus.prototype.operFailure = null;

                /**
                 * OperationStatus operSuccess.
                 * @member {usp.DeleteResp.DeletedObjectResult.OperationStatus.IOperationSuccess|null|undefined} operSuccess
                 * @memberof usp.DeleteResp.DeletedObjectResult.OperationStatus
                 * @instance
                 */
                OperationStatus.prototype.operSuccess = null;

                // OneOf field names bound to virtual getters and setters
                let $oneOfFields;

                /**
                 * OperationStatus operStatus.
                 * @member {"operFailure"|"operSuccess"|undefined} operStatus
                 * @memberof usp.DeleteResp.DeletedObjectResult.OperationStatus
                 * @instance
                 */
                Object.defineProperty(OperationStatus.prototype, "operStatus", {
                    get: $util.oneOfGetter($oneOfFields = ["operFailure", "operSuccess"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * Creates a new OperationStatus instance using the specified properties.
                 * @function create
                 * @memberof usp.DeleteResp.DeletedObjectResult.OperationStatus
                 * @static
                 * @param {usp.DeleteResp.DeletedObjectResult.IOperationStatus=} [properties] Properties to set
                 * @returns {usp.DeleteResp.DeletedObjectResult.OperationStatus} OperationStatus instance
                 */
                OperationStatus.create = function create(properties) {
                    return new OperationStatus(properties);
                };

                /**
                 * Encodes the specified OperationStatus message. Does not implicitly {@link usp.DeleteResp.DeletedObjectResult.OperationStatus.verify|verify} messages.
                 * @function encode
                 * @memberof usp.DeleteResp.DeletedObjectResult.OperationStatus
                 * @static
                 * @param {usp.DeleteResp.DeletedObjectResult.IOperationStatus} message OperationStatus message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                OperationStatus.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.operFailure != null && Object.hasOwnProperty.call(message, "operFailure"))
                        $root.usp.DeleteResp.DeletedObjectResult.OperationStatus.OperationFailure.encode(message.operFailure, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.operSuccess != null && Object.hasOwnProperty.call(message, "operSuccess"))
                        $root.usp.DeleteResp.DeletedObjectResult.OperationStatus.OperationSuccess.encode(message.operSuccess, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified OperationStatus message, length delimited. Does not implicitly {@link usp.DeleteResp.DeletedObjectResult.OperationStatus.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof usp.DeleteResp.DeletedObjectResult.OperationStatus
                 * @static
                 * @param {usp.DeleteResp.DeletedObjectResult.IOperationStatus} message OperationStatus message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                OperationStatus.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an OperationStatus message from the specified reader or buffer.
                 * @function decode
                 * @memberof usp.DeleteResp.DeletedObjectResult.OperationStatus
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {usp.DeleteResp.DeletedObjectResult.OperationStatus} OperationStatus
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                OperationStatus.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.usp.DeleteResp.DeletedObjectResult.OperationStatus();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.operFailure = $root.usp.DeleteResp.DeletedObjectResult.OperationStatus.OperationFailure.decode(reader, reader.uint32());
                                break;
                            }
                        case 2: {
                                message.operSuccess = $root.usp.DeleteResp.DeletedObjectResult.OperationStatus.OperationSuccess.decode(reader, reader.uint32());
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an OperationStatus message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof usp.DeleteResp.DeletedObjectResult.OperationStatus
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {usp.DeleteResp.DeletedObjectResult.OperationStatus} OperationStatus
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                OperationStatus.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an OperationStatus message.
                 * @function verify
                 * @memberof usp.DeleteResp.DeletedObjectResult.OperationStatus
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                OperationStatus.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    let properties = {};
                    if (message.operFailure != null && message.hasOwnProperty("operFailure")) {
                        properties.operStatus = 1;
                        {
                            let error = $root.usp.DeleteResp.DeletedObjectResult.OperationStatus.OperationFailure.verify(message.operFailure);
                            if (error)
                                return "operFailure." + error;
                        }
                    }
                    if (message.operSuccess != null && message.hasOwnProperty("operSuccess")) {
                        if (properties.operStatus === 1)
                            return "operStatus: multiple values";
                        properties.operStatus = 1;
                        {
                            let error = $root.usp.DeleteResp.DeletedObjectResult.OperationStatus.OperationSuccess.verify(message.operSuccess);
                            if (error)
                                return "operSuccess." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates an OperationStatus message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof usp.DeleteResp.DeletedObjectResult.OperationStatus
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {usp.DeleteResp.DeletedObjectResult.OperationStatus} OperationStatus
                 */
                OperationStatus.fromObject = function fromObject(object) {
                    if (object instanceof $root.usp.DeleteResp.DeletedObjectResult.OperationStatus)
                        return object;
                    let message = new $root.usp.DeleteResp.DeletedObjectResult.OperationStatus();
                    if (object.operFailure != null) {
                        if (typeof object.operFailure !== "object")
                            throw TypeError(".usp.DeleteResp.DeletedObjectResult.OperationStatus.operFailure: object expected");
                        message.operFailure = $root.usp.DeleteResp.DeletedObjectResult.OperationStatus.OperationFailure.fromObject(object.operFailure);
                    }
                    if (object.operSuccess != null) {
                        if (typeof object.operSuccess !== "object")
                            throw TypeError(".usp.DeleteResp.DeletedObjectResult.OperationStatus.operSuccess: object expected");
                        message.operSuccess = $root.usp.DeleteResp.DeletedObjectResult.OperationStatus.OperationSuccess.fromObject(object.operSuccess);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from an OperationStatus message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof usp.DeleteResp.DeletedObjectResult.OperationStatus
                 * @static
                 * @param {usp.DeleteResp.DeletedObjectResult.OperationStatus} message OperationStatus
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                OperationStatus.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (message.operFailure != null && message.hasOwnProperty("operFailure")) {
                        object.operFailure = $root.usp.DeleteResp.DeletedObjectResult.OperationStatus.OperationFailure.toObject(message.operFailure, options);
                        if (options.oneofs)
                            object.operStatus = "operFailure";
                    }
                    if (message.operSuccess != null && message.hasOwnProperty("operSuccess")) {
                        object.operSuccess = $root.usp.DeleteResp.DeletedObjectResult.OperationStatus.OperationSuccess.toObject(message.operSuccess, options);
                        if (options.oneofs)
                            object.operStatus = "operSuccess";
                    }
                    return object;
                };

                /**
                 * Converts this OperationStatus to JSON.
                 * @function toJSON
                 * @memberof usp.DeleteResp.DeletedObjectResult.OperationStatus
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                OperationStatus.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for OperationStatus
                 * @function getTypeUrl
                 * @memberof usp.DeleteResp.DeletedObjectResult.OperationStatus
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                OperationStatus.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/usp.DeleteResp.DeletedObjectResult.OperationStatus";
                };

                OperationStatus.OperationFailure = (function() {

                    /**
                     * Properties of an OperationFailure.
                     * @memberof usp.DeleteResp.DeletedObjectResult.OperationStatus
                     * @interface IOperationFailure
                     * @property {number|null} [errCode] OperationFailure errCode
                     * @property {string|null} [errMsg] OperationFailure errMsg
                     */

                    /**
                     * Constructs a new OperationFailure.
                     * @memberof usp.DeleteResp.DeletedObjectResult.OperationStatus
                     * @classdesc Represents an OperationFailure.
                     * @implements IOperationFailure
                     * @constructor
                     * @param {usp.DeleteResp.DeletedObjectResult.OperationStatus.IOperationFailure=} [properties] Properties to set
                     */
                    function OperationFailure(properties) {
                        if (properties)
                            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * OperationFailure errCode.
                     * @member {number} errCode
                     * @memberof usp.DeleteResp.DeletedObjectResult.OperationStatus.OperationFailure
                     * @instance
                     */
                    OperationFailure.prototype.errCode = 0;

                    /**
                     * OperationFailure errMsg.
                     * @member {string} errMsg
                     * @memberof usp.DeleteResp.DeletedObjectResult.OperationStatus.OperationFailure
                     * @instance
                     */
                    OperationFailure.prototype.errMsg = "";

                    /**
                     * Creates a new OperationFailure instance using the specified properties.
                     * @function create
                     * @memberof usp.DeleteResp.DeletedObjectResult.OperationStatus.OperationFailure
                     * @static
                     * @param {usp.DeleteResp.DeletedObjectResult.OperationStatus.IOperationFailure=} [properties] Properties to set
                     * @returns {usp.DeleteResp.DeletedObjectResult.OperationStatus.OperationFailure} OperationFailure instance
                     */
                    OperationFailure.create = function create(properties) {
                        return new OperationFailure(properties);
                    };

                    /**
                     * Encodes the specified OperationFailure message. Does not implicitly {@link usp.DeleteResp.DeletedObjectResult.OperationStatus.OperationFailure.verify|verify} messages.
                     * @function encode
                     * @memberof usp.DeleteResp.DeletedObjectResult.OperationStatus.OperationFailure
                     * @static
                     * @param {usp.DeleteResp.DeletedObjectResult.OperationStatus.IOperationFailure} message OperationFailure message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    OperationFailure.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.errCode != null && Object.hasOwnProperty.call(message, "errCode"))
                            writer.uint32(/* id 1, wireType 5 =*/13).fixed32(message.errCode);
                        if (message.errMsg != null && Object.hasOwnProperty.call(message, "errMsg"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.errMsg);
                        return writer;
                    };

                    /**
                     * Encodes the specified OperationFailure message, length delimited. Does not implicitly {@link usp.DeleteResp.DeletedObjectResult.OperationStatus.OperationFailure.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof usp.DeleteResp.DeletedObjectResult.OperationStatus.OperationFailure
                     * @static
                     * @param {usp.DeleteResp.DeletedObjectResult.OperationStatus.IOperationFailure} message OperationFailure message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    OperationFailure.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes an OperationFailure message from the specified reader or buffer.
                     * @function decode
                     * @memberof usp.DeleteResp.DeletedObjectResult.OperationStatus.OperationFailure
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {usp.DeleteResp.DeletedObjectResult.OperationStatus.OperationFailure} OperationFailure
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    OperationFailure.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.usp.DeleteResp.DeletedObjectResult.OperationStatus.OperationFailure();
                        while (reader.pos < end) {
                            let tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    message.errCode = reader.fixed32();
                                    break;
                                }
                            case 2: {
                                    message.errMsg = reader.string();
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes an OperationFailure message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof usp.DeleteResp.DeletedObjectResult.OperationStatus.OperationFailure
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {usp.DeleteResp.DeletedObjectResult.OperationStatus.OperationFailure} OperationFailure
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    OperationFailure.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies an OperationFailure message.
                     * @function verify
                     * @memberof usp.DeleteResp.DeletedObjectResult.OperationStatus.OperationFailure
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    OperationFailure.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.errCode != null && message.hasOwnProperty("errCode"))
                            if (!$util.isInteger(message.errCode))
                                return "errCode: integer expected";
                        if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                            if (!$util.isString(message.errMsg))
                                return "errMsg: string expected";
                        return null;
                    };

                    /**
                     * Creates an OperationFailure message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof usp.DeleteResp.DeletedObjectResult.OperationStatus.OperationFailure
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {usp.DeleteResp.DeletedObjectResult.OperationStatus.OperationFailure} OperationFailure
                     */
                    OperationFailure.fromObject = function fromObject(object) {
                        if (object instanceof $root.usp.DeleteResp.DeletedObjectResult.OperationStatus.OperationFailure)
                            return object;
                        let message = new $root.usp.DeleteResp.DeletedObjectResult.OperationStatus.OperationFailure();
                        if (object.errCode != null)
                            message.errCode = object.errCode >>> 0;
                        if (object.errMsg != null)
                            message.errMsg = String(object.errMsg);
                        return message;
                    };

                    /**
                     * Creates a plain object from an OperationFailure message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof usp.DeleteResp.DeletedObjectResult.OperationStatus.OperationFailure
                     * @static
                     * @param {usp.DeleteResp.DeletedObjectResult.OperationStatus.OperationFailure} message OperationFailure
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    OperationFailure.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        let object = {};
                        if (options.defaults) {
                            object.errCode = 0;
                            object.errMsg = "";
                        }
                        if (message.errCode != null && message.hasOwnProperty("errCode"))
                            object.errCode = message.errCode;
                        if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                            object.errMsg = message.errMsg;
                        return object;
                    };

                    /**
                     * Converts this OperationFailure to JSON.
                     * @function toJSON
                     * @memberof usp.DeleteResp.DeletedObjectResult.OperationStatus.OperationFailure
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    OperationFailure.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for OperationFailure
                     * @function getTypeUrl
                     * @memberof usp.DeleteResp.DeletedObjectResult.OperationStatus.OperationFailure
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    OperationFailure.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/usp.DeleteResp.DeletedObjectResult.OperationStatus.OperationFailure";
                    };

                    return OperationFailure;
                })();

                OperationStatus.OperationSuccess = (function() {

                    /**
                     * Properties of an OperationSuccess.
                     * @memberof usp.DeleteResp.DeletedObjectResult.OperationStatus
                     * @interface IOperationSuccess
                     * @property {Array.<string>|null} [affectedPaths] OperationSuccess affectedPaths
                     * @property {Array.<usp.DeleteResp.IUnaffectedPathError>|null} [unaffectedPathErrs] OperationSuccess unaffectedPathErrs
                     */

                    /**
                     * Constructs a new OperationSuccess.
                     * @memberof usp.DeleteResp.DeletedObjectResult.OperationStatus
                     * @classdesc Represents an OperationSuccess.
                     * @implements IOperationSuccess
                     * @constructor
                     * @param {usp.DeleteResp.DeletedObjectResult.OperationStatus.IOperationSuccess=} [properties] Properties to set
                     */
                    function OperationSuccess(properties) {
                        this.affectedPaths = [];
                        this.unaffectedPathErrs = [];
                        if (properties)
                            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * OperationSuccess affectedPaths.
                     * @member {Array.<string>} affectedPaths
                     * @memberof usp.DeleteResp.DeletedObjectResult.OperationStatus.OperationSuccess
                     * @instance
                     */
                    OperationSuccess.prototype.affectedPaths = $util.emptyArray;

                    /**
                     * OperationSuccess unaffectedPathErrs.
                     * @member {Array.<usp.DeleteResp.IUnaffectedPathError>} unaffectedPathErrs
                     * @memberof usp.DeleteResp.DeletedObjectResult.OperationStatus.OperationSuccess
                     * @instance
                     */
                    OperationSuccess.prototype.unaffectedPathErrs = $util.emptyArray;

                    /**
                     * Creates a new OperationSuccess instance using the specified properties.
                     * @function create
                     * @memberof usp.DeleteResp.DeletedObjectResult.OperationStatus.OperationSuccess
                     * @static
                     * @param {usp.DeleteResp.DeletedObjectResult.OperationStatus.IOperationSuccess=} [properties] Properties to set
                     * @returns {usp.DeleteResp.DeletedObjectResult.OperationStatus.OperationSuccess} OperationSuccess instance
                     */
                    OperationSuccess.create = function create(properties) {
                        return new OperationSuccess(properties);
                    };

                    /**
                     * Encodes the specified OperationSuccess message. Does not implicitly {@link usp.DeleteResp.DeletedObjectResult.OperationStatus.OperationSuccess.verify|verify} messages.
                     * @function encode
                     * @memberof usp.DeleteResp.DeletedObjectResult.OperationStatus.OperationSuccess
                     * @static
                     * @param {usp.DeleteResp.DeletedObjectResult.OperationStatus.IOperationSuccess} message OperationSuccess message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    OperationSuccess.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.affectedPaths != null && message.affectedPaths.length)
                            for (let i = 0; i < message.affectedPaths.length; ++i)
                                writer.uint32(/* id 1, wireType 2 =*/10).string(message.affectedPaths[i]);
                        if (message.unaffectedPathErrs != null && message.unaffectedPathErrs.length)
                            for (let i = 0; i < message.unaffectedPathErrs.length; ++i)
                                $root.usp.DeleteResp.UnaffectedPathError.encode(message.unaffectedPathErrs[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified OperationSuccess message, length delimited. Does not implicitly {@link usp.DeleteResp.DeletedObjectResult.OperationStatus.OperationSuccess.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof usp.DeleteResp.DeletedObjectResult.OperationStatus.OperationSuccess
                     * @static
                     * @param {usp.DeleteResp.DeletedObjectResult.OperationStatus.IOperationSuccess} message OperationSuccess message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    OperationSuccess.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes an OperationSuccess message from the specified reader or buffer.
                     * @function decode
                     * @memberof usp.DeleteResp.DeletedObjectResult.OperationStatus.OperationSuccess
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {usp.DeleteResp.DeletedObjectResult.OperationStatus.OperationSuccess} OperationSuccess
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    OperationSuccess.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.usp.DeleteResp.DeletedObjectResult.OperationStatus.OperationSuccess();
                        while (reader.pos < end) {
                            let tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    if (!(message.affectedPaths && message.affectedPaths.length))
                                        message.affectedPaths = [];
                                    message.affectedPaths.push(reader.string());
                                    break;
                                }
                            case 2: {
                                    if (!(message.unaffectedPathErrs && message.unaffectedPathErrs.length))
                                        message.unaffectedPathErrs = [];
                                    message.unaffectedPathErrs.push($root.usp.DeleteResp.UnaffectedPathError.decode(reader, reader.uint32()));
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes an OperationSuccess message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof usp.DeleteResp.DeletedObjectResult.OperationStatus.OperationSuccess
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {usp.DeleteResp.DeletedObjectResult.OperationStatus.OperationSuccess} OperationSuccess
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    OperationSuccess.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies an OperationSuccess message.
                     * @function verify
                     * @memberof usp.DeleteResp.DeletedObjectResult.OperationStatus.OperationSuccess
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    OperationSuccess.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.affectedPaths != null && message.hasOwnProperty("affectedPaths")) {
                            if (!Array.isArray(message.affectedPaths))
                                return "affectedPaths: array expected";
                            for (let i = 0; i < message.affectedPaths.length; ++i)
                                if (!$util.isString(message.affectedPaths[i]))
                                    return "affectedPaths: string[] expected";
                        }
                        if (message.unaffectedPathErrs != null && message.hasOwnProperty("unaffectedPathErrs")) {
                            if (!Array.isArray(message.unaffectedPathErrs))
                                return "unaffectedPathErrs: array expected";
                            for (let i = 0; i < message.unaffectedPathErrs.length; ++i) {
                                let error = $root.usp.DeleteResp.UnaffectedPathError.verify(message.unaffectedPathErrs[i]);
                                if (error)
                                    return "unaffectedPathErrs." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates an OperationSuccess message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof usp.DeleteResp.DeletedObjectResult.OperationStatus.OperationSuccess
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {usp.DeleteResp.DeletedObjectResult.OperationStatus.OperationSuccess} OperationSuccess
                     */
                    OperationSuccess.fromObject = function fromObject(object) {
                        if (object instanceof $root.usp.DeleteResp.DeletedObjectResult.OperationStatus.OperationSuccess)
                            return object;
                        let message = new $root.usp.DeleteResp.DeletedObjectResult.OperationStatus.OperationSuccess();
                        if (object.affectedPaths) {
                            if (!Array.isArray(object.affectedPaths))
                                throw TypeError(".usp.DeleteResp.DeletedObjectResult.OperationStatus.OperationSuccess.affectedPaths: array expected");
                            message.affectedPaths = [];
                            for (let i = 0; i < object.affectedPaths.length; ++i)
                                message.affectedPaths[i] = String(object.affectedPaths[i]);
                        }
                        if (object.unaffectedPathErrs) {
                            if (!Array.isArray(object.unaffectedPathErrs))
                                throw TypeError(".usp.DeleteResp.DeletedObjectResult.OperationStatus.OperationSuccess.unaffectedPathErrs: array expected");
                            message.unaffectedPathErrs = [];
                            for (let i = 0; i < object.unaffectedPathErrs.length; ++i) {
                                if (typeof object.unaffectedPathErrs[i] !== "object")
                                    throw TypeError(".usp.DeleteResp.DeletedObjectResult.OperationStatus.OperationSuccess.unaffectedPathErrs: object expected");
                                message.unaffectedPathErrs[i] = $root.usp.DeleteResp.UnaffectedPathError.fromObject(object.unaffectedPathErrs[i]);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from an OperationSuccess message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof usp.DeleteResp.DeletedObjectResult.OperationStatus.OperationSuccess
                     * @static
                     * @param {usp.DeleteResp.DeletedObjectResult.OperationStatus.OperationSuccess} message OperationSuccess
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    OperationSuccess.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        let object = {};
                        if (options.arrays || options.defaults) {
                            object.affectedPaths = [];
                            object.unaffectedPathErrs = [];
                        }
                        if (message.affectedPaths && message.affectedPaths.length) {
                            object.affectedPaths = [];
                            for (let j = 0; j < message.affectedPaths.length; ++j)
                                object.affectedPaths[j] = message.affectedPaths[j];
                        }
                        if (message.unaffectedPathErrs && message.unaffectedPathErrs.length) {
                            object.unaffectedPathErrs = [];
                            for (let j = 0; j < message.unaffectedPathErrs.length; ++j)
                                object.unaffectedPathErrs[j] = $root.usp.DeleteResp.UnaffectedPathError.toObject(message.unaffectedPathErrs[j], options);
                        }
                        return object;
                    };

                    /**
                     * Converts this OperationSuccess to JSON.
                     * @function toJSON
                     * @memberof usp.DeleteResp.DeletedObjectResult.OperationStatus.OperationSuccess
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    OperationSuccess.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for OperationSuccess
                     * @function getTypeUrl
                     * @memberof usp.DeleteResp.DeletedObjectResult.OperationStatus.OperationSuccess
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    OperationSuccess.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/usp.DeleteResp.DeletedObjectResult.OperationStatus.OperationSuccess";
                    };

                    return OperationSuccess;
                })();

                return OperationStatus;
            })();

            return DeletedObjectResult;
        })();

        DeleteResp.UnaffectedPathError = (function() {

            /**
             * Properties of an UnaffectedPathError.
             * @memberof usp.DeleteResp
             * @interface IUnaffectedPathError
             * @property {string|null} [unaffectedPath] UnaffectedPathError unaffectedPath
             * @property {number|null} [errCode] UnaffectedPathError errCode
             * @property {string|null} [errMsg] UnaffectedPathError errMsg
             */

            /**
             * Constructs a new UnaffectedPathError.
             * @memberof usp.DeleteResp
             * @classdesc Represents an UnaffectedPathError.
             * @implements IUnaffectedPathError
             * @constructor
             * @param {usp.DeleteResp.IUnaffectedPathError=} [properties] Properties to set
             */
            function UnaffectedPathError(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * UnaffectedPathError unaffectedPath.
             * @member {string} unaffectedPath
             * @memberof usp.DeleteResp.UnaffectedPathError
             * @instance
             */
            UnaffectedPathError.prototype.unaffectedPath = "";

            /**
             * UnaffectedPathError errCode.
             * @member {number} errCode
             * @memberof usp.DeleteResp.UnaffectedPathError
             * @instance
             */
            UnaffectedPathError.prototype.errCode = 0;

            /**
             * UnaffectedPathError errMsg.
             * @member {string} errMsg
             * @memberof usp.DeleteResp.UnaffectedPathError
             * @instance
             */
            UnaffectedPathError.prototype.errMsg = "";

            /**
             * Creates a new UnaffectedPathError instance using the specified properties.
             * @function create
             * @memberof usp.DeleteResp.UnaffectedPathError
             * @static
             * @param {usp.DeleteResp.IUnaffectedPathError=} [properties] Properties to set
             * @returns {usp.DeleteResp.UnaffectedPathError} UnaffectedPathError instance
             */
            UnaffectedPathError.create = function create(properties) {
                return new UnaffectedPathError(properties);
            };

            /**
             * Encodes the specified UnaffectedPathError message. Does not implicitly {@link usp.DeleteResp.UnaffectedPathError.verify|verify} messages.
             * @function encode
             * @memberof usp.DeleteResp.UnaffectedPathError
             * @static
             * @param {usp.DeleteResp.IUnaffectedPathError} message UnaffectedPathError message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UnaffectedPathError.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.unaffectedPath != null && Object.hasOwnProperty.call(message, "unaffectedPath"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.unaffectedPath);
                if (message.errCode != null && Object.hasOwnProperty.call(message, "errCode"))
                    writer.uint32(/* id 2, wireType 5 =*/21).fixed32(message.errCode);
                if (message.errMsg != null && Object.hasOwnProperty.call(message, "errMsg"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.errMsg);
                return writer;
            };

            /**
             * Encodes the specified UnaffectedPathError message, length delimited. Does not implicitly {@link usp.DeleteResp.UnaffectedPathError.verify|verify} messages.
             * @function encodeDelimited
             * @memberof usp.DeleteResp.UnaffectedPathError
             * @static
             * @param {usp.DeleteResp.IUnaffectedPathError} message UnaffectedPathError message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UnaffectedPathError.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an UnaffectedPathError message from the specified reader or buffer.
             * @function decode
             * @memberof usp.DeleteResp.UnaffectedPathError
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {usp.DeleteResp.UnaffectedPathError} UnaffectedPathError
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UnaffectedPathError.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.usp.DeleteResp.UnaffectedPathError();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.unaffectedPath = reader.string();
                            break;
                        }
                    case 2: {
                            message.errCode = reader.fixed32();
                            break;
                        }
                    case 3: {
                            message.errMsg = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an UnaffectedPathError message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof usp.DeleteResp.UnaffectedPathError
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {usp.DeleteResp.UnaffectedPathError} UnaffectedPathError
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UnaffectedPathError.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an UnaffectedPathError message.
             * @function verify
             * @memberof usp.DeleteResp.UnaffectedPathError
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UnaffectedPathError.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.unaffectedPath != null && message.hasOwnProperty("unaffectedPath"))
                    if (!$util.isString(message.unaffectedPath))
                        return "unaffectedPath: string expected";
                if (message.errCode != null && message.hasOwnProperty("errCode"))
                    if (!$util.isInteger(message.errCode))
                        return "errCode: integer expected";
                if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                    if (!$util.isString(message.errMsg))
                        return "errMsg: string expected";
                return null;
            };

            /**
             * Creates an UnaffectedPathError message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof usp.DeleteResp.UnaffectedPathError
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {usp.DeleteResp.UnaffectedPathError} UnaffectedPathError
             */
            UnaffectedPathError.fromObject = function fromObject(object) {
                if (object instanceof $root.usp.DeleteResp.UnaffectedPathError)
                    return object;
                let message = new $root.usp.DeleteResp.UnaffectedPathError();
                if (object.unaffectedPath != null)
                    message.unaffectedPath = String(object.unaffectedPath);
                if (object.errCode != null)
                    message.errCode = object.errCode >>> 0;
                if (object.errMsg != null)
                    message.errMsg = String(object.errMsg);
                return message;
            };

            /**
             * Creates a plain object from an UnaffectedPathError message. Also converts values to other types if specified.
             * @function toObject
             * @memberof usp.DeleteResp.UnaffectedPathError
             * @static
             * @param {usp.DeleteResp.UnaffectedPathError} message UnaffectedPathError
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UnaffectedPathError.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.unaffectedPath = "";
                    object.errCode = 0;
                    object.errMsg = "";
                }
                if (message.unaffectedPath != null && message.hasOwnProperty("unaffectedPath"))
                    object.unaffectedPath = message.unaffectedPath;
                if (message.errCode != null && message.hasOwnProperty("errCode"))
                    object.errCode = message.errCode;
                if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                    object.errMsg = message.errMsg;
                return object;
            };

            /**
             * Converts this UnaffectedPathError to JSON.
             * @function toJSON
             * @memberof usp.DeleteResp.UnaffectedPathError
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UnaffectedPathError.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for UnaffectedPathError
             * @function getTypeUrl
             * @memberof usp.DeleteResp.UnaffectedPathError
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            UnaffectedPathError.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/usp.DeleteResp.UnaffectedPathError";
            };

            return UnaffectedPathError;
        })();

        return DeleteResp;
    })();

    usp.Set = (function() {

        /**
         * Properties of a Set.
         * @memberof usp
         * @interface ISet
         * @property {boolean|null} [allowPartial] Set allowPartial
         * @property {Array.<usp.Set.IUpdateObject>|null} [updateObjs] Set updateObjs
         */

        /**
         * Constructs a new Set.
         * @memberof usp
         * @classdesc Represents a Set.
         * @implements ISet
         * @constructor
         * @param {usp.ISet=} [properties] Properties to set
         */
        function Set(properties) {
            this.updateObjs = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Set allowPartial.
         * @member {boolean} allowPartial
         * @memberof usp.Set
         * @instance
         */
        Set.prototype.allowPartial = false;

        /**
         * Set updateObjs.
         * @member {Array.<usp.Set.IUpdateObject>} updateObjs
         * @memberof usp.Set
         * @instance
         */
        Set.prototype.updateObjs = $util.emptyArray;

        /**
         * Creates a new Set instance using the specified properties.
         * @function create
         * @memberof usp.Set
         * @static
         * @param {usp.ISet=} [properties] Properties to set
         * @returns {usp.Set} Set instance
         */
        Set.create = function create(properties) {
            return new Set(properties);
        };

        /**
         * Encodes the specified Set message. Does not implicitly {@link usp.Set.verify|verify} messages.
         * @function encode
         * @memberof usp.Set
         * @static
         * @param {usp.ISet} message Set message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Set.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.allowPartial != null && Object.hasOwnProperty.call(message, "allowPartial"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.allowPartial);
            if (message.updateObjs != null && message.updateObjs.length)
                for (let i = 0; i < message.updateObjs.length; ++i)
                    $root.usp.Set.UpdateObject.encode(message.updateObjs[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Set message, length delimited. Does not implicitly {@link usp.Set.verify|verify} messages.
         * @function encodeDelimited
         * @memberof usp.Set
         * @static
         * @param {usp.ISet} message Set message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Set.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Set message from the specified reader or buffer.
         * @function decode
         * @memberof usp.Set
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {usp.Set} Set
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Set.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.usp.Set();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.allowPartial = reader.bool();
                        break;
                    }
                case 2: {
                        if (!(message.updateObjs && message.updateObjs.length))
                            message.updateObjs = [];
                        message.updateObjs.push($root.usp.Set.UpdateObject.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Set message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof usp.Set
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {usp.Set} Set
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Set.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Set message.
         * @function verify
         * @memberof usp.Set
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Set.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.allowPartial != null && message.hasOwnProperty("allowPartial"))
                if (typeof message.allowPartial !== "boolean")
                    return "allowPartial: boolean expected";
            if (message.updateObjs != null && message.hasOwnProperty("updateObjs")) {
                if (!Array.isArray(message.updateObjs))
                    return "updateObjs: array expected";
                for (let i = 0; i < message.updateObjs.length; ++i) {
                    let error = $root.usp.Set.UpdateObject.verify(message.updateObjs[i]);
                    if (error)
                        return "updateObjs." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Set message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof usp.Set
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {usp.Set} Set
         */
        Set.fromObject = function fromObject(object) {
            if (object instanceof $root.usp.Set)
                return object;
            let message = new $root.usp.Set();
            if (object.allowPartial != null)
                message.allowPartial = Boolean(object.allowPartial);
            if (object.updateObjs) {
                if (!Array.isArray(object.updateObjs))
                    throw TypeError(".usp.Set.updateObjs: array expected");
                message.updateObjs = [];
                for (let i = 0; i < object.updateObjs.length; ++i) {
                    if (typeof object.updateObjs[i] !== "object")
                        throw TypeError(".usp.Set.updateObjs: object expected");
                    message.updateObjs[i] = $root.usp.Set.UpdateObject.fromObject(object.updateObjs[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a Set message. Also converts values to other types if specified.
         * @function toObject
         * @memberof usp.Set
         * @static
         * @param {usp.Set} message Set
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Set.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.updateObjs = [];
            if (options.defaults)
                object.allowPartial = false;
            if (message.allowPartial != null && message.hasOwnProperty("allowPartial"))
                object.allowPartial = message.allowPartial;
            if (message.updateObjs && message.updateObjs.length) {
                object.updateObjs = [];
                for (let j = 0; j < message.updateObjs.length; ++j)
                    object.updateObjs[j] = $root.usp.Set.UpdateObject.toObject(message.updateObjs[j], options);
            }
            return object;
        };

        /**
         * Converts this Set to JSON.
         * @function toJSON
         * @memberof usp.Set
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Set.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Set
         * @function getTypeUrl
         * @memberof usp.Set
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Set.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/usp.Set";
        };

        Set.UpdateObject = (function() {

            /**
             * Properties of an UpdateObject.
             * @memberof usp.Set
             * @interface IUpdateObject
             * @property {string|null} [objPath] UpdateObject objPath
             * @property {Array.<usp.Set.IUpdateParamSetting>|null} [paramSettings] UpdateObject paramSettings
             */

            /**
             * Constructs a new UpdateObject.
             * @memberof usp.Set
             * @classdesc Represents an UpdateObject.
             * @implements IUpdateObject
             * @constructor
             * @param {usp.Set.IUpdateObject=} [properties] Properties to set
             */
            function UpdateObject(properties) {
                this.paramSettings = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * UpdateObject objPath.
             * @member {string} objPath
             * @memberof usp.Set.UpdateObject
             * @instance
             */
            UpdateObject.prototype.objPath = "";

            /**
             * UpdateObject paramSettings.
             * @member {Array.<usp.Set.IUpdateParamSetting>} paramSettings
             * @memberof usp.Set.UpdateObject
             * @instance
             */
            UpdateObject.prototype.paramSettings = $util.emptyArray;

            /**
             * Creates a new UpdateObject instance using the specified properties.
             * @function create
             * @memberof usp.Set.UpdateObject
             * @static
             * @param {usp.Set.IUpdateObject=} [properties] Properties to set
             * @returns {usp.Set.UpdateObject} UpdateObject instance
             */
            UpdateObject.create = function create(properties) {
                return new UpdateObject(properties);
            };

            /**
             * Encodes the specified UpdateObject message. Does not implicitly {@link usp.Set.UpdateObject.verify|verify} messages.
             * @function encode
             * @memberof usp.Set.UpdateObject
             * @static
             * @param {usp.Set.IUpdateObject} message UpdateObject message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UpdateObject.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.objPath != null && Object.hasOwnProperty.call(message, "objPath"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.objPath);
                if (message.paramSettings != null && message.paramSettings.length)
                    for (let i = 0; i < message.paramSettings.length; ++i)
                        $root.usp.Set.UpdateParamSetting.encode(message.paramSettings[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified UpdateObject message, length delimited. Does not implicitly {@link usp.Set.UpdateObject.verify|verify} messages.
             * @function encodeDelimited
             * @memberof usp.Set.UpdateObject
             * @static
             * @param {usp.Set.IUpdateObject} message UpdateObject message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UpdateObject.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an UpdateObject message from the specified reader or buffer.
             * @function decode
             * @memberof usp.Set.UpdateObject
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {usp.Set.UpdateObject} UpdateObject
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UpdateObject.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.usp.Set.UpdateObject();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.objPath = reader.string();
                            break;
                        }
                    case 2: {
                            if (!(message.paramSettings && message.paramSettings.length))
                                message.paramSettings = [];
                            message.paramSettings.push($root.usp.Set.UpdateParamSetting.decode(reader, reader.uint32()));
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an UpdateObject message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof usp.Set.UpdateObject
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {usp.Set.UpdateObject} UpdateObject
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UpdateObject.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an UpdateObject message.
             * @function verify
             * @memberof usp.Set.UpdateObject
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UpdateObject.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.objPath != null && message.hasOwnProperty("objPath"))
                    if (!$util.isString(message.objPath))
                        return "objPath: string expected";
                if (message.paramSettings != null && message.hasOwnProperty("paramSettings")) {
                    if (!Array.isArray(message.paramSettings))
                        return "paramSettings: array expected";
                    for (let i = 0; i < message.paramSettings.length; ++i) {
                        let error = $root.usp.Set.UpdateParamSetting.verify(message.paramSettings[i]);
                        if (error)
                            return "paramSettings." + error;
                    }
                }
                return null;
            };

            /**
             * Creates an UpdateObject message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof usp.Set.UpdateObject
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {usp.Set.UpdateObject} UpdateObject
             */
            UpdateObject.fromObject = function fromObject(object) {
                if (object instanceof $root.usp.Set.UpdateObject)
                    return object;
                let message = new $root.usp.Set.UpdateObject();
                if (object.objPath != null)
                    message.objPath = String(object.objPath);
                if (object.paramSettings) {
                    if (!Array.isArray(object.paramSettings))
                        throw TypeError(".usp.Set.UpdateObject.paramSettings: array expected");
                    message.paramSettings = [];
                    for (let i = 0; i < object.paramSettings.length; ++i) {
                        if (typeof object.paramSettings[i] !== "object")
                            throw TypeError(".usp.Set.UpdateObject.paramSettings: object expected");
                        message.paramSettings[i] = $root.usp.Set.UpdateParamSetting.fromObject(object.paramSettings[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from an UpdateObject message. Also converts values to other types if specified.
             * @function toObject
             * @memberof usp.Set.UpdateObject
             * @static
             * @param {usp.Set.UpdateObject} message UpdateObject
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UpdateObject.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.paramSettings = [];
                if (options.defaults)
                    object.objPath = "";
                if (message.objPath != null && message.hasOwnProperty("objPath"))
                    object.objPath = message.objPath;
                if (message.paramSettings && message.paramSettings.length) {
                    object.paramSettings = [];
                    for (let j = 0; j < message.paramSettings.length; ++j)
                        object.paramSettings[j] = $root.usp.Set.UpdateParamSetting.toObject(message.paramSettings[j], options);
                }
                return object;
            };

            /**
             * Converts this UpdateObject to JSON.
             * @function toJSON
             * @memberof usp.Set.UpdateObject
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UpdateObject.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for UpdateObject
             * @function getTypeUrl
             * @memberof usp.Set.UpdateObject
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            UpdateObject.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/usp.Set.UpdateObject";
            };

            return UpdateObject;
        })();

        Set.UpdateParamSetting = (function() {

            /**
             * Properties of an UpdateParamSetting.
             * @memberof usp.Set
             * @interface IUpdateParamSetting
             * @property {string|null} [param] UpdateParamSetting param
             * @property {string|null} [value] UpdateParamSetting value
             * @property {boolean|null} [required] UpdateParamSetting required
             */

            /**
             * Constructs a new UpdateParamSetting.
             * @memberof usp.Set
             * @classdesc Represents an UpdateParamSetting.
             * @implements IUpdateParamSetting
             * @constructor
             * @param {usp.Set.IUpdateParamSetting=} [properties] Properties to set
             */
            function UpdateParamSetting(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * UpdateParamSetting param.
             * @member {string} param
             * @memberof usp.Set.UpdateParamSetting
             * @instance
             */
            UpdateParamSetting.prototype.param = "";

            /**
             * UpdateParamSetting value.
             * @member {string} value
             * @memberof usp.Set.UpdateParamSetting
             * @instance
             */
            UpdateParamSetting.prototype.value = "";

            /**
             * UpdateParamSetting required.
             * @member {boolean} required
             * @memberof usp.Set.UpdateParamSetting
             * @instance
             */
            UpdateParamSetting.prototype.required = false;

            /**
             * Creates a new UpdateParamSetting instance using the specified properties.
             * @function create
             * @memberof usp.Set.UpdateParamSetting
             * @static
             * @param {usp.Set.IUpdateParamSetting=} [properties] Properties to set
             * @returns {usp.Set.UpdateParamSetting} UpdateParamSetting instance
             */
            UpdateParamSetting.create = function create(properties) {
                return new UpdateParamSetting(properties);
            };

            /**
             * Encodes the specified UpdateParamSetting message. Does not implicitly {@link usp.Set.UpdateParamSetting.verify|verify} messages.
             * @function encode
             * @memberof usp.Set.UpdateParamSetting
             * @static
             * @param {usp.Set.IUpdateParamSetting} message UpdateParamSetting message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UpdateParamSetting.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.param != null && Object.hasOwnProperty.call(message, "param"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.param);
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.value);
                if (message.required != null && Object.hasOwnProperty.call(message, "required"))
                    writer.uint32(/* id 3, wireType 0 =*/24).bool(message.required);
                return writer;
            };

            /**
             * Encodes the specified UpdateParamSetting message, length delimited. Does not implicitly {@link usp.Set.UpdateParamSetting.verify|verify} messages.
             * @function encodeDelimited
             * @memberof usp.Set.UpdateParamSetting
             * @static
             * @param {usp.Set.IUpdateParamSetting} message UpdateParamSetting message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UpdateParamSetting.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an UpdateParamSetting message from the specified reader or buffer.
             * @function decode
             * @memberof usp.Set.UpdateParamSetting
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {usp.Set.UpdateParamSetting} UpdateParamSetting
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UpdateParamSetting.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.usp.Set.UpdateParamSetting();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.param = reader.string();
                            break;
                        }
                    case 2: {
                            message.value = reader.string();
                            break;
                        }
                    case 3: {
                            message.required = reader.bool();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an UpdateParamSetting message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof usp.Set.UpdateParamSetting
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {usp.Set.UpdateParamSetting} UpdateParamSetting
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UpdateParamSetting.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an UpdateParamSetting message.
             * @function verify
             * @memberof usp.Set.UpdateParamSetting
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UpdateParamSetting.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.param != null && message.hasOwnProperty("param"))
                    if (!$util.isString(message.param))
                        return "param: string expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!$util.isString(message.value))
                        return "value: string expected";
                if (message.required != null && message.hasOwnProperty("required"))
                    if (typeof message.required !== "boolean")
                        return "required: boolean expected";
                return null;
            };

            /**
             * Creates an UpdateParamSetting message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof usp.Set.UpdateParamSetting
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {usp.Set.UpdateParamSetting} UpdateParamSetting
             */
            UpdateParamSetting.fromObject = function fromObject(object) {
                if (object instanceof $root.usp.Set.UpdateParamSetting)
                    return object;
                let message = new $root.usp.Set.UpdateParamSetting();
                if (object.param != null)
                    message.param = String(object.param);
                if (object.value != null)
                    message.value = String(object.value);
                if (object.required != null)
                    message.required = Boolean(object.required);
                return message;
            };

            /**
             * Creates a plain object from an UpdateParamSetting message. Also converts values to other types if specified.
             * @function toObject
             * @memberof usp.Set.UpdateParamSetting
             * @static
             * @param {usp.Set.UpdateParamSetting} message UpdateParamSetting
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UpdateParamSetting.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.param = "";
                    object.value = "";
                    object.required = false;
                }
                if (message.param != null && message.hasOwnProperty("param"))
                    object.param = message.param;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = message.value;
                if (message.required != null && message.hasOwnProperty("required"))
                    object.required = message.required;
                return object;
            };

            /**
             * Converts this UpdateParamSetting to JSON.
             * @function toJSON
             * @memberof usp.Set.UpdateParamSetting
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UpdateParamSetting.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for UpdateParamSetting
             * @function getTypeUrl
             * @memberof usp.Set.UpdateParamSetting
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            UpdateParamSetting.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/usp.Set.UpdateParamSetting";
            };

            return UpdateParamSetting;
        })();

        return Set;
    })();

    usp.SetResp = (function() {

        /**
         * Properties of a SetResp.
         * @memberof usp
         * @interface ISetResp
         * @property {Array.<usp.SetResp.IUpdatedObjectResult>|null} [updatedObjResults] SetResp updatedObjResults
         */

        /**
         * Constructs a new SetResp.
         * @memberof usp
         * @classdesc Represents a SetResp.
         * @implements ISetResp
         * @constructor
         * @param {usp.ISetResp=} [properties] Properties to set
         */
        function SetResp(properties) {
            this.updatedObjResults = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SetResp updatedObjResults.
         * @member {Array.<usp.SetResp.IUpdatedObjectResult>} updatedObjResults
         * @memberof usp.SetResp
         * @instance
         */
        SetResp.prototype.updatedObjResults = $util.emptyArray;

        /**
         * Creates a new SetResp instance using the specified properties.
         * @function create
         * @memberof usp.SetResp
         * @static
         * @param {usp.ISetResp=} [properties] Properties to set
         * @returns {usp.SetResp} SetResp instance
         */
        SetResp.create = function create(properties) {
            return new SetResp(properties);
        };

        /**
         * Encodes the specified SetResp message. Does not implicitly {@link usp.SetResp.verify|verify} messages.
         * @function encode
         * @memberof usp.SetResp
         * @static
         * @param {usp.ISetResp} message SetResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SetResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.updatedObjResults != null && message.updatedObjResults.length)
                for (let i = 0; i < message.updatedObjResults.length; ++i)
                    $root.usp.SetResp.UpdatedObjectResult.encode(message.updatedObjResults[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SetResp message, length delimited. Does not implicitly {@link usp.SetResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof usp.SetResp
         * @static
         * @param {usp.ISetResp} message SetResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SetResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SetResp message from the specified reader or buffer.
         * @function decode
         * @memberof usp.SetResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {usp.SetResp} SetResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SetResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.usp.SetResp();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.updatedObjResults && message.updatedObjResults.length))
                            message.updatedObjResults = [];
                        message.updatedObjResults.push($root.usp.SetResp.UpdatedObjectResult.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SetResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof usp.SetResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {usp.SetResp} SetResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SetResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SetResp message.
         * @function verify
         * @memberof usp.SetResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SetResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.updatedObjResults != null && message.hasOwnProperty("updatedObjResults")) {
                if (!Array.isArray(message.updatedObjResults))
                    return "updatedObjResults: array expected";
                for (let i = 0; i < message.updatedObjResults.length; ++i) {
                    let error = $root.usp.SetResp.UpdatedObjectResult.verify(message.updatedObjResults[i]);
                    if (error)
                        return "updatedObjResults." + error;
                }
            }
            return null;
        };

        /**
         * Creates a SetResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof usp.SetResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {usp.SetResp} SetResp
         */
        SetResp.fromObject = function fromObject(object) {
            if (object instanceof $root.usp.SetResp)
                return object;
            let message = new $root.usp.SetResp();
            if (object.updatedObjResults) {
                if (!Array.isArray(object.updatedObjResults))
                    throw TypeError(".usp.SetResp.updatedObjResults: array expected");
                message.updatedObjResults = [];
                for (let i = 0; i < object.updatedObjResults.length; ++i) {
                    if (typeof object.updatedObjResults[i] !== "object")
                        throw TypeError(".usp.SetResp.updatedObjResults: object expected");
                    message.updatedObjResults[i] = $root.usp.SetResp.UpdatedObjectResult.fromObject(object.updatedObjResults[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a SetResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof usp.SetResp
         * @static
         * @param {usp.SetResp} message SetResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SetResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.updatedObjResults = [];
            if (message.updatedObjResults && message.updatedObjResults.length) {
                object.updatedObjResults = [];
                for (let j = 0; j < message.updatedObjResults.length; ++j)
                    object.updatedObjResults[j] = $root.usp.SetResp.UpdatedObjectResult.toObject(message.updatedObjResults[j], options);
            }
            return object;
        };

        /**
         * Converts this SetResp to JSON.
         * @function toJSON
         * @memberof usp.SetResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SetResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SetResp
         * @function getTypeUrl
         * @memberof usp.SetResp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SetResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/usp.SetResp";
        };

        SetResp.UpdatedObjectResult = (function() {

            /**
             * Properties of an UpdatedObjectResult.
             * @memberof usp.SetResp
             * @interface IUpdatedObjectResult
             * @property {string|null} [requestedPath] UpdatedObjectResult requestedPath
             * @property {usp.SetResp.UpdatedObjectResult.IOperationStatus|null} [operStatus] UpdatedObjectResult operStatus
             */

            /**
             * Constructs a new UpdatedObjectResult.
             * @memberof usp.SetResp
             * @classdesc Represents an UpdatedObjectResult.
             * @implements IUpdatedObjectResult
             * @constructor
             * @param {usp.SetResp.IUpdatedObjectResult=} [properties] Properties to set
             */
            function UpdatedObjectResult(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * UpdatedObjectResult requestedPath.
             * @member {string} requestedPath
             * @memberof usp.SetResp.UpdatedObjectResult
             * @instance
             */
            UpdatedObjectResult.prototype.requestedPath = "";

            /**
             * UpdatedObjectResult operStatus.
             * @member {usp.SetResp.UpdatedObjectResult.IOperationStatus|null|undefined} operStatus
             * @memberof usp.SetResp.UpdatedObjectResult
             * @instance
             */
            UpdatedObjectResult.prototype.operStatus = null;

            /**
             * Creates a new UpdatedObjectResult instance using the specified properties.
             * @function create
             * @memberof usp.SetResp.UpdatedObjectResult
             * @static
             * @param {usp.SetResp.IUpdatedObjectResult=} [properties] Properties to set
             * @returns {usp.SetResp.UpdatedObjectResult} UpdatedObjectResult instance
             */
            UpdatedObjectResult.create = function create(properties) {
                return new UpdatedObjectResult(properties);
            };

            /**
             * Encodes the specified UpdatedObjectResult message. Does not implicitly {@link usp.SetResp.UpdatedObjectResult.verify|verify} messages.
             * @function encode
             * @memberof usp.SetResp.UpdatedObjectResult
             * @static
             * @param {usp.SetResp.IUpdatedObjectResult} message UpdatedObjectResult message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UpdatedObjectResult.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.requestedPath != null && Object.hasOwnProperty.call(message, "requestedPath"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.requestedPath);
                if (message.operStatus != null && Object.hasOwnProperty.call(message, "operStatus"))
                    $root.usp.SetResp.UpdatedObjectResult.OperationStatus.encode(message.operStatus, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified UpdatedObjectResult message, length delimited. Does not implicitly {@link usp.SetResp.UpdatedObjectResult.verify|verify} messages.
             * @function encodeDelimited
             * @memberof usp.SetResp.UpdatedObjectResult
             * @static
             * @param {usp.SetResp.IUpdatedObjectResult} message UpdatedObjectResult message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UpdatedObjectResult.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an UpdatedObjectResult message from the specified reader or buffer.
             * @function decode
             * @memberof usp.SetResp.UpdatedObjectResult
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {usp.SetResp.UpdatedObjectResult} UpdatedObjectResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UpdatedObjectResult.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.usp.SetResp.UpdatedObjectResult();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.requestedPath = reader.string();
                            break;
                        }
                    case 2: {
                            message.operStatus = $root.usp.SetResp.UpdatedObjectResult.OperationStatus.decode(reader, reader.uint32());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an UpdatedObjectResult message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof usp.SetResp.UpdatedObjectResult
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {usp.SetResp.UpdatedObjectResult} UpdatedObjectResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UpdatedObjectResult.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an UpdatedObjectResult message.
             * @function verify
             * @memberof usp.SetResp.UpdatedObjectResult
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UpdatedObjectResult.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.requestedPath != null && message.hasOwnProperty("requestedPath"))
                    if (!$util.isString(message.requestedPath))
                        return "requestedPath: string expected";
                if (message.operStatus != null && message.hasOwnProperty("operStatus")) {
                    let error = $root.usp.SetResp.UpdatedObjectResult.OperationStatus.verify(message.operStatus);
                    if (error)
                        return "operStatus." + error;
                }
                return null;
            };

            /**
             * Creates an UpdatedObjectResult message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof usp.SetResp.UpdatedObjectResult
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {usp.SetResp.UpdatedObjectResult} UpdatedObjectResult
             */
            UpdatedObjectResult.fromObject = function fromObject(object) {
                if (object instanceof $root.usp.SetResp.UpdatedObjectResult)
                    return object;
                let message = new $root.usp.SetResp.UpdatedObjectResult();
                if (object.requestedPath != null)
                    message.requestedPath = String(object.requestedPath);
                if (object.operStatus != null) {
                    if (typeof object.operStatus !== "object")
                        throw TypeError(".usp.SetResp.UpdatedObjectResult.operStatus: object expected");
                    message.operStatus = $root.usp.SetResp.UpdatedObjectResult.OperationStatus.fromObject(object.operStatus);
                }
                return message;
            };

            /**
             * Creates a plain object from an UpdatedObjectResult message. Also converts values to other types if specified.
             * @function toObject
             * @memberof usp.SetResp.UpdatedObjectResult
             * @static
             * @param {usp.SetResp.UpdatedObjectResult} message UpdatedObjectResult
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UpdatedObjectResult.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.requestedPath = "";
                    object.operStatus = null;
                }
                if (message.requestedPath != null && message.hasOwnProperty("requestedPath"))
                    object.requestedPath = message.requestedPath;
                if (message.operStatus != null && message.hasOwnProperty("operStatus"))
                    object.operStatus = $root.usp.SetResp.UpdatedObjectResult.OperationStatus.toObject(message.operStatus, options);
                return object;
            };

            /**
             * Converts this UpdatedObjectResult to JSON.
             * @function toJSON
             * @memberof usp.SetResp.UpdatedObjectResult
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UpdatedObjectResult.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for UpdatedObjectResult
             * @function getTypeUrl
             * @memberof usp.SetResp.UpdatedObjectResult
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            UpdatedObjectResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/usp.SetResp.UpdatedObjectResult";
            };

            UpdatedObjectResult.OperationStatus = (function() {

                /**
                 * Properties of an OperationStatus.
                 * @memberof usp.SetResp.UpdatedObjectResult
                 * @interface IOperationStatus
                 * @property {usp.SetResp.UpdatedObjectResult.OperationStatus.IOperationFailure|null} [operFailure] OperationStatus operFailure
                 * @property {usp.SetResp.UpdatedObjectResult.OperationStatus.IOperationSuccess|null} [operSuccess] OperationStatus operSuccess
                 */

                /**
                 * Constructs a new OperationStatus.
                 * @memberof usp.SetResp.UpdatedObjectResult
                 * @classdesc Represents an OperationStatus.
                 * @implements IOperationStatus
                 * @constructor
                 * @param {usp.SetResp.UpdatedObjectResult.IOperationStatus=} [properties] Properties to set
                 */
                function OperationStatus(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * OperationStatus operFailure.
                 * @member {usp.SetResp.UpdatedObjectResult.OperationStatus.IOperationFailure|null|undefined} operFailure
                 * @memberof usp.SetResp.UpdatedObjectResult.OperationStatus
                 * @instance
                 */
                OperationStatus.prototype.operFailure = null;

                /**
                 * OperationStatus operSuccess.
                 * @member {usp.SetResp.UpdatedObjectResult.OperationStatus.IOperationSuccess|null|undefined} operSuccess
                 * @memberof usp.SetResp.UpdatedObjectResult.OperationStatus
                 * @instance
                 */
                OperationStatus.prototype.operSuccess = null;

                // OneOf field names bound to virtual getters and setters
                let $oneOfFields;

                /**
                 * OperationStatus operStatus.
                 * @member {"operFailure"|"operSuccess"|undefined} operStatus
                 * @memberof usp.SetResp.UpdatedObjectResult.OperationStatus
                 * @instance
                 */
                Object.defineProperty(OperationStatus.prototype, "operStatus", {
                    get: $util.oneOfGetter($oneOfFields = ["operFailure", "operSuccess"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * Creates a new OperationStatus instance using the specified properties.
                 * @function create
                 * @memberof usp.SetResp.UpdatedObjectResult.OperationStatus
                 * @static
                 * @param {usp.SetResp.UpdatedObjectResult.IOperationStatus=} [properties] Properties to set
                 * @returns {usp.SetResp.UpdatedObjectResult.OperationStatus} OperationStatus instance
                 */
                OperationStatus.create = function create(properties) {
                    return new OperationStatus(properties);
                };

                /**
                 * Encodes the specified OperationStatus message. Does not implicitly {@link usp.SetResp.UpdatedObjectResult.OperationStatus.verify|verify} messages.
                 * @function encode
                 * @memberof usp.SetResp.UpdatedObjectResult.OperationStatus
                 * @static
                 * @param {usp.SetResp.UpdatedObjectResult.IOperationStatus} message OperationStatus message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                OperationStatus.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.operFailure != null && Object.hasOwnProperty.call(message, "operFailure"))
                        $root.usp.SetResp.UpdatedObjectResult.OperationStatus.OperationFailure.encode(message.operFailure, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.operSuccess != null && Object.hasOwnProperty.call(message, "operSuccess"))
                        $root.usp.SetResp.UpdatedObjectResult.OperationStatus.OperationSuccess.encode(message.operSuccess, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified OperationStatus message, length delimited. Does not implicitly {@link usp.SetResp.UpdatedObjectResult.OperationStatus.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof usp.SetResp.UpdatedObjectResult.OperationStatus
                 * @static
                 * @param {usp.SetResp.UpdatedObjectResult.IOperationStatus} message OperationStatus message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                OperationStatus.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an OperationStatus message from the specified reader or buffer.
                 * @function decode
                 * @memberof usp.SetResp.UpdatedObjectResult.OperationStatus
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {usp.SetResp.UpdatedObjectResult.OperationStatus} OperationStatus
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                OperationStatus.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.usp.SetResp.UpdatedObjectResult.OperationStatus();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.operFailure = $root.usp.SetResp.UpdatedObjectResult.OperationStatus.OperationFailure.decode(reader, reader.uint32());
                                break;
                            }
                        case 2: {
                                message.operSuccess = $root.usp.SetResp.UpdatedObjectResult.OperationStatus.OperationSuccess.decode(reader, reader.uint32());
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an OperationStatus message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof usp.SetResp.UpdatedObjectResult.OperationStatus
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {usp.SetResp.UpdatedObjectResult.OperationStatus} OperationStatus
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                OperationStatus.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an OperationStatus message.
                 * @function verify
                 * @memberof usp.SetResp.UpdatedObjectResult.OperationStatus
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                OperationStatus.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    let properties = {};
                    if (message.operFailure != null && message.hasOwnProperty("operFailure")) {
                        properties.operStatus = 1;
                        {
                            let error = $root.usp.SetResp.UpdatedObjectResult.OperationStatus.OperationFailure.verify(message.operFailure);
                            if (error)
                                return "operFailure." + error;
                        }
                    }
                    if (message.operSuccess != null && message.hasOwnProperty("operSuccess")) {
                        if (properties.operStatus === 1)
                            return "operStatus: multiple values";
                        properties.operStatus = 1;
                        {
                            let error = $root.usp.SetResp.UpdatedObjectResult.OperationStatus.OperationSuccess.verify(message.operSuccess);
                            if (error)
                                return "operSuccess." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates an OperationStatus message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof usp.SetResp.UpdatedObjectResult.OperationStatus
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {usp.SetResp.UpdatedObjectResult.OperationStatus} OperationStatus
                 */
                OperationStatus.fromObject = function fromObject(object) {
                    if (object instanceof $root.usp.SetResp.UpdatedObjectResult.OperationStatus)
                        return object;
                    let message = new $root.usp.SetResp.UpdatedObjectResult.OperationStatus();
                    if (object.operFailure != null) {
                        if (typeof object.operFailure !== "object")
                            throw TypeError(".usp.SetResp.UpdatedObjectResult.OperationStatus.operFailure: object expected");
                        message.operFailure = $root.usp.SetResp.UpdatedObjectResult.OperationStatus.OperationFailure.fromObject(object.operFailure);
                    }
                    if (object.operSuccess != null) {
                        if (typeof object.operSuccess !== "object")
                            throw TypeError(".usp.SetResp.UpdatedObjectResult.OperationStatus.operSuccess: object expected");
                        message.operSuccess = $root.usp.SetResp.UpdatedObjectResult.OperationStatus.OperationSuccess.fromObject(object.operSuccess);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from an OperationStatus message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof usp.SetResp.UpdatedObjectResult.OperationStatus
                 * @static
                 * @param {usp.SetResp.UpdatedObjectResult.OperationStatus} message OperationStatus
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                OperationStatus.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (message.operFailure != null && message.hasOwnProperty("operFailure")) {
                        object.operFailure = $root.usp.SetResp.UpdatedObjectResult.OperationStatus.OperationFailure.toObject(message.operFailure, options);
                        if (options.oneofs)
                            object.operStatus = "operFailure";
                    }
                    if (message.operSuccess != null && message.hasOwnProperty("operSuccess")) {
                        object.operSuccess = $root.usp.SetResp.UpdatedObjectResult.OperationStatus.OperationSuccess.toObject(message.operSuccess, options);
                        if (options.oneofs)
                            object.operStatus = "operSuccess";
                    }
                    return object;
                };

                /**
                 * Converts this OperationStatus to JSON.
                 * @function toJSON
                 * @memberof usp.SetResp.UpdatedObjectResult.OperationStatus
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                OperationStatus.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for OperationStatus
                 * @function getTypeUrl
                 * @memberof usp.SetResp.UpdatedObjectResult.OperationStatus
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                OperationStatus.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/usp.SetResp.UpdatedObjectResult.OperationStatus";
                };

                OperationStatus.OperationFailure = (function() {

                    /**
                     * Properties of an OperationFailure.
                     * @memberof usp.SetResp.UpdatedObjectResult.OperationStatus
                     * @interface IOperationFailure
                     * @property {number|null} [errCode] OperationFailure errCode
                     * @property {string|null} [errMsg] OperationFailure errMsg
                     * @property {Array.<usp.SetResp.IUpdatedInstanceFailure>|null} [updatedInstFailures] OperationFailure updatedInstFailures
                     */

                    /**
                     * Constructs a new OperationFailure.
                     * @memberof usp.SetResp.UpdatedObjectResult.OperationStatus
                     * @classdesc Represents an OperationFailure.
                     * @implements IOperationFailure
                     * @constructor
                     * @param {usp.SetResp.UpdatedObjectResult.OperationStatus.IOperationFailure=} [properties] Properties to set
                     */
                    function OperationFailure(properties) {
                        this.updatedInstFailures = [];
                        if (properties)
                            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * OperationFailure errCode.
                     * @member {number} errCode
                     * @memberof usp.SetResp.UpdatedObjectResult.OperationStatus.OperationFailure
                     * @instance
                     */
                    OperationFailure.prototype.errCode = 0;

                    /**
                     * OperationFailure errMsg.
                     * @member {string} errMsg
                     * @memberof usp.SetResp.UpdatedObjectResult.OperationStatus.OperationFailure
                     * @instance
                     */
                    OperationFailure.prototype.errMsg = "";

                    /**
                     * OperationFailure updatedInstFailures.
                     * @member {Array.<usp.SetResp.IUpdatedInstanceFailure>} updatedInstFailures
                     * @memberof usp.SetResp.UpdatedObjectResult.OperationStatus.OperationFailure
                     * @instance
                     */
                    OperationFailure.prototype.updatedInstFailures = $util.emptyArray;

                    /**
                     * Creates a new OperationFailure instance using the specified properties.
                     * @function create
                     * @memberof usp.SetResp.UpdatedObjectResult.OperationStatus.OperationFailure
                     * @static
                     * @param {usp.SetResp.UpdatedObjectResult.OperationStatus.IOperationFailure=} [properties] Properties to set
                     * @returns {usp.SetResp.UpdatedObjectResult.OperationStatus.OperationFailure} OperationFailure instance
                     */
                    OperationFailure.create = function create(properties) {
                        return new OperationFailure(properties);
                    };

                    /**
                     * Encodes the specified OperationFailure message. Does not implicitly {@link usp.SetResp.UpdatedObjectResult.OperationStatus.OperationFailure.verify|verify} messages.
                     * @function encode
                     * @memberof usp.SetResp.UpdatedObjectResult.OperationStatus.OperationFailure
                     * @static
                     * @param {usp.SetResp.UpdatedObjectResult.OperationStatus.IOperationFailure} message OperationFailure message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    OperationFailure.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.errCode != null && Object.hasOwnProperty.call(message, "errCode"))
                            writer.uint32(/* id 1, wireType 5 =*/13).fixed32(message.errCode);
                        if (message.errMsg != null && Object.hasOwnProperty.call(message, "errMsg"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.errMsg);
                        if (message.updatedInstFailures != null && message.updatedInstFailures.length)
                            for (let i = 0; i < message.updatedInstFailures.length; ++i)
                                $root.usp.SetResp.UpdatedInstanceFailure.encode(message.updatedInstFailures[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified OperationFailure message, length delimited. Does not implicitly {@link usp.SetResp.UpdatedObjectResult.OperationStatus.OperationFailure.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof usp.SetResp.UpdatedObjectResult.OperationStatus.OperationFailure
                     * @static
                     * @param {usp.SetResp.UpdatedObjectResult.OperationStatus.IOperationFailure} message OperationFailure message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    OperationFailure.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes an OperationFailure message from the specified reader or buffer.
                     * @function decode
                     * @memberof usp.SetResp.UpdatedObjectResult.OperationStatus.OperationFailure
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {usp.SetResp.UpdatedObjectResult.OperationStatus.OperationFailure} OperationFailure
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    OperationFailure.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.usp.SetResp.UpdatedObjectResult.OperationStatus.OperationFailure();
                        while (reader.pos < end) {
                            let tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    message.errCode = reader.fixed32();
                                    break;
                                }
                            case 2: {
                                    message.errMsg = reader.string();
                                    break;
                                }
                            case 3: {
                                    if (!(message.updatedInstFailures && message.updatedInstFailures.length))
                                        message.updatedInstFailures = [];
                                    message.updatedInstFailures.push($root.usp.SetResp.UpdatedInstanceFailure.decode(reader, reader.uint32()));
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes an OperationFailure message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof usp.SetResp.UpdatedObjectResult.OperationStatus.OperationFailure
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {usp.SetResp.UpdatedObjectResult.OperationStatus.OperationFailure} OperationFailure
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    OperationFailure.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies an OperationFailure message.
                     * @function verify
                     * @memberof usp.SetResp.UpdatedObjectResult.OperationStatus.OperationFailure
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    OperationFailure.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.errCode != null && message.hasOwnProperty("errCode"))
                            if (!$util.isInteger(message.errCode))
                                return "errCode: integer expected";
                        if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                            if (!$util.isString(message.errMsg))
                                return "errMsg: string expected";
                        if (message.updatedInstFailures != null && message.hasOwnProperty("updatedInstFailures")) {
                            if (!Array.isArray(message.updatedInstFailures))
                                return "updatedInstFailures: array expected";
                            for (let i = 0; i < message.updatedInstFailures.length; ++i) {
                                let error = $root.usp.SetResp.UpdatedInstanceFailure.verify(message.updatedInstFailures[i]);
                                if (error)
                                    return "updatedInstFailures." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates an OperationFailure message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof usp.SetResp.UpdatedObjectResult.OperationStatus.OperationFailure
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {usp.SetResp.UpdatedObjectResult.OperationStatus.OperationFailure} OperationFailure
                     */
                    OperationFailure.fromObject = function fromObject(object) {
                        if (object instanceof $root.usp.SetResp.UpdatedObjectResult.OperationStatus.OperationFailure)
                            return object;
                        let message = new $root.usp.SetResp.UpdatedObjectResult.OperationStatus.OperationFailure();
                        if (object.errCode != null)
                            message.errCode = object.errCode >>> 0;
                        if (object.errMsg != null)
                            message.errMsg = String(object.errMsg);
                        if (object.updatedInstFailures) {
                            if (!Array.isArray(object.updatedInstFailures))
                                throw TypeError(".usp.SetResp.UpdatedObjectResult.OperationStatus.OperationFailure.updatedInstFailures: array expected");
                            message.updatedInstFailures = [];
                            for (let i = 0; i < object.updatedInstFailures.length; ++i) {
                                if (typeof object.updatedInstFailures[i] !== "object")
                                    throw TypeError(".usp.SetResp.UpdatedObjectResult.OperationStatus.OperationFailure.updatedInstFailures: object expected");
                                message.updatedInstFailures[i] = $root.usp.SetResp.UpdatedInstanceFailure.fromObject(object.updatedInstFailures[i]);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from an OperationFailure message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof usp.SetResp.UpdatedObjectResult.OperationStatus.OperationFailure
                     * @static
                     * @param {usp.SetResp.UpdatedObjectResult.OperationStatus.OperationFailure} message OperationFailure
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    OperationFailure.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        let object = {};
                        if (options.arrays || options.defaults)
                            object.updatedInstFailures = [];
                        if (options.defaults) {
                            object.errCode = 0;
                            object.errMsg = "";
                        }
                        if (message.errCode != null && message.hasOwnProperty("errCode"))
                            object.errCode = message.errCode;
                        if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                            object.errMsg = message.errMsg;
                        if (message.updatedInstFailures && message.updatedInstFailures.length) {
                            object.updatedInstFailures = [];
                            for (let j = 0; j < message.updatedInstFailures.length; ++j)
                                object.updatedInstFailures[j] = $root.usp.SetResp.UpdatedInstanceFailure.toObject(message.updatedInstFailures[j], options);
                        }
                        return object;
                    };

                    /**
                     * Converts this OperationFailure to JSON.
                     * @function toJSON
                     * @memberof usp.SetResp.UpdatedObjectResult.OperationStatus.OperationFailure
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    OperationFailure.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for OperationFailure
                     * @function getTypeUrl
                     * @memberof usp.SetResp.UpdatedObjectResult.OperationStatus.OperationFailure
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    OperationFailure.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/usp.SetResp.UpdatedObjectResult.OperationStatus.OperationFailure";
                    };

                    return OperationFailure;
                })();

                OperationStatus.OperationSuccess = (function() {

                    /**
                     * Properties of an OperationSuccess.
                     * @memberof usp.SetResp.UpdatedObjectResult.OperationStatus
                     * @interface IOperationSuccess
                     * @property {Array.<usp.SetResp.IUpdatedInstanceResult>|null} [updatedInstResults] OperationSuccess updatedInstResults
                     */

                    /**
                     * Constructs a new OperationSuccess.
                     * @memberof usp.SetResp.UpdatedObjectResult.OperationStatus
                     * @classdesc Represents an OperationSuccess.
                     * @implements IOperationSuccess
                     * @constructor
                     * @param {usp.SetResp.UpdatedObjectResult.OperationStatus.IOperationSuccess=} [properties] Properties to set
                     */
                    function OperationSuccess(properties) {
                        this.updatedInstResults = [];
                        if (properties)
                            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * OperationSuccess updatedInstResults.
                     * @member {Array.<usp.SetResp.IUpdatedInstanceResult>} updatedInstResults
                     * @memberof usp.SetResp.UpdatedObjectResult.OperationStatus.OperationSuccess
                     * @instance
                     */
                    OperationSuccess.prototype.updatedInstResults = $util.emptyArray;

                    /**
                     * Creates a new OperationSuccess instance using the specified properties.
                     * @function create
                     * @memberof usp.SetResp.UpdatedObjectResult.OperationStatus.OperationSuccess
                     * @static
                     * @param {usp.SetResp.UpdatedObjectResult.OperationStatus.IOperationSuccess=} [properties] Properties to set
                     * @returns {usp.SetResp.UpdatedObjectResult.OperationStatus.OperationSuccess} OperationSuccess instance
                     */
                    OperationSuccess.create = function create(properties) {
                        return new OperationSuccess(properties);
                    };

                    /**
                     * Encodes the specified OperationSuccess message. Does not implicitly {@link usp.SetResp.UpdatedObjectResult.OperationStatus.OperationSuccess.verify|verify} messages.
                     * @function encode
                     * @memberof usp.SetResp.UpdatedObjectResult.OperationStatus.OperationSuccess
                     * @static
                     * @param {usp.SetResp.UpdatedObjectResult.OperationStatus.IOperationSuccess} message OperationSuccess message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    OperationSuccess.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.updatedInstResults != null && message.updatedInstResults.length)
                            for (let i = 0; i < message.updatedInstResults.length; ++i)
                                $root.usp.SetResp.UpdatedInstanceResult.encode(message.updatedInstResults[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };

                    /**
                     * Encodes the specified OperationSuccess message, length delimited. Does not implicitly {@link usp.SetResp.UpdatedObjectResult.OperationStatus.OperationSuccess.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof usp.SetResp.UpdatedObjectResult.OperationStatus.OperationSuccess
                     * @static
                     * @param {usp.SetResp.UpdatedObjectResult.OperationStatus.IOperationSuccess} message OperationSuccess message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    OperationSuccess.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes an OperationSuccess message from the specified reader or buffer.
                     * @function decode
                     * @memberof usp.SetResp.UpdatedObjectResult.OperationStatus.OperationSuccess
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {usp.SetResp.UpdatedObjectResult.OperationStatus.OperationSuccess} OperationSuccess
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    OperationSuccess.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.usp.SetResp.UpdatedObjectResult.OperationStatus.OperationSuccess();
                        while (reader.pos < end) {
                            let tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    if (!(message.updatedInstResults && message.updatedInstResults.length))
                                        message.updatedInstResults = [];
                                    message.updatedInstResults.push($root.usp.SetResp.UpdatedInstanceResult.decode(reader, reader.uint32()));
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes an OperationSuccess message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof usp.SetResp.UpdatedObjectResult.OperationStatus.OperationSuccess
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {usp.SetResp.UpdatedObjectResult.OperationStatus.OperationSuccess} OperationSuccess
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    OperationSuccess.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies an OperationSuccess message.
                     * @function verify
                     * @memberof usp.SetResp.UpdatedObjectResult.OperationStatus.OperationSuccess
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    OperationSuccess.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.updatedInstResults != null && message.hasOwnProperty("updatedInstResults")) {
                            if (!Array.isArray(message.updatedInstResults))
                                return "updatedInstResults: array expected";
                            for (let i = 0; i < message.updatedInstResults.length; ++i) {
                                let error = $root.usp.SetResp.UpdatedInstanceResult.verify(message.updatedInstResults[i]);
                                if (error)
                                    return "updatedInstResults." + error;
                            }
                        }
                        return null;
                    };

                    /**
                     * Creates an OperationSuccess message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof usp.SetResp.UpdatedObjectResult.OperationStatus.OperationSuccess
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {usp.SetResp.UpdatedObjectResult.OperationStatus.OperationSuccess} OperationSuccess
                     */
                    OperationSuccess.fromObject = function fromObject(object) {
                        if (object instanceof $root.usp.SetResp.UpdatedObjectResult.OperationStatus.OperationSuccess)
                            return object;
                        let message = new $root.usp.SetResp.UpdatedObjectResult.OperationStatus.OperationSuccess();
                        if (object.updatedInstResults) {
                            if (!Array.isArray(object.updatedInstResults))
                                throw TypeError(".usp.SetResp.UpdatedObjectResult.OperationStatus.OperationSuccess.updatedInstResults: array expected");
                            message.updatedInstResults = [];
                            for (let i = 0; i < object.updatedInstResults.length; ++i) {
                                if (typeof object.updatedInstResults[i] !== "object")
                                    throw TypeError(".usp.SetResp.UpdatedObjectResult.OperationStatus.OperationSuccess.updatedInstResults: object expected");
                                message.updatedInstResults[i] = $root.usp.SetResp.UpdatedInstanceResult.fromObject(object.updatedInstResults[i]);
                            }
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from an OperationSuccess message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof usp.SetResp.UpdatedObjectResult.OperationStatus.OperationSuccess
                     * @static
                     * @param {usp.SetResp.UpdatedObjectResult.OperationStatus.OperationSuccess} message OperationSuccess
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    OperationSuccess.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        let object = {};
                        if (options.arrays || options.defaults)
                            object.updatedInstResults = [];
                        if (message.updatedInstResults && message.updatedInstResults.length) {
                            object.updatedInstResults = [];
                            for (let j = 0; j < message.updatedInstResults.length; ++j)
                                object.updatedInstResults[j] = $root.usp.SetResp.UpdatedInstanceResult.toObject(message.updatedInstResults[j], options);
                        }
                        return object;
                    };

                    /**
                     * Converts this OperationSuccess to JSON.
                     * @function toJSON
                     * @memberof usp.SetResp.UpdatedObjectResult.OperationStatus.OperationSuccess
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    OperationSuccess.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for OperationSuccess
                     * @function getTypeUrl
                     * @memberof usp.SetResp.UpdatedObjectResult.OperationStatus.OperationSuccess
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    OperationSuccess.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/usp.SetResp.UpdatedObjectResult.OperationStatus.OperationSuccess";
                    };

                    return OperationSuccess;
                })();

                return OperationStatus;
            })();

            return UpdatedObjectResult;
        })();

        SetResp.UpdatedInstanceFailure = (function() {

            /**
             * Properties of an UpdatedInstanceFailure.
             * @memberof usp.SetResp
             * @interface IUpdatedInstanceFailure
             * @property {string|null} [affectedPath] UpdatedInstanceFailure affectedPath
             * @property {Array.<usp.SetResp.IParameterError>|null} [paramErrs] UpdatedInstanceFailure paramErrs
             */

            /**
             * Constructs a new UpdatedInstanceFailure.
             * @memberof usp.SetResp
             * @classdesc Represents an UpdatedInstanceFailure.
             * @implements IUpdatedInstanceFailure
             * @constructor
             * @param {usp.SetResp.IUpdatedInstanceFailure=} [properties] Properties to set
             */
            function UpdatedInstanceFailure(properties) {
                this.paramErrs = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * UpdatedInstanceFailure affectedPath.
             * @member {string} affectedPath
             * @memberof usp.SetResp.UpdatedInstanceFailure
             * @instance
             */
            UpdatedInstanceFailure.prototype.affectedPath = "";

            /**
             * UpdatedInstanceFailure paramErrs.
             * @member {Array.<usp.SetResp.IParameterError>} paramErrs
             * @memberof usp.SetResp.UpdatedInstanceFailure
             * @instance
             */
            UpdatedInstanceFailure.prototype.paramErrs = $util.emptyArray;

            /**
             * Creates a new UpdatedInstanceFailure instance using the specified properties.
             * @function create
             * @memberof usp.SetResp.UpdatedInstanceFailure
             * @static
             * @param {usp.SetResp.IUpdatedInstanceFailure=} [properties] Properties to set
             * @returns {usp.SetResp.UpdatedInstanceFailure} UpdatedInstanceFailure instance
             */
            UpdatedInstanceFailure.create = function create(properties) {
                return new UpdatedInstanceFailure(properties);
            };

            /**
             * Encodes the specified UpdatedInstanceFailure message. Does not implicitly {@link usp.SetResp.UpdatedInstanceFailure.verify|verify} messages.
             * @function encode
             * @memberof usp.SetResp.UpdatedInstanceFailure
             * @static
             * @param {usp.SetResp.IUpdatedInstanceFailure} message UpdatedInstanceFailure message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UpdatedInstanceFailure.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.affectedPath != null && Object.hasOwnProperty.call(message, "affectedPath"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.affectedPath);
                if (message.paramErrs != null && message.paramErrs.length)
                    for (let i = 0; i < message.paramErrs.length; ++i)
                        $root.usp.SetResp.ParameterError.encode(message.paramErrs[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified UpdatedInstanceFailure message, length delimited. Does not implicitly {@link usp.SetResp.UpdatedInstanceFailure.verify|verify} messages.
             * @function encodeDelimited
             * @memberof usp.SetResp.UpdatedInstanceFailure
             * @static
             * @param {usp.SetResp.IUpdatedInstanceFailure} message UpdatedInstanceFailure message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UpdatedInstanceFailure.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an UpdatedInstanceFailure message from the specified reader or buffer.
             * @function decode
             * @memberof usp.SetResp.UpdatedInstanceFailure
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {usp.SetResp.UpdatedInstanceFailure} UpdatedInstanceFailure
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UpdatedInstanceFailure.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.usp.SetResp.UpdatedInstanceFailure();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.affectedPath = reader.string();
                            break;
                        }
                    case 2: {
                            if (!(message.paramErrs && message.paramErrs.length))
                                message.paramErrs = [];
                            message.paramErrs.push($root.usp.SetResp.ParameterError.decode(reader, reader.uint32()));
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an UpdatedInstanceFailure message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof usp.SetResp.UpdatedInstanceFailure
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {usp.SetResp.UpdatedInstanceFailure} UpdatedInstanceFailure
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UpdatedInstanceFailure.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an UpdatedInstanceFailure message.
             * @function verify
             * @memberof usp.SetResp.UpdatedInstanceFailure
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UpdatedInstanceFailure.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.affectedPath != null && message.hasOwnProperty("affectedPath"))
                    if (!$util.isString(message.affectedPath))
                        return "affectedPath: string expected";
                if (message.paramErrs != null && message.hasOwnProperty("paramErrs")) {
                    if (!Array.isArray(message.paramErrs))
                        return "paramErrs: array expected";
                    for (let i = 0; i < message.paramErrs.length; ++i) {
                        let error = $root.usp.SetResp.ParameterError.verify(message.paramErrs[i]);
                        if (error)
                            return "paramErrs." + error;
                    }
                }
                return null;
            };

            /**
             * Creates an UpdatedInstanceFailure message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof usp.SetResp.UpdatedInstanceFailure
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {usp.SetResp.UpdatedInstanceFailure} UpdatedInstanceFailure
             */
            UpdatedInstanceFailure.fromObject = function fromObject(object) {
                if (object instanceof $root.usp.SetResp.UpdatedInstanceFailure)
                    return object;
                let message = new $root.usp.SetResp.UpdatedInstanceFailure();
                if (object.affectedPath != null)
                    message.affectedPath = String(object.affectedPath);
                if (object.paramErrs) {
                    if (!Array.isArray(object.paramErrs))
                        throw TypeError(".usp.SetResp.UpdatedInstanceFailure.paramErrs: array expected");
                    message.paramErrs = [];
                    for (let i = 0; i < object.paramErrs.length; ++i) {
                        if (typeof object.paramErrs[i] !== "object")
                            throw TypeError(".usp.SetResp.UpdatedInstanceFailure.paramErrs: object expected");
                        message.paramErrs[i] = $root.usp.SetResp.ParameterError.fromObject(object.paramErrs[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from an UpdatedInstanceFailure message. Also converts values to other types if specified.
             * @function toObject
             * @memberof usp.SetResp.UpdatedInstanceFailure
             * @static
             * @param {usp.SetResp.UpdatedInstanceFailure} message UpdatedInstanceFailure
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UpdatedInstanceFailure.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.paramErrs = [];
                if (options.defaults)
                    object.affectedPath = "";
                if (message.affectedPath != null && message.hasOwnProperty("affectedPath"))
                    object.affectedPath = message.affectedPath;
                if (message.paramErrs && message.paramErrs.length) {
                    object.paramErrs = [];
                    for (let j = 0; j < message.paramErrs.length; ++j)
                        object.paramErrs[j] = $root.usp.SetResp.ParameterError.toObject(message.paramErrs[j], options);
                }
                return object;
            };

            /**
             * Converts this UpdatedInstanceFailure to JSON.
             * @function toJSON
             * @memberof usp.SetResp.UpdatedInstanceFailure
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UpdatedInstanceFailure.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for UpdatedInstanceFailure
             * @function getTypeUrl
             * @memberof usp.SetResp.UpdatedInstanceFailure
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            UpdatedInstanceFailure.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/usp.SetResp.UpdatedInstanceFailure";
            };

            return UpdatedInstanceFailure;
        })();

        SetResp.UpdatedInstanceResult = (function() {

            /**
             * Properties of an UpdatedInstanceResult.
             * @memberof usp.SetResp
             * @interface IUpdatedInstanceResult
             * @property {string|null} [affectedPath] UpdatedInstanceResult affectedPath
             * @property {Array.<usp.SetResp.IParameterError>|null} [paramErrs] UpdatedInstanceResult paramErrs
             * @property {Object.<string,string>|null} [updatedParams] UpdatedInstanceResult updatedParams
             */

            /**
             * Constructs a new UpdatedInstanceResult.
             * @memberof usp.SetResp
             * @classdesc Represents an UpdatedInstanceResult.
             * @implements IUpdatedInstanceResult
             * @constructor
             * @param {usp.SetResp.IUpdatedInstanceResult=} [properties] Properties to set
             */
            function UpdatedInstanceResult(properties) {
                this.paramErrs = [];
                this.updatedParams = {};
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * UpdatedInstanceResult affectedPath.
             * @member {string} affectedPath
             * @memberof usp.SetResp.UpdatedInstanceResult
             * @instance
             */
            UpdatedInstanceResult.prototype.affectedPath = "";

            /**
             * UpdatedInstanceResult paramErrs.
             * @member {Array.<usp.SetResp.IParameterError>} paramErrs
             * @memberof usp.SetResp.UpdatedInstanceResult
             * @instance
             */
            UpdatedInstanceResult.prototype.paramErrs = $util.emptyArray;

            /**
             * UpdatedInstanceResult updatedParams.
             * @member {Object.<string,string>} updatedParams
             * @memberof usp.SetResp.UpdatedInstanceResult
             * @instance
             */
            UpdatedInstanceResult.prototype.updatedParams = $util.emptyObject;

            /**
             * Creates a new UpdatedInstanceResult instance using the specified properties.
             * @function create
             * @memberof usp.SetResp.UpdatedInstanceResult
             * @static
             * @param {usp.SetResp.IUpdatedInstanceResult=} [properties] Properties to set
             * @returns {usp.SetResp.UpdatedInstanceResult} UpdatedInstanceResult instance
             */
            UpdatedInstanceResult.create = function create(properties) {
                return new UpdatedInstanceResult(properties);
            };

            /**
             * Encodes the specified UpdatedInstanceResult message. Does not implicitly {@link usp.SetResp.UpdatedInstanceResult.verify|verify} messages.
             * @function encode
             * @memberof usp.SetResp.UpdatedInstanceResult
             * @static
             * @param {usp.SetResp.IUpdatedInstanceResult} message UpdatedInstanceResult message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UpdatedInstanceResult.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.affectedPath != null && Object.hasOwnProperty.call(message, "affectedPath"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.affectedPath);
                if (message.paramErrs != null && message.paramErrs.length)
                    for (let i = 0; i < message.paramErrs.length; ++i)
                        $root.usp.SetResp.ParameterError.encode(message.paramErrs[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.updatedParams != null && Object.hasOwnProperty.call(message, "updatedParams"))
                    for (let keys = Object.keys(message.updatedParams), i = 0; i < keys.length; ++i)
                        writer.uint32(/* id 3, wireType 2 =*/26).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.updatedParams[keys[i]]).ldelim();
                return writer;
            };

            /**
             * Encodes the specified UpdatedInstanceResult message, length delimited. Does not implicitly {@link usp.SetResp.UpdatedInstanceResult.verify|verify} messages.
             * @function encodeDelimited
             * @memberof usp.SetResp.UpdatedInstanceResult
             * @static
             * @param {usp.SetResp.IUpdatedInstanceResult} message UpdatedInstanceResult message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UpdatedInstanceResult.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an UpdatedInstanceResult message from the specified reader or buffer.
             * @function decode
             * @memberof usp.SetResp.UpdatedInstanceResult
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {usp.SetResp.UpdatedInstanceResult} UpdatedInstanceResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UpdatedInstanceResult.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.usp.SetResp.UpdatedInstanceResult(), key, value;
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.affectedPath = reader.string();
                            break;
                        }
                    case 2: {
                            if (!(message.paramErrs && message.paramErrs.length))
                                message.paramErrs = [];
                            message.paramErrs.push($root.usp.SetResp.ParameterError.decode(reader, reader.uint32()));
                            break;
                        }
                    case 3: {
                            if (message.updatedParams === $util.emptyObject)
                                message.updatedParams = {};
                            let end2 = reader.uint32() + reader.pos;
                            key = "";
                            value = "";
                            while (reader.pos < end2) {
                                let tag2 = reader.uint32();
                                switch (tag2 >>> 3) {
                                case 1:
                                    key = reader.string();
                                    break;
                                case 2:
                                    value = reader.string();
                                    break;
                                default:
                                    reader.skipType(tag2 & 7);
                                    break;
                                }
                            }
                            message.updatedParams[key] = value;
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an UpdatedInstanceResult message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof usp.SetResp.UpdatedInstanceResult
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {usp.SetResp.UpdatedInstanceResult} UpdatedInstanceResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UpdatedInstanceResult.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an UpdatedInstanceResult message.
             * @function verify
             * @memberof usp.SetResp.UpdatedInstanceResult
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UpdatedInstanceResult.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.affectedPath != null && message.hasOwnProperty("affectedPath"))
                    if (!$util.isString(message.affectedPath))
                        return "affectedPath: string expected";
                if (message.paramErrs != null && message.hasOwnProperty("paramErrs")) {
                    if (!Array.isArray(message.paramErrs))
                        return "paramErrs: array expected";
                    for (let i = 0; i < message.paramErrs.length; ++i) {
                        let error = $root.usp.SetResp.ParameterError.verify(message.paramErrs[i]);
                        if (error)
                            return "paramErrs." + error;
                    }
                }
                if (message.updatedParams != null && message.hasOwnProperty("updatedParams")) {
                    if (!$util.isObject(message.updatedParams))
                        return "updatedParams: object expected";
                    let key = Object.keys(message.updatedParams);
                    for (let i = 0; i < key.length; ++i)
                        if (!$util.isString(message.updatedParams[key[i]]))
                            return "updatedParams: string{k:string} expected";
                }
                return null;
            };

            /**
             * Creates an UpdatedInstanceResult message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof usp.SetResp.UpdatedInstanceResult
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {usp.SetResp.UpdatedInstanceResult} UpdatedInstanceResult
             */
            UpdatedInstanceResult.fromObject = function fromObject(object) {
                if (object instanceof $root.usp.SetResp.UpdatedInstanceResult)
                    return object;
                let message = new $root.usp.SetResp.UpdatedInstanceResult();
                if (object.affectedPath != null)
                    message.affectedPath = String(object.affectedPath);
                if (object.paramErrs) {
                    if (!Array.isArray(object.paramErrs))
                        throw TypeError(".usp.SetResp.UpdatedInstanceResult.paramErrs: array expected");
                    message.paramErrs = [];
                    for (let i = 0; i < object.paramErrs.length; ++i) {
                        if (typeof object.paramErrs[i] !== "object")
                            throw TypeError(".usp.SetResp.UpdatedInstanceResult.paramErrs: object expected");
                        message.paramErrs[i] = $root.usp.SetResp.ParameterError.fromObject(object.paramErrs[i]);
                    }
                }
                if (object.updatedParams) {
                    if (typeof object.updatedParams !== "object")
                        throw TypeError(".usp.SetResp.UpdatedInstanceResult.updatedParams: object expected");
                    message.updatedParams = {};
                    for (let keys = Object.keys(object.updatedParams), i = 0; i < keys.length; ++i)
                        message.updatedParams[keys[i]] = String(object.updatedParams[keys[i]]);
                }
                return message;
            };

            /**
             * Creates a plain object from an UpdatedInstanceResult message. Also converts values to other types if specified.
             * @function toObject
             * @memberof usp.SetResp.UpdatedInstanceResult
             * @static
             * @param {usp.SetResp.UpdatedInstanceResult} message UpdatedInstanceResult
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UpdatedInstanceResult.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.paramErrs = [];
                if (options.objects || options.defaults)
                    object.updatedParams = {};
                if (options.defaults)
                    object.affectedPath = "";
                if (message.affectedPath != null && message.hasOwnProperty("affectedPath"))
                    object.affectedPath = message.affectedPath;
                if (message.paramErrs && message.paramErrs.length) {
                    object.paramErrs = [];
                    for (let j = 0; j < message.paramErrs.length; ++j)
                        object.paramErrs[j] = $root.usp.SetResp.ParameterError.toObject(message.paramErrs[j], options);
                }
                let keys2;
                if (message.updatedParams && (keys2 = Object.keys(message.updatedParams)).length) {
                    object.updatedParams = {};
                    for (let j = 0; j < keys2.length; ++j)
                        object.updatedParams[keys2[j]] = message.updatedParams[keys2[j]];
                }
                return object;
            };

            /**
             * Converts this UpdatedInstanceResult to JSON.
             * @function toJSON
             * @memberof usp.SetResp.UpdatedInstanceResult
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UpdatedInstanceResult.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for UpdatedInstanceResult
             * @function getTypeUrl
             * @memberof usp.SetResp.UpdatedInstanceResult
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            UpdatedInstanceResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/usp.SetResp.UpdatedInstanceResult";
            };

            return UpdatedInstanceResult;
        })();

        SetResp.ParameterError = (function() {

            /**
             * Properties of a ParameterError.
             * @memberof usp.SetResp
             * @interface IParameterError
             * @property {string|null} [param] ParameterError param
             * @property {number|null} [errCode] ParameterError errCode
             * @property {string|null} [errMsg] ParameterError errMsg
             */

            /**
             * Constructs a new ParameterError.
             * @memberof usp.SetResp
             * @classdesc Represents a ParameterError.
             * @implements IParameterError
             * @constructor
             * @param {usp.SetResp.IParameterError=} [properties] Properties to set
             */
            function ParameterError(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ParameterError param.
             * @member {string} param
             * @memberof usp.SetResp.ParameterError
             * @instance
             */
            ParameterError.prototype.param = "";

            /**
             * ParameterError errCode.
             * @member {number} errCode
             * @memberof usp.SetResp.ParameterError
             * @instance
             */
            ParameterError.prototype.errCode = 0;

            /**
             * ParameterError errMsg.
             * @member {string} errMsg
             * @memberof usp.SetResp.ParameterError
             * @instance
             */
            ParameterError.prototype.errMsg = "";

            /**
             * Creates a new ParameterError instance using the specified properties.
             * @function create
             * @memberof usp.SetResp.ParameterError
             * @static
             * @param {usp.SetResp.IParameterError=} [properties] Properties to set
             * @returns {usp.SetResp.ParameterError} ParameterError instance
             */
            ParameterError.create = function create(properties) {
                return new ParameterError(properties);
            };

            /**
             * Encodes the specified ParameterError message. Does not implicitly {@link usp.SetResp.ParameterError.verify|verify} messages.
             * @function encode
             * @memberof usp.SetResp.ParameterError
             * @static
             * @param {usp.SetResp.IParameterError} message ParameterError message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ParameterError.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.param != null && Object.hasOwnProperty.call(message, "param"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.param);
                if (message.errCode != null && Object.hasOwnProperty.call(message, "errCode"))
                    writer.uint32(/* id 2, wireType 5 =*/21).fixed32(message.errCode);
                if (message.errMsg != null && Object.hasOwnProperty.call(message, "errMsg"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.errMsg);
                return writer;
            };

            /**
             * Encodes the specified ParameterError message, length delimited. Does not implicitly {@link usp.SetResp.ParameterError.verify|verify} messages.
             * @function encodeDelimited
             * @memberof usp.SetResp.ParameterError
             * @static
             * @param {usp.SetResp.IParameterError} message ParameterError message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ParameterError.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ParameterError message from the specified reader or buffer.
             * @function decode
             * @memberof usp.SetResp.ParameterError
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {usp.SetResp.ParameterError} ParameterError
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ParameterError.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.usp.SetResp.ParameterError();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.param = reader.string();
                            break;
                        }
                    case 2: {
                            message.errCode = reader.fixed32();
                            break;
                        }
                    case 3: {
                            message.errMsg = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ParameterError message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof usp.SetResp.ParameterError
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {usp.SetResp.ParameterError} ParameterError
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ParameterError.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ParameterError message.
             * @function verify
             * @memberof usp.SetResp.ParameterError
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ParameterError.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.param != null && message.hasOwnProperty("param"))
                    if (!$util.isString(message.param))
                        return "param: string expected";
                if (message.errCode != null && message.hasOwnProperty("errCode"))
                    if (!$util.isInteger(message.errCode))
                        return "errCode: integer expected";
                if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                    if (!$util.isString(message.errMsg))
                        return "errMsg: string expected";
                return null;
            };

            /**
             * Creates a ParameterError message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof usp.SetResp.ParameterError
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {usp.SetResp.ParameterError} ParameterError
             */
            ParameterError.fromObject = function fromObject(object) {
                if (object instanceof $root.usp.SetResp.ParameterError)
                    return object;
                let message = new $root.usp.SetResp.ParameterError();
                if (object.param != null)
                    message.param = String(object.param);
                if (object.errCode != null)
                    message.errCode = object.errCode >>> 0;
                if (object.errMsg != null)
                    message.errMsg = String(object.errMsg);
                return message;
            };

            /**
             * Creates a plain object from a ParameterError message. Also converts values to other types if specified.
             * @function toObject
             * @memberof usp.SetResp.ParameterError
             * @static
             * @param {usp.SetResp.ParameterError} message ParameterError
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ParameterError.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.param = "";
                    object.errCode = 0;
                    object.errMsg = "";
                }
                if (message.param != null && message.hasOwnProperty("param"))
                    object.param = message.param;
                if (message.errCode != null && message.hasOwnProperty("errCode"))
                    object.errCode = message.errCode;
                if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                    object.errMsg = message.errMsg;
                return object;
            };

            /**
             * Converts this ParameterError to JSON.
             * @function toJSON
             * @memberof usp.SetResp.ParameterError
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ParameterError.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ParameterError
             * @function getTypeUrl
             * @memberof usp.SetResp.ParameterError
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ParameterError.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/usp.SetResp.ParameterError";
            };

            return ParameterError;
        })();

        return SetResp;
    })();

    usp.Operate = (function() {

        /**
         * Properties of an Operate.
         * @memberof usp
         * @interface IOperate
         * @property {string|null} [command] Operate command
         * @property {string|null} [commandKey] Operate commandKey
         * @property {boolean|null} [sendResp] Operate sendResp
         * @property {Object.<string,string>|null} [inputArgs] Operate inputArgs
         */

        /**
         * Constructs a new Operate.
         * @memberof usp
         * @classdesc Represents an Operate.
         * @implements IOperate
         * @constructor
         * @param {usp.IOperate=} [properties] Properties to set
         */
        function Operate(properties) {
            this.inputArgs = {};
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Operate command.
         * @member {string} command
         * @memberof usp.Operate
         * @instance
         */
        Operate.prototype.command = "";

        /**
         * Operate commandKey.
         * @member {string} commandKey
         * @memberof usp.Operate
         * @instance
         */
        Operate.prototype.commandKey = "";

        /**
         * Operate sendResp.
         * @member {boolean} sendResp
         * @memberof usp.Operate
         * @instance
         */
        Operate.prototype.sendResp = false;

        /**
         * Operate inputArgs.
         * @member {Object.<string,string>} inputArgs
         * @memberof usp.Operate
         * @instance
         */
        Operate.prototype.inputArgs = $util.emptyObject;

        /**
         * Creates a new Operate instance using the specified properties.
         * @function create
         * @memberof usp.Operate
         * @static
         * @param {usp.IOperate=} [properties] Properties to set
         * @returns {usp.Operate} Operate instance
         */
        Operate.create = function create(properties) {
            return new Operate(properties);
        };

        /**
         * Encodes the specified Operate message. Does not implicitly {@link usp.Operate.verify|verify} messages.
         * @function encode
         * @memberof usp.Operate
         * @static
         * @param {usp.IOperate} message Operate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Operate.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.command != null && Object.hasOwnProperty.call(message, "command"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.command);
            if (message.commandKey != null && Object.hasOwnProperty.call(message, "commandKey"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.commandKey);
            if (message.sendResp != null && Object.hasOwnProperty.call(message, "sendResp"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.sendResp);
            if (message.inputArgs != null && Object.hasOwnProperty.call(message, "inputArgs"))
                for (let keys = Object.keys(message.inputArgs), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 4, wireType 2 =*/34).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.inputArgs[keys[i]]).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Operate message, length delimited. Does not implicitly {@link usp.Operate.verify|verify} messages.
         * @function encodeDelimited
         * @memberof usp.Operate
         * @static
         * @param {usp.IOperate} message Operate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Operate.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Operate message from the specified reader or buffer.
         * @function decode
         * @memberof usp.Operate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {usp.Operate} Operate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Operate.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.usp.Operate(), key, value;
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.command = reader.string();
                        break;
                    }
                case 2: {
                        message.commandKey = reader.string();
                        break;
                    }
                case 3: {
                        message.sendResp = reader.bool();
                        break;
                    }
                case 4: {
                        if (message.inputArgs === $util.emptyObject)
                            message.inputArgs = {};
                        let end2 = reader.uint32() + reader.pos;
                        key = "";
                        value = "";
                        while (reader.pos < end2) {
                            let tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.string();
                                break;
                            case 2:
                                value = reader.string();
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.inputArgs[key] = value;
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Operate message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof usp.Operate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {usp.Operate} Operate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Operate.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Operate message.
         * @function verify
         * @memberof usp.Operate
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Operate.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.command != null && message.hasOwnProperty("command"))
                if (!$util.isString(message.command))
                    return "command: string expected";
            if (message.commandKey != null && message.hasOwnProperty("commandKey"))
                if (!$util.isString(message.commandKey))
                    return "commandKey: string expected";
            if (message.sendResp != null && message.hasOwnProperty("sendResp"))
                if (typeof message.sendResp !== "boolean")
                    return "sendResp: boolean expected";
            if (message.inputArgs != null && message.hasOwnProperty("inputArgs")) {
                if (!$util.isObject(message.inputArgs))
                    return "inputArgs: object expected";
                let key = Object.keys(message.inputArgs);
                for (let i = 0; i < key.length; ++i)
                    if (!$util.isString(message.inputArgs[key[i]]))
                        return "inputArgs: string{k:string} expected";
            }
            return null;
        };

        /**
         * Creates an Operate message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof usp.Operate
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {usp.Operate} Operate
         */
        Operate.fromObject = function fromObject(object) {
            if (object instanceof $root.usp.Operate)
                return object;
            let message = new $root.usp.Operate();
            if (object.command != null)
                message.command = String(object.command);
            if (object.commandKey != null)
                message.commandKey = String(object.commandKey);
            if (object.sendResp != null)
                message.sendResp = Boolean(object.sendResp);
            if (object.inputArgs) {
                if (typeof object.inputArgs !== "object")
                    throw TypeError(".usp.Operate.inputArgs: object expected");
                message.inputArgs = {};
                for (let keys = Object.keys(object.inputArgs), i = 0; i < keys.length; ++i)
                    message.inputArgs[keys[i]] = String(object.inputArgs[keys[i]]);
            }
            return message;
        };

        /**
         * Creates a plain object from an Operate message. Also converts values to other types if specified.
         * @function toObject
         * @memberof usp.Operate
         * @static
         * @param {usp.Operate} message Operate
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Operate.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.objects || options.defaults)
                object.inputArgs = {};
            if (options.defaults) {
                object.command = "";
                object.commandKey = "";
                object.sendResp = false;
            }
            if (message.command != null && message.hasOwnProperty("command"))
                object.command = message.command;
            if (message.commandKey != null && message.hasOwnProperty("commandKey"))
                object.commandKey = message.commandKey;
            if (message.sendResp != null && message.hasOwnProperty("sendResp"))
                object.sendResp = message.sendResp;
            let keys2;
            if (message.inputArgs && (keys2 = Object.keys(message.inputArgs)).length) {
                object.inputArgs = {};
                for (let j = 0; j < keys2.length; ++j)
                    object.inputArgs[keys2[j]] = message.inputArgs[keys2[j]];
            }
            return object;
        };

        /**
         * Converts this Operate to JSON.
         * @function toJSON
         * @memberof usp.Operate
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Operate.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Operate
         * @function getTypeUrl
         * @memberof usp.Operate
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Operate.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/usp.Operate";
        };

        return Operate;
    })();

    usp.OperateResp = (function() {

        /**
         * Properties of an OperateResp.
         * @memberof usp
         * @interface IOperateResp
         * @property {Array.<usp.OperateResp.IOperationResult>|null} [operationResults] OperateResp operationResults
         */

        /**
         * Constructs a new OperateResp.
         * @memberof usp
         * @classdesc Represents an OperateResp.
         * @implements IOperateResp
         * @constructor
         * @param {usp.IOperateResp=} [properties] Properties to set
         */
        function OperateResp(properties) {
            this.operationResults = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * OperateResp operationResults.
         * @member {Array.<usp.OperateResp.IOperationResult>} operationResults
         * @memberof usp.OperateResp
         * @instance
         */
        OperateResp.prototype.operationResults = $util.emptyArray;

        /**
         * Creates a new OperateResp instance using the specified properties.
         * @function create
         * @memberof usp.OperateResp
         * @static
         * @param {usp.IOperateResp=} [properties] Properties to set
         * @returns {usp.OperateResp} OperateResp instance
         */
        OperateResp.create = function create(properties) {
            return new OperateResp(properties);
        };

        /**
         * Encodes the specified OperateResp message. Does not implicitly {@link usp.OperateResp.verify|verify} messages.
         * @function encode
         * @memberof usp.OperateResp
         * @static
         * @param {usp.IOperateResp} message OperateResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OperateResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.operationResults != null && message.operationResults.length)
                for (let i = 0; i < message.operationResults.length; ++i)
                    $root.usp.OperateResp.OperationResult.encode(message.operationResults[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified OperateResp message, length delimited. Does not implicitly {@link usp.OperateResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof usp.OperateResp
         * @static
         * @param {usp.IOperateResp} message OperateResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OperateResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an OperateResp message from the specified reader or buffer.
         * @function decode
         * @memberof usp.OperateResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {usp.OperateResp} OperateResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OperateResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.usp.OperateResp();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.operationResults && message.operationResults.length))
                            message.operationResults = [];
                        message.operationResults.push($root.usp.OperateResp.OperationResult.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an OperateResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof usp.OperateResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {usp.OperateResp} OperateResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OperateResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an OperateResp message.
         * @function verify
         * @memberof usp.OperateResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        OperateResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.operationResults != null && message.hasOwnProperty("operationResults")) {
                if (!Array.isArray(message.operationResults))
                    return "operationResults: array expected";
                for (let i = 0; i < message.operationResults.length; ++i) {
                    let error = $root.usp.OperateResp.OperationResult.verify(message.operationResults[i]);
                    if (error)
                        return "operationResults." + error;
                }
            }
            return null;
        };

        /**
         * Creates an OperateResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof usp.OperateResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {usp.OperateResp} OperateResp
         */
        OperateResp.fromObject = function fromObject(object) {
            if (object instanceof $root.usp.OperateResp)
                return object;
            let message = new $root.usp.OperateResp();
            if (object.operationResults) {
                if (!Array.isArray(object.operationResults))
                    throw TypeError(".usp.OperateResp.operationResults: array expected");
                message.operationResults = [];
                for (let i = 0; i < object.operationResults.length; ++i) {
                    if (typeof object.operationResults[i] !== "object")
                        throw TypeError(".usp.OperateResp.operationResults: object expected");
                    message.operationResults[i] = $root.usp.OperateResp.OperationResult.fromObject(object.operationResults[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an OperateResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof usp.OperateResp
         * @static
         * @param {usp.OperateResp} message OperateResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        OperateResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.operationResults = [];
            if (message.operationResults && message.operationResults.length) {
                object.operationResults = [];
                for (let j = 0; j < message.operationResults.length; ++j)
                    object.operationResults[j] = $root.usp.OperateResp.OperationResult.toObject(message.operationResults[j], options);
            }
            return object;
        };

        /**
         * Converts this OperateResp to JSON.
         * @function toJSON
         * @memberof usp.OperateResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        OperateResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for OperateResp
         * @function getTypeUrl
         * @memberof usp.OperateResp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        OperateResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/usp.OperateResp";
        };

        OperateResp.OperationResult = (function() {

            /**
             * Properties of an OperationResult.
             * @memberof usp.OperateResp
             * @interface IOperationResult
             * @property {string|null} [executedCommand] OperationResult executedCommand
             * @property {string|null} [reqObjPath] OperationResult reqObjPath
             * @property {usp.OperateResp.OperationResult.IOutputArgs|null} [reqOutputArgs] OperationResult reqOutputArgs
             * @property {usp.OperateResp.OperationResult.ICommandFailure|null} [cmdFailure] OperationResult cmdFailure
             */

            /**
             * Constructs a new OperationResult.
             * @memberof usp.OperateResp
             * @classdesc Represents an OperationResult.
             * @implements IOperationResult
             * @constructor
             * @param {usp.OperateResp.IOperationResult=} [properties] Properties to set
             */
            function OperationResult(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * OperationResult executedCommand.
             * @member {string} executedCommand
             * @memberof usp.OperateResp.OperationResult
             * @instance
             */
            OperationResult.prototype.executedCommand = "";

            /**
             * OperationResult reqObjPath.
             * @member {string|null|undefined} reqObjPath
             * @memberof usp.OperateResp.OperationResult
             * @instance
             */
            OperationResult.prototype.reqObjPath = null;

            /**
             * OperationResult reqOutputArgs.
             * @member {usp.OperateResp.OperationResult.IOutputArgs|null|undefined} reqOutputArgs
             * @memberof usp.OperateResp.OperationResult
             * @instance
             */
            OperationResult.prototype.reqOutputArgs = null;

            /**
             * OperationResult cmdFailure.
             * @member {usp.OperateResp.OperationResult.ICommandFailure|null|undefined} cmdFailure
             * @memberof usp.OperateResp.OperationResult
             * @instance
             */
            OperationResult.prototype.cmdFailure = null;

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            /**
             * OperationResult operationResp.
             * @member {"reqObjPath"|"reqOutputArgs"|"cmdFailure"|undefined} operationResp
             * @memberof usp.OperateResp.OperationResult
             * @instance
             */
            Object.defineProperty(OperationResult.prototype, "operationResp", {
                get: $util.oneOfGetter($oneOfFields = ["reqObjPath", "reqOutputArgs", "cmdFailure"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new OperationResult instance using the specified properties.
             * @function create
             * @memberof usp.OperateResp.OperationResult
             * @static
             * @param {usp.OperateResp.IOperationResult=} [properties] Properties to set
             * @returns {usp.OperateResp.OperationResult} OperationResult instance
             */
            OperationResult.create = function create(properties) {
                return new OperationResult(properties);
            };

            /**
             * Encodes the specified OperationResult message. Does not implicitly {@link usp.OperateResp.OperationResult.verify|verify} messages.
             * @function encode
             * @memberof usp.OperateResp.OperationResult
             * @static
             * @param {usp.OperateResp.IOperationResult} message OperationResult message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OperationResult.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.executedCommand != null && Object.hasOwnProperty.call(message, "executedCommand"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.executedCommand);
                if (message.reqObjPath != null && Object.hasOwnProperty.call(message, "reqObjPath"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.reqObjPath);
                if (message.reqOutputArgs != null && Object.hasOwnProperty.call(message, "reqOutputArgs"))
                    $root.usp.OperateResp.OperationResult.OutputArgs.encode(message.reqOutputArgs, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.cmdFailure != null && Object.hasOwnProperty.call(message, "cmdFailure"))
                    $root.usp.OperateResp.OperationResult.CommandFailure.encode(message.cmdFailure, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified OperationResult message, length delimited. Does not implicitly {@link usp.OperateResp.OperationResult.verify|verify} messages.
             * @function encodeDelimited
             * @memberof usp.OperateResp.OperationResult
             * @static
             * @param {usp.OperateResp.IOperationResult} message OperationResult message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OperationResult.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an OperationResult message from the specified reader or buffer.
             * @function decode
             * @memberof usp.OperateResp.OperationResult
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {usp.OperateResp.OperationResult} OperationResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OperationResult.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.usp.OperateResp.OperationResult();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.executedCommand = reader.string();
                            break;
                        }
                    case 2: {
                            message.reqObjPath = reader.string();
                            break;
                        }
                    case 3: {
                            message.reqOutputArgs = $root.usp.OperateResp.OperationResult.OutputArgs.decode(reader, reader.uint32());
                            break;
                        }
                    case 4: {
                            message.cmdFailure = $root.usp.OperateResp.OperationResult.CommandFailure.decode(reader, reader.uint32());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an OperationResult message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof usp.OperateResp.OperationResult
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {usp.OperateResp.OperationResult} OperationResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OperationResult.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an OperationResult message.
             * @function verify
             * @memberof usp.OperateResp.OperationResult
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            OperationResult.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                let properties = {};
                if (message.executedCommand != null && message.hasOwnProperty("executedCommand"))
                    if (!$util.isString(message.executedCommand))
                        return "executedCommand: string expected";
                if (message.reqObjPath != null && message.hasOwnProperty("reqObjPath")) {
                    properties.operationResp = 1;
                    if (!$util.isString(message.reqObjPath))
                        return "reqObjPath: string expected";
                }
                if (message.reqOutputArgs != null && message.hasOwnProperty("reqOutputArgs")) {
                    if (properties.operationResp === 1)
                        return "operationResp: multiple values";
                    properties.operationResp = 1;
                    {
                        let error = $root.usp.OperateResp.OperationResult.OutputArgs.verify(message.reqOutputArgs);
                        if (error)
                            return "reqOutputArgs." + error;
                    }
                }
                if (message.cmdFailure != null && message.hasOwnProperty("cmdFailure")) {
                    if (properties.operationResp === 1)
                        return "operationResp: multiple values";
                    properties.operationResp = 1;
                    {
                        let error = $root.usp.OperateResp.OperationResult.CommandFailure.verify(message.cmdFailure);
                        if (error)
                            return "cmdFailure." + error;
                    }
                }
                return null;
            };

            /**
             * Creates an OperationResult message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof usp.OperateResp.OperationResult
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {usp.OperateResp.OperationResult} OperationResult
             */
            OperationResult.fromObject = function fromObject(object) {
                if (object instanceof $root.usp.OperateResp.OperationResult)
                    return object;
                let message = new $root.usp.OperateResp.OperationResult();
                if (object.executedCommand != null)
                    message.executedCommand = String(object.executedCommand);
                if (object.reqObjPath != null)
                    message.reqObjPath = String(object.reqObjPath);
                if (object.reqOutputArgs != null) {
                    if (typeof object.reqOutputArgs !== "object")
                        throw TypeError(".usp.OperateResp.OperationResult.reqOutputArgs: object expected");
                    message.reqOutputArgs = $root.usp.OperateResp.OperationResult.OutputArgs.fromObject(object.reqOutputArgs);
                }
                if (object.cmdFailure != null) {
                    if (typeof object.cmdFailure !== "object")
                        throw TypeError(".usp.OperateResp.OperationResult.cmdFailure: object expected");
                    message.cmdFailure = $root.usp.OperateResp.OperationResult.CommandFailure.fromObject(object.cmdFailure);
                }
                return message;
            };

            /**
             * Creates a plain object from an OperationResult message. Also converts values to other types if specified.
             * @function toObject
             * @memberof usp.OperateResp.OperationResult
             * @static
             * @param {usp.OperateResp.OperationResult} message OperationResult
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            OperationResult.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    object.executedCommand = "";
                if (message.executedCommand != null && message.hasOwnProperty("executedCommand"))
                    object.executedCommand = message.executedCommand;
                if (message.reqObjPath != null && message.hasOwnProperty("reqObjPath")) {
                    object.reqObjPath = message.reqObjPath;
                    if (options.oneofs)
                        object.operationResp = "reqObjPath";
                }
                if (message.reqOutputArgs != null && message.hasOwnProperty("reqOutputArgs")) {
                    object.reqOutputArgs = $root.usp.OperateResp.OperationResult.OutputArgs.toObject(message.reqOutputArgs, options);
                    if (options.oneofs)
                        object.operationResp = "reqOutputArgs";
                }
                if (message.cmdFailure != null && message.hasOwnProperty("cmdFailure")) {
                    object.cmdFailure = $root.usp.OperateResp.OperationResult.CommandFailure.toObject(message.cmdFailure, options);
                    if (options.oneofs)
                        object.operationResp = "cmdFailure";
                }
                return object;
            };

            /**
             * Converts this OperationResult to JSON.
             * @function toJSON
             * @memberof usp.OperateResp.OperationResult
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            OperationResult.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for OperationResult
             * @function getTypeUrl
             * @memberof usp.OperateResp.OperationResult
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            OperationResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/usp.OperateResp.OperationResult";
            };

            OperationResult.OutputArgs = (function() {

                /**
                 * Properties of an OutputArgs.
                 * @memberof usp.OperateResp.OperationResult
                 * @interface IOutputArgs
                 * @property {Object.<string,string>|null} [outputArgs] OutputArgs outputArgs
                 */

                /**
                 * Constructs a new OutputArgs.
                 * @memberof usp.OperateResp.OperationResult
                 * @classdesc Represents an OutputArgs.
                 * @implements IOutputArgs
                 * @constructor
                 * @param {usp.OperateResp.OperationResult.IOutputArgs=} [properties] Properties to set
                 */
                function OutputArgs(properties) {
                    this.outputArgs = {};
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * OutputArgs outputArgs.
                 * @member {Object.<string,string>} outputArgs
                 * @memberof usp.OperateResp.OperationResult.OutputArgs
                 * @instance
                 */
                OutputArgs.prototype.outputArgs = $util.emptyObject;

                /**
                 * Creates a new OutputArgs instance using the specified properties.
                 * @function create
                 * @memberof usp.OperateResp.OperationResult.OutputArgs
                 * @static
                 * @param {usp.OperateResp.OperationResult.IOutputArgs=} [properties] Properties to set
                 * @returns {usp.OperateResp.OperationResult.OutputArgs} OutputArgs instance
                 */
                OutputArgs.create = function create(properties) {
                    return new OutputArgs(properties);
                };

                /**
                 * Encodes the specified OutputArgs message. Does not implicitly {@link usp.OperateResp.OperationResult.OutputArgs.verify|verify} messages.
                 * @function encode
                 * @memberof usp.OperateResp.OperationResult.OutputArgs
                 * @static
                 * @param {usp.OperateResp.OperationResult.IOutputArgs} message OutputArgs message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                OutputArgs.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.outputArgs != null && Object.hasOwnProperty.call(message, "outputArgs"))
                        for (let keys = Object.keys(message.outputArgs), i = 0; i < keys.length; ++i)
                            writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.outputArgs[keys[i]]).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified OutputArgs message, length delimited. Does not implicitly {@link usp.OperateResp.OperationResult.OutputArgs.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof usp.OperateResp.OperationResult.OutputArgs
                 * @static
                 * @param {usp.OperateResp.OperationResult.IOutputArgs} message OutputArgs message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                OutputArgs.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an OutputArgs message from the specified reader or buffer.
                 * @function decode
                 * @memberof usp.OperateResp.OperationResult.OutputArgs
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {usp.OperateResp.OperationResult.OutputArgs} OutputArgs
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                OutputArgs.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.usp.OperateResp.OperationResult.OutputArgs(), key, value;
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                if (message.outputArgs === $util.emptyObject)
                                    message.outputArgs = {};
                                let end2 = reader.uint32() + reader.pos;
                                key = "";
                                value = "";
                                while (reader.pos < end2) {
                                    let tag2 = reader.uint32();
                                    switch (tag2 >>> 3) {
                                    case 1:
                                        key = reader.string();
                                        break;
                                    case 2:
                                        value = reader.string();
                                        break;
                                    default:
                                        reader.skipType(tag2 & 7);
                                        break;
                                    }
                                }
                                message.outputArgs[key] = value;
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an OutputArgs message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof usp.OperateResp.OperationResult.OutputArgs
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {usp.OperateResp.OperationResult.OutputArgs} OutputArgs
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                OutputArgs.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an OutputArgs message.
                 * @function verify
                 * @memberof usp.OperateResp.OperationResult.OutputArgs
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                OutputArgs.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.outputArgs != null && message.hasOwnProperty("outputArgs")) {
                        if (!$util.isObject(message.outputArgs))
                            return "outputArgs: object expected";
                        let key = Object.keys(message.outputArgs);
                        for (let i = 0; i < key.length; ++i)
                            if (!$util.isString(message.outputArgs[key[i]]))
                                return "outputArgs: string{k:string} expected";
                    }
                    return null;
                };

                /**
                 * Creates an OutputArgs message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof usp.OperateResp.OperationResult.OutputArgs
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {usp.OperateResp.OperationResult.OutputArgs} OutputArgs
                 */
                OutputArgs.fromObject = function fromObject(object) {
                    if (object instanceof $root.usp.OperateResp.OperationResult.OutputArgs)
                        return object;
                    let message = new $root.usp.OperateResp.OperationResult.OutputArgs();
                    if (object.outputArgs) {
                        if (typeof object.outputArgs !== "object")
                            throw TypeError(".usp.OperateResp.OperationResult.OutputArgs.outputArgs: object expected");
                        message.outputArgs = {};
                        for (let keys = Object.keys(object.outputArgs), i = 0; i < keys.length; ++i)
                            message.outputArgs[keys[i]] = String(object.outputArgs[keys[i]]);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from an OutputArgs message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof usp.OperateResp.OperationResult.OutputArgs
                 * @static
                 * @param {usp.OperateResp.OperationResult.OutputArgs} message OutputArgs
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                OutputArgs.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.objects || options.defaults)
                        object.outputArgs = {};
                    let keys2;
                    if (message.outputArgs && (keys2 = Object.keys(message.outputArgs)).length) {
                        object.outputArgs = {};
                        for (let j = 0; j < keys2.length; ++j)
                            object.outputArgs[keys2[j]] = message.outputArgs[keys2[j]];
                    }
                    return object;
                };

                /**
                 * Converts this OutputArgs to JSON.
                 * @function toJSON
                 * @memberof usp.OperateResp.OperationResult.OutputArgs
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                OutputArgs.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for OutputArgs
                 * @function getTypeUrl
                 * @memberof usp.OperateResp.OperationResult.OutputArgs
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                OutputArgs.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/usp.OperateResp.OperationResult.OutputArgs";
                };

                return OutputArgs;
            })();

            OperationResult.CommandFailure = (function() {

                /**
                 * Properties of a CommandFailure.
                 * @memberof usp.OperateResp.OperationResult
                 * @interface ICommandFailure
                 * @property {number|null} [errCode] CommandFailure errCode
                 * @property {string|null} [errMsg] CommandFailure errMsg
                 */

                /**
                 * Constructs a new CommandFailure.
                 * @memberof usp.OperateResp.OperationResult
                 * @classdesc Represents a CommandFailure.
                 * @implements ICommandFailure
                 * @constructor
                 * @param {usp.OperateResp.OperationResult.ICommandFailure=} [properties] Properties to set
                 */
                function CommandFailure(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * CommandFailure errCode.
                 * @member {number} errCode
                 * @memberof usp.OperateResp.OperationResult.CommandFailure
                 * @instance
                 */
                CommandFailure.prototype.errCode = 0;

                /**
                 * CommandFailure errMsg.
                 * @member {string} errMsg
                 * @memberof usp.OperateResp.OperationResult.CommandFailure
                 * @instance
                 */
                CommandFailure.prototype.errMsg = "";

                /**
                 * Creates a new CommandFailure instance using the specified properties.
                 * @function create
                 * @memberof usp.OperateResp.OperationResult.CommandFailure
                 * @static
                 * @param {usp.OperateResp.OperationResult.ICommandFailure=} [properties] Properties to set
                 * @returns {usp.OperateResp.OperationResult.CommandFailure} CommandFailure instance
                 */
                CommandFailure.create = function create(properties) {
                    return new CommandFailure(properties);
                };

                /**
                 * Encodes the specified CommandFailure message. Does not implicitly {@link usp.OperateResp.OperationResult.CommandFailure.verify|verify} messages.
                 * @function encode
                 * @memberof usp.OperateResp.OperationResult.CommandFailure
                 * @static
                 * @param {usp.OperateResp.OperationResult.ICommandFailure} message CommandFailure message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CommandFailure.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.errCode != null && Object.hasOwnProperty.call(message, "errCode"))
                        writer.uint32(/* id 1, wireType 5 =*/13).fixed32(message.errCode);
                    if (message.errMsg != null && Object.hasOwnProperty.call(message, "errMsg"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.errMsg);
                    return writer;
                };

                /**
                 * Encodes the specified CommandFailure message, length delimited. Does not implicitly {@link usp.OperateResp.OperationResult.CommandFailure.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof usp.OperateResp.OperationResult.CommandFailure
                 * @static
                 * @param {usp.OperateResp.OperationResult.ICommandFailure} message CommandFailure message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CommandFailure.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a CommandFailure message from the specified reader or buffer.
                 * @function decode
                 * @memberof usp.OperateResp.OperationResult.CommandFailure
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {usp.OperateResp.OperationResult.CommandFailure} CommandFailure
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CommandFailure.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.usp.OperateResp.OperationResult.CommandFailure();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.errCode = reader.fixed32();
                                break;
                            }
                        case 2: {
                                message.errMsg = reader.string();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a CommandFailure message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof usp.OperateResp.OperationResult.CommandFailure
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {usp.OperateResp.OperationResult.CommandFailure} CommandFailure
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CommandFailure.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a CommandFailure message.
                 * @function verify
                 * @memberof usp.OperateResp.OperationResult.CommandFailure
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                CommandFailure.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.errCode != null && message.hasOwnProperty("errCode"))
                        if (!$util.isInteger(message.errCode))
                            return "errCode: integer expected";
                    if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                        if (!$util.isString(message.errMsg))
                            return "errMsg: string expected";
                    return null;
                };

                /**
                 * Creates a CommandFailure message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof usp.OperateResp.OperationResult.CommandFailure
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {usp.OperateResp.OperationResult.CommandFailure} CommandFailure
                 */
                CommandFailure.fromObject = function fromObject(object) {
                    if (object instanceof $root.usp.OperateResp.OperationResult.CommandFailure)
                        return object;
                    let message = new $root.usp.OperateResp.OperationResult.CommandFailure();
                    if (object.errCode != null)
                        message.errCode = object.errCode >>> 0;
                    if (object.errMsg != null)
                        message.errMsg = String(object.errMsg);
                    return message;
                };

                /**
                 * Creates a plain object from a CommandFailure message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof usp.OperateResp.OperationResult.CommandFailure
                 * @static
                 * @param {usp.OperateResp.OperationResult.CommandFailure} message CommandFailure
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                CommandFailure.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults) {
                        object.errCode = 0;
                        object.errMsg = "";
                    }
                    if (message.errCode != null && message.hasOwnProperty("errCode"))
                        object.errCode = message.errCode;
                    if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                        object.errMsg = message.errMsg;
                    return object;
                };

                /**
                 * Converts this CommandFailure to JSON.
                 * @function toJSON
                 * @memberof usp.OperateResp.OperationResult.CommandFailure
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                CommandFailure.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for CommandFailure
                 * @function getTypeUrl
                 * @memberof usp.OperateResp.OperationResult.CommandFailure
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                CommandFailure.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/usp.OperateResp.OperationResult.CommandFailure";
                };

                return CommandFailure;
            })();

            return OperationResult;
        })();

        return OperateResp;
    })();

    usp.Notify = (function() {

        /**
         * Properties of a Notify.
         * @memberof usp
         * @interface INotify
         * @property {string|null} [subscriptionId] Notify subscriptionId
         * @property {boolean|null} [sendResp] Notify sendResp
         * @property {usp.Notify.IEvent|null} [event] Notify event
         * @property {usp.Notify.IValueChange|null} [valueChange] Notify valueChange
         * @property {usp.Notify.IObjectCreation|null} [objCreation] Notify objCreation
         * @property {usp.Notify.IObjectDeletion|null} [objDeletion] Notify objDeletion
         * @property {usp.Notify.IOperationComplete|null} [operComplete] Notify operComplete
         * @property {usp.Notify.IOnBoardRequest|null} [onBoardReq] Notify onBoardReq
         */

        /**
         * Constructs a new Notify.
         * @memberof usp
         * @classdesc Represents a Notify.
         * @implements INotify
         * @constructor
         * @param {usp.INotify=} [properties] Properties to set
         */
        function Notify(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Notify subscriptionId.
         * @member {string} subscriptionId
         * @memberof usp.Notify
         * @instance
         */
        Notify.prototype.subscriptionId = "";

        /**
         * Notify sendResp.
         * @member {boolean} sendResp
         * @memberof usp.Notify
         * @instance
         */
        Notify.prototype.sendResp = false;

        /**
         * Notify event.
         * @member {usp.Notify.IEvent|null|undefined} event
         * @memberof usp.Notify
         * @instance
         */
        Notify.prototype.event = null;

        /**
         * Notify valueChange.
         * @member {usp.Notify.IValueChange|null|undefined} valueChange
         * @memberof usp.Notify
         * @instance
         */
        Notify.prototype.valueChange = null;

        /**
         * Notify objCreation.
         * @member {usp.Notify.IObjectCreation|null|undefined} objCreation
         * @memberof usp.Notify
         * @instance
         */
        Notify.prototype.objCreation = null;

        /**
         * Notify objDeletion.
         * @member {usp.Notify.IObjectDeletion|null|undefined} objDeletion
         * @memberof usp.Notify
         * @instance
         */
        Notify.prototype.objDeletion = null;

        /**
         * Notify operComplete.
         * @member {usp.Notify.IOperationComplete|null|undefined} operComplete
         * @memberof usp.Notify
         * @instance
         */
        Notify.prototype.operComplete = null;

        /**
         * Notify onBoardReq.
         * @member {usp.Notify.IOnBoardRequest|null|undefined} onBoardReq
         * @memberof usp.Notify
         * @instance
         */
        Notify.prototype.onBoardReq = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * Notify notification.
         * @member {"event"|"valueChange"|"objCreation"|"objDeletion"|"operComplete"|"onBoardReq"|undefined} notification
         * @memberof usp.Notify
         * @instance
         */
        Object.defineProperty(Notify.prototype, "notification", {
            get: $util.oneOfGetter($oneOfFields = ["event", "valueChange", "objCreation", "objDeletion", "operComplete", "onBoardReq"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new Notify instance using the specified properties.
         * @function create
         * @memberof usp.Notify
         * @static
         * @param {usp.INotify=} [properties] Properties to set
         * @returns {usp.Notify} Notify instance
         */
        Notify.create = function create(properties) {
            return new Notify(properties);
        };

        /**
         * Encodes the specified Notify message. Does not implicitly {@link usp.Notify.verify|verify} messages.
         * @function encode
         * @memberof usp.Notify
         * @static
         * @param {usp.INotify} message Notify message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Notify.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.subscriptionId != null && Object.hasOwnProperty.call(message, "subscriptionId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.subscriptionId);
            if (message.sendResp != null && Object.hasOwnProperty.call(message, "sendResp"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.sendResp);
            if (message.event != null && Object.hasOwnProperty.call(message, "event"))
                $root.usp.Notify.Event.encode(message.event, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.valueChange != null && Object.hasOwnProperty.call(message, "valueChange"))
                $root.usp.Notify.ValueChange.encode(message.valueChange, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.objCreation != null && Object.hasOwnProperty.call(message, "objCreation"))
                $root.usp.Notify.ObjectCreation.encode(message.objCreation, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.objDeletion != null && Object.hasOwnProperty.call(message, "objDeletion"))
                $root.usp.Notify.ObjectDeletion.encode(message.objDeletion, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.operComplete != null && Object.hasOwnProperty.call(message, "operComplete"))
                $root.usp.Notify.OperationComplete.encode(message.operComplete, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.onBoardReq != null && Object.hasOwnProperty.call(message, "onBoardReq"))
                $root.usp.Notify.OnBoardRequest.encode(message.onBoardReq, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Notify message, length delimited. Does not implicitly {@link usp.Notify.verify|verify} messages.
         * @function encodeDelimited
         * @memberof usp.Notify
         * @static
         * @param {usp.INotify} message Notify message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Notify.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Notify message from the specified reader or buffer.
         * @function decode
         * @memberof usp.Notify
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {usp.Notify} Notify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Notify.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.usp.Notify();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.subscriptionId = reader.string();
                        break;
                    }
                case 2: {
                        message.sendResp = reader.bool();
                        break;
                    }
                case 3: {
                        message.event = $root.usp.Notify.Event.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        message.valueChange = $root.usp.Notify.ValueChange.decode(reader, reader.uint32());
                        break;
                    }
                case 5: {
                        message.objCreation = $root.usp.Notify.ObjectCreation.decode(reader, reader.uint32());
                        break;
                    }
                case 6: {
                        message.objDeletion = $root.usp.Notify.ObjectDeletion.decode(reader, reader.uint32());
                        break;
                    }
                case 7: {
                        message.operComplete = $root.usp.Notify.OperationComplete.decode(reader, reader.uint32());
                        break;
                    }
                case 8: {
                        message.onBoardReq = $root.usp.Notify.OnBoardRequest.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Notify message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof usp.Notify
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {usp.Notify} Notify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Notify.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Notify message.
         * @function verify
         * @memberof usp.Notify
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Notify.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.subscriptionId != null && message.hasOwnProperty("subscriptionId"))
                if (!$util.isString(message.subscriptionId))
                    return "subscriptionId: string expected";
            if (message.sendResp != null && message.hasOwnProperty("sendResp"))
                if (typeof message.sendResp !== "boolean")
                    return "sendResp: boolean expected";
            if (message.event != null && message.hasOwnProperty("event")) {
                properties.notification = 1;
                {
                    let error = $root.usp.Notify.Event.verify(message.event);
                    if (error)
                        return "event." + error;
                }
            }
            if (message.valueChange != null && message.hasOwnProperty("valueChange")) {
                if (properties.notification === 1)
                    return "notification: multiple values";
                properties.notification = 1;
                {
                    let error = $root.usp.Notify.ValueChange.verify(message.valueChange);
                    if (error)
                        return "valueChange." + error;
                }
            }
            if (message.objCreation != null && message.hasOwnProperty("objCreation")) {
                if (properties.notification === 1)
                    return "notification: multiple values";
                properties.notification = 1;
                {
                    let error = $root.usp.Notify.ObjectCreation.verify(message.objCreation);
                    if (error)
                        return "objCreation." + error;
                }
            }
            if (message.objDeletion != null && message.hasOwnProperty("objDeletion")) {
                if (properties.notification === 1)
                    return "notification: multiple values";
                properties.notification = 1;
                {
                    let error = $root.usp.Notify.ObjectDeletion.verify(message.objDeletion);
                    if (error)
                        return "objDeletion." + error;
                }
            }
            if (message.operComplete != null && message.hasOwnProperty("operComplete")) {
                if (properties.notification === 1)
                    return "notification: multiple values";
                properties.notification = 1;
                {
                    let error = $root.usp.Notify.OperationComplete.verify(message.operComplete);
                    if (error)
                        return "operComplete." + error;
                }
            }
            if (message.onBoardReq != null && message.hasOwnProperty("onBoardReq")) {
                if (properties.notification === 1)
                    return "notification: multiple values";
                properties.notification = 1;
                {
                    let error = $root.usp.Notify.OnBoardRequest.verify(message.onBoardReq);
                    if (error)
                        return "onBoardReq." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Notify message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof usp.Notify
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {usp.Notify} Notify
         */
        Notify.fromObject = function fromObject(object) {
            if (object instanceof $root.usp.Notify)
                return object;
            let message = new $root.usp.Notify();
            if (object.subscriptionId != null)
                message.subscriptionId = String(object.subscriptionId);
            if (object.sendResp != null)
                message.sendResp = Boolean(object.sendResp);
            if (object.event != null) {
                if (typeof object.event !== "object")
                    throw TypeError(".usp.Notify.event: object expected");
                message.event = $root.usp.Notify.Event.fromObject(object.event);
            }
            if (object.valueChange != null) {
                if (typeof object.valueChange !== "object")
                    throw TypeError(".usp.Notify.valueChange: object expected");
                message.valueChange = $root.usp.Notify.ValueChange.fromObject(object.valueChange);
            }
            if (object.objCreation != null) {
                if (typeof object.objCreation !== "object")
                    throw TypeError(".usp.Notify.objCreation: object expected");
                message.objCreation = $root.usp.Notify.ObjectCreation.fromObject(object.objCreation);
            }
            if (object.objDeletion != null) {
                if (typeof object.objDeletion !== "object")
                    throw TypeError(".usp.Notify.objDeletion: object expected");
                message.objDeletion = $root.usp.Notify.ObjectDeletion.fromObject(object.objDeletion);
            }
            if (object.operComplete != null) {
                if (typeof object.operComplete !== "object")
                    throw TypeError(".usp.Notify.operComplete: object expected");
                message.operComplete = $root.usp.Notify.OperationComplete.fromObject(object.operComplete);
            }
            if (object.onBoardReq != null) {
                if (typeof object.onBoardReq !== "object")
                    throw TypeError(".usp.Notify.onBoardReq: object expected");
                message.onBoardReq = $root.usp.Notify.OnBoardRequest.fromObject(object.onBoardReq);
            }
            return message;
        };

        /**
         * Creates a plain object from a Notify message. Also converts values to other types if specified.
         * @function toObject
         * @memberof usp.Notify
         * @static
         * @param {usp.Notify} message Notify
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Notify.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.subscriptionId = "";
                object.sendResp = false;
            }
            if (message.subscriptionId != null && message.hasOwnProperty("subscriptionId"))
                object.subscriptionId = message.subscriptionId;
            if (message.sendResp != null && message.hasOwnProperty("sendResp"))
                object.sendResp = message.sendResp;
            if (message.event != null && message.hasOwnProperty("event")) {
                object.event = $root.usp.Notify.Event.toObject(message.event, options);
                if (options.oneofs)
                    object.notification = "event";
            }
            if (message.valueChange != null && message.hasOwnProperty("valueChange")) {
                object.valueChange = $root.usp.Notify.ValueChange.toObject(message.valueChange, options);
                if (options.oneofs)
                    object.notification = "valueChange";
            }
            if (message.objCreation != null && message.hasOwnProperty("objCreation")) {
                object.objCreation = $root.usp.Notify.ObjectCreation.toObject(message.objCreation, options);
                if (options.oneofs)
                    object.notification = "objCreation";
            }
            if (message.objDeletion != null && message.hasOwnProperty("objDeletion")) {
                object.objDeletion = $root.usp.Notify.ObjectDeletion.toObject(message.objDeletion, options);
                if (options.oneofs)
                    object.notification = "objDeletion";
            }
            if (message.operComplete != null && message.hasOwnProperty("operComplete")) {
                object.operComplete = $root.usp.Notify.OperationComplete.toObject(message.operComplete, options);
                if (options.oneofs)
                    object.notification = "operComplete";
            }
            if (message.onBoardReq != null && message.hasOwnProperty("onBoardReq")) {
                object.onBoardReq = $root.usp.Notify.OnBoardRequest.toObject(message.onBoardReq, options);
                if (options.oneofs)
                    object.notification = "onBoardReq";
            }
            return object;
        };

        /**
         * Converts this Notify to JSON.
         * @function toJSON
         * @memberof usp.Notify
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Notify.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Notify
         * @function getTypeUrl
         * @memberof usp.Notify
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Notify.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/usp.Notify";
        };

        Notify.Event = (function() {

            /**
             * Properties of an Event.
             * @memberof usp.Notify
             * @interface IEvent
             * @property {string|null} [objPath] Event objPath
             * @property {string|null} [eventName] Event eventName
             * @property {Object.<string,string>|null} [params] Event params
             */

            /**
             * Constructs a new Event.
             * @memberof usp.Notify
             * @classdesc Represents an Event.
             * @implements IEvent
             * @constructor
             * @param {usp.Notify.IEvent=} [properties] Properties to set
             */
            function Event(properties) {
                this.params = {};
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Event objPath.
             * @member {string} objPath
             * @memberof usp.Notify.Event
             * @instance
             */
            Event.prototype.objPath = "";

            /**
             * Event eventName.
             * @member {string} eventName
             * @memberof usp.Notify.Event
             * @instance
             */
            Event.prototype.eventName = "";

            /**
             * Event params.
             * @member {Object.<string,string>} params
             * @memberof usp.Notify.Event
             * @instance
             */
            Event.prototype.params = $util.emptyObject;

            /**
             * Creates a new Event instance using the specified properties.
             * @function create
             * @memberof usp.Notify.Event
             * @static
             * @param {usp.Notify.IEvent=} [properties] Properties to set
             * @returns {usp.Notify.Event} Event instance
             */
            Event.create = function create(properties) {
                return new Event(properties);
            };

            /**
             * Encodes the specified Event message. Does not implicitly {@link usp.Notify.Event.verify|verify} messages.
             * @function encode
             * @memberof usp.Notify.Event
             * @static
             * @param {usp.Notify.IEvent} message Event message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Event.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.objPath != null && Object.hasOwnProperty.call(message, "objPath"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.objPath);
                if (message.eventName != null && Object.hasOwnProperty.call(message, "eventName"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.eventName);
                if (message.params != null && Object.hasOwnProperty.call(message, "params"))
                    for (let keys = Object.keys(message.params), i = 0; i < keys.length; ++i)
                        writer.uint32(/* id 3, wireType 2 =*/26).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.params[keys[i]]).ldelim();
                return writer;
            };

            /**
             * Encodes the specified Event message, length delimited. Does not implicitly {@link usp.Notify.Event.verify|verify} messages.
             * @function encodeDelimited
             * @memberof usp.Notify.Event
             * @static
             * @param {usp.Notify.IEvent} message Event message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Event.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Event message from the specified reader or buffer.
             * @function decode
             * @memberof usp.Notify.Event
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {usp.Notify.Event} Event
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Event.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.usp.Notify.Event(), key, value;
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.objPath = reader.string();
                            break;
                        }
                    case 2: {
                            message.eventName = reader.string();
                            break;
                        }
                    case 3: {
                            if (message.params === $util.emptyObject)
                                message.params = {};
                            let end2 = reader.uint32() + reader.pos;
                            key = "";
                            value = "";
                            while (reader.pos < end2) {
                                let tag2 = reader.uint32();
                                switch (tag2 >>> 3) {
                                case 1:
                                    key = reader.string();
                                    break;
                                case 2:
                                    value = reader.string();
                                    break;
                                default:
                                    reader.skipType(tag2 & 7);
                                    break;
                                }
                            }
                            message.params[key] = value;
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Event message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof usp.Notify.Event
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {usp.Notify.Event} Event
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Event.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Event message.
             * @function verify
             * @memberof usp.Notify.Event
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Event.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.objPath != null && message.hasOwnProperty("objPath"))
                    if (!$util.isString(message.objPath))
                        return "objPath: string expected";
                if (message.eventName != null && message.hasOwnProperty("eventName"))
                    if (!$util.isString(message.eventName))
                        return "eventName: string expected";
                if (message.params != null && message.hasOwnProperty("params")) {
                    if (!$util.isObject(message.params))
                        return "params: object expected";
                    let key = Object.keys(message.params);
                    for (let i = 0; i < key.length; ++i)
                        if (!$util.isString(message.params[key[i]]))
                            return "params: string{k:string} expected";
                }
                return null;
            };

            /**
             * Creates an Event message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof usp.Notify.Event
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {usp.Notify.Event} Event
             */
            Event.fromObject = function fromObject(object) {
                if (object instanceof $root.usp.Notify.Event)
                    return object;
                let message = new $root.usp.Notify.Event();
                if (object.objPath != null)
                    message.objPath = String(object.objPath);
                if (object.eventName != null)
                    message.eventName = String(object.eventName);
                if (object.params) {
                    if (typeof object.params !== "object")
                        throw TypeError(".usp.Notify.Event.params: object expected");
                    message.params = {};
                    for (let keys = Object.keys(object.params), i = 0; i < keys.length; ++i)
                        message.params[keys[i]] = String(object.params[keys[i]]);
                }
                return message;
            };

            /**
             * Creates a plain object from an Event message. Also converts values to other types if specified.
             * @function toObject
             * @memberof usp.Notify.Event
             * @static
             * @param {usp.Notify.Event} message Event
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Event.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.objects || options.defaults)
                    object.params = {};
                if (options.defaults) {
                    object.objPath = "";
                    object.eventName = "";
                }
                if (message.objPath != null && message.hasOwnProperty("objPath"))
                    object.objPath = message.objPath;
                if (message.eventName != null && message.hasOwnProperty("eventName"))
                    object.eventName = message.eventName;
                let keys2;
                if (message.params && (keys2 = Object.keys(message.params)).length) {
                    object.params = {};
                    for (let j = 0; j < keys2.length; ++j)
                        object.params[keys2[j]] = message.params[keys2[j]];
                }
                return object;
            };

            /**
             * Converts this Event to JSON.
             * @function toJSON
             * @memberof usp.Notify.Event
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Event.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Event
             * @function getTypeUrl
             * @memberof usp.Notify.Event
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Event.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/usp.Notify.Event";
            };

            return Event;
        })();

        Notify.ValueChange = (function() {

            /**
             * Properties of a ValueChange.
             * @memberof usp.Notify
             * @interface IValueChange
             * @property {string|null} [paramPath] ValueChange paramPath
             * @property {string|null} [paramValue] ValueChange paramValue
             */

            /**
             * Constructs a new ValueChange.
             * @memberof usp.Notify
             * @classdesc Represents a ValueChange.
             * @implements IValueChange
             * @constructor
             * @param {usp.Notify.IValueChange=} [properties] Properties to set
             */
            function ValueChange(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ValueChange paramPath.
             * @member {string} paramPath
             * @memberof usp.Notify.ValueChange
             * @instance
             */
            ValueChange.prototype.paramPath = "";

            /**
             * ValueChange paramValue.
             * @member {string} paramValue
             * @memberof usp.Notify.ValueChange
             * @instance
             */
            ValueChange.prototype.paramValue = "";

            /**
             * Creates a new ValueChange instance using the specified properties.
             * @function create
             * @memberof usp.Notify.ValueChange
             * @static
             * @param {usp.Notify.IValueChange=} [properties] Properties to set
             * @returns {usp.Notify.ValueChange} ValueChange instance
             */
            ValueChange.create = function create(properties) {
                return new ValueChange(properties);
            };

            /**
             * Encodes the specified ValueChange message. Does not implicitly {@link usp.Notify.ValueChange.verify|verify} messages.
             * @function encode
             * @memberof usp.Notify.ValueChange
             * @static
             * @param {usp.Notify.IValueChange} message ValueChange message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ValueChange.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.paramPath != null && Object.hasOwnProperty.call(message, "paramPath"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.paramPath);
                if (message.paramValue != null && Object.hasOwnProperty.call(message, "paramValue"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.paramValue);
                return writer;
            };

            /**
             * Encodes the specified ValueChange message, length delimited. Does not implicitly {@link usp.Notify.ValueChange.verify|verify} messages.
             * @function encodeDelimited
             * @memberof usp.Notify.ValueChange
             * @static
             * @param {usp.Notify.IValueChange} message ValueChange message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ValueChange.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ValueChange message from the specified reader or buffer.
             * @function decode
             * @memberof usp.Notify.ValueChange
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {usp.Notify.ValueChange} ValueChange
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ValueChange.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.usp.Notify.ValueChange();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.paramPath = reader.string();
                            break;
                        }
                    case 2: {
                            message.paramValue = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ValueChange message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof usp.Notify.ValueChange
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {usp.Notify.ValueChange} ValueChange
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ValueChange.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ValueChange message.
             * @function verify
             * @memberof usp.Notify.ValueChange
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ValueChange.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.paramPath != null && message.hasOwnProperty("paramPath"))
                    if (!$util.isString(message.paramPath))
                        return "paramPath: string expected";
                if (message.paramValue != null && message.hasOwnProperty("paramValue"))
                    if (!$util.isString(message.paramValue))
                        return "paramValue: string expected";
                return null;
            };

            /**
             * Creates a ValueChange message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof usp.Notify.ValueChange
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {usp.Notify.ValueChange} ValueChange
             */
            ValueChange.fromObject = function fromObject(object) {
                if (object instanceof $root.usp.Notify.ValueChange)
                    return object;
                let message = new $root.usp.Notify.ValueChange();
                if (object.paramPath != null)
                    message.paramPath = String(object.paramPath);
                if (object.paramValue != null)
                    message.paramValue = String(object.paramValue);
                return message;
            };

            /**
             * Creates a plain object from a ValueChange message. Also converts values to other types if specified.
             * @function toObject
             * @memberof usp.Notify.ValueChange
             * @static
             * @param {usp.Notify.ValueChange} message ValueChange
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ValueChange.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.paramPath = "";
                    object.paramValue = "";
                }
                if (message.paramPath != null && message.hasOwnProperty("paramPath"))
                    object.paramPath = message.paramPath;
                if (message.paramValue != null && message.hasOwnProperty("paramValue"))
                    object.paramValue = message.paramValue;
                return object;
            };

            /**
             * Converts this ValueChange to JSON.
             * @function toJSON
             * @memberof usp.Notify.ValueChange
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ValueChange.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ValueChange
             * @function getTypeUrl
             * @memberof usp.Notify.ValueChange
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ValueChange.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/usp.Notify.ValueChange";
            };

            return ValueChange;
        })();

        Notify.ObjectCreation = (function() {

            /**
             * Properties of an ObjectCreation.
             * @memberof usp.Notify
             * @interface IObjectCreation
             * @property {string|null} [objPath] ObjectCreation objPath
             * @property {Object.<string,string>|null} [uniqueKeys] ObjectCreation uniqueKeys
             */

            /**
             * Constructs a new ObjectCreation.
             * @memberof usp.Notify
             * @classdesc Represents an ObjectCreation.
             * @implements IObjectCreation
             * @constructor
             * @param {usp.Notify.IObjectCreation=} [properties] Properties to set
             */
            function ObjectCreation(properties) {
                this.uniqueKeys = {};
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ObjectCreation objPath.
             * @member {string} objPath
             * @memberof usp.Notify.ObjectCreation
             * @instance
             */
            ObjectCreation.prototype.objPath = "";

            /**
             * ObjectCreation uniqueKeys.
             * @member {Object.<string,string>} uniqueKeys
             * @memberof usp.Notify.ObjectCreation
             * @instance
             */
            ObjectCreation.prototype.uniqueKeys = $util.emptyObject;

            /**
             * Creates a new ObjectCreation instance using the specified properties.
             * @function create
             * @memberof usp.Notify.ObjectCreation
             * @static
             * @param {usp.Notify.IObjectCreation=} [properties] Properties to set
             * @returns {usp.Notify.ObjectCreation} ObjectCreation instance
             */
            ObjectCreation.create = function create(properties) {
                return new ObjectCreation(properties);
            };

            /**
             * Encodes the specified ObjectCreation message. Does not implicitly {@link usp.Notify.ObjectCreation.verify|verify} messages.
             * @function encode
             * @memberof usp.Notify.ObjectCreation
             * @static
             * @param {usp.Notify.IObjectCreation} message ObjectCreation message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ObjectCreation.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.objPath != null && Object.hasOwnProperty.call(message, "objPath"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.objPath);
                if (message.uniqueKeys != null && Object.hasOwnProperty.call(message, "uniqueKeys"))
                    for (let keys = Object.keys(message.uniqueKeys), i = 0; i < keys.length; ++i)
                        writer.uint32(/* id 2, wireType 2 =*/18).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.uniqueKeys[keys[i]]).ldelim();
                return writer;
            };

            /**
             * Encodes the specified ObjectCreation message, length delimited. Does not implicitly {@link usp.Notify.ObjectCreation.verify|verify} messages.
             * @function encodeDelimited
             * @memberof usp.Notify.ObjectCreation
             * @static
             * @param {usp.Notify.IObjectCreation} message ObjectCreation message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ObjectCreation.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an ObjectCreation message from the specified reader or buffer.
             * @function decode
             * @memberof usp.Notify.ObjectCreation
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {usp.Notify.ObjectCreation} ObjectCreation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ObjectCreation.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.usp.Notify.ObjectCreation(), key, value;
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.objPath = reader.string();
                            break;
                        }
                    case 2: {
                            if (message.uniqueKeys === $util.emptyObject)
                                message.uniqueKeys = {};
                            let end2 = reader.uint32() + reader.pos;
                            key = "";
                            value = "";
                            while (reader.pos < end2) {
                                let tag2 = reader.uint32();
                                switch (tag2 >>> 3) {
                                case 1:
                                    key = reader.string();
                                    break;
                                case 2:
                                    value = reader.string();
                                    break;
                                default:
                                    reader.skipType(tag2 & 7);
                                    break;
                                }
                            }
                            message.uniqueKeys[key] = value;
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an ObjectCreation message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof usp.Notify.ObjectCreation
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {usp.Notify.ObjectCreation} ObjectCreation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ObjectCreation.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an ObjectCreation message.
             * @function verify
             * @memberof usp.Notify.ObjectCreation
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ObjectCreation.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.objPath != null && message.hasOwnProperty("objPath"))
                    if (!$util.isString(message.objPath))
                        return "objPath: string expected";
                if (message.uniqueKeys != null && message.hasOwnProperty("uniqueKeys")) {
                    if (!$util.isObject(message.uniqueKeys))
                        return "uniqueKeys: object expected";
                    let key = Object.keys(message.uniqueKeys);
                    for (let i = 0; i < key.length; ++i)
                        if (!$util.isString(message.uniqueKeys[key[i]]))
                            return "uniqueKeys: string{k:string} expected";
                }
                return null;
            };

            /**
             * Creates an ObjectCreation message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof usp.Notify.ObjectCreation
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {usp.Notify.ObjectCreation} ObjectCreation
             */
            ObjectCreation.fromObject = function fromObject(object) {
                if (object instanceof $root.usp.Notify.ObjectCreation)
                    return object;
                let message = new $root.usp.Notify.ObjectCreation();
                if (object.objPath != null)
                    message.objPath = String(object.objPath);
                if (object.uniqueKeys) {
                    if (typeof object.uniqueKeys !== "object")
                        throw TypeError(".usp.Notify.ObjectCreation.uniqueKeys: object expected");
                    message.uniqueKeys = {};
                    for (let keys = Object.keys(object.uniqueKeys), i = 0; i < keys.length; ++i)
                        message.uniqueKeys[keys[i]] = String(object.uniqueKeys[keys[i]]);
                }
                return message;
            };

            /**
             * Creates a plain object from an ObjectCreation message. Also converts values to other types if specified.
             * @function toObject
             * @memberof usp.Notify.ObjectCreation
             * @static
             * @param {usp.Notify.ObjectCreation} message ObjectCreation
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ObjectCreation.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.objects || options.defaults)
                    object.uniqueKeys = {};
                if (options.defaults)
                    object.objPath = "";
                if (message.objPath != null && message.hasOwnProperty("objPath"))
                    object.objPath = message.objPath;
                let keys2;
                if (message.uniqueKeys && (keys2 = Object.keys(message.uniqueKeys)).length) {
                    object.uniqueKeys = {};
                    for (let j = 0; j < keys2.length; ++j)
                        object.uniqueKeys[keys2[j]] = message.uniqueKeys[keys2[j]];
                }
                return object;
            };

            /**
             * Converts this ObjectCreation to JSON.
             * @function toJSON
             * @memberof usp.Notify.ObjectCreation
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ObjectCreation.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ObjectCreation
             * @function getTypeUrl
             * @memberof usp.Notify.ObjectCreation
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ObjectCreation.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/usp.Notify.ObjectCreation";
            };

            return ObjectCreation;
        })();

        Notify.ObjectDeletion = (function() {

            /**
             * Properties of an ObjectDeletion.
             * @memberof usp.Notify
             * @interface IObjectDeletion
             * @property {string|null} [objPath] ObjectDeletion objPath
             */

            /**
             * Constructs a new ObjectDeletion.
             * @memberof usp.Notify
             * @classdesc Represents an ObjectDeletion.
             * @implements IObjectDeletion
             * @constructor
             * @param {usp.Notify.IObjectDeletion=} [properties] Properties to set
             */
            function ObjectDeletion(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ObjectDeletion objPath.
             * @member {string} objPath
             * @memberof usp.Notify.ObjectDeletion
             * @instance
             */
            ObjectDeletion.prototype.objPath = "";

            /**
             * Creates a new ObjectDeletion instance using the specified properties.
             * @function create
             * @memberof usp.Notify.ObjectDeletion
             * @static
             * @param {usp.Notify.IObjectDeletion=} [properties] Properties to set
             * @returns {usp.Notify.ObjectDeletion} ObjectDeletion instance
             */
            ObjectDeletion.create = function create(properties) {
                return new ObjectDeletion(properties);
            };

            /**
             * Encodes the specified ObjectDeletion message. Does not implicitly {@link usp.Notify.ObjectDeletion.verify|verify} messages.
             * @function encode
             * @memberof usp.Notify.ObjectDeletion
             * @static
             * @param {usp.Notify.IObjectDeletion} message ObjectDeletion message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ObjectDeletion.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.objPath != null && Object.hasOwnProperty.call(message, "objPath"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.objPath);
                return writer;
            };

            /**
             * Encodes the specified ObjectDeletion message, length delimited. Does not implicitly {@link usp.Notify.ObjectDeletion.verify|verify} messages.
             * @function encodeDelimited
             * @memberof usp.Notify.ObjectDeletion
             * @static
             * @param {usp.Notify.IObjectDeletion} message ObjectDeletion message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ObjectDeletion.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an ObjectDeletion message from the specified reader or buffer.
             * @function decode
             * @memberof usp.Notify.ObjectDeletion
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {usp.Notify.ObjectDeletion} ObjectDeletion
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ObjectDeletion.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.usp.Notify.ObjectDeletion();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.objPath = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an ObjectDeletion message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof usp.Notify.ObjectDeletion
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {usp.Notify.ObjectDeletion} ObjectDeletion
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ObjectDeletion.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an ObjectDeletion message.
             * @function verify
             * @memberof usp.Notify.ObjectDeletion
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ObjectDeletion.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.objPath != null && message.hasOwnProperty("objPath"))
                    if (!$util.isString(message.objPath))
                        return "objPath: string expected";
                return null;
            };

            /**
             * Creates an ObjectDeletion message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof usp.Notify.ObjectDeletion
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {usp.Notify.ObjectDeletion} ObjectDeletion
             */
            ObjectDeletion.fromObject = function fromObject(object) {
                if (object instanceof $root.usp.Notify.ObjectDeletion)
                    return object;
                let message = new $root.usp.Notify.ObjectDeletion();
                if (object.objPath != null)
                    message.objPath = String(object.objPath);
                return message;
            };

            /**
             * Creates a plain object from an ObjectDeletion message. Also converts values to other types if specified.
             * @function toObject
             * @memberof usp.Notify.ObjectDeletion
             * @static
             * @param {usp.Notify.ObjectDeletion} message ObjectDeletion
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ObjectDeletion.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    object.objPath = "";
                if (message.objPath != null && message.hasOwnProperty("objPath"))
                    object.objPath = message.objPath;
                return object;
            };

            /**
             * Converts this ObjectDeletion to JSON.
             * @function toJSON
             * @memberof usp.Notify.ObjectDeletion
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ObjectDeletion.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ObjectDeletion
             * @function getTypeUrl
             * @memberof usp.Notify.ObjectDeletion
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ObjectDeletion.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/usp.Notify.ObjectDeletion";
            };

            return ObjectDeletion;
        })();

        Notify.OperationComplete = (function() {

            /**
             * Properties of an OperationComplete.
             * @memberof usp.Notify
             * @interface IOperationComplete
             * @property {string|null} [objPath] OperationComplete objPath
             * @property {string|null} [commandName] OperationComplete commandName
             * @property {string|null} [commandKey] OperationComplete commandKey
             * @property {usp.Notify.OperationComplete.IOutputArgs|null} [reqOutputArgs] OperationComplete reqOutputArgs
             * @property {usp.Notify.OperationComplete.ICommandFailure|null} [cmdFailure] OperationComplete cmdFailure
             */

            /**
             * Constructs a new OperationComplete.
             * @memberof usp.Notify
             * @classdesc Represents an OperationComplete.
             * @implements IOperationComplete
             * @constructor
             * @param {usp.Notify.IOperationComplete=} [properties] Properties to set
             */
            function OperationComplete(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * OperationComplete objPath.
             * @member {string} objPath
             * @memberof usp.Notify.OperationComplete
             * @instance
             */
            OperationComplete.prototype.objPath = "";

            /**
             * OperationComplete commandName.
             * @member {string} commandName
             * @memberof usp.Notify.OperationComplete
             * @instance
             */
            OperationComplete.prototype.commandName = "";

            /**
             * OperationComplete commandKey.
             * @member {string} commandKey
             * @memberof usp.Notify.OperationComplete
             * @instance
             */
            OperationComplete.prototype.commandKey = "";

            /**
             * OperationComplete reqOutputArgs.
             * @member {usp.Notify.OperationComplete.IOutputArgs|null|undefined} reqOutputArgs
             * @memberof usp.Notify.OperationComplete
             * @instance
             */
            OperationComplete.prototype.reqOutputArgs = null;

            /**
             * OperationComplete cmdFailure.
             * @member {usp.Notify.OperationComplete.ICommandFailure|null|undefined} cmdFailure
             * @memberof usp.Notify.OperationComplete
             * @instance
             */
            OperationComplete.prototype.cmdFailure = null;

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            /**
             * OperationComplete operationResp.
             * @member {"reqOutputArgs"|"cmdFailure"|undefined} operationResp
             * @memberof usp.Notify.OperationComplete
             * @instance
             */
            Object.defineProperty(OperationComplete.prototype, "operationResp", {
                get: $util.oneOfGetter($oneOfFields = ["reqOutputArgs", "cmdFailure"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new OperationComplete instance using the specified properties.
             * @function create
             * @memberof usp.Notify.OperationComplete
             * @static
             * @param {usp.Notify.IOperationComplete=} [properties] Properties to set
             * @returns {usp.Notify.OperationComplete} OperationComplete instance
             */
            OperationComplete.create = function create(properties) {
                return new OperationComplete(properties);
            };

            /**
             * Encodes the specified OperationComplete message. Does not implicitly {@link usp.Notify.OperationComplete.verify|verify} messages.
             * @function encode
             * @memberof usp.Notify.OperationComplete
             * @static
             * @param {usp.Notify.IOperationComplete} message OperationComplete message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OperationComplete.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.objPath != null && Object.hasOwnProperty.call(message, "objPath"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.objPath);
                if (message.commandName != null && Object.hasOwnProperty.call(message, "commandName"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.commandName);
                if (message.commandKey != null && Object.hasOwnProperty.call(message, "commandKey"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.commandKey);
                if (message.reqOutputArgs != null && Object.hasOwnProperty.call(message, "reqOutputArgs"))
                    $root.usp.Notify.OperationComplete.OutputArgs.encode(message.reqOutputArgs, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.cmdFailure != null && Object.hasOwnProperty.call(message, "cmdFailure"))
                    $root.usp.Notify.OperationComplete.CommandFailure.encode(message.cmdFailure, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified OperationComplete message, length delimited. Does not implicitly {@link usp.Notify.OperationComplete.verify|verify} messages.
             * @function encodeDelimited
             * @memberof usp.Notify.OperationComplete
             * @static
             * @param {usp.Notify.IOperationComplete} message OperationComplete message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OperationComplete.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an OperationComplete message from the specified reader or buffer.
             * @function decode
             * @memberof usp.Notify.OperationComplete
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {usp.Notify.OperationComplete} OperationComplete
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OperationComplete.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.usp.Notify.OperationComplete();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.objPath = reader.string();
                            break;
                        }
                    case 2: {
                            message.commandName = reader.string();
                            break;
                        }
                    case 3: {
                            message.commandKey = reader.string();
                            break;
                        }
                    case 4: {
                            message.reqOutputArgs = $root.usp.Notify.OperationComplete.OutputArgs.decode(reader, reader.uint32());
                            break;
                        }
                    case 5: {
                            message.cmdFailure = $root.usp.Notify.OperationComplete.CommandFailure.decode(reader, reader.uint32());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an OperationComplete message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof usp.Notify.OperationComplete
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {usp.Notify.OperationComplete} OperationComplete
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OperationComplete.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an OperationComplete message.
             * @function verify
             * @memberof usp.Notify.OperationComplete
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            OperationComplete.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                let properties = {};
                if (message.objPath != null && message.hasOwnProperty("objPath"))
                    if (!$util.isString(message.objPath))
                        return "objPath: string expected";
                if (message.commandName != null && message.hasOwnProperty("commandName"))
                    if (!$util.isString(message.commandName))
                        return "commandName: string expected";
                if (message.commandKey != null && message.hasOwnProperty("commandKey"))
                    if (!$util.isString(message.commandKey))
                        return "commandKey: string expected";
                if (message.reqOutputArgs != null && message.hasOwnProperty("reqOutputArgs")) {
                    properties.operationResp = 1;
                    {
                        let error = $root.usp.Notify.OperationComplete.OutputArgs.verify(message.reqOutputArgs);
                        if (error)
                            return "reqOutputArgs." + error;
                    }
                }
                if (message.cmdFailure != null && message.hasOwnProperty("cmdFailure")) {
                    if (properties.operationResp === 1)
                        return "operationResp: multiple values";
                    properties.operationResp = 1;
                    {
                        let error = $root.usp.Notify.OperationComplete.CommandFailure.verify(message.cmdFailure);
                        if (error)
                            return "cmdFailure." + error;
                    }
                }
                return null;
            };

            /**
             * Creates an OperationComplete message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof usp.Notify.OperationComplete
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {usp.Notify.OperationComplete} OperationComplete
             */
            OperationComplete.fromObject = function fromObject(object) {
                if (object instanceof $root.usp.Notify.OperationComplete)
                    return object;
                let message = new $root.usp.Notify.OperationComplete();
                if (object.objPath != null)
                    message.objPath = String(object.objPath);
                if (object.commandName != null)
                    message.commandName = String(object.commandName);
                if (object.commandKey != null)
                    message.commandKey = String(object.commandKey);
                if (object.reqOutputArgs != null) {
                    if (typeof object.reqOutputArgs !== "object")
                        throw TypeError(".usp.Notify.OperationComplete.reqOutputArgs: object expected");
                    message.reqOutputArgs = $root.usp.Notify.OperationComplete.OutputArgs.fromObject(object.reqOutputArgs);
                }
                if (object.cmdFailure != null) {
                    if (typeof object.cmdFailure !== "object")
                        throw TypeError(".usp.Notify.OperationComplete.cmdFailure: object expected");
                    message.cmdFailure = $root.usp.Notify.OperationComplete.CommandFailure.fromObject(object.cmdFailure);
                }
                return message;
            };

            /**
             * Creates a plain object from an OperationComplete message. Also converts values to other types if specified.
             * @function toObject
             * @memberof usp.Notify.OperationComplete
             * @static
             * @param {usp.Notify.OperationComplete} message OperationComplete
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            OperationComplete.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.objPath = "";
                    object.commandName = "";
                    object.commandKey = "";
                }
                if (message.objPath != null && message.hasOwnProperty("objPath"))
                    object.objPath = message.objPath;
                if (message.commandName != null && message.hasOwnProperty("commandName"))
                    object.commandName = message.commandName;
                if (message.commandKey != null && message.hasOwnProperty("commandKey"))
                    object.commandKey = message.commandKey;
                if (message.reqOutputArgs != null && message.hasOwnProperty("reqOutputArgs")) {
                    object.reqOutputArgs = $root.usp.Notify.OperationComplete.OutputArgs.toObject(message.reqOutputArgs, options);
                    if (options.oneofs)
                        object.operationResp = "reqOutputArgs";
                }
                if (message.cmdFailure != null && message.hasOwnProperty("cmdFailure")) {
                    object.cmdFailure = $root.usp.Notify.OperationComplete.CommandFailure.toObject(message.cmdFailure, options);
                    if (options.oneofs)
                        object.operationResp = "cmdFailure";
                }
                return object;
            };

            /**
             * Converts this OperationComplete to JSON.
             * @function toJSON
             * @memberof usp.Notify.OperationComplete
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            OperationComplete.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for OperationComplete
             * @function getTypeUrl
             * @memberof usp.Notify.OperationComplete
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            OperationComplete.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/usp.Notify.OperationComplete";
            };

            OperationComplete.OutputArgs = (function() {

                /**
                 * Properties of an OutputArgs.
                 * @memberof usp.Notify.OperationComplete
                 * @interface IOutputArgs
                 * @property {Object.<string,string>|null} [outputArgs] OutputArgs outputArgs
                 */

                /**
                 * Constructs a new OutputArgs.
                 * @memberof usp.Notify.OperationComplete
                 * @classdesc Represents an OutputArgs.
                 * @implements IOutputArgs
                 * @constructor
                 * @param {usp.Notify.OperationComplete.IOutputArgs=} [properties] Properties to set
                 */
                function OutputArgs(properties) {
                    this.outputArgs = {};
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * OutputArgs outputArgs.
                 * @member {Object.<string,string>} outputArgs
                 * @memberof usp.Notify.OperationComplete.OutputArgs
                 * @instance
                 */
                OutputArgs.prototype.outputArgs = $util.emptyObject;

                /**
                 * Creates a new OutputArgs instance using the specified properties.
                 * @function create
                 * @memberof usp.Notify.OperationComplete.OutputArgs
                 * @static
                 * @param {usp.Notify.OperationComplete.IOutputArgs=} [properties] Properties to set
                 * @returns {usp.Notify.OperationComplete.OutputArgs} OutputArgs instance
                 */
                OutputArgs.create = function create(properties) {
                    return new OutputArgs(properties);
                };

                /**
                 * Encodes the specified OutputArgs message. Does not implicitly {@link usp.Notify.OperationComplete.OutputArgs.verify|verify} messages.
                 * @function encode
                 * @memberof usp.Notify.OperationComplete.OutputArgs
                 * @static
                 * @param {usp.Notify.OperationComplete.IOutputArgs} message OutputArgs message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                OutputArgs.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.outputArgs != null && Object.hasOwnProperty.call(message, "outputArgs"))
                        for (let keys = Object.keys(message.outputArgs), i = 0; i < keys.length; ++i)
                            writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.outputArgs[keys[i]]).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified OutputArgs message, length delimited. Does not implicitly {@link usp.Notify.OperationComplete.OutputArgs.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof usp.Notify.OperationComplete.OutputArgs
                 * @static
                 * @param {usp.Notify.OperationComplete.IOutputArgs} message OutputArgs message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                OutputArgs.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an OutputArgs message from the specified reader or buffer.
                 * @function decode
                 * @memberof usp.Notify.OperationComplete.OutputArgs
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {usp.Notify.OperationComplete.OutputArgs} OutputArgs
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                OutputArgs.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.usp.Notify.OperationComplete.OutputArgs(), key, value;
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                if (message.outputArgs === $util.emptyObject)
                                    message.outputArgs = {};
                                let end2 = reader.uint32() + reader.pos;
                                key = "";
                                value = "";
                                while (reader.pos < end2) {
                                    let tag2 = reader.uint32();
                                    switch (tag2 >>> 3) {
                                    case 1:
                                        key = reader.string();
                                        break;
                                    case 2:
                                        value = reader.string();
                                        break;
                                    default:
                                        reader.skipType(tag2 & 7);
                                        break;
                                    }
                                }
                                message.outputArgs[key] = value;
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an OutputArgs message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof usp.Notify.OperationComplete.OutputArgs
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {usp.Notify.OperationComplete.OutputArgs} OutputArgs
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                OutputArgs.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an OutputArgs message.
                 * @function verify
                 * @memberof usp.Notify.OperationComplete.OutputArgs
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                OutputArgs.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.outputArgs != null && message.hasOwnProperty("outputArgs")) {
                        if (!$util.isObject(message.outputArgs))
                            return "outputArgs: object expected";
                        let key = Object.keys(message.outputArgs);
                        for (let i = 0; i < key.length; ++i)
                            if (!$util.isString(message.outputArgs[key[i]]))
                                return "outputArgs: string{k:string} expected";
                    }
                    return null;
                };

                /**
                 * Creates an OutputArgs message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof usp.Notify.OperationComplete.OutputArgs
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {usp.Notify.OperationComplete.OutputArgs} OutputArgs
                 */
                OutputArgs.fromObject = function fromObject(object) {
                    if (object instanceof $root.usp.Notify.OperationComplete.OutputArgs)
                        return object;
                    let message = new $root.usp.Notify.OperationComplete.OutputArgs();
                    if (object.outputArgs) {
                        if (typeof object.outputArgs !== "object")
                            throw TypeError(".usp.Notify.OperationComplete.OutputArgs.outputArgs: object expected");
                        message.outputArgs = {};
                        for (let keys = Object.keys(object.outputArgs), i = 0; i < keys.length; ++i)
                            message.outputArgs[keys[i]] = String(object.outputArgs[keys[i]]);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from an OutputArgs message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof usp.Notify.OperationComplete.OutputArgs
                 * @static
                 * @param {usp.Notify.OperationComplete.OutputArgs} message OutputArgs
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                OutputArgs.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.objects || options.defaults)
                        object.outputArgs = {};
                    let keys2;
                    if (message.outputArgs && (keys2 = Object.keys(message.outputArgs)).length) {
                        object.outputArgs = {};
                        for (let j = 0; j < keys2.length; ++j)
                            object.outputArgs[keys2[j]] = message.outputArgs[keys2[j]];
                    }
                    return object;
                };

                /**
                 * Converts this OutputArgs to JSON.
                 * @function toJSON
                 * @memberof usp.Notify.OperationComplete.OutputArgs
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                OutputArgs.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for OutputArgs
                 * @function getTypeUrl
                 * @memberof usp.Notify.OperationComplete.OutputArgs
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                OutputArgs.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/usp.Notify.OperationComplete.OutputArgs";
                };

                return OutputArgs;
            })();

            OperationComplete.CommandFailure = (function() {

                /**
                 * Properties of a CommandFailure.
                 * @memberof usp.Notify.OperationComplete
                 * @interface ICommandFailure
                 * @property {number|null} [errCode] CommandFailure errCode
                 * @property {string|null} [errMsg] CommandFailure errMsg
                 */

                /**
                 * Constructs a new CommandFailure.
                 * @memberof usp.Notify.OperationComplete
                 * @classdesc Represents a CommandFailure.
                 * @implements ICommandFailure
                 * @constructor
                 * @param {usp.Notify.OperationComplete.ICommandFailure=} [properties] Properties to set
                 */
                function CommandFailure(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * CommandFailure errCode.
                 * @member {number} errCode
                 * @memberof usp.Notify.OperationComplete.CommandFailure
                 * @instance
                 */
                CommandFailure.prototype.errCode = 0;

                /**
                 * CommandFailure errMsg.
                 * @member {string} errMsg
                 * @memberof usp.Notify.OperationComplete.CommandFailure
                 * @instance
                 */
                CommandFailure.prototype.errMsg = "";

                /**
                 * Creates a new CommandFailure instance using the specified properties.
                 * @function create
                 * @memberof usp.Notify.OperationComplete.CommandFailure
                 * @static
                 * @param {usp.Notify.OperationComplete.ICommandFailure=} [properties] Properties to set
                 * @returns {usp.Notify.OperationComplete.CommandFailure} CommandFailure instance
                 */
                CommandFailure.create = function create(properties) {
                    return new CommandFailure(properties);
                };

                /**
                 * Encodes the specified CommandFailure message. Does not implicitly {@link usp.Notify.OperationComplete.CommandFailure.verify|verify} messages.
                 * @function encode
                 * @memberof usp.Notify.OperationComplete.CommandFailure
                 * @static
                 * @param {usp.Notify.OperationComplete.ICommandFailure} message CommandFailure message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CommandFailure.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.errCode != null && Object.hasOwnProperty.call(message, "errCode"))
                        writer.uint32(/* id 1, wireType 5 =*/13).fixed32(message.errCode);
                    if (message.errMsg != null && Object.hasOwnProperty.call(message, "errMsg"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.errMsg);
                    return writer;
                };

                /**
                 * Encodes the specified CommandFailure message, length delimited. Does not implicitly {@link usp.Notify.OperationComplete.CommandFailure.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof usp.Notify.OperationComplete.CommandFailure
                 * @static
                 * @param {usp.Notify.OperationComplete.ICommandFailure} message CommandFailure message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CommandFailure.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a CommandFailure message from the specified reader or buffer.
                 * @function decode
                 * @memberof usp.Notify.OperationComplete.CommandFailure
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {usp.Notify.OperationComplete.CommandFailure} CommandFailure
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CommandFailure.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.usp.Notify.OperationComplete.CommandFailure();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.errCode = reader.fixed32();
                                break;
                            }
                        case 2: {
                                message.errMsg = reader.string();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a CommandFailure message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof usp.Notify.OperationComplete.CommandFailure
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {usp.Notify.OperationComplete.CommandFailure} CommandFailure
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CommandFailure.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a CommandFailure message.
                 * @function verify
                 * @memberof usp.Notify.OperationComplete.CommandFailure
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                CommandFailure.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.errCode != null && message.hasOwnProperty("errCode"))
                        if (!$util.isInteger(message.errCode))
                            return "errCode: integer expected";
                    if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                        if (!$util.isString(message.errMsg))
                            return "errMsg: string expected";
                    return null;
                };

                /**
                 * Creates a CommandFailure message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof usp.Notify.OperationComplete.CommandFailure
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {usp.Notify.OperationComplete.CommandFailure} CommandFailure
                 */
                CommandFailure.fromObject = function fromObject(object) {
                    if (object instanceof $root.usp.Notify.OperationComplete.CommandFailure)
                        return object;
                    let message = new $root.usp.Notify.OperationComplete.CommandFailure();
                    if (object.errCode != null)
                        message.errCode = object.errCode >>> 0;
                    if (object.errMsg != null)
                        message.errMsg = String(object.errMsg);
                    return message;
                };

                /**
                 * Creates a plain object from a CommandFailure message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof usp.Notify.OperationComplete.CommandFailure
                 * @static
                 * @param {usp.Notify.OperationComplete.CommandFailure} message CommandFailure
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                CommandFailure.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults) {
                        object.errCode = 0;
                        object.errMsg = "";
                    }
                    if (message.errCode != null && message.hasOwnProperty("errCode"))
                        object.errCode = message.errCode;
                    if (message.errMsg != null && message.hasOwnProperty("errMsg"))
                        object.errMsg = message.errMsg;
                    return object;
                };

                /**
                 * Converts this CommandFailure to JSON.
                 * @function toJSON
                 * @memberof usp.Notify.OperationComplete.CommandFailure
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                CommandFailure.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for CommandFailure
                 * @function getTypeUrl
                 * @memberof usp.Notify.OperationComplete.CommandFailure
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                CommandFailure.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/usp.Notify.OperationComplete.CommandFailure";
                };

                return CommandFailure;
            })();

            return OperationComplete;
        })();

        Notify.OnBoardRequest = (function() {

            /**
             * Properties of an OnBoardRequest.
             * @memberof usp.Notify
             * @interface IOnBoardRequest
             * @property {string|null} [oui] OnBoardRequest oui
             * @property {string|null} [productClass] OnBoardRequest productClass
             * @property {string|null} [serialNumber] OnBoardRequest serialNumber
             * @property {string|null} [agentSupportedProtocolVersions] OnBoardRequest agentSupportedProtocolVersions
             */

            /**
             * Constructs a new OnBoardRequest.
             * @memberof usp.Notify
             * @classdesc Represents an OnBoardRequest.
             * @implements IOnBoardRequest
             * @constructor
             * @param {usp.Notify.IOnBoardRequest=} [properties] Properties to set
             */
            function OnBoardRequest(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * OnBoardRequest oui.
             * @member {string} oui
             * @memberof usp.Notify.OnBoardRequest
             * @instance
             */
            OnBoardRequest.prototype.oui = "";

            /**
             * OnBoardRequest productClass.
             * @member {string} productClass
             * @memberof usp.Notify.OnBoardRequest
             * @instance
             */
            OnBoardRequest.prototype.productClass = "";

            /**
             * OnBoardRequest serialNumber.
             * @member {string} serialNumber
             * @memberof usp.Notify.OnBoardRequest
             * @instance
             */
            OnBoardRequest.prototype.serialNumber = "";

            /**
             * OnBoardRequest agentSupportedProtocolVersions.
             * @member {string} agentSupportedProtocolVersions
             * @memberof usp.Notify.OnBoardRequest
             * @instance
             */
            OnBoardRequest.prototype.agentSupportedProtocolVersions = "";

            /**
             * Creates a new OnBoardRequest instance using the specified properties.
             * @function create
             * @memberof usp.Notify.OnBoardRequest
             * @static
             * @param {usp.Notify.IOnBoardRequest=} [properties] Properties to set
             * @returns {usp.Notify.OnBoardRequest} OnBoardRequest instance
             */
            OnBoardRequest.create = function create(properties) {
                return new OnBoardRequest(properties);
            };

            /**
             * Encodes the specified OnBoardRequest message. Does not implicitly {@link usp.Notify.OnBoardRequest.verify|verify} messages.
             * @function encode
             * @memberof usp.Notify.OnBoardRequest
             * @static
             * @param {usp.Notify.IOnBoardRequest} message OnBoardRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OnBoardRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.oui != null && Object.hasOwnProperty.call(message, "oui"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.oui);
                if (message.productClass != null && Object.hasOwnProperty.call(message, "productClass"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.productClass);
                if (message.serialNumber != null && Object.hasOwnProperty.call(message, "serialNumber"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.serialNumber);
                if (message.agentSupportedProtocolVersions != null && Object.hasOwnProperty.call(message, "agentSupportedProtocolVersions"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.agentSupportedProtocolVersions);
                return writer;
            };

            /**
             * Encodes the specified OnBoardRequest message, length delimited. Does not implicitly {@link usp.Notify.OnBoardRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof usp.Notify.OnBoardRequest
             * @static
             * @param {usp.Notify.IOnBoardRequest} message OnBoardRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OnBoardRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an OnBoardRequest message from the specified reader or buffer.
             * @function decode
             * @memberof usp.Notify.OnBoardRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {usp.Notify.OnBoardRequest} OnBoardRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OnBoardRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.usp.Notify.OnBoardRequest();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.oui = reader.string();
                            break;
                        }
                    case 2: {
                            message.productClass = reader.string();
                            break;
                        }
                    case 3: {
                            message.serialNumber = reader.string();
                            break;
                        }
                    case 4: {
                            message.agentSupportedProtocolVersions = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an OnBoardRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof usp.Notify.OnBoardRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {usp.Notify.OnBoardRequest} OnBoardRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OnBoardRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an OnBoardRequest message.
             * @function verify
             * @memberof usp.Notify.OnBoardRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            OnBoardRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.oui != null && message.hasOwnProperty("oui"))
                    if (!$util.isString(message.oui))
                        return "oui: string expected";
                if (message.productClass != null && message.hasOwnProperty("productClass"))
                    if (!$util.isString(message.productClass))
                        return "productClass: string expected";
                if (message.serialNumber != null && message.hasOwnProperty("serialNumber"))
                    if (!$util.isString(message.serialNumber))
                        return "serialNumber: string expected";
                if (message.agentSupportedProtocolVersions != null && message.hasOwnProperty("agentSupportedProtocolVersions"))
                    if (!$util.isString(message.agentSupportedProtocolVersions))
                        return "agentSupportedProtocolVersions: string expected";
                return null;
            };

            /**
             * Creates an OnBoardRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof usp.Notify.OnBoardRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {usp.Notify.OnBoardRequest} OnBoardRequest
             */
            OnBoardRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.usp.Notify.OnBoardRequest)
                    return object;
                let message = new $root.usp.Notify.OnBoardRequest();
                if (object.oui != null)
                    message.oui = String(object.oui);
                if (object.productClass != null)
                    message.productClass = String(object.productClass);
                if (object.serialNumber != null)
                    message.serialNumber = String(object.serialNumber);
                if (object.agentSupportedProtocolVersions != null)
                    message.agentSupportedProtocolVersions = String(object.agentSupportedProtocolVersions);
                return message;
            };

            /**
             * Creates a plain object from an OnBoardRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof usp.Notify.OnBoardRequest
             * @static
             * @param {usp.Notify.OnBoardRequest} message OnBoardRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            OnBoardRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.oui = "";
                    object.productClass = "";
                    object.serialNumber = "";
                    object.agentSupportedProtocolVersions = "";
                }
                if (message.oui != null && message.hasOwnProperty("oui"))
                    object.oui = message.oui;
                if (message.productClass != null && message.hasOwnProperty("productClass"))
                    object.productClass = message.productClass;
                if (message.serialNumber != null && message.hasOwnProperty("serialNumber"))
                    object.serialNumber = message.serialNumber;
                if (message.agentSupportedProtocolVersions != null && message.hasOwnProperty("agentSupportedProtocolVersions"))
                    object.agentSupportedProtocolVersions = message.agentSupportedProtocolVersions;
                return object;
            };

            /**
             * Converts this OnBoardRequest to JSON.
             * @function toJSON
             * @memberof usp.Notify.OnBoardRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            OnBoardRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for OnBoardRequest
             * @function getTypeUrl
             * @memberof usp.Notify.OnBoardRequest
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            OnBoardRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/usp.Notify.OnBoardRequest";
            };

            return OnBoardRequest;
        })();

        return Notify;
    })();

    usp.NotifyResp = (function() {

        /**
         * Properties of a NotifyResp.
         * @memberof usp
         * @interface INotifyResp
         * @property {string|null} [subscriptionId] NotifyResp subscriptionId
         */

        /**
         * Constructs a new NotifyResp.
         * @memberof usp
         * @classdesc Represents a NotifyResp.
         * @implements INotifyResp
         * @constructor
         * @param {usp.INotifyResp=} [properties] Properties to set
         */
        function NotifyResp(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * NotifyResp subscriptionId.
         * @member {string} subscriptionId
         * @memberof usp.NotifyResp
         * @instance
         */
        NotifyResp.prototype.subscriptionId = "";

        /**
         * Creates a new NotifyResp instance using the specified properties.
         * @function create
         * @memberof usp.NotifyResp
         * @static
         * @param {usp.INotifyResp=} [properties] Properties to set
         * @returns {usp.NotifyResp} NotifyResp instance
         */
        NotifyResp.create = function create(properties) {
            return new NotifyResp(properties);
        };

        /**
         * Encodes the specified NotifyResp message. Does not implicitly {@link usp.NotifyResp.verify|verify} messages.
         * @function encode
         * @memberof usp.NotifyResp
         * @static
         * @param {usp.INotifyResp} message NotifyResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NotifyResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.subscriptionId != null && Object.hasOwnProperty.call(message, "subscriptionId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.subscriptionId);
            return writer;
        };

        /**
         * Encodes the specified NotifyResp message, length delimited. Does not implicitly {@link usp.NotifyResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof usp.NotifyResp
         * @static
         * @param {usp.INotifyResp} message NotifyResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NotifyResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NotifyResp message from the specified reader or buffer.
         * @function decode
         * @memberof usp.NotifyResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {usp.NotifyResp} NotifyResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NotifyResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.usp.NotifyResp();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.subscriptionId = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a NotifyResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof usp.NotifyResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {usp.NotifyResp} NotifyResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NotifyResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NotifyResp message.
         * @function verify
         * @memberof usp.NotifyResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NotifyResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.subscriptionId != null && message.hasOwnProperty("subscriptionId"))
                if (!$util.isString(message.subscriptionId))
                    return "subscriptionId: string expected";
            return null;
        };

        /**
         * Creates a NotifyResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof usp.NotifyResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {usp.NotifyResp} NotifyResp
         */
        NotifyResp.fromObject = function fromObject(object) {
            if (object instanceof $root.usp.NotifyResp)
                return object;
            let message = new $root.usp.NotifyResp();
            if (object.subscriptionId != null)
                message.subscriptionId = String(object.subscriptionId);
            return message;
        };

        /**
         * Creates a plain object from a NotifyResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof usp.NotifyResp
         * @static
         * @param {usp.NotifyResp} message NotifyResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NotifyResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.subscriptionId = "";
            if (message.subscriptionId != null && message.hasOwnProperty("subscriptionId"))
                object.subscriptionId = message.subscriptionId;
            return object;
        };

        /**
         * Converts this NotifyResp to JSON.
         * @function toJSON
         * @memberof usp.NotifyResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NotifyResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for NotifyResp
         * @function getTypeUrl
         * @memberof usp.NotifyResp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        NotifyResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/usp.NotifyResp";
        };

        return NotifyResp;
    })();

    return usp;
})();

export const usp_record = $root.usp_record = (() => {

    /**
     * Namespace usp_record.
     * @exports usp_record
     * @namespace
     */
    const usp_record = {};

    usp_record.Record = (function() {

        /**
         * Properties of a Record.
         * @memberof usp_record
         * @interface IRecord
         * @property {string|null} [version] Record version
         * @property {string|null} [toId] Record toId
         * @property {string|null} [fromId] Record fromId
         * @property {usp_record.Record.PayloadSecurity|null} [payloadSecurity] Record payloadSecurity
         * @property {Uint8Array|null} [macSignature] Record macSignature
         * @property {Uint8Array|null} [senderCert] Record senderCert
         * @property {usp_record.INoSessionContextRecord|null} [noSessionContext] Record noSessionContext
         * @property {usp_record.ISessionContextRecord|null} [sessionContext] Record sessionContext
         */

        /**
         * Constructs a new Record.
         * @memberof usp_record
         * @classdesc Represents a Record.
         * @implements IRecord
         * @constructor
         * @param {usp_record.IRecord=} [properties] Properties to set
         */
        function Record(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Record version.
         * @member {string} version
         * @memberof usp_record.Record
         * @instance
         */
        Record.prototype.version = "";

        /**
         * Record toId.
         * @member {string} toId
         * @memberof usp_record.Record
         * @instance
         */
        Record.prototype.toId = "";

        /**
         * Record fromId.
         * @member {string} fromId
         * @memberof usp_record.Record
         * @instance
         */
        Record.prototype.fromId = "";

        /**
         * Record payloadSecurity.
         * @member {usp_record.Record.PayloadSecurity} payloadSecurity
         * @memberof usp_record.Record
         * @instance
         */
        Record.prototype.payloadSecurity = 0;

        /**
         * Record macSignature.
         * @member {Uint8Array} macSignature
         * @memberof usp_record.Record
         * @instance
         */
        Record.prototype.macSignature = $util.newBuffer([]);

        /**
         * Record senderCert.
         * @member {Uint8Array} senderCert
         * @memberof usp_record.Record
         * @instance
         */
        Record.prototype.senderCert = $util.newBuffer([]);

        /**
         * Record noSessionContext.
         * @member {usp_record.INoSessionContextRecord|null|undefined} noSessionContext
         * @memberof usp_record.Record
         * @instance
         */
        Record.prototype.noSessionContext = null;

        /**
         * Record sessionContext.
         * @member {usp_record.ISessionContextRecord|null|undefined} sessionContext
         * @memberof usp_record.Record
         * @instance
         */
        Record.prototype.sessionContext = null;

        // OneOf field names bound to virtual getters and setters
        let $oneOfFields;

        /**
         * Record recordType.
         * @member {"noSessionContext"|"sessionContext"|undefined} recordType
         * @memberof usp_record.Record
         * @instance
         */
        Object.defineProperty(Record.prototype, "recordType", {
            get: $util.oneOfGetter($oneOfFields = ["noSessionContext", "sessionContext"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new Record instance using the specified properties.
         * @function create
         * @memberof usp_record.Record
         * @static
         * @param {usp_record.IRecord=} [properties] Properties to set
         * @returns {usp_record.Record} Record instance
         */
        Record.create = function create(properties) {
            return new Record(properties);
        };

        /**
         * Encodes the specified Record message. Does not implicitly {@link usp_record.Record.verify|verify} messages.
         * @function encode
         * @memberof usp_record.Record
         * @static
         * @param {usp_record.IRecord} message Record message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Record.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.version);
            if (message.toId != null && Object.hasOwnProperty.call(message, "toId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.toId);
            if (message.fromId != null && Object.hasOwnProperty.call(message, "fromId"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.fromId);
            if (message.payloadSecurity != null && Object.hasOwnProperty.call(message, "payloadSecurity"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.payloadSecurity);
            if (message.macSignature != null && Object.hasOwnProperty.call(message, "macSignature"))
                writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.macSignature);
            if (message.senderCert != null && Object.hasOwnProperty.call(message, "senderCert"))
                writer.uint32(/* id 6, wireType 2 =*/50).bytes(message.senderCert);
            if (message.noSessionContext != null && Object.hasOwnProperty.call(message, "noSessionContext"))
                $root.usp_record.NoSessionContextRecord.encode(message.noSessionContext, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.sessionContext != null && Object.hasOwnProperty.call(message, "sessionContext"))
                $root.usp_record.SessionContextRecord.encode(message.sessionContext, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Record message, length delimited. Does not implicitly {@link usp_record.Record.verify|verify} messages.
         * @function encodeDelimited
         * @memberof usp_record.Record
         * @static
         * @param {usp_record.IRecord} message Record message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Record.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Record message from the specified reader or buffer.
         * @function decode
         * @memberof usp_record.Record
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {usp_record.Record} Record
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Record.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.usp_record.Record();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.version = reader.string();
                        break;
                    }
                case 2: {
                        message.toId = reader.string();
                        break;
                    }
                case 3: {
                        message.fromId = reader.string();
                        break;
                    }
                case 4: {
                        message.payloadSecurity = reader.int32();
                        break;
                    }
                case 5: {
                        message.macSignature = reader.bytes();
                        break;
                    }
                case 6: {
                        message.senderCert = reader.bytes();
                        break;
                    }
                case 7: {
                        message.noSessionContext = $root.usp_record.NoSessionContextRecord.decode(reader, reader.uint32());
                        break;
                    }
                case 8: {
                        message.sessionContext = $root.usp_record.SessionContextRecord.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Record message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof usp_record.Record
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {usp_record.Record} Record
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Record.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Record message.
         * @function verify
         * @memberof usp_record.Record
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Record.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let properties = {};
            if (message.version != null && message.hasOwnProperty("version"))
                if (!$util.isString(message.version))
                    return "version: string expected";
            if (message.toId != null && message.hasOwnProperty("toId"))
                if (!$util.isString(message.toId))
                    return "toId: string expected";
            if (message.fromId != null && message.hasOwnProperty("fromId"))
                if (!$util.isString(message.fromId))
                    return "fromId: string expected";
            if (message.payloadSecurity != null && message.hasOwnProperty("payloadSecurity"))
                switch (message.payloadSecurity) {
                default:
                    return "payloadSecurity: enum value expected";
                case 0:
                case 1:
                    break;
                }
            if (message.macSignature != null && message.hasOwnProperty("macSignature"))
                if (!(message.macSignature && typeof message.macSignature.length === "number" || $util.isString(message.macSignature)))
                    return "macSignature: buffer expected";
            if (message.senderCert != null && message.hasOwnProperty("senderCert"))
                if (!(message.senderCert && typeof message.senderCert.length === "number" || $util.isString(message.senderCert)))
                    return "senderCert: buffer expected";
            if (message.noSessionContext != null && message.hasOwnProperty("noSessionContext")) {
                properties.recordType = 1;
                {
                    let error = $root.usp_record.NoSessionContextRecord.verify(message.noSessionContext);
                    if (error)
                        return "noSessionContext." + error;
                }
            }
            if (message.sessionContext != null && message.hasOwnProperty("sessionContext")) {
                if (properties.recordType === 1)
                    return "recordType: multiple values";
                properties.recordType = 1;
                {
                    let error = $root.usp_record.SessionContextRecord.verify(message.sessionContext);
                    if (error)
                        return "sessionContext." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Record message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof usp_record.Record
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {usp_record.Record} Record
         */
        Record.fromObject = function fromObject(object) {
            if (object instanceof $root.usp_record.Record)
                return object;
            let message = new $root.usp_record.Record();
            if (object.version != null)
                message.version = String(object.version);
            if (object.toId != null)
                message.toId = String(object.toId);
            if (object.fromId != null)
                message.fromId = String(object.fromId);
            switch (object.payloadSecurity) {
            default:
                if (typeof object.payloadSecurity === "number") {
                    message.payloadSecurity = object.payloadSecurity;
                    break;
                }
                break;
            case "PLAINTEXT":
            case 0:
                message.payloadSecurity = 0;
                break;
            case "TLS12":
            case 1:
                message.payloadSecurity = 1;
                break;
            }
            if (object.macSignature != null)
                if (typeof object.macSignature === "string")
                    $util.base64.decode(object.macSignature, message.macSignature = $util.newBuffer($util.base64.length(object.macSignature)), 0);
                else if (object.macSignature.length >= 0)
                    message.macSignature = object.macSignature;
            if (object.senderCert != null)
                if (typeof object.senderCert === "string")
                    $util.base64.decode(object.senderCert, message.senderCert = $util.newBuffer($util.base64.length(object.senderCert)), 0);
                else if (object.senderCert.length >= 0)
                    message.senderCert = object.senderCert;
            if (object.noSessionContext != null) {
                if (typeof object.noSessionContext !== "object")
                    throw TypeError(".usp_record.Record.noSessionContext: object expected");
                message.noSessionContext = $root.usp_record.NoSessionContextRecord.fromObject(object.noSessionContext);
            }
            if (object.sessionContext != null) {
                if (typeof object.sessionContext !== "object")
                    throw TypeError(".usp_record.Record.sessionContext: object expected");
                message.sessionContext = $root.usp_record.SessionContextRecord.fromObject(object.sessionContext);
            }
            return message;
        };

        /**
         * Creates a plain object from a Record message. Also converts values to other types if specified.
         * @function toObject
         * @memberof usp_record.Record
         * @static
         * @param {usp_record.Record} message Record
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Record.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.version = "";
                object.toId = "";
                object.fromId = "";
                object.payloadSecurity = options.enums === String ? "PLAINTEXT" : 0;
                if (options.bytes === String)
                    object.macSignature = "";
                else {
                    object.macSignature = [];
                    if (options.bytes !== Array)
                        object.macSignature = $util.newBuffer(object.macSignature);
                }
                if (options.bytes === String)
                    object.senderCert = "";
                else {
                    object.senderCert = [];
                    if (options.bytes !== Array)
                        object.senderCert = $util.newBuffer(object.senderCert);
                }
            }
            if (message.version != null && message.hasOwnProperty("version"))
                object.version = message.version;
            if (message.toId != null && message.hasOwnProperty("toId"))
                object.toId = message.toId;
            if (message.fromId != null && message.hasOwnProperty("fromId"))
                object.fromId = message.fromId;
            if (message.payloadSecurity != null && message.hasOwnProperty("payloadSecurity"))
                object.payloadSecurity = options.enums === String ? $root.usp_record.Record.PayloadSecurity[message.payloadSecurity] === undefined ? message.payloadSecurity : $root.usp_record.Record.PayloadSecurity[message.payloadSecurity] : message.payloadSecurity;
            if (message.macSignature != null && message.hasOwnProperty("macSignature"))
                object.macSignature = options.bytes === String ? $util.base64.encode(message.macSignature, 0, message.macSignature.length) : options.bytes === Array ? Array.prototype.slice.call(message.macSignature) : message.macSignature;
            if (message.senderCert != null && message.hasOwnProperty("senderCert"))
                object.senderCert = options.bytes === String ? $util.base64.encode(message.senderCert, 0, message.senderCert.length) : options.bytes === Array ? Array.prototype.slice.call(message.senderCert) : message.senderCert;
            if (message.noSessionContext != null && message.hasOwnProperty("noSessionContext")) {
                object.noSessionContext = $root.usp_record.NoSessionContextRecord.toObject(message.noSessionContext, options);
                if (options.oneofs)
                    object.recordType = "noSessionContext";
            }
            if (message.sessionContext != null && message.hasOwnProperty("sessionContext")) {
                object.sessionContext = $root.usp_record.SessionContextRecord.toObject(message.sessionContext, options);
                if (options.oneofs)
                    object.recordType = "sessionContext";
            }
            return object;
        };

        /**
         * Converts this Record to JSON.
         * @function toJSON
         * @memberof usp_record.Record
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Record.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Record
         * @function getTypeUrl
         * @memberof usp_record.Record
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Record.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/usp_record.Record";
        };

        /**
         * PayloadSecurity enum.
         * @name usp_record.Record.PayloadSecurity
         * @enum {number}
         * @property {number} PLAINTEXT=0 PLAINTEXT value
         * @property {number} TLS12=1 TLS12 value
         */
        Record.PayloadSecurity = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "PLAINTEXT"] = 0;
            values[valuesById[1] = "TLS12"] = 1;
            return values;
        })();

        return Record;
    })();

    usp_record.NoSessionContextRecord = (function() {

        /**
         * Properties of a NoSessionContextRecord.
         * @memberof usp_record
         * @interface INoSessionContextRecord
         * @property {Uint8Array|null} [payload] NoSessionContextRecord payload
         */

        /**
         * Constructs a new NoSessionContextRecord.
         * @memberof usp_record
         * @classdesc Represents a NoSessionContextRecord.
         * @implements INoSessionContextRecord
         * @constructor
         * @param {usp_record.INoSessionContextRecord=} [properties] Properties to set
         */
        function NoSessionContextRecord(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * NoSessionContextRecord payload.
         * @member {Uint8Array} payload
         * @memberof usp_record.NoSessionContextRecord
         * @instance
         */
        NoSessionContextRecord.prototype.payload = $util.newBuffer([]);

        /**
         * Creates a new NoSessionContextRecord instance using the specified properties.
         * @function create
         * @memberof usp_record.NoSessionContextRecord
         * @static
         * @param {usp_record.INoSessionContextRecord=} [properties] Properties to set
         * @returns {usp_record.NoSessionContextRecord} NoSessionContextRecord instance
         */
        NoSessionContextRecord.create = function create(properties) {
            return new NoSessionContextRecord(properties);
        };

        /**
         * Encodes the specified NoSessionContextRecord message. Does not implicitly {@link usp_record.NoSessionContextRecord.verify|verify} messages.
         * @function encode
         * @memberof usp_record.NoSessionContextRecord
         * @static
         * @param {usp_record.INoSessionContextRecord} message NoSessionContextRecord message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NoSessionContextRecord.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.payload != null && Object.hasOwnProperty.call(message, "payload"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.payload);
            return writer;
        };

        /**
         * Encodes the specified NoSessionContextRecord message, length delimited. Does not implicitly {@link usp_record.NoSessionContextRecord.verify|verify} messages.
         * @function encodeDelimited
         * @memberof usp_record.NoSessionContextRecord
         * @static
         * @param {usp_record.INoSessionContextRecord} message NoSessionContextRecord message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NoSessionContextRecord.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NoSessionContextRecord message from the specified reader or buffer.
         * @function decode
         * @memberof usp_record.NoSessionContextRecord
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {usp_record.NoSessionContextRecord} NoSessionContextRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NoSessionContextRecord.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.usp_record.NoSessionContextRecord();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 2: {
                        message.payload = reader.bytes();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a NoSessionContextRecord message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof usp_record.NoSessionContextRecord
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {usp_record.NoSessionContextRecord} NoSessionContextRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NoSessionContextRecord.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NoSessionContextRecord message.
         * @function verify
         * @memberof usp_record.NoSessionContextRecord
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NoSessionContextRecord.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.payload != null && message.hasOwnProperty("payload"))
                if (!(message.payload && typeof message.payload.length === "number" || $util.isString(message.payload)))
                    return "payload: buffer expected";
            return null;
        };

        /**
         * Creates a NoSessionContextRecord message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof usp_record.NoSessionContextRecord
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {usp_record.NoSessionContextRecord} NoSessionContextRecord
         */
        NoSessionContextRecord.fromObject = function fromObject(object) {
            if (object instanceof $root.usp_record.NoSessionContextRecord)
                return object;
            let message = new $root.usp_record.NoSessionContextRecord();
            if (object.payload != null)
                if (typeof object.payload === "string")
                    $util.base64.decode(object.payload, message.payload = $util.newBuffer($util.base64.length(object.payload)), 0);
                else if (object.payload.length >= 0)
                    message.payload = object.payload;
            return message;
        };

        /**
         * Creates a plain object from a NoSessionContextRecord message. Also converts values to other types if specified.
         * @function toObject
         * @memberof usp_record.NoSessionContextRecord
         * @static
         * @param {usp_record.NoSessionContextRecord} message NoSessionContextRecord
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NoSessionContextRecord.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                if (options.bytes === String)
                    object.payload = "";
                else {
                    object.payload = [];
                    if (options.bytes !== Array)
                        object.payload = $util.newBuffer(object.payload);
                }
            if (message.payload != null && message.hasOwnProperty("payload"))
                object.payload = options.bytes === String ? $util.base64.encode(message.payload, 0, message.payload.length) : options.bytes === Array ? Array.prototype.slice.call(message.payload) : message.payload;
            return object;
        };

        /**
         * Converts this NoSessionContextRecord to JSON.
         * @function toJSON
         * @memberof usp_record.NoSessionContextRecord
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NoSessionContextRecord.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for NoSessionContextRecord
         * @function getTypeUrl
         * @memberof usp_record.NoSessionContextRecord
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        NoSessionContextRecord.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/usp_record.NoSessionContextRecord";
        };

        return NoSessionContextRecord;
    })();

    usp_record.SessionContextRecord = (function() {

        /**
         * Properties of a SessionContextRecord.
         * @memberof usp_record
         * @interface ISessionContextRecord
         * @property {number|Long|null} [sessionId] SessionContextRecord sessionId
         * @property {number|Long|null} [sequenceId] SessionContextRecord sequenceId
         * @property {number|Long|null} [expectedId] SessionContextRecord expectedId
         * @property {number|Long|null} [retransmitId] SessionContextRecord retransmitId
         * @property {usp_record.SessionContextRecord.PayloadSARState|null} [payloadSarState] SessionContextRecord payloadSarState
         * @property {usp_record.SessionContextRecord.PayloadSARState|null} [payloadrecSarState] SessionContextRecord payloadrecSarState
         * @property {Array.<Uint8Array>|null} [payload] SessionContextRecord payload
         */

        /**
         * Constructs a new SessionContextRecord.
         * @memberof usp_record
         * @classdesc Represents a SessionContextRecord.
         * @implements ISessionContextRecord
         * @constructor
         * @param {usp_record.ISessionContextRecord=} [properties] Properties to set
         */
        function SessionContextRecord(properties) {
            this.payload = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SessionContextRecord sessionId.
         * @member {number|Long} sessionId
         * @memberof usp_record.SessionContextRecord
         * @instance
         */
        SessionContextRecord.prototype.sessionId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * SessionContextRecord sequenceId.
         * @member {number|Long} sequenceId
         * @memberof usp_record.SessionContextRecord
         * @instance
         */
        SessionContextRecord.prototype.sequenceId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * SessionContextRecord expectedId.
         * @member {number|Long} expectedId
         * @memberof usp_record.SessionContextRecord
         * @instance
         */
        SessionContextRecord.prototype.expectedId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * SessionContextRecord retransmitId.
         * @member {number|Long} retransmitId
         * @memberof usp_record.SessionContextRecord
         * @instance
         */
        SessionContextRecord.prototype.retransmitId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * SessionContextRecord payloadSarState.
         * @member {usp_record.SessionContextRecord.PayloadSARState} payloadSarState
         * @memberof usp_record.SessionContextRecord
         * @instance
         */
        SessionContextRecord.prototype.payloadSarState = 0;

        /**
         * SessionContextRecord payloadrecSarState.
         * @member {usp_record.SessionContextRecord.PayloadSARState} payloadrecSarState
         * @memberof usp_record.SessionContextRecord
         * @instance
         */
        SessionContextRecord.prototype.payloadrecSarState = 0;

        /**
         * SessionContextRecord payload.
         * @member {Array.<Uint8Array>} payload
         * @memberof usp_record.SessionContextRecord
         * @instance
         */
        SessionContextRecord.prototype.payload = $util.emptyArray;

        /**
         * Creates a new SessionContextRecord instance using the specified properties.
         * @function create
         * @memberof usp_record.SessionContextRecord
         * @static
         * @param {usp_record.ISessionContextRecord=} [properties] Properties to set
         * @returns {usp_record.SessionContextRecord} SessionContextRecord instance
         */
        SessionContextRecord.create = function create(properties) {
            return new SessionContextRecord(properties);
        };

        /**
         * Encodes the specified SessionContextRecord message. Does not implicitly {@link usp_record.SessionContextRecord.verify|verify} messages.
         * @function encode
         * @memberof usp_record.SessionContextRecord
         * @static
         * @param {usp_record.ISessionContextRecord} message SessionContextRecord message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SessionContextRecord.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.sessionId != null && Object.hasOwnProperty.call(message, "sessionId"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.sessionId);
            if (message.sequenceId != null && Object.hasOwnProperty.call(message, "sequenceId"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.sequenceId);
            if (message.expectedId != null && Object.hasOwnProperty.call(message, "expectedId"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.expectedId);
            if (message.retransmitId != null && Object.hasOwnProperty.call(message, "retransmitId"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.retransmitId);
            if (message.payloadSarState != null && Object.hasOwnProperty.call(message, "payloadSarState"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.payloadSarState);
            if (message.payloadrecSarState != null && Object.hasOwnProperty.call(message, "payloadrecSarState"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.payloadrecSarState);
            if (message.payload != null && message.payload.length)
                for (let i = 0; i < message.payload.length; ++i)
                    writer.uint32(/* id 7, wireType 2 =*/58).bytes(message.payload[i]);
            return writer;
        };

        /**
         * Encodes the specified SessionContextRecord message, length delimited. Does not implicitly {@link usp_record.SessionContextRecord.verify|verify} messages.
         * @function encodeDelimited
         * @memberof usp_record.SessionContextRecord
         * @static
         * @param {usp_record.ISessionContextRecord} message SessionContextRecord message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SessionContextRecord.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SessionContextRecord message from the specified reader or buffer.
         * @function decode
         * @memberof usp_record.SessionContextRecord
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {usp_record.SessionContextRecord} SessionContextRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SessionContextRecord.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.usp_record.SessionContextRecord();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.sessionId = reader.uint64();
                        break;
                    }
                case 2: {
                        message.sequenceId = reader.uint64();
                        break;
                    }
                case 3: {
                        message.expectedId = reader.uint64();
                        break;
                    }
                case 4: {
                        message.retransmitId = reader.uint64();
                        break;
                    }
                case 5: {
                        message.payloadSarState = reader.int32();
                        break;
                    }
                case 6: {
                        message.payloadrecSarState = reader.int32();
                        break;
                    }
                case 7: {
                        if (!(message.payload && message.payload.length))
                            message.payload = [];
                        message.payload.push(reader.bytes());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SessionContextRecord message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof usp_record.SessionContextRecord
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {usp_record.SessionContextRecord} SessionContextRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SessionContextRecord.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SessionContextRecord message.
         * @function verify
         * @memberof usp_record.SessionContextRecord
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SessionContextRecord.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.sessionId != null && message.hasOwnProperty("sessionId"))
                if (!$util.isInteger(message.sessionId) && !(message.sessionId && $util.isInteger(message.sessionId.low) && $util.isInteger(message.sessionId.high)))
                    return "sessionId: integer|Long expected";
            if (message.sequenceId != null && message.hasOwnProperty("sequenceId"))
                if (!$util.isInteger(message.sequenceId) && !(message.sequenceId && $util.isInteger(message.sequenceId.low) && $util.isInteger(message.sequenceId.high)))
                    return "sequenceId: integer|Long expected";
            if (message.expectedId != null && message.hasOwnProperty("expectedId"))
                if (!$util.isInteger(message.expectedId) && !(message.expectedId && $util.isInteger(message.expectedId.low) && $util.isInteger(message.expectedId.high)))
                    return "expectedId: integer|Long expected";
            if (message.retransmitId != null && message.hasOwnProperty("retransmitId"))
                if (!$util.isInteger(message.retransmitId) && !(message.retransmitId && $util.isInteger(message.retransmitId.low) && $util.isInteger(message.retransmitId.high)))
                    return "retransmitId: integer|Long expected";
            if (message.payloadSarState != null && message.hasOwnProperty("payloadSarState"))
                switch (message.payloadSarState) {
                default:
                    return "payloadSarState: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.payloadrecSarState != null && message.hasOwnProperty("payloadrecSarState"))
                switch (message.payloadrecSarState) {
                default:
                    return "payloadrecSarState: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.payload != null && message.hasOwnProperty("payload")) {
                if (!Array.isArray(message.payload))
                    return "payload: array expected";
                for (let i = 0; i < message.payload.length; ++i)
                    if (!(message.payload[i] && typeof message.payload[i].length === "number" || $util.isString(message.payload[i])))
                        return "payload: buffer[] expected";
            }
            return null;
        };

        /**
         * Creates a SessionContextRecord message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof usp_record.SessionContextRecord
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {usp_record.SessionContextRecord} SessionContextRecord
         */
        SessionContextRecord.fromObject = function fromObject(object) {
            if (object instanceof $root.usp_record.SessionContextRecord)
                return object;
            let message = new $root.usp_record.SessionContextRecord();
            if (object.sessionId != null)
                if ($util.Long)
                    (message.sessionId = $util.Long.fromValue(object.sessionId)).unsigned = true;
                else if (typeof object.sessionId === "string")
                    message.sessionId = parseInt(object.sessionId, 10);
                else if (typeof object.sessionId === "number")
                    message.sessionId = object.sessionId;
                else if (typeof object.sessionId === "object")
                    message.sessionId = new $util.LongBits(object.sessionId.low >>> 0, object.sessionId.high >>> 0).toNumber(true);
            if (object.sequenceId != null)
                if ($util.Long)
                    (message.sequenceId = $util.Long.fromValue(object.sequenceId)).unsigned = true;
                else if (typeof object.sequenceId === "string")
                    message.sequenceId = parseInt(object.sequenceId, 10);
                else if (typeof object.sequenceId === "number")
                    message.sequenceId = object.sequenceId;
                else if (typeof object.sequenceId === "object")
                    message.sequenceId = new $util.LongBits(object.sequenceId.low >>> 0, object.sequenceId.high >>> 0).toNumber(true);
            if (object.expectedId != null)
                if ($util.Long)
                    (message.expectedId = $util.Long.fromValue(object.expectedId)).unsigned = true;
                else if (typeof object.expectedId === "string")
                    message.expectedId = parseInt(object.expectedId, 10);
                else if (typeof object.expectedId === "number")
                    message.expectedId = object.expectedId;
                else if (typeof object.expectedId === "object")
                    message.expectedId = new $util.LongBits(object.expectedId.low >>> 0, object.expectedId.high >>> 0).toNumber(true);
            if (object.retransmitId != null)
                if ($util.Long)
                    (message.retransmitId = $util.Long.fromValue(object.retransmitId)).unsigned = true;
                else if (typeof object.retransmitId === "string")
                    message.retransmitId = parseInt(object.retransmitId, 10);
                else if (typeof object.retransmitId === "number")
                    message.retransmitId = object.retransmitId;
                else if (typeof object.retransmitId === "object")
                    message.retransmitId = new $util.LongBits(object.retransmitId.low >>> 0, object.retransmitId.high >>> 0).toNumber(true);
            switch (object.payloadSarState) {
            default:
                if (typeof object.payloadSarState === "number") {
                    message.payloadSarState = object.payloadSarState;
                    break;
                }
                break;
            case "NONE":
            case 0:
                message.payloadSarState = 0;
                break;
            case "BEGIN":
            case 1:
                message.payloadSarState = 1;
                break;
            case "INPROCESS":
            case 2:
                message.payloadSarState = 2;
                break;
            case "COMPLETE":
            case 3:
                message.payloadSarState = 3;
                break;
            }
            switch (object.payloadrecSarState) {
            default:
                if (typeof object.payloadrecSarState === "number") {
                    message.payloadrecSarState = object.payloadrecSarState;
                    break;
                }
                break;
            case "NONE":
            case 0:
                message.payloadrecSarState = 0;
                break;
            case "BEGIN":
            case 1:
                message.payloadrecSarState = 1;
                break;
            case "INPROCESS":
            case 2:
                message.payloadrecSarState = 2;
                break;
            case "COMPLETE":
            case 3:
                message.payloadrecSarState = 3;
                break;
            }
            if (object.payload) {
                if (!Array.isArray(object.payload))
                    throw TypeError(".usp_record.SessionContextRecord.payload: array expected");
                message.payload = [];
                for (let i = 0; i < object.payload.length; ++i)
                    if (typeof object.payload[i] === "string")
                        $util.base64.decode(object.payload[i], message.payload[i] = $util.newBuffer($util.base64.length(object.payload[i])), 0);
                    else if (object.payload[i].length >= 0)
                        message.payload[i] = object.payload[i];
            }
            return message;
        };

        /**
         * Creates a plain object from a SessionContextRecord message. Also converts values to other types if specified.
         * @function toObject
         * @memberof usp_record.SessionContextRecord
         * @static
         * @param {usp_record.SessionContextRecord} message SessionContextRecord
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SessionContextRecord.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.payload = [];
            if (options.defaults) {
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.sessionId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.sessionId = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.sequenceId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.sequenceId = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.expectedId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.expectedId = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.retransmitId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.retransmitId = options.longs === String ? "0" : 0;
                object.payloadSarState = options.enums === String ? "NONE" : 0;
                object.payloadrecSarState = options.enums === String ? "NONE" : 0;
            }
            if (message.sessionId != null && message.hasOwnProperty("sessionId"))
                if (typeof message.sessionId === "number")
                    object.sessionId = options.longs === String ? String(message.sessionId) : message.sessionId;
                else
                    object.sessionId = options.longs === String ? $util.Long.prototype.toString.call(message.sessionId) : options.longs === Number ? new $util.LongBits(message.sessionId.low >>> 0, message.sessionId.high >>> 0).toNumber(true) : message.sessionId;
            if (message.sequenceId != null && message.hasOwnProperty("sequenceId"))
                if (typeof message.sequenceId === "number")
                    object.sequenceId = options.longs === String ? String(message.sequenceId) : message.sequenceId;
                else
                    object.sequenceId = options.longs === String ? $util.Long.prototype.toString.call(message.sequenceId) : options.longs === Number ? new $util.LongBits(message.sequenceId.low >>> 0, message.sequenceId.high >>> 0).toNumber(true) : message.sequenceId;
            if (message.expectedId != null && message.hasOwnProperty("expectedId"))
                if (typeof message.expectedId === "number")
                    object.expectedId = options.longs === String ? String(message.expectedId) : message.expectedId;
                else
                    object.expectedId = options.longs === String ? $util.Long.prototype.toString.call(message.expectedId) : options.longs === Number ? new $util.LongBits(message.expectedId.low >>> 0, message.expectedId.high >>> 0).toNumber(true) : message.expectedId;
            if (message.retransmitId != null && message.hasOwnProperty("retransmitId"))
                if (typeof message.retransmitId === "number")
                    object.retransmitId = options.longs === String ? String(message.retransmitId) : message.retransmitId;
                else
                    object.retransmitId = options.longs === String ? $util.Long.prototype.toString.call(message.retransmitId) : options.longs === Number ? new $util.LongBits(message.retransmitId.low >>> 0, message.retransmitId.high >>> 0).toNumber(true) : message.retransmitId;
            if (message.payloadSarState != null && message.hasOwnProperty("payloadSarState"))
                object.payloadSarState = options.enums === String ? $root.usp_record.SessionContextRecord.PayloadSARState[message.payloadSarState] === undefined ? message.payloadSarState : $root.usp_record.SessionContextRecord.PayloadSARState[message.payloadSarState] : message.payloadSarState;
            if (message.payloadrecSarState != null && message.hasOwnProperty("payloadrecSarState"))
                object.payloadrecSarState = options.enums === String ? $root.usp_record.SessionContextRecord.PayloadSARState[message.payloadrecSarState] === undefined ? message.payloadrecSarState : $root.usp_record.SessionContextRecord.PayloadSARState[message.payloadrecSarState] : message.payloadrecSarState;
            if (message.payload && message.payload.length) {
                object.payload = [];
                for (let j = 0; j < message.payload.length; ++j)
                    object.payload[j] = options.bytes === String ? $util.base64.encode(message.payload[j], 0, message.payload[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.payload[j]) : message.payload[j];
            }
            return object;
        };

        /**
         * Converts this SessionContextRecord to JSON.
         * @function toJSON
         * @memberof usp_record.SessionContextRecord
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SessionContextRecord.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SessionContextRecord
         * @function getTypeUrl
         * @memberof usp_record.SessionContextRecord
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SessionContextRecord.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/usp_record.SessionContextRecord";
        };

        /**
         * PayloadSARState enum.
         * @name usp_record.SessionContextRecord.PayloadSARState
         * @enum {number}
         * @property {number} NONE=0 NONE value
         * @property {number} BEGIN=1 BEGIN value
         * @property {number} INPROCESS=2 INPROCESS value
         * @property {number} COMPLETE=3 COMPLETE value
         */
        SessionContextRecord.PayloadSARState = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "NONE"] = 0;
            values[valuesById[1] = "BEGIN"] = 1;
            values[valuesById[2] = "INPROCESS"] = 2;
            values[valuesById[3] = "COMPLETE"] = 3;
            return values;
        })();

        return SessionContextRecord;
    })();

    return usp_record;
})();

export { $root as default };
