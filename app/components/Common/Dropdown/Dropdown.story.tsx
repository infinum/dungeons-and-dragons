import {action, linkTo, storiesOf} from '@kadira/storybook';
import * as React from 'react';

import ThemeProviderWrapper from 'utils/Theme';
import {Dropdown} from './Dropdown';

storiesOf('Dropdown', module)
  .add('Default view', () => {
    return (
      <ThemeProviderWrapper>
        <Dropdown
          label='Test label'
          value='foo'
          source={[{
            label: 'Foo',
            value: 'foo',
          }, {
            label: 'Bar',
            value: 'bar',
          }]}
          onChange={action('Change')}
        />
      </ThemeProviderWrapper>
    );
  })
  .add('Empty', () => {
    return (
      <ThemeProviderWrapper>
        <Dropdown
          label='Test label'
          source={[{
            label: 'Foo',
            value: 'foo',
          }, {
            label: 'Bar',
            value: 'bar',
          }]}
          onChange={action('Change')}
        />
      </ThemeProviderWrapper>
    );
  })
;
