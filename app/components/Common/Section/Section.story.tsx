import {action, linkTo, storiesOf} from '@kadira/storybook';
import * as React from 'react';

import {Section} from './Section';

storiesOf('Section', module)
  .add('Default View', () => {
    return <Section>Hello world!</Section>;
  })
;
