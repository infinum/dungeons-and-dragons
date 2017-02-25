import * as chai from 'chai';
import * as chaiEnzyme from 'chai-enzyme';
import {render} from 'enzyme';

chai.use(chaiEnzyme());
const expect = chai.expect;

import * as React from 'react';
import {CreatePlayer} from './CreatePlayer';

describe('components/Player/CreatePlayer', () => {
  it('should show a button', () => {
    const wrapper = render(<CreatePlayer onCreateClick={() => null} />);

    expect(wrapper.find('button').length).to.equal(1);
  });
});
