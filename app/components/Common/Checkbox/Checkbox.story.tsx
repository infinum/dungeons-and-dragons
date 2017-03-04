import {action, linkTo, storiesOf} from '@kadira/storybook';
import * as React from 'react';

import {Checkbox} from './Checkbox';

storiesOf('Checkbox', module)
  .add('Default View', () => {
    return <Checkbox onClick={action('Change')} />;
  })
  .add('Disabled', () => {
    return <Checkbox disabled onClick={action('Change')} />;
  })
  .add('Checked', () => {
    return <Checkbox checked onClick={action('Change')} />;
  })
  .add('Disabled checked', () => {
    return <Checkbox checked disabled />;
  })
;
