import * as React from 'react';

import {CharacterItem} from 'components/Home/CharacterItem/CharacterItem';
import {Character} from 'stores/models';

import * as styles from './CharacterList.scss';

export const CharacterList = ({
  onDeleteClick,
  characters,
}: {
  onDeleteClick?: Function,
  characters: Array<Character>,
}) => (
  <ul className={styles.grid}>
    {characters.map((character) => (
      <CharacterItem key={character.id} character={character} onDeleteClick={onDeleteClick} />
    ))}
  </ul>
);
