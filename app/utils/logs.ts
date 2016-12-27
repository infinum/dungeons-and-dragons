import logger from 'utils/logger';
import levels from 'enums/logLevel';

export const generalLog = logger('general', levels.INFO);
export const networkLog = logger('network', levels.WARN);
export const serverLog = logger('server', levels.INFO);
export const http2Log = logger('http2', levels.WARN);
export const errorLog = logger('error', levels.INFO);
export const devLog = logger('dev', levels.INFO);
