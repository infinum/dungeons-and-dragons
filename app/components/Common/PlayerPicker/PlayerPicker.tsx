import {observer} from 'mobx-react';
import * as React from 'react';

import {Character as CharacterModel} from 'stores/models';

import * as styles from './PlayerPicker.scss';

@observer
export class PlayerPicker extends React.Component<{
  character: CharacterModel;
}, {}> {
  public render() {
    return (this.props.character && this.props.character.name && false)
      ? (
        <div className={styles.main}>
          <h5 className={styles.action}>
            Change player
          </h5>
          <h4>{this.props.character.playerName}</h4>
        </div>
      )
      : null;
  }
}
