import {action, linkTo, storiesOf} from '@kadira/storybook';
import * as React from 'react';

import createCharacters from 'characterCreator';
import {CharacterItem} from './CharacterItem';

storiesOf('CharacterItem', module)
  .add('Default View', () => {
    const character = createCharacters({
      alignment: 'chaotic-evil',
      experience: 12345,
      name: 'FooBar',
      race: 'half-elf',
    });
    return <CharacterItem character={character} />;
  })
  .add('With avatar', () => {
    const character = createCharacters({
      alignment: 'chaotic-evil',
      avatar: 'http://placehold.it/500x500/ff0000/ffffff',
      experience: 12345,
      name: 'BarBaz',
      race: 'half-elf',
    });
    return <CharacterItem character={character} />;
  })
  .add('Exp 0', () => {
    const character = createCharacters({
      alignment: 'neutral',
      experience: 0,
      name: 'FooBarBaz',
      race: 'human',
    });
    return <CharacterItem character={character} />;
  })
  .add('Over level 20', () => {
    const character = createCharacters({
      alignment: 'lawful-evil',
      experience: 9999999,
      name: 'Baz',
      race: 'half-orc',
    });
    return <CharacterItem
      character={character}
      onDeleteClick={action('Delete')}
    />;
  })
;
