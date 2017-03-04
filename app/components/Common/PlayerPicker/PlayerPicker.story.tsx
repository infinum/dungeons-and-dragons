import {action, linkTo, storiesOf} from '@kadira/storybook';
import * as React from 'react';

import createCharacters from 'characterCreator';
import {PlayerPicker} from './PlayerPicker';

storiesOf('PlayerPicker', module)
  .add('Default View', () => {
    const character = createCharacters({
      id: 123,
      name: 'FooBar',
      playerName: 'BarBaz',
    });

    return <PlayerPicker character={character} />;
  })
  .add('No name', () => {
    const character = createCharacters({
      id: 123,
      name: 'FooBar',
    });

    return <PlayerPicker character={character} />;
  })
;
