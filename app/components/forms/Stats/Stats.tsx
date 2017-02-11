import * as React from 'react';
import Input from 'react-toolbox/lib/input';

import {StatItem} from 'components/StatItem//StatItem';
import {IFormField, IStat} from 'interfaces';

import * as styles from './Stats.scss';

export class StatsForm extends React.Component<{
  stats: Array<IStat & IFormField>;
}, {}> {
  public render() {
    return (
      <section>
        <h2>Stats</h2>

        <div className={styles.grid}>
          { this.props.stats.map((stat, i) => <StatItem stat={stat} key={i} />) }
        </div>
      </section>
    );
  }
}
