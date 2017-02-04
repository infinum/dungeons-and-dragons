import * as React from 'react';
import {Link} from 'react-router';
import AppBar from 'react-toolbox/lib/app_bar';
import {Button} from 'react-toolbox/lib/button';

export class Header extends React.Component<{}, {}> {
  public render() {
    return (
      <Link to='/'>
        <AppBar title='🎲 Dungeons & Dragons 🎲'>
          { /* <Button raised label='Save' /> */ }
        </AppBar>
      </Link>
    );
  }
}
