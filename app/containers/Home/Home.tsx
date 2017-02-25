import {action, observable} from 'mobx';
import {inject, observer} from 'mobx-react';
import * as React from 'react';
import {browserHistory} from 'utils/router';

import {CreatePlayer} from 'components/Player/CreatePlayer/CreatePlayer';
import {DeletePlayer} from 'components/Player/DeletePlayer/DeletePlayer';
import {PlayerList} from 'components/Player/PlayerList/PlayerList';
import models from 'enums/models';
import {DataCollection} from 'stores/DataCollection';
import {Player} from 'stores/models';

import * as styles from './Home.scss';

@inject('data')
@observer
export class Home extends React.Component<{
  data: DataCollection;
  params: Array<any>;
}, {}> {
  public state: {playerForDeletion: Player};

  constructor(props) {
    super(props);

    this.state = observable.object({
      playerForDeletion: null,
    });

    this.onCreateClick = this.onCreateClick.bind(this);
    this.onDeleteClick = this.onDeleteClick.bind(this);
    this.onDeleteConfirm = this.onDeleteConfirm.bind(this);
    this.onDeleteCancel = this.onDeleteCancel.bind(this);
  }

  public onCreateClick() {
    const model = this.props.data.add<Player>({}, models.PLAYER);
    browserHistory.push(`/player/${model.id}`);
  }

  @action public onDeleteClick(player: Player) {
    this.state.playerForDeletion = player;
  }

  @action public onDeleteConfirm() {
    const player = this.state.playerForDeletion as Player;
    this.props.data.remove(player.static.type, player.id);
    this.state.playerForDeletion = null;
  }

  @action public onDeleteCancel() {
    this.state.playerForDeletion = null;
  }

  public render() {

    const players = this.props.data.player.filter((player) => player.name);

    return (
      <div>
        <div className={styles.content}>
          <CreatePlayer onCreateClick={this.onCreateClick} />
          <h2>Players</h2>
          {
            players.length
              ? <PlayerList players={players} onDeleteClick={this.onDeleteClick} />
              : <h4>No players right now...</h4>
          }
        </div>
        {
          this.state.playerForDeletion
            ? <DeletePlayer
                player={this.state.playerForDeletion}
                onDeleteConfirm={this.onDeleteConfirm}
                onDeleteCancel={this.onDeleteCancel}
              />
            : null
        }
      </div>
    );
  }
}
