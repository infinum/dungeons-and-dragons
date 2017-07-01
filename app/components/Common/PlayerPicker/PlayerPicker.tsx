import {observer} from 'mobx-react';
import * as React from 'react';

import {Visibility} from 'components/Common/Visibility/Visibility';
import {Character as CharacterModel} from 'stores/models';

import * as styles from './PlayerPicker.scss';

export const PlayerPicker = observer(({character}: {character: CharacterModel}) => (
  <Visibility isVisible={character && character.playerName}>
    <div className={styles.main}>
      <h5 className={styles.action}>
        Change player
      </h5>
      <h4>{character && character.playerName}</h4>
    </div>
  </Visibility>
));
