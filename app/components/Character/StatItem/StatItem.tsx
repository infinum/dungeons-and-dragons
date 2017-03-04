import {observer} from 'mobx-react';
import * as React from 'react';

import {Character} from 'stores/models';

import * as styles from './StatItem.scss';

export const StatItem = observer(({
  name,
  id,
  onChange,
  character,
}: {
  name: string,
  id: string,
  onChange: Function,
  character: Character,
}) => (
  <div className={styles.main}>
    <div className={styles.shield}>
      <input
        className={styles.input}
        type='number'
        value={character.stats[id]}
        onChange={onChange(id)}
      />
      <div className={styles.modifier}>
        {
          character.modifiers[id] < 0
            ? character.modifiers[id]
            : `+${character.modifiers[id]}`
        }
      </div>
    </div>
    <div className={styles.title}>{name}</div>
  </div>
));
