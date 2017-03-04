import {observer} from 'mobx-react';
import * as React from 'react';
import {Button} from 'react-toolbox/lib/button';
import {Card, CardActions, CardMedia, CardText, CardTitle} from 'react-toolbox/lib/card';
import ProgressBar from 'react-toolbox/lib/progress_bar';

import {Character} from 'stores/models';
import {Link} from 'utils/router';

import * as placeholder from 'images/character-placeholder.jpg';
import * as styles from './CharacterItem.scss';

export const CharacterItem = observer(({
  onDeleteClick,
  character,
}: {
  onDeleteClick?: Function,
  character: Character,
}) => (
  <li className={styles.item}>
    <Card>
      <CardMedia image={character.avatar || placeholder} aspectRatio='wide' />
      <ProgressBar
        className={styles.progress}
        type='linear'
        mode='determinate'
        value={+character.experience}
        max={character.nextLevel && character.nextLevel.exp}
      />
      <CardTitle>{character.name}</CardTitle>
      <CardText>
        {character.alignment && character.alignment.name} {character.race && character.race.name}<br />
        Level {character.level && character.level.toString()}, {character.experience} EXP
      </CardText>
      <CardActions>
        <Link to={`/character/${character.id}`}>
          <Button>Edit</Button>
        </Link>
        <Button accent onClick={() => onDeleteClick(character)}>Delete</Button>
      </CardActions>
    </Card>
  </li>
));
