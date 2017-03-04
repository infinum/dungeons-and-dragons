import * as classnames from 'classnames';
import {observer} from 'mobx-react';
import * as React from 'react';

import {Input} from 'components/Common/Input/Input';
import {Character} from 'stores/models';

import * as styles from './Header.scss';

export const Header = observer(({
  character,
  className,
}: {
  character: Character,
  className?: string,
}) => (
  <div className={classnames(className, styles.header)}>
    <div className={styles.nameContainer}>
      <input
        type='text'
        placeholder='Character name'
        value={character.name}
        onChange={(e) => character.assign('name', e.target.value)}
        className={styles.characterName}
      />

      <div className={styles.widthCheck}>
        {character.name || 'Character name'}
      </div>
    </div>

    <span className={styles.level}>
      Level {character.level && character.level.toString()}
    </span>
  </div>
));
