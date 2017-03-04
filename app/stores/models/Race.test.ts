import {expect} from 'chai';
import {initStatic} from 'stores/data';
import {DataCollection} from 'stores/DataCollection';

import {Race} from 'stores/models';

describe('models/Race', () => {
  let data;
  beforeEach(() => {
    data = new DataCollection();
    return initStatic(data);
  });

  it('should find subrace if it exists', () => {
    const race = data.race.find((item) => item.id === 'elf') as Race;
    expect(race.findSubrace('wood-elf')).to.be.an('object');
  });

  it('should return undefined if no subraces', () => {
    const race = data.race.find((item) => item.id === 'human') as Race;
    expect(race.findSubrace('foo')).to.be.an('undefined');
  });
});
