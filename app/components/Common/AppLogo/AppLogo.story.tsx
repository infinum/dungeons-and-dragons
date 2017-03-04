import {action, linkTo, storiesOf} from '@kadira/storybook';
import * as React from 'react';

import {AppLogo} from './AppLogo';

storiesOf('AppLogo', module)
  .add('Default View', () => {
    return <AppLogo />;
  })
;
