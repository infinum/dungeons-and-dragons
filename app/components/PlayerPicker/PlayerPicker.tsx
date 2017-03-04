import {observer} from 'mobx-react';
import * as React from 'react';

import {Player as PlayerModel} from 'stores/models';

import * as styles from './PlayerPicker.scss';

@observer
export class PlayerPicker extends React.Component<{
  player: PlayerModel;
}, {}> {
  public render() {
    return (this.props.player && this.props.player.name && false)
      ? (
        <div className={styles.main}>
          <h5 className={styles.action}>
            Change character
          </h5>
          <h4>{this.props.player.playerName}</h4>
        </div>
      )
      : null;
  }
}
