import * as React from 'react';

import {PlayerItem} from 'components/Player/PlayerItem/PlayerItem';
import {Player} from 'stores/models';

export const PlayerList = ({players}: {players: Array<Player>}) => (
  <ul>
    {players.map((player) => (
      <PlayerItem key={player.id} player={player} />
    ))}
  </ul>
);
