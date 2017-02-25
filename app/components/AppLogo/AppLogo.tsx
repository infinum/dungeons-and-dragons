import {observer} from 'mobx-react';
import * as React from 'react';

import {Player as PlayerModel} from 'stores/models';

import * as styles from './AppLogo.scss';
const logo = require('images/Logo/small.svg');

export class AppLogo extends React.Component<{}, {}> {
  public render() {
    return (
      <div className={styles.main}>
        <img className={styles.logo} src={logo} />
        <h2 className={styles.appName}>Dang it I forgot my char sheet!</h2>
      </div>
    );
  }
}
