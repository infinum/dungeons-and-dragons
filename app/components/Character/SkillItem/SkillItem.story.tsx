import {action, linkTo, storiesOf} from '@kadira/storybook';
import * as React from 'react';

import {SkillItem} from './SkillItem';

storiesOf('SkillItem', module)
  .add('Default view', () => {
    return <SkillItem
      proficiency={false}
      name='Foo'
      value={1}
    />;
  })
  .add('Proficient', () => {
    return <SkillItem
      proficiency={true}
      name='Foo'
      value={1}
    />;
  })
  .add('Negative value', () => {
    return <SkillItem
      proficiency={false}
      name='Foo'
      value={-1}
    />;
  })
  .add('0 value', () => {
    return <SkillItem
      proficiency={false}
      name='Foo'
      value={0}
    />;
  })
  .add('Inacitve', () => {
    return <SkillItem
      proficiency={false}
      name='Foo'
      value={1}
      inactive
    />;
  })
;
