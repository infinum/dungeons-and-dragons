import * as React from 'react';

import * as styles from './Section.scss';

export const Section = ({
  children,
}: {
  children?: JSX.Element,
}) => (
  <div className={styles.main}>
    {children}
  </div>
);
