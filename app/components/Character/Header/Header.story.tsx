import {action, linkTo, storiesOf} from '@kadira/storybook';
import * as React from 'react';

import createCharacters from 'characterCreator';
import {Header} from './Header';

storiesOf('Header', module)
  .add('Default view', () => {
    const character = createCharacters({
      experience: 12345,
      name: 'Baz',
    });
    return <Header character={character} />;
  })
  .add('Empty', () => {
    const character = createCharacters({
      name: '',
    });
    return <Header character={character} />;
  })
  .add('Wide name', () => {
    const character = createCharacters({
      name: 'MMMMMMMM',
    });
    return <Header character={character} />;
  })
  .add('Narrow name', () => {
    const character = createCharacters({
      name: 'iiiiiiii',
    });
    return <Header character={character} />;
  })
;
