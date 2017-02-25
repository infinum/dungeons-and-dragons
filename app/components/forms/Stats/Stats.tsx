import * as classnames from 'classnames';
import {map} from 'lodash';
import {observer} from 'mobx-react';
import * as React from 'react';
import Input from 'react-toolbox/lib/input';

import {Box} from 'components/common/Box/Box';
import {SavingThrows} from 'components/forms/SavingThrows/SavingThrows';
import {Skills} from 'components/forms/Skills/Skills';
import {StatItem} from 'components/StatItem/StatItem';
import {Player} from 'stores/models';

import * as styles from './Stats.scss';

@observer
export class StatsForm extends React.Component<{
  player: Player;
  onChange: Function;
}, {}> {

  public render() {
    const {onChange, player} = this.props;
    return (
      <section>
        <h2>Stats</h2>

        <div className={styles.grid}>
          <StatItem
            player={player}
            id='strength'
            name='Strength'
            onChange={onChange}
          />
          <StatItem
            player={player}
            id='dexterity'
            name='Dexterity'
            onChange={onChange}
          />
          <StatItem
            player={player}
            id='constitution'
            name='Constitution'
            onChange={onChange}
          />
          <StatItem
            player={player}
            id='intelligence'
            name='Intelligence'
            onChange={onChange}
          />
          <StatItem
            player={player}
            id='wisdom'
            name='Wisdom'
            onChange={onChange}
          />
          <StatItem
            player={player}
            id='charisma'
            name='Charisma'
            onChange={onChange}
          />
        </div>

        <div className={styles.stats}>
          <Skills player={player} />

          <SavingThrows player={player} className={styles.savingThrows} />
        </div>
      </section>
    );
  }
}
