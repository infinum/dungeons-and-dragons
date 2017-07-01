import config from 'config';

import {DEBUG_OBJ} from 'consts/app';

/** @constant {object} debug - object to be exposed */
const debug: object = {config};

if (!config.PROD) {
  window[DEBUG_OBJ] = debug;
}

/**
 * Add a variable to the debug object
 *
 * @param {String} name - Name of the variable
 * @param {Mixed} value - Value of the variable
 * @return {undefined}
 */
export function debugVar(name: string, value: any): void {
  debug[name] = value;
}

/**
 * Add multiple variables to the debug object
 *
 * @param {object} vars - object with variables to be added
 * @return {undefined}
 */
export function debugVars(vars: object): void {
  Object.assign(debug, vars);
}
