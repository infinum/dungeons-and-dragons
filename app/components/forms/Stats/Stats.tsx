import * as React from 'react';
import Input from 'react-toolbox/lib/input';

const styles = require('./style.scss');

export class StatsForm extends React.Component<{}, {}> {
  public render() {
    return (
      <section>
        <h2>Stats</h2>

        <div className={styles.grid}>
          <div className={styles.skill}>
            <h3>Strength</h3>
            <Input type='number' label='Value' />
            <Input type='number' label='Modifier' />
          </div>
          <div className={styles.skill}>
            <h3>Dexterity</h3>
            <Input type='number' label='Value' />
            <Input type='number' label='Modifier' />
          </div>
          <div className={styles.skill}>
            <h3>Constitution</h3>
            <Input type='number' label='Value' />
            <Input type='number' label='Modifier' />
          </div>
          <div className={styles.skill}>
            <h3>Intelligence</h3>
            <Input type='number' label='Value' />
            <Input type='number' label='Modifier' />
          </div>
          <div className={styles.skill}>
            <h3>Wisdom</h3>
            <Input type='number' label='Value' />
            <Input type='number' label='Modifier' />
          </div>
          <div className={styles.skill}>
            <h3>Charisma</h3>
            <Input type='number' label='Value' />
            <Input type='number' label='Modifier' />
          </div>
        </div>
      </section>
    );
  }
}
