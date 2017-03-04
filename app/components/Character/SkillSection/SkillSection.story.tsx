import {action, linkTo, storiesOf} from '@kadira/storybook';
import * as React from 'react';

import createCharacters from 'characterCreator';
import {DataCollection} from 'stores/DataCollection';
import {SkillSection} from './SkillSection';

storiesOf('SkillSection', module)
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

    return <SkillSection character={character} />;
  })
;
