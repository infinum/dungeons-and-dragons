import * as React from 'react';
import Input from 'react-toolbox/lib/input';

const styles = require('./style.scss');

export class AppearanceForm extends React.Component<{}, {}> {
  public render() {
    return (
      <section className={styles.main}>
        <Input type='text'label='Avatar URL' />
        <Input type='text'label='Height' />
        <Input type='text'label='Weight' />
        <Input type='text'label='Sex' />
      </section>
    );
  }
}
