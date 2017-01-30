import * as React from 'react';
import AppBar from 'react-toolbox/lib/app_bar';
import {Button} from 'react-toolbox/lib/button';

export class Header extends React.Component<{}, {}> {
  public render() {
    return (
      <AppBar title='🎲 Dungeons & Dragons 🎲'>
        <Button raised label='Save' />
      </AppBar>
    );
  }
}
