import * as classnames from 'classnames';
import {observer} from 'mobx-react';
import * as React from 'react';
import Input from 'react-toolbox/lib/input';

import {Box} from 'components/Common/Box/Box';
import {InfoBox} from 'components/Common/InfoBox/InfoBox';
import {SavingThrows} from 'components/forms/SavingThrows/SavingThrows';
import {Skills} from 'components/forms/Skills/Skills';
import {Character} from 'stores/models';

import * as styles from './Stats.scss';

@observer
export class StatsForm extends React.Component<{
  character: Character;
  onChange: Function;
}, {}> {

  public render() {
    const {onChange, character} = this.props;
    return (
      <section>
        <div className={styles.stats}>
          <Skills character={character} />

          <SavingThrows character={character} className={styles.savingThrows} />
        </div>
      </section>
    );
  }
}
