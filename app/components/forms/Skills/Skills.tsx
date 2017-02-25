import * as classnames from 'classnames';
import {IObservableObject, observable} from 'mobx';
import {observer} from 'mobx-react';
import * as React from 'react';

import {Box} from 'components/common/Box/Box';
import {Player} from 'stores/models';
import {map} from 'utils/helpers';

import * as styles from './Skills.scss';

@observer
export class Skills extends React.Component<{
  player: Player;
}, {}> {

  public stats: IObservableObject & {skillQuery: string} = observable.object({
    skillQuery: '',
  });

  constructor(props) {
    super(props);

    this.onSkillQueryChange = this.onSkillQueryChange.bind(this);
  }

  public render() {
    const {player} = this.props;
    return (
      <Box className={styles.skills}>
        <h4 className={styles.title}>
          Skills (WIP)
          <input
            type='text'
            value={this.stats.skillQuery}
            onChange={this.onSkillQueryChange}
            className={styles.search}
            placeholder='Search'
          />
        </h4>
        <div className={styles.container}>
          {
            map(player.skills, (value, key: string) => (
              <div key={key} className={classnames(
                styles.item,
                {
                  [styles.inactive]: this.stats.skillQuery && key.indexOf(this.stats.skillQuery) === -1,
                },
              )}>
                <input
                  type='checkbox'
                  checked={player.skillProficiencies.indexOf(key) !== -1}
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

  private onSkillQueryChange(e) {
    this.stats.skillQuery = e.target.value;
  }
}
