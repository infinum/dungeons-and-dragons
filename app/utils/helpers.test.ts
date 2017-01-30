import {expect} from 'chai';

import {sleep} from './helpers';

describe('utils/helpers', () => {
  describe('sleep', () => {
    it('shoud sleep for 10+ms', async () => {
      const start = Date.now();
      await sleep(10);
      const end = Date.now();
      expect(end - start).to.be.greaterThan(9);
    });
  });
});
