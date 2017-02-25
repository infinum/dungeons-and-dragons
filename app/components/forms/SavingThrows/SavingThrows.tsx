import * as classnames from 'classnames';
import {map} from 'lodash';
import {observer} from 'mobx-react';
import * as React from 'react';

import {Box} from 'components/common/Box/Box';
import {Player} from 'stores/models';

import * as styles from './SavingThrows.scss';

@observer
export class SavingThrows extends React.Component<{
  player: Player;
  className?: string;
}, {}> {

  public render() {
    const {player, className} = this.props;
    return (
      <Box className={classnames(styles.savingThrows, className)}>
        <h4 className={styles.title}>Saving throws (WIP)</h4>
        <div>
          {
            map(player.savingThrows, (value, key) => (
              <div key={key} className={styles.item}>
                <input
                  type='checkbox'
                  checked={player.savingThrowProficiencies.indexOf(key) !== -1}
                  disabled
                />
                <label />
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
