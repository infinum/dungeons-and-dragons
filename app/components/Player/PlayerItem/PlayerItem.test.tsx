import * as chai from 'chai';
import * as chaiEnzyme from 'chai-enzyme';
import {render} from 'enzyme';
import {DataCollection} from 'stores/DataCollection';

chai.use(chaiEnzyme());
const expect = chai.expect;

import * as React from 'react';
import {Player} from 'stores/models';
import {PlayerItem} from './PlayerItem';

describe('components/Player/PlayerItem', () => {
  it('should show the data', () => {
    const player = new Player({
      id: 123,
      name: 'FooBar',
    });

    const collection = new DataCollection();
    collection.add(player);

    const wrapper = render(<PlayerItem player={player} />);

    expect(wrapper.find('li').length).to.equal(1);
    expect(wrapper.find('a').length).to.equal(1);
    expect(wrapper.find('a')).to.have.text('FooBar');
  });
});
