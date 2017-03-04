import {observer} from 'mobx-react';
import * as React from 'react';

import {Input} from 'components/Common/Input/Input';
import {Character} from 'stores/models';

import * as characterName from './CharacterName.scss';
import * as styles from './Header.scss';

export const Header = observer(({
  character,
}: {
  character: Character,
}) => (
  <div className={styles.header}>
    <Input
      type='text'
      label='Name'
      value={character.name}
      onChange={character.setValue('name')}
      className={styles.characterName}
      theme={characterName}
    />

    <span className={styles.level}>
      Level {character.level && character.level.toString()}
    </span>
  </div>
));
