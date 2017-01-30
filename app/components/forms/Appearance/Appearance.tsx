import * as React from 'react';
import Input from 'react-toolbox/lib/input';

import {IAppearance} from 'interfaces';

const styles = require('./style.scss');

export class AppearanceForm extends React.Component<{appearance: IAppearance}, {}> {
  public render() {
    return (
      <section>
        <h2>Appearance</h2>
        <div  className={styles.grid}>
          <Input type='text'label='Avatar URL' value={this.props.appearance.avatar} />
          <Input type='text'label='Height' value={this.props.appearance.height} />
          <Input type='text'label='Weight' value={this.props.appearance.weight} />
          <Input type='text'label='Sex' value={this.props.appearance.sex} />
        </div>
      </section>
    );
  }
}
