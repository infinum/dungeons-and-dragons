import {observer} from 'mobx-react';
import * as React from 'react';
import Input from 'react-toolbox/lib/input';

import {IAppearance} from 'interfaces';

const styles = require('./style.scss');

@observer
export class AppearanceForm extends React.Component<{appearance: IAppearance}, {}> {
  public render() {
    const {appearance} = this.props;
    return (
      <section>
        <h2>Appearance</h2>
        <div  className={styles.grid}>
          <Input
            type='text'
            label='Avatar URL'
            value={appearance.avatar} />
          <Input
            type='text'
            label='Height'
            value={appearance.height} />
          <Input
            type='text'
            label='Weight'
            value={appearance.weight} />
          <Input
            type='text'
            label='Sex'
            value={appearance.sex} />
        </div>
      </section>
    );
  }
}
