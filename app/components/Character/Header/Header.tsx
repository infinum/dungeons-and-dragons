import * as classnames from 'classnames';
import {observable} from 'mobx';
import {observer} from 'mobx-react';
import * as React from 'react';

import {Input} from 'components/Common/Input/Input';
import {Character} from 'stores/models';

import * as styles from './Header.scss';

@observer
export class Header extends React.Component<{
  character: Character,
  className?: string,
}, {}> {
  public state = observable.object({
    widthEl: null,
  });

  public render() {
    const {character, className} = this.props;

    return (
      <div className={classnames(className, styles.header)}>
        <input
          type='text'
          placeholder='Character name'
          value={character.name}
          onChange={(e) => character.assign('name', e.target.value)}
          className={styles.characterName}
          style={this.state.widthEl ? {
            width: this.state.widthEl.getBoundingClientRect().width,
          } : null}
        />

        <div
          ref={(el) => this.state.widthEl = el}
          className={styles.widthCheck}
        >
          {character.name || 'Character name'}
        </div>

        <span className={styles.level}>
          Level {character.level && character.level.toString()}
        </span>
      </div>
    );
  }
}
