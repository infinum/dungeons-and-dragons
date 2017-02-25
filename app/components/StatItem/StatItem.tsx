import {observer} from 'mobx-react';
import * as React from 'react';

import {Player} from 'stores/models';

import * as styles from './StatItem.scss';

@observer
export class StatItem extends React.Component<{
  name: string,
  id: string,
  onChange: Function,
  player: Player,
}, {}> {
  public render() {
    const {name, id, onChange, player} = this.props;
    return (
      <div className={styles.main}>
        <div className={styles.shield}>
          <input
            className={styles.input}
            type='number'
            value={player.stats[id]}
            onChange={onChange(id)}
          />
          <div className={styles.modifier}>
            {
              player.modifiers[id] < 0
                ? player.modifiers[id]
                : `+${player.modifiers[id]}`
            }
          </div>
        </div>
        <div className={styles.title}>{name}</div>
      </div>
    );
  }
}
