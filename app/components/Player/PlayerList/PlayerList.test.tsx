import * as chai from 'chai';
import * as chaiEnzyme from 'chai-enzyme';
import {render} from 'enzyme';
import {DataCollection} from 'stores/DataCollection';

chai.use(chaiEnzyme());
const expect = chai.expect;

import * as React from 'react';
import {Player} from 'stores/models';
import {PlayerList} from './PlayerList';

describe('components/Player/PlayerList', () => {
  it('should show the data', () => {
    const players = [
      new Player({
        id: 123,
        name: 'FooBar',
      }),
      new Player({
        id: 321,
        name: 'Foo',
      }),
      new Player({
        id: 345,
        name: 'Bar',
      }),
    ];

    const collection = new DataCollection();
    collection.add(players);

    const wrapper = render(<PlayerList players={players} />);

    expect(wrapper.find('ul').length).to.equal(1);
    expect(wrapper.find('li').length).to.equal(3);
    expect(wrapper.find('a').length).to.equal(3);
    expect(wrapper.find('a').first()).to.have.text('FooBar');
  });
});
