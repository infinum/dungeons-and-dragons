import {expect} from 'chai';

import {DataCollection} from './DataCollection';

describe('stores/DataCollection', () => {
  describe('createPlayer', () => {
    it('should create a new player without stats', async () => {
      const data = new DataCollection();

      const player = data.createPlayer();

      expect(player.name).to.equal('');
      expect(player.stats).to.have.length(0);
    });
    it('should create a new player without stats with some initial data', async () => {
      const data = new DataCollection();

      const player = data.createPlayer({
        name: 'Foo',
      });

      expect(player.name).to.equal('Foo');
      expect(player.stats).to.have.length(0);
    });
  });
});
