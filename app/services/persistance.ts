import {Model} from 'mobx-collection-store';

export function saveModel(model: Model, storage = localStorage): void {
  const key = `${model.static.type}/${model[model.static.idAttribute]}`;
  const data = JSON.stringify(model.toJS());
  storage.setItem(key, data);
}

export function loadTypeModels(type: number|string, storage = localStorage): Array<object> {
  const typeKeys = [];
  for (let index = 0; index < storage.length; index++) {
    const key = storage.key(index);
    if (key.indexOf(`${type}/`) === 0) {
      typeKeys.push(key);
    }
  }
  return typeKeys.map((key) => JSON.parse(storage.getItem(key)));
}

export function removeModel(type: number|string, id: number|string, storage = localStorage) {
  storage.removeItem(`${type}/${id}`);
}
