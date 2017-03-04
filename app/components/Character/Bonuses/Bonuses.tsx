import {observer} from 'mobx-react';
import * as React from 'react';

import {Checkbox} from 'components/Common/Checkbox/Checkbox';
import {Character} from 'stores/models';

import * as styles from './Bonuses.scss';

export const Bonuses = observer(({
  character,
}: {
  character: Character,
}) => (
  <div className={styles.main}>
    <div className={styles.proficiency}>
      <div className={styles.proficiencyValue}>
        {character.proficiencyBonus}
      </div>
      <div>Proficiency bonus</div>
    </div>
    <div className={styles.inspiration}>
      <Checkbox disabled checked={character.inspiration} />
      Inspiration
    </div>
  </div>
));
