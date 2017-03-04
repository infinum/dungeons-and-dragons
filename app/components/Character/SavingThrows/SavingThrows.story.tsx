import {action, linkTo, storiesOf} from '@kadira/storybook';
import * as React from 'react';

import createCharacters from 'characterCreator';
import {SavingThrows} from './SavingThrows';

storiesOf('SavingThrows', module)
  .add('Default view', () => {
    const character = createCharacters({
      class: 'paladin',
      name: 'Baz',
      stats: {
        charisma: 11,
        constitution: 12,
        dexterity: 13,
        intelligence: 14,
        strength: 15,
        wisdom: 16,
      },
    });
    return <SavingThrows character={character} />;
  })
;
