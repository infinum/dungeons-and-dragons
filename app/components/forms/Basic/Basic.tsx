import * as React from 'react';
import Input from 'react-toolbox/lib/input';

import {IBasic} from 'interfaces';

const styles = require('./style.scss');

export class BasicForm extends React.Component<{basic: IBasic}, {}> {
  public render() {
    return (
      <section>
        <h2>Basic info</h2>
        <div className={styles.grid}>
          <Input type='text' label='Name' value={this.props.basic.name} />

          <Input type='text' label='Class' value={this.props.basic.class} />
          <Input type='number' label='Level' value={this.props.basic.level} />
          <Input type='text' label='Background' value={this.props.basic.background} />
          <Input type='text' label='Player name' value={this.props.basic.playerName} />

          <Input type='text' label='Race' value={this.props.basic.race} />
          <Input type='text' label='Alignment' value={this.props.basic.aligement} />
          <Input type='number' label='Exp' value={this.props.basic.expirience} />
        </div>
      </section>
    );
  }
}
