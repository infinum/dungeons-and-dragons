import * as classnames from 'classnames';
import * as React from 'react';

import * as styles from './Section.scss';

export const Section = ({
  children,
  className,
}: {
  children?: any,
  className?: string,
}) => (
  <div className={classnames(className, styles.main)}>
    {children}
  </div>
);
