import * as classnames from 'classnames';
import {observer} from 'mobx-react';
import * as React from 'react';

import {SkillItem} from 'components/Character/SkillItem/SkillItem';
import {Character} from 'stores/models';
import {map} from 'utils/helpers';

import * as styles from './SavingThrows.scss';

export const SavingThrows = observer(({
  character,
  className,
}: {
  character: Character,
  className?: string,
}) => (
  <div className={classnames(styles.savingThrows, className)}>
    <h4 className={styles.title}>Saving throws (WIP)</h4>
    <div>
      {
        map(character.savingThrows, (value, key: string) => (
          <SkillItem
            key={key}
            proficiency={character.savingThrowProficiencies.indexOf(key) !== -1}
            value={value}
            name={key}
          />
        ))
      }
    </div>
  </div>
));
