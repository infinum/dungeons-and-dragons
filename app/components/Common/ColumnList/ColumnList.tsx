import * as classnames from 'classnames';
import * as React from 'react';

import * as styles from './ColumnList.scss';

export const ColumnList = ({
  children,
  className,
}: {
  children?: JSX.Element,
  className?: string,
}) => (
  <div className={classnames(className, styles.main)}>
    {children}
  </div>
);
