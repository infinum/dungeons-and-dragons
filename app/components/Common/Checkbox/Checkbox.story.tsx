import {action, linkTo, storiesOf} from '@kadira/storybook';
import * as React from 'react';

import {Checkbox} from './Checkbox';

storiesOf('Checkbox', module)
  .add('Default View', () => {
    return <Checkbox />;
  })
  .add('Disabled', () => {
    return <Checkbox disabled />;
  })
  .add('Checked', () => {
    return <Checkbox checked />;
  })
  .add('Disabled checked', () => {
    return <Checkbox checked disabled />;
  })
  .add('Clickable', () => {
    return <Checkbox onChange={() => alert('Clicked!')} />;
  })
;
