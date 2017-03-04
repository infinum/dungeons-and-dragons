import * as classnames from 'classnames';
import {IObservableObject, observable} from 'mobx';
import {observer} from 'mobx-react';
import * as React from 'react';

import {SkillItem} from 'components/Character/SkillItem/SkillItem';
import {ColumnList} from 'components/Common/ColumnList/ColumnList';
import {Character} from 'stores/models';
import {map} from 'utils/helpers';

import * as styles from './Skills.scss';

@observer
export class Skills extends React.Component<{
  character: Character;
}, {}> {

  public stats: IObservableObject & {skillQuery: string} = observable.object({
    skillQuery: '',
  });

  constructor(props) {
    super(props);

    this.onSkillQueryChange = this.onSkillQueryChange.bind(this);
  }

  public render() {
    const {character} = this.props;
    return (
      <div>
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
        <ColumnList className={styles.list}>
          {
            map(character.skills, (value: number, key: string) => (
              <SkillItem
                inactive={this.stats.skillQuery && key.indexOf(this.stats.skillQuery) === -1}
                proficiency={character.skillProficiencies.indexOf(key) !== -1}
                key={key}
                value={value}
                name={key}
              />
            ))
          }
        </ColumnList>
      </div>
    );
  }

  private onSkillQueryChange(e) {
    this.stats.skillQuery = e.target.value;
  }
}
