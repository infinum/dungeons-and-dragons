import {action, linkTo, storiesOf} from '@kadira/storybook';
import * as React from 'react';

import createCharacters from 'characterCreator';
import {DataCollection} from 'stores/DataCollection';
import {transformForDropdown} from 'utils/dropdownSource';
import ThemeProviderWrapper from 'utils/Theme';
import {BasicInfoSection} from './BasicInfoSection';

storiesOf('BasicInfoSection', module)
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

    const data = character.__collection as DataCollection;
    const alignments = transformForDropdown(data.alignment);
    const backgrounds = transformForDropdown(data.background);
    const classes = transformForDropdown(data.class);
    const races = transformForDropdown(data.race);
    const subraces = transformForDropdown(character.availableSubraces);

    return (
      <ThemeProviderWrapper>
        <BasicInfoSection character={character} options={{alignments, backgrounds, classes, races, subraces}} />
      </ThemeProviderWrapper>
    );
  })
;
