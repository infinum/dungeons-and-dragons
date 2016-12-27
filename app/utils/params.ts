import {isArray, isFunction, forEach, isObject} from 'lodash';

import {SLUG_SEPARATOR} from 'consts/app';

const r20: RegExp = /%20/g;
const rbracket: RegExp = /\[\]$/;

export function stringify(obj: Object = {}): string {
  const query: Array<string> = [];

  function add(key: string, value: any): void {
    const parsedValue = isFunction(value) ? value() : (value || '');
    query.push(`${encodeURIComponent(key)}=${encodeURIComponent(parsedValue)}`);
  }

  function buildParams(childObj: any, prefix: string): void {
    if (isArray(childObj)) {
      forEach(childObj, function(value, key) {
        if (rbracket.test(prefix)) {
          add(prefix, value);
        } else {
          buildParams(value, `${prefix}[${isObject(value) ? key : ''}]`);
        }
      });

    } else if (isObject(childObj)) {
      forEach(childObj, (value, key) => buildParams(value, `${prefix}[${key}]`));
    } else {
      add(prefix, childObj);
    }
  }

  forEach(obj, buildParams);

  return query.join('&').replace(r20, '+');
}

export function parseSlug(slug: string): string {
  return slug ? slug.split(SLUG_SEPARATOR).pop() : null;
}

export function makeSlug(slug: string, id: string): string {
  return `${slug}${SLUG_SEPARATOR}${id}`;
}
