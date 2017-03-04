import * as classnames from 'classnames';
import * as React from 'react';

import * as styles from './InfoBox.scss';

export const InfoBox = ({
  value,
  name,
  className,
}: {
  value: number|string,
  name: string,
  className?: string,
}) => (
  <div className={classnames(styles.infoBox, className)}>
    <div className={styles.infoValue}>
      {value || 'N/A'}
    </div>
    <div className={styles.infoTitle}>
      {name}
    </div>
  </div>
);
