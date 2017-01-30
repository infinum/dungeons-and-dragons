import {getLogger} from 'loglevel';

import config from 'config';
import levels from 'enums/logLevel';

/**
 * Log formatting function
 *
 * @param {String} method - Log level method
 * @param {String} message - Message to log
 * @return {String} Formatted message
 */
function prefixFn(method: string, message: string): string {
  const time: string = (new Date()).toISOString();
  return `${time}|${method}|${message}`;
}

/**
 * Initialize a logger
 *
 * @param {String} name - Logger name
 * @param {Number} [consoleLevel=levels.INFO] - Level of messages that should be logged to console
 * @param {Number} [saveLevel=levels.DEBUG] - Level of messages that should be logged to file
 * @return {Object} Logger
 */
export default function(name: string, consoleLevel: number = levels.INFO, saveLevel: number = levels.DEBUG): Log {
  const log: Log = getLogger(name);

  log.setLevel(config.PROD ? levels.SILENT : consoleLevel, false);

  return log;
}
