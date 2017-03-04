import {observer} from 'mobx-react';
import * as React from 'react';

import {Character} from 'stores/models';

import * as styles from './StatItem.scss';

@observer
export class StatItem extends React.Component<{
  name: string,
  id: string,
  onChange: Function,
  character: Character,
}, {}> {
  public render() {
    const {name, id, onChange, character} = this.props;
    return (
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
    );
  }
}
