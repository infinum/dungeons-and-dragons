import {inject, observer} from 'mobx-react';
import * as React from 'react';

import {AppLogo} from 'components/AppLogo/AppLogo';
import {PlayerPicker} from 'components/PlayerPicker/PlayerPicker';
import {Link} from 'utils/router';

import models from 'enums/models';
import {DataCollection} from 'stores/DataCollection';
import {Character as CharacterModel} from 'stores/models';

import * as styles from './Header.scss';
const logo = require('images/Logo/small.svg');

@inject('data')
@observer
export class Header extends React.Component<{
  characterId?: string;
  data?: DataCollection;
}, {}> {
  public character: CharacterModel;

  public componentWillMount() {
    this.character = this.getPlayer();
  }

  public componentWillReceiveProps(props) {
    this.character = this.getPlayer(props.playerId);
  }

  public render() {
    return (
      <div className={styles.main}>
        <Link to='/' className={styles.logoLink}>
          <AppLogo />
        </Link>
        <PlayerPicker character={this.character} />
      </div>
    );
  }

  private getPlayer(id?: string): CharacterModel {
    const {data} = this.props;
    const playerId = parseInt(id || this.props.characterId, 10);

    return data.find(models.CHARACTER, playerId) as CharacterModel;
  }
}
