import {observable} from 'mobx';
import {observer} from 'mobx-react';
import * as React from 'react';

import {Input} from 'components/Common/Input/Input';
import {Character} from 'stores/models';

import * as characterName from './CharacterName.scss';
import * as styles from './Header.scss';

@observer
export class Header extends React.Component<{
  character: Character,
}, {}> {
  public state = observable.object({
    widthEl: null,
  });

  public render() {
    const {character} = this.props;

    return (
      <div className={styles.header}>
        <Input
          type='text'
          label='Name'
          value={character.name}
          onChange={character.setValue('name')}
          className={styles.characterName}
          theme={characterName}
          style={this.state.widthEl ? {
            width: this.state.widthEl.getBoundingClientRect().width,
          } : null}
        />

        <div ref={(el) => this.state.widthEl = el} className={styles.widthCheck}>{character.name}</div>

        <span className={styles.level}>
          Level {character.level && character.level.toString()}
        </span>
      </div>
    );
  }
}
