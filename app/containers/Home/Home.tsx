import {action, observable} from 'mobx';
import {inject, observer} from 'mobx-react';
import * as React from 'react';
import {browserHistory} from 'utils/router';

import {CharacterList} from 'components/Home/CharacterList/CharacterList';
import {CreateCharacter} from 'components/Home/CreateCharacter/CreateCharacter';
import {DeleteCharacter} from 'components/Home/DeleteCharacter/DeleteCharacter';
import models from 'enums/models';
import {DataCollection} from 'stores/DataCollection';
import {Character} from 'stores/models';

import * as styles from './Home.scss';

@inject('data')
@observer
export class Home extends React.Component<{
  data: DataCollection;
  params: Array<any>;
}, {}> {
  public state: {characterForDeletion: Character};

  constructor(props) {
    super(props);

    this.state = observable.object({
      characterForDeletion: null,
    });

    this.onCreateClick = this.onCreateClick.bind(this);
    this.onDeleteClick = this.onDeleteClick.bind(this);
    this.onDeleteConfirm = this.onDeleteConfirm.bind(this);
    this.onDeleteCancel = this.onDeleteCancel.bind(this);
  }

  public onCreateClick() {
    const model = this.props.data.add<Character>({}, models.CHARACTER);
    browserHistory.push(`/character/${model.id}`);
  }

  @action public onDeleteClick(character: Character) {
    this.state.characterForDeletion = character;
  }

  @action public onDeleteConfirm() {
    const character = this.state.characterForDeletion as Character;
    this.props.data.remove(character.static.type, character.id);
    this.state.characterForDeletion = null;
  }

  @action public onDeleteCancel() {
    this.state.characterForDeletion = null;
  }

  public render() {

    const characters = this.props.data.character.filter((character) => character.name);

    return (
      <div>
        <div className={styles.content}>
          <CreateCharacter onCreateClick={this.onCreateClick} />
          <h2>Characters</h2>
          {
            characters.length
              ? <CharacterList characters={characters} onDeleteClick={this.onDeleteClick} />
              : <h4>No characters right now...</h4>
          }
        </div>
        {
          this.state.characterForDeletion
            ? <DeleteCharacter
                character={this.state.characterForDeletion}
                onDeleteConfirm={this.onDeleteConfirm}
                onDeleteCancel={this.onDeleteCancel}
              />
            : null
        }
      </div>
    );
  }
}
