import {camelCase, kebabCase, mapKeys, mapValues, map, isArray, isObject} from 'lodash';

/**
 * Deep iteration trough an object and transformation
 *
 * @param {Object} obj - Object that needs to be Transformed
 * @param {Function} transformer - Transformer function
 * @return {Object} Transformed object
 */
export function iterator(obj: any, transformer: Function) {
  if (isArray(obj)) {
    return map(obj, (value) => iterator(value, transformer));
  } else if (isObject(obj)) {
    const copy = mapValues(obj, (value) => iterator(value, transformer));
    return mapKeys(copy, (value, key) => transformer(key));
  }
  return obj;
}

/**
 * Transform all object keys to snake_case
 *
 * @param {Object} obj - Object that needs to be sent tot he API
 * @return {Object} Transformed object
 */
export function apify<T>(obj: T): T {
  return iterator(obj, kebabCase);
}

/**
 * Transform all object keys to camelCase
 *
 * @param {Object} obj - Object received from the API
 * @return {Object} Transformed object
 */
export function deapify<T>(obj: T): T {
  return iterator(obj, camelCase);
}
