import {map} from 'lodash';
import {observer} from 'mobx-react';
import * as React from 'react';
import Input from 'react-toolbox/lib/input';

import {StatItem} from 'components/StatItem//StatItem';
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

        <div>
          <h4>Saving throws (WIP)</h4>
          {
            map(player.savingThrows, (value, key) => (
              <div key={key}>
                <input
                  type='checkbox'
                  checked={player.savingThrowProficiencies.indexOf(key) !== -1}
                  disabled
                />
                {key}: {value}
              </div>
            ))
          }
        </div>

        <div>
          <h4>Skills (WIP)</h4>
          {
            map(player.skills, (value, key) => (
              <div key={key}>
                <input
                  type='checkbox'
                  checked={player.skillProficiencies.indexOf(key) !== -1}
                  disabled
                />
                {key}: {value}
              </div>
            ))
          }
        </div>
      </section>
    );
  }
}
