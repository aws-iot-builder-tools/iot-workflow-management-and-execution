import {format, transports, createLogger} from "winston";
import util from 'util';

const transform = (info, opts) => {
    const args = info[Symbol.for('splat')];
    if (args) {
        info.message = util.format(info.message, ...args);
    }
    return info;
};

const utilFormatter = () => {
    return {transform};
};

/**
 * USAGE:
 * /**
 *     logger.debug('HELLO2');
 *     logger.info("Hello, %s", "Bob");          // Works: outputs "Hello, Bob"
 *     logger.info("Hello", "Bob");              // Works: outputs "Hello Bob"
 *     logger.info("Hello", 123, {someObj: 1});  // Works: outputs "Hello 123 { someObj: 1} "
 *     **/

export const logger = createLogger({
    level: 'debug',
    format: format.combine(
        format.timestamp({format: 'YYYY-MM-DD HH:mm:ss.SSS'}),
        utilFormatter(),
        format.colorize(),
        format.printf(({level, message, label, timestamp}) => `${timestamp} ${label || '-'} ${level}: ${message}`),
    ),
    transports: [
        new transports.Stream({
            stream: process.stderr,
            level: 'debug',
        })
    ],
});