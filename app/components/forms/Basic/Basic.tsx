import * as React from 'react';
import Input from 'react-toolbox/lib/input';

const styles = require('./style.scss');

export class BasicForm extends React.Component<{}, {}> {
  public render() {
    return (
      <section>
        <h2>Basic info</h2>
        <div className={styles.grid}>
          <Input type='text'label='Name' />

          <Input type='text'label='Class' />
          <Input type='number'label='Level' />
          <Input type='text'label='Background' />
          <Input type='text'label='Player name' />

          <Input type='text'label='Race' />
          <Input type='text'label='Alignment' />
          <Input type='number'label='Exp' />
        </div>
      </section>
    );
  }
}
