import {observer} from 'mobx-react';
import * as React from 'react';
import Input from 'react-toolbox/lib/input';

import {IBasic} from 'interfaces';

const styles = require('./style.scss');

@observer
export class BasicForm extends React.Component<{basic: IBasic}, {}> {
  public render() {
    const {basic} = this.props;
    return (
      <section>
        <h2>Basic info</h2>
        <div className={styles.grid}>
          <Input type='text' label='Name' value={basic.name} />

          <Input type='text' label='Class' value={basic.class} />
          <Input type='number' label='Level' value={basic.level} />
          <Input type='text' label='Background' value={basic.background} />
          <Input type='text' label='Player name' value={basic.playerName} />

          <Input type='text' label='Race' value={basic.race} />
          <Input type='text' label='Alignment' value={basic.aligement} />
          <Input type='number' label='Exp' value={basic.expirience} />
        </div>
      </section>
    );
  }
}
