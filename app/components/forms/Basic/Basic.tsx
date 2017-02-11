import {observer} from 'mobx-react';
import * as React from 'react';
import Dropdown from 'react-toolbox/lib/dropdown';
import Input from 'react-toolbox/lib/input';
import ProgressBar from 'react-toolbox/lib/progress_bar';

import {IBasic, IFormField} from 'interfaces';
import {DropdownSource} from 'utils/dropdownSource';

import * as styles from './Basic.scss';

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
            onChange={basic.setValue('name')}
          />

          <Dropdown
            label='Class'
            value={basic.classId}
            source={classes}
            onChange={basic.setValue('class')}
          />
          <div className={styles.level}>
            Level:
            <span>
              <span className={styles.levelValue}>{basic.level.toString()}</span>
              <ProgressBar
                className={styles.levelProgress}
                type='circular'
                mode='determinate'
                value={+basic.experience}
                max={basic.nextLevel.exp}
                buffer={basic.nextLevel.exp}
              />
            </span>
          </div>
          <Input
            type='text'
            label='Background'
            value={basic.background}
            onChange={basic.setValue('background')}
          />
          <Input
            type='text'
            label='Player name'
            value={basic.playerName}
            onChange={basic.setValue('playerName')}
          />

          <Dropdown
            label='Race'
            value={basic.raceId}
            source={races}
            onChange={basic.setValue('race')}
          />
          <Dropdown
            label='Alignment'
            value={basic.alignmentId}
            source={alignments}
            onChange={basic.setValue('alignment')}
          />
          <Input
            type='number'
            label='Exp'
            value={basic.experience}
            onChange={basic.setValue('experience')}
          />
        </div>
      </section>
    );
  }
}
