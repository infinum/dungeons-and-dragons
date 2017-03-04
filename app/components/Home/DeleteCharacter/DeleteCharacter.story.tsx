import {action, linkTo, storiesOf} from '@kadira/storybook';
import * as React from 'react';

import createCharacters from 'characterCreator';
import {DeleteCharacter} from './DeleteCharacter';

storiesOf('DeleteCharacter', module)
  .add('Default View', () => {
    const character = createCharacters({
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
