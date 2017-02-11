import * as React from 'react';

import {PlayerItem} from 'components/Player/PlayerItem/PlayerItem';
import {Player} from 'stores/models';

import * as styles from './PlayerList.scss';

export const PlayerList = ({
  onDeleteClick,
  players,
}: {
  onDeleteClick?: Function,
  players: Array<Player>,
}) => (
  <ul className={styles.grid}>
    {players.map((player) => (
      <PlayerItem key={player.id} player={player} onDeleteClick={onDeleteClick} />
    ))}
  </ul>
);
