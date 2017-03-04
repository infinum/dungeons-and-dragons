import {action, linkTo, storiesOf} from '@kadira/storybook';
import * as React from 'react';

import {initStatic} from 'stores/data';
import {DataCollection} from 'stores/DataCollection';
import {Character} from 'stores/models';
import {DeleteCharacter} from './DeleteCharacter';

function createCharacter(data) {
  const collection = new DataCollection();
  const character = new Character(data, collection);
  collection.add(character);
  initStatic(collection);
  return character;
}

storiesOf('DeleteCharacter', module)
  .add('Default View', () => {
    const character = createCharacter({
      alignment: 'chaotic-evil',
      experience: 12345,
      name: 'FooBar',
      race: 'half-elf',
    });
    return <DeleteCharacter
      character={character}
      onDeleteCancel={action('Cancel')}
      onDeleteConfirm={action('Delete')}
    />;
  })
;
