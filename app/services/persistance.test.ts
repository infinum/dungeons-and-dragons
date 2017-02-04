import {expect} from 'chai';
import {Model} from 'mobx-collection-store';

const localStorageMemory = require('localstorage-memory');

import {loadTypeModels, saveModel} from './persistance';

// tslint:disable:no-string-literal

function mockLocalStorage(initialData) {
  return Object.assign({
    setItem(key: string, data: string) {
      this[key] = data;
    },

    getItem(key) {
      return this[key];
    },
  }, initialData);
}

describe('services/persistance', () => {
  afterEach(() => localStorageMemory.clear());

  describe('loadTypeModels', () => {
    it('shoud load a single model', () => {
      const testData = {id: 1, name: 'Foo'};
      localStorageMemory.setItem('player/1', JSON.stringify(testData));

      const data = loadTypeModels('player', localStorageMemory);

      expect(data).to.have.length(1);
      expect(data[0]).to.deep.equal(testData);
    });

    it('shoud load multiple models', () => {
      const testData = {id: 1, name: 'Foo'};
      localStorageMemory.setItem('player/1', JSON.stringify(testData));
      localStorageMemory.setItem('player/2', JSON.stringify({id: 2}));
      localStorageMemory.setItem('player/3', JSON.stringify({id: 3}));

      const data = loadTypeModels('player', localStorageMemory);

      expect(data).to.have.length(3);
      expect(data[0]).to.deep.equal(testData);
      expect(data[2]['id']).to.equal(3);
    });

    it('shoud load only relevant models', () => {
      const testData = {id: 1, name: 'Foo'};
      localStorageMemory.setItem('player/1', JSON.stringify(testData));
      localStorageMemory.setItem('test/1', JSON.stringify({id: 4}));
      localStorageMemory.setItem('player/2', JSON.stringify({id: 2}));
      localStorageMemory.setItem('players/1', JSON.stringify({id: 5}));
      localStorageMemory.setItem('player/3', JSON.stringify({id: 3}));

      const data = loadTypeModels('player', localStorageMemory);

      expect(data).to.have.length(3);
      expect(data[0]).to.deep.equal(testData);
      expect(data[2]['id']).to.equal(3);
    });
  });

  describe('saveModel', () => {
    it('should correctly save the data', () => {
      class FooModel extends Model {
        public static type = 'foo';
        public static idAttribute = 'bar';
      }

      const model = new FooModel({id: 1, foo: 2, bar: 3});
      saveModel(model, localStorageMemory);

      const data = JSON.parse(localStorageMemory.getItem('foo/3'));
      expect(data).to.be.an('object');
      expect(data['id']).to.equal(1);
      expect(data['bar']).to.equal(3);
    });
  });
});
