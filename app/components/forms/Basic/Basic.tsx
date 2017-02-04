import {observer} from 'mobx-react';
import * as React from 'react';
import Dropdown from 'react-toolbox/lib/dropdown';
import Input from 'react-toolbox/lib/input';

import {IBasic, IFormField} from 'interfaces';
import {DropdownSource} from 'utils/dropdownSource';

const styles = require('./style.scss');

@observer
export class BasicForm extends React.Component<{
  alignments: Array<DropdownSource>;
  basic: IBasic & IFormField;
  classes: Array<DropdownSource>;
  races: Array<DropdownSource>;
}, {}> {
  public render() {
    const {alignments, basic, classes, races} = this.props;
    return (
      <section>
        <h2>Basic info</h2>
        <div className={styles.grid}>
          <Input
            type='text'
            label='Name'
            value={basic.name}
            onChange={basic.setValue('name')} />

          <Dropdown
            label='Class'
            value={basic.classId}
            source={classes}
            onChange={basic.setValue('class')} />
          <Input
            type='number'
            label='Level'
            value={basic.level}
            onChange={basic.setValue('level')} />
          <Input
            type='text'
            label='Background'
            value={basic.background}
            onChange={basic.setValue('background')} />
          <Input
            type='text'
            label='Player name'
            value={basic.playerName}
            onChange={basic.setValue('playerName')} />

          <Dropdown
            label='Race'
            value={basic.raceId}
            source={races}
            onChange={basic.setValue('race')} />
          <Dropdown
            label='Alignment'
            value={basic.alignmentId}
            source={alignments}
            onChange={basic.setValue('alignment')} />
          <Input
            type='number'
            label='Exp'
            value={basic.experience}
            onChange={basic.setValue('experience')} />
        </div>
      </section>
    );
  }
}
