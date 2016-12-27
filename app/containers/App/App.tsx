import * as React from 'react';

const styles = require('containers/App/App.scss');

export default class App extends React.Component<{}, {}> {
  render() {
    return (
      <div className={styles.main}>Hello world!</div>
    );
  }
}