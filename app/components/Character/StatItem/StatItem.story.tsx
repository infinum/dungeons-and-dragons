import {action, linkTo, storiesOf} from '@kadira/storybook';
import * as React from 'react';

import createCharacters from 'characterCreator';
import {StatItem} from './StatItem';

storiesOf('StatItem', module)
  .add('Default view', () => {
    const character = createCharacters({
      name: 'Baz',
      stats: {
        strength: 14,
      },
    });
    return <StatItem
      name='Foo'
      id='strength'
      character={character}
      onChange={(type) => action('Change ' + type)}
    />;
  })
;
