import * as React from 'react';
import {Link} from 'react-router';

import {Player} from 'stores/models';

export const PlayerItem = ({player}: {player: Player}) => (
  <li>
    <Link to={`/player/${player.id}`}>
      {player.name}
    </Link>
  </li>
);
