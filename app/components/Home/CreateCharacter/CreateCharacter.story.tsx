import {action, linkTo, storiesOf} from '@kadira/storybook';
import * as React from 'react';

import {initStatic} from 'stores/data';
import {DataCollection} from 'stores/DataCollection';
import {Character} from 'stores/models';
import {CreateCharacter} from './CreateCharacter';

storiesOf('CreateCharacter', module)
  .add('Default View', () => {
    return <CreateCharacter onCreateClick={action('Create')} />;
  })
;
