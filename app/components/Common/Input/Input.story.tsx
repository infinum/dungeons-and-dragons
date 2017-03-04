import {action, linkTo, storiesOf} from '@kadira/storybook';
import * as React from 'react';

import ThemeProviderWrapper from 'utils/Theme';
import {Input} from './Input';

storiesOf('Input', module)
  .add('Default view', () => {
    return (
      <ThemeProviderWrapper>
        <Input
          type='text'
          label='Test label'
          value='Foo'
        />
      </ThemeProviderWrapper>
    );
  })
  .add('Empty', () => {
    return (
      <ThemeProviderWrapper>
        <Input
          type='text'
          label='Test label'
        />
      </ThemeProviderWrapper>
    );
  })
;
