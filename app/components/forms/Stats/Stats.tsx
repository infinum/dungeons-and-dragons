import * as classnames from 'classnames';
import {observer} from 'mobx-react';
import * as React from 'react';
import Input from 'react-toolbox/lib/input';

import {Box} from 'components/common/Box/Box';
import {Info} from 'components/forms/Info/Info';
import {SavingThrows} from 'components/forms/SavingThrows/SavingThrows';
import {Skills} from 'components/forms/Skills/Skills';
import {StatItem} from 'components/StatItem/StatItem';
import {Character} from 'stores/models';

import * as styles from './Stats.scss';

@observer
export class StatsForm extends React.Component<{
  character: Character;
  onChange: Function;
}, {}> {

  public render() {
    const {onChange, character} = this.props;
    return (
      <section>
        <div className={styles.stats}>
          <StatItem
            character={character}
            id='strength'
            name='Strength'
            onChange={onChange}
          />
          <StatItem
            character={character}
            id='dexterity'
            name='Dexterity'
            onChange={onChange}
          />
          <StatItem
            character={character}
            id='constitution'
            name='Constitution'
            onChange={onChange}
          />
          <StatItem
            character={character}
            id='intelligence'
            name='Intelligence'
            onChange={onChange}
          />
          <StatItem
            character={character}
            id='wisdom'
            name='Wisdom'
            onChange={onChange}
          />
          <StatItem
            character={character}
            id='charisma'
            name='Charisma'
            onChange={onChange}
          />
          <Info className={styles.passiveBox} value={character.passivePerception} name='Passive per.' />
        </div>

        <div className={styles.stats}>
          <Skills character={character} />

          <SavingThrows character={character} className={styles.savingThrows} />
        </div>
      </section>
    );
  }
}
