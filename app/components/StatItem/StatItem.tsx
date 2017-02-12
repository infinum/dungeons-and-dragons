import {observer} from 'mobx-react';
import * as React from 'react';
import Input from 'react-toolbox/lib/input';

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
        <h3>{name}</h3>
        <Input
          type='number'
          label='Value'
          value={player.stats[id]}
          onChange={onChange(id)}
        />
        <div>Modifier: {player.modifiers[id]}</div>
      </div>
    );
  }
}
