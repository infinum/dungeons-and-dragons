import * as chai from 'chai';
import * as chaiEnzyme from 'chai-enzyme';
import {render} from 'enzyme';
import {DataCollection} from 'stores/DataCollection';

chai.use(chaiEnzyme());
const expect = chai.expect;

import * as React from 'react';
import {Character} from 'stores/models';
import {CharacterItem} from './CharacterItem';

describe('components/Character/CharacterItem', () => {
  it('should show the data', () => {
    const character = new Character({
      id: 123,
      name: 'FooBar',
    });

    const collection = new DataCollection();
    collection.add(character);

    const wrapper = render(<CharacterItem character={character} />);

    expect(wrapper.find('li').length).to.equal(1);
    expect(wrapper.find('a').length).to.equal(1);
    expect(wrapper.find('a')).to.have.text('FooBar');
  });
});
