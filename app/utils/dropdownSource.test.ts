import {expect} from 'chai';

import {transformForDropdown} from './dropdownSource';

describe('utils/dropdownSource', () => {
  describe('transformForDropdown', () => {
    it('shoud transform the model', () => {
      const data = [{
        id: 1,
        name: 'Foo',
      }, {
        id: 'bar',
        name: 'Bar',
      }];
      const transformed = transformForDropdown(data);
      expect(transformed).to.deep.equal([{value: 1, label: 'Foo'}, {value: 'bar', label: 'Bar'}]);
    });
  });
});
