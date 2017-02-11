import * as React from 'react';
import {Link} from 'react-router';
import {Button} from 'react-toolbox/lib/button';
import {Card, CardActions, CardMedia, CardText, CardTitle} from 'react-toolbox/lib/card';

import {Player} from 'stores/models';

import * as placeholder from 'images/character-placeholder.jpg';
import * as styles from './PlayerItem.scss';

export const PlayerItem = ({
  onDeleteClick,
  player,
}: {
  onDeleteClick?: Function,
  player: Player,
}) => (
  <li className={styles.item}>
    <Card>
      <CardMedia image={player.avatar || placeholder} aspectRatio='wide' />
      <CardTitle>{player.name}</CardTitle>
      <CardText>
        {player.alignment.name} {player.race.name}<br />
        Level {player.level}, {player.experience} EXP
      </CardText>
      <CardActions>
        <Link to={`/player/${player.id}`}>
          <Button>Edit</Button>
        </Link>
        <Button accent onClick={() => onDeleteClick(player)}>Delete</Button>
      </CardActions>
    </Card>
  </li>
);
