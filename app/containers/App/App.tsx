import * as React from 'react';

const styles = require('containers/App/App.scss');

export class App extends React.Component<{}, {}> {
  render() {
    return (
      <div className={styles.main}>Hello world!</div>
    );
  }
}
