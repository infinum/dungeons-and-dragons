import {observer} from 'mobx-react';
import * as React from 'react';
import Input from 'react-toolbox/lib/input';

import {IFormField, IStat} from 'interfaces';

import * as styles from './StatItem.scss';

@observer
export class StatItem extends React.Component<{
  stat: IStat & IFormField;
}, {}> {
  public render() {
    const {stat} = this.props;
    return (
      <div className={styles.main}>
        <h3>{stat.type.name}</h3>
        <Input
          type='number'
          label='Value'
          value={stat.value}
          onChange={stat.setValue('value')}
        />
        <div>Modifier: {stat.modifier}</div>
      </div>
    );
  }
}
