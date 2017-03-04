import * as chai from 'chai';
import * as chaiEnzyme from 'chai-enzyme';
import {render} from 'enzyme';
import {DataCollection} from 'stores/DataCollection';

chai.use(chaiEnzyme());
const expect = chai.expect;

import * as React from 'react';
import {Character} from 'stores/models';
import {CharacterList} from './CharacterList';

describe('components/Character/CharacterList', () => {
  it('should show the data', () => {
    const characters = [
      new Character({
        id: 123,
        name: 'FooBar',
      }),
      new Character({
        id: 321,
        name: 'Foo',
      }),
      new Character({
        id: 345,
        name: 'Bar',
      }),
    ];

    const collection = new DataCollection();
    collection.add(characters);

    const wrapper = render(<CharacterList characters={characters} />);

    expect(wrapper.find('ul').length).to.equal(1);
    expect(wrapper.find('li').length).to.equal(3);
    expect(wrapper.find('a').length).to.equal(3);
    expect(wrapper.find('a').first()).to.have.text('FooBar');
  });
});
