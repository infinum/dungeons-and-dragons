import {expect} from 'chai';
import {initStatic} from 'stores/data';
import {DataCollection} from 'stores/DataCollection';

import {Character} from 'stores/models';

describe('models/Character', () => {
  let data;
  beforeEach(() => {
    data = new DataCollection();
    return initStatic(data);
  });

  it('should expose available subraces, if any', () => {
    const elfCharacter = new Character({race: 'elf'}, data);
    const humanCharacter = new Character({race: 'human'}, data);
    data.add([elfCharacter, humanCharacter]);

    expect(elfCharacter.availableSubraces).to.have.lengthOf(2);
    expect(humanCharacter.availableSubraces).to.have.lengthOf(0);
  });
});
