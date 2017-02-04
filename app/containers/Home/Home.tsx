import * as React from 'react';
import {browserHistory} from 'react-router';

import {Header} from 'components/Header/Header';
import {CreatePlayer} from 'components/Player/CreatePlayer/CreatePlayer';
import {PlayerList} from 'components/Player/PlayerList/PlayerList';
import models from 'enums/models';
import {data} from 'stores';
import {Player} from 'stores/models';

export class Home extends React.Component<{}, {}> {
  constructor(props) {
    super(props);

    this.onCreateClick = this.onCreateClick.bind(this);
  }

  public onCreateClick() {
    const model = data.createPlayer();
    browserHistory.push(`/player/${model.id}`);
  }

  public render() {

    const players = data.player.filter((player) => player.name);

    return (
      <div>
        <Header />
        <div>
          <CreatePlayer onCreateClick={this.onCreateClick} />
          <h2>Players</h2>
          {
            players.length
              ? <PlayerList players={players} />
              : <h4>No players right now...</h4>
          }
        </div>
      </div>
    );
  }
}
