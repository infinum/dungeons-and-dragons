import {observer} from 'mobx-react';
import * as React from 'react';
import Input from 'react-toolbox/lib/input';

import {IAppearance, IFormField} from 'interfaces';

const styles = require('./style.scss');

@observer
export class AppearanceForm extends React.Component<{
  appearance: IAppearance & IFormField;
}, {}> {
  public render() {
    const {appearance} = this.props;
    return (
      <section>
        <h2>Appearance</h2>
        <div  className={styles.grid}>
          <Input
            type='text'
            label='Avatar URL'
            value={appearance.avatar}
            onChange={appearance.setValue('avatar')} />
          <Input
            type='text'
            label='Height'
            value={appearance.height}
            onChange={appearance.setValue('height')} />
          <Input
            type='text'
            label='Weight'
            value={appearance.weight}
            onChange={appearance.setValue('weight')} />
          <Input
            type='text'
            label='Sex'
            value={appearance.sex}
            onChange={appearance.setValue('sex')} />
        </div>
      </section>
    );
  }
}
