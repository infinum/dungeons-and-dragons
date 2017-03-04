import * as classnames from 'classnames';
import * as React from 'react';

import {Checkbox} from 'components/Common/Checkbox/Checkbox';

import * as styles from './SkillItem.scss';

export const SkillItem = ({
  proficiency,
  value,
  name,
  inactive,
}: {
  proficiency: boolean,
  value: number,
  name: string,
  inactive?: boolean,
}) => (
  <div className={classnames(styles.main, {[styles.inactive]: inactive})}>
    <Checkbox
      checked={proficiency}
      disabled
    />
    <span className={styles.value}>
      {value < 0 ? value : `+${value}`}
    </span>
    <span className={styles.name}>
      {name}
    </span>
  </div>
);
