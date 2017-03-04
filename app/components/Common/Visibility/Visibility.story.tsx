import {action, linkTo, storiesOf} from '@kadira/storybook';
import * as React from 'react';

import {Visibility} from './Visibility';

storiesOf('Visibility', module)
  .add('Visible', () => {
    return <Visibility isVisible={true}>Visible!</Visibility>;
  })
  .add('Invisible', () => {
    return <Visibility isVisible={false}>Invisible!</Visibility>;
  })
  .add('Visible element', () => {
    return <Visibility isVisible={true}><b>Visible!</b></Visibility>;
  })
  .add('Invisible element', () => {
    return <Visibility isVisible={false}><b>Invisible!</b></Visibility>;
  })
;
