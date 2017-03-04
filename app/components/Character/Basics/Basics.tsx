import {observer} from 'mobx-react';
import * as React from 'react';

import {Dropdown} from 'components/Common/Dropdown/Dropdown';
import {Input} from 'components/Common/Input/Input';
import {IBasics} from 'interfaces';
import {Character} from 'stores/models';

import * as styles from './Basics.scss';

export const Basics = observer(({
  character,
  options: {alignments, backgrounds, classes, races, subraces},
}: {
  character: Character,
  options: IBasics,
}) => (
  <div className={styles.grid}>
    <Dropdown
      label='Class'
      value={character.classId}
      source={classes}
      className={styles.inputItem}
      onChange={character.setValue('class')}
    />
    <Dropdown
      label='Alignment'
      value={character.alignmentId}
      source={alignments}
      className={styles.inputItem}
      onChange={character.setValue('alignment')}
    />
    <Input
      type='number'
      label='Exp. points'
      value={character.experience}
      className={styles.inputItem}
      onChange={character.setValue('experience')}
    />

    <Dropdown
      label='Background'
      value={character.backgroundId}
      source={backgrounds}
      className={styles.inputItem}
      onChange={character.setValue('background')}
    />
    {/*<Input
      type='text'
      label='Player name'
      value={character.playerName}
      onChange={character.setValue('playerName')}
    />*/}
    <Dropdown
      label='Race'
      value={character.raceId}
      source={races}
      className={styles.inputItem}
      onChange={character.setValue('race')}
    />
    <Dropdown
      label='Subrace'
      value={character.subrace && character.subrace.id}
      source={subraces}
      className={styles.inputItem}
      onChange={character.setValue('subrace')}
    />
  </div>
));
