import {isObject, isFunction} from 'lodash';

import config from 'config';
import requestType from 'enums/requestType';
import {networkLog} from 'utils/logs';

/**
 * Parse the response from server
 *
 * @param {Object} response - Response from the server
 * @return {Object} Parsed response
 * @throws {Error} Response is not valid
 */
function parseResponse(response: Object): Object {

  /* istanbul ignore if */
  if (!response) {
    networkLog.error('Response is not valid');
    throw new Error('Response is not valid');
  }

  // You can add the project specific parsing here
  return response;
}

/**
 * Make a server request
 *
 * @param {String} method - HTTP method
 * @param {String} url - API endpoint URL
 * @param {Object} [data=null] - Data that should be sent to the API
 * @param {Objet} [headerObj={}] - Map of headers
 * @param {Function} [handler=null] - Function that will be called if an exception happens
 * @return {Object} Parsed server response
 * @throws {Error}
 */
function request(method: string, url: string, data?: Object, headerObj?: Object, handler?: Function): Promise<Object> {
  const headers: HeadersInit = Object.assign({
    Accept: 'application/json'
  }, headerObj);

  let body: BodyInit;
  if (isObject(data)) {
    body = JSON.stringify(data);
    headers['Content-Type'] = 'application/json';
  } else {
    body = data.toString();
  }
  const options: RequestInit = {method, headers, body};

  networkLog.debug(`Request: ${options.method} ${url}`);

  let res;
  return fetch(config.root + config.apiPath + url, options)
    .then((_res) => {
      res = _res;
      return res.json();
    })
    .then((response) => {
      networkLog.debug(`Response: ${res.status}`);
      return parseResponse(response);
    })
    .catch((e) => {
      if (isFunction(handler)) {
        return handler(res.status, url, options, e && e.status, e && e.message, e);
      }
      throw e;
    });
}

/**
 * Read API call
 *
 * @param {String} url - API endpoint URL
 * @param {Objet} [headerObj={}] - Map of headers
 * @param {Function} [handler=null] - Function that will be called if an exception happens
 * @return {Object} Parsed server response
 * @throws {Error}
 */
export function read(url: string, headerObj: Object = {}, handler?: Function): Promise<Object> {
  return request(requestType.READ, url, null, headerObj, handler);
}

/**
 * Create API call
 *
 * @param {String} url - API endpoint URL
 * @param {Object} [data=false] - Data that should be sent to the API
 * @param {Objet} [headerObj={}] - Map of headers
 * @param {Function} [handler=null] - Function that will be called if an exception happens
 * @return {Object} Parsed server response
 * @throws {Error}
 */
export function create(url: string, data?: Object, headerObj: Object = {}, handler?: Function): Promise<Object> {
  const req = request(requestType.CREATE, url, data, headerObj, handler);
  return req;
}

/**
 * Update API call
 *
 * @param {String} url - API endpoint URL
 * @param {Object} [data=false] - Data that should be sent to the API
 * @param {Objet} [headerObj={}] - Map of headers
 * @param {Function} [handler=null] - Function that will be called if an exception happens
 * @return {Object} Parsed server response
 * @throws {Error}
 */
export function update(url: string, data?: Object, headerObj: Object = {}, handler?: Function): Promise<Object> {
  return request(requestType.UPDATE, url, data, headerObj, handler);
}

/**
 * Remove API call
 *
 * @param {String} url - API endpoint URL
 * @param {Object} [data=false] - Data that should be sent to the API
 * @param {Objet} [headerObj={}] - Map of headers
 * @param {Function} [handler=null] - Function that will be called if an exception happens
 * @return {Object} Parsed server response
 * @throws {Error}
 */
export function remove(url: string, data?: Object, headerObj: Object = {}, handler?: Function): Promise<Object> {
  return request(requestType.REMOVE, url, data, headerObj, handler);
}
