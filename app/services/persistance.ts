import {Model} from 'mobx-collection-store';

export function saveModel(model: Model, storage = localStorage): void {
  const key = `${model.static.type}/${model[model.static.idAttribute]}`;
  const data = JSON.stringify(model.toJS());
  storage.setItem(key, data);
};

export function loadTypeModels(type: string, storage = localStorage): Array<Object> {
  const typeKeys = [];
  for (let index = 0; index < storage.length; index++) {
    const key = storage.key(index);
    if (key.indexOf(`${type}/`) === 0) {
      typeKeys.push(key);
    }
  }
  return typeKeys.map((key) => JSON.parse(storage.getItem(key)));
};
