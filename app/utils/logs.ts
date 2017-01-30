import levels from 'enums/logLevel';
import logger from 'utils/logger';

export const generalLog = logger('general', levels.INFO);
export const networkLog = logger('network', levels.WARN);
export const errorLog = logger('error', levels.INFO);
export const devLog = logger('dev', levels.INFO);
