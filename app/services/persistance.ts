import {Model} from 'mobx-collection-store';

export function saveModel(model: Model): void {
  const key = `${model.static.type}/${model[model.static.idAttribute]}`;
  const data = JSON.stringify(model.toJS());
  localStorage.setItem(key, data);
};

export function loadTypeModels(type: string): Array<Object> {
  const keys = Object.keys(localStorage);
  const typeKeys = keys.filter((key) => key.indexOf(`${type}/`) === 0);
  return typeKeys.map((key) => JSON.parse(localStorage.getItem(key)));
};
