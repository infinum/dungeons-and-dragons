import {action, linkTo, storiesOf} from '@kadira/storybook';
import * as React from 'react';

import createCharacters from 'characterCreator';
import {CharacterList} from './CharacterList';

storiesOf('CharacterList', module)
  .add('Default View', () => {
    const characters = createCharacters([{
      alignment: 'chaotic-evil',
      experience: 12345,
      name: 'FooBar',
      race: 'half-elf',
    }, {
      alignment: 'chaotic-evil',
      avatar: 'http://placehold.it/500x500/ff0000/ffffff',
      experience: 12345,
      name: 'BarBaz',
      race: 'half-elf',
    }, {
      alignment: 'neutral',
      experience: 0,
      name: 'FooBarBaz',
      race: 'human',
    }, {
      alignment: 'lawful-evil',
      experience: 9999999,
      name: 'Baz',
      race: 'half-orc',
    }]);
    return <CharacterList
      characters={characters}
      onDeleteClick={action('Delete')}
    />;
  })
;
