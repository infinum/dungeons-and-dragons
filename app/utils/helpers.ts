export function sleep(duration: number): Promise<any> {
  return new Promise((resolve) => setTimeout(resolve, duration));
}

export function map(obj: Object|Array<any>, callback: (value: any, key: number|string) => {}) {
  if (obj instanceof Array) {
    return obj.map(callback);
  }
  return Object.keys(obj).map((key) => callback(obj[key], key));
}

export function first(arr: Array<any>) {
  return arr[0];
}

export function last(arr: Array<any>) {
  return arr[arr.length - 1];
}

export function mapValues<T>(obj: Object, callback: (value: any, key: string) => T): {[key: string]: T} {
  const copy = {};

  Object.keys(obj).forEach((key) => {
    copy[key] = callback(obj[key], key);
  });

  return copy;
}
