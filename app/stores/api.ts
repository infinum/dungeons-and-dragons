import {JsonApiStore, JsonApiRecord} from 'mobx-jsonapi-store';

import {apify, deapify} from 'utils/apify';
import {stringify} from 'utils/params';
import {read, create, update, remove} from 'services/api/request';

import IJsonApiResult from 'interfaces/IJsonApiResult';

export default class ApiAdapterStore extends JsonApiStore {

  /**
   * Read data from the API
   *
   * @param {String} baseUrl - Base API url
   * @param {Object} [query=null] - API query
   * @param {Function} [handler=null] - Custom error handler
   * @throws {Object[]} Throws a list of API errors
   * @return {Object} API response
   */
  read(baseUrl: string, query?: Object, handler?: Function): Promise<Array<JsonApiRecord>> {
    const url = query ? `${baseUrl}?${stringify(query)}` : baseUrl;

    return read(url, {}, handler).then((res: IJsonApiResult) => {
      const result: IJsonApiResult = deapify(res);
      if (result.errors) {
        throw result.errors;
      }
      return this.sync(result);
    });
  }

  /**
   * Post data to the API
   *
   * @param {String} baseUrl - Base API url
   * @param {Object} data - Data to be sent
   * @param {Object} [query=null] - API query
   * @param {Function} [handler=null] - Custom error handler
   * @throws {Object[]} Throws a list of API errors
   * @return {Object} API response
   */
  create(baseUrl: string, data: Object = {}, query?: Object, handler?: Function): Promise<Array<JsonApiRecord>> {
    const url: string = query ? `${baseUrl}?${stringify(query)}` : baseUrl;

    return create(url, apify(data), {}, handler).then((res: IJsonApiResult) => {
      const result: IJsonApiResult = deapify(res);
      if (result.errors) {
        throw result.errors;
      }
      return this.sync(result);
    });
  }

  /**
   * Post data to the API
   *
   * @param {String} baseUrl - Base API url
   * @param {Object} data - Data to be sent
   * @param {Object} [query=null] - API query
   * @param {Function} [handler=null] - Custom error handler
   * @throws {Object[]} Throws a list of API errors
   * @return {Object} API response
   */
  update(baseUrl: string, data: Object = {}, query?: Object, handler?: Function): Promise<Array<JsonApiRecord>> {
    const url: string = query ? `${baseUrl}?${stringify(query)}` : baseUrl;

    return update(url, apify(data), {}, handler).then((res: IJsonApiResult) => {
      const result: IJsonApiResult = deapify(res);
      if (result.errors) {
        throw result.errors;
      }
      return this.sync(result);
    });
  }

  /**
   * Remove data from the API
   *
   * @param {String} baseUrl - Base API url
   * @param {Object} data - Data to be sent
   * @param {Object} [query=null] - API query
   * @param {Function} [handler=null] - Custom error handler
   * @throws {Object[]} Throws a list of API errors
   * @return {Object} API response
   */
  removeCall(baseUrl: string, data: Object = {}, query?: Object, handler?: Function): Promise<Array<JsonApiRecord>> {
    const url: string = query ? `${baseUrl}?${stringify(query)}` : baseUrl;

    return remove(url, apify(data), {}, handler).then((res: IJsonApiResult) => {
      const result: IJsonApiResult = deapify(res);
      if (result.errors) {
        throw result.errors;
      }
      return this.sync(result);
    });
  }

  /**
   * Get the local data cache or load it from the API othervise
   *
   * @param {String} type - Model
   * @param {String} baseUrl - Base API url
   * @param {Object} [query=null] - API query
   * @param {Function} [handler=null] - Custom error handler
   * @throws {Object[]} Throws a list of API errors
   * @return {Object} API response
   */
  fetch(type: string, baseUrl: string, query?: Object, handler?: Function): Promise<Array<JsonApiRecord>> {
    const models: Array<JsonApiRecord> = this.findAll(type);
    if (models.length) {
      return Promise.resolve(models);
    }
    return this.read(baseUrl, query, handler);
  }
}
