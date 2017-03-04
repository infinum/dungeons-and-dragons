import {action, linkTo, storiesOf} from '@kadira/storybook';
import * as React from 'react';

import {initStatic} from 'stores/data';
import {DataCollection} from 'stores/DataCollection';
import {Character} from 'stores/models';
import {CharacterItem} from './CharacterItem';

function createCharacter(data) {
  const collection = new DataCollection();
  const character = new Character(data, collection);
  collection.add(character);
  initStatic(collection);
  return character;
}

storiesOf('CharacterItem', module)
  .add('Default View', () => {
    const character = createCharacter({
      alignment: 'chaotic-evil',
      experience: 12345,
      name: 'FooBar',
      race: 'half-elf',
    });
    return <CharacterItem character={character} />;
  })
  .add('With avatar', () => {
    const character = createCharacter({
      alignment: 'chaotic-evil',
      avatar: 'http://placehold.it/500x500/ff0000/ffffff',
      experience: 12345,
      name: 'BarBaz',
      race: 'half-elf',
    });
    return <CharacterItem character={character} />;
  })
  .add('Exp 0', () => {
    const character = createCharacter({
      alignment: 'neutral',
      experience: 0,
      name: 'FooBarBaz',
      race: 'human',
    });
    return <CharacterItem character={character} />;
  })
  .add('Over level 20', () => {
    const character = createCharacter({
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
