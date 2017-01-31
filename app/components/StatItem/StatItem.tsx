import {observer} from 'mobx-react';
import * as React from 'react';
import Input from 'react-toolbox/lib/input';

import {IStat} from 'interfaces';

const styles = require('./style.scss');

@observer
export class StatItem extends React.Component<{stat: IStat}, {}> {
  public render() {
    const {stat} = this.props;
    return (
      <div className={styles.main}>
        <h3>{this.props.stat.name}</h3>
        <Input type='number' label='Value' value={stat.value} />
        <Input type='number' label='Modifier' value={stat.modifier} />
      </div>
    );
  }
}
