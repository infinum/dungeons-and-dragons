import config from 'config';
import * as _ from 'lodash';

/** @constant {Object} debug - Object to be exposed */
const debug: Object = {config, _};

if (!config.PROD) {
  window['debug'] = debug;
}

/**
 * Add a variable to the debug object
 *
 * @param {String} name - Name of the variable
 * @param {Mixed} value - Value of the variable
 * @return {undefined}
 */
export function debugVar(name, value) {
  debug[name] = value;
}

/**
 * Add multiple variables to the debug object
 *
 * @param {Object} vars - Object with variables to be added
 * @return {undefined}
 */
export function debugVars(vars) {
  Object.assign(debug, vars);
}
