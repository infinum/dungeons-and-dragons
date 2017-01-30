import * as React from 'react';
import Input from 'react-toolbox/lib/input';

import {IStat} from 'interfaces';

const styles = require('./style.scss');

export class StatItem extends React.Component<{stat: IStat}, {}> {
  public render() {
    return (
      <div className={styles.main}>
        <h3>{this.props.stat.name}</h3>
        <Input type='number' label='Value' value={this.props.stat.value} />
        <Input type='number' label='Modifier' value={this.props.stat.modifier} />
      </div>
    );
  }
}
