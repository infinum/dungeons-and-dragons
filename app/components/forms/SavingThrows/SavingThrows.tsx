import * as classnames from 'classnames';
import {observer} from 'mobx-react';
import * as React from 'react';

import {Box} from 'components/Common/Box/Box';
import {Checkbox} from 'components/Common/Checkbox/Checkbox';
import {Character} from 'stores/models';
import {map} from 'utils/helpers';

import * as styles from './SavingThrows.scss';

@observer
export class SavingThrows extends React.Component<{
  character: Character;
  className?: string;
}, {}> {

  public render() {
    const {character, className} = this.props;
    return (
      <Box className={classnames(styles.savingThrows, className)}>
        <h4 className={styles.title}>Saving throws (WIP)</h4>
        <div>
          {
            map(character.savingThrows, (value, key: string) => (
              <div key={key} className={styles.item}>
                <Checkbox
                  checked={character.savingThrowProficiencies.indexOf(key) !== -1}
                  disabled
                />
                <span className={styles.value}>
                  {value < 0 ? value : `+${value}`}
                </span>
                <span className={styles.name}>
                  {key}
                </span>
              </div>
            ))
          }
        </div>
      </Box>
    );
  }
}
