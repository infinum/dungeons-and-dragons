import {action, linkTo, storiesOf} from '@kadira/storybook';
import * as React from 'react';

import {InfoBox} from './InfoBox';

storiesOf('InfoBox', module)
  .add('Default View', () => {
    return <InfoBox name='Foo' value={10} />;
  })
  .add('No value', () => {
    return <InfoBox name='Foo' />;
  })
  .add('Negative value', () => {
    return <InfoBox name='Foo' value={-10} />;
  })
  .add('Big value', () => {
    return <InfoBox name='Foo' value={123456} />;
  })
;
