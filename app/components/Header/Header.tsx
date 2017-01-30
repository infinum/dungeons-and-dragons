import * as React from 'react';
import AppBar from 'react-toolbox/lib/app_bar';

export class Header extends React.Component<{}, {}> {
  public render() {
    return (
      <AppBar title='🎲 Dungeons & Dragons 🎲'>
      </AppBar>
    );
  }
}
