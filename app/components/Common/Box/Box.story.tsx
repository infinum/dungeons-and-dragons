import {action, linkTo, storiesOf} from '@kadira/storybook';
import * as React from 'react';

import {Box} from './Box';

storiesOf('Box', module)
  .add('Default View', () => {
    return <Box>Hello world!</Box>;
  })
  .add('With padding', () => {
    return <div style={{padding: 20}}><Box>Hello world!</Box></div>;
  })
;
