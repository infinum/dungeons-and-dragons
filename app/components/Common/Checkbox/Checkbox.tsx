import * as classnames from 'classnames';
import * as React from 'react';

import * as styles from './Checkbox.scss';

let counter = 0;

export const Checkbox = ({
  className,
  checked,
  disabled,
  onClick,
}: {
  className?: string,
  checked?: boolean,
  disabled?: boolean,
  onClick?: () => any,
}) => (
  <div className={classnames(className, styles.main)}>
    <input
      id={`checkbox_${++counter}`}
      className={styles.checkbox}
      type='checkbox'
      checked={checked}
      disabled={disabled}
      onClick={onClick}
    />
    <label className={styles.label} {...{for: `checkbox_${counter}`}} />
  </div>
);
