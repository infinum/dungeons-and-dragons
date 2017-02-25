import {observer} from 'mobx-react';
import * as React from 'react';
import Dropdown from 'react-toolbox/lib/dropdown';
import Input from 'react-toolbox/lib/input';

import {Box} from 'components/common/Box/Box';
import {Info} from 'components/forms/Info/Info';
import {IBasic, IFormField} from 'interfaces';
import {DropdownSource} from 'utils/dropdownSource';

import * as styles from './Basic.scss';
import * as characterName from './CharacterName.scss';

@observer
export class BasicForm extends React.Component<{
  alignments: Array<DropdownSource>;
  backgrounds: Array<DropdownSource>;
  basic: IBasic & IFormField;
  classes: Array<DropdownSource>;
  races: Array<DropdownSource>;
  subraces: Array<DropdownSource>;
}, {}> {
  public render() {
    const {alignments, backgrounds, basic, classes, races, subraces} = this.props;
    return (
      <section>

        <Input
          type='text'
          label='Name'
          value={basic.name}
          onChange={basic.setValue('name')}
          className={styles.characterName}
          theme={characterName}
        />

        <Input
          type='text'
          label='Level'
          value={basic.level.toString()}
          disabled={true}
        />

        <div className={styles.columns}>
          <div>
            <Box>
              <div className={styles.grid}>
                <Dropdown
                  label='Class'
                  value={basic.classId}
                  source={classes}
                  onChange={basic.setValue('class')}
                />
                <Dropdown
                  label='Alignment'
                  value={basic.alignmentId}
                  source={alignments}
                  onChange={basic.setValue('alignment')}
                />
                <Input
                  type='number'
                  label='Exp. points'
                  value={basic.experience}
                  onChange={basic.setValue('experience')}
                />

                <Dropdown
                  label='Background'
                  value={basic.backgroundId}
                  source={backgrounds}
                  onChange={basic.setValue('background')}
                />
                {/*<Input
                  type='text'
                  label='Player name'
                  value={basic.playerName}
                  onChange={basic.setValue('playerName')}
                />*/}
                <Dropdown
                  label='Race'
                  value={basic.raceId}
                  source={races}
                  onChange={basic.setValue('race')}
                />
                <Dropdown
                  label='Subrace'
                  value={basic.subrace && basic.subrace.id}
                  source={subraces}
                  onChange={basic.setValue('subrace')}
                />
              </div>
            </Box>
            <Box className={styles.proficiency}>
              <div className={styles.proficiencyValue}>
                {basic.proficiencyBonus}
              </div>
              <div>Proficiency bonus</div>
              <div className={styles.inspiration}>
                <input type='checkbox' disabled checked={basic.inspiration} />
                <label />
                Inspiration
              </div>
            </Box>
          </div>
          <div>
            <Info name='Speed' value={basic.race && basic.race.speed} />
          </div>
        </div>
      </section>
    );
  }
}
