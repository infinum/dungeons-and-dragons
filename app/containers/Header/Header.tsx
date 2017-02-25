import {inject, observer} from 'mobx-react';
import * as React from 'react';

import {AppLogo} from 'components/AppLogo/AppLogo';
import {PlayerPicker} from 'components/PlayerPicker/PlayerPicker';

import models from 'enums/models';
import {DataCollection} from 'stores/DataCollection';
import {Player as PlayerModel} from 'stores/models';

import * as styles from './Header.scss';
const logo = require('images/Logo/small.svg');

@inject('data')
@observer
export class Header extends React.Component<{
  playerId?: string;
  data?: DataCollection;
}, {}> {
  public player: PlayerModel;

  public componentWillMount() {
    this.player = this.getPlayer();
  }

  public componentWillReceiveProps(props) {
    this.player = this.getPlayer(props.playerId);
  }

  public render() {
    return (
      <div className={styles.main}>
        <AppLogo />
        <PlayerPicker player={this.player} />
      </div>
    );
  }

  private getPlayer(id?: string): PlayerModel {
    const {data} = this.props;
    const playerId = parseInt(id || this.props.playerId, 10);

    return data.find(models.PLAYER, playerId) as PlayerModel;
  }
}
