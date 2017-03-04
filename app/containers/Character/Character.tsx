import {inject, observer} from 'mobx-react';
import * as React from 'react';

import {BasicInfoSection} from 'components/Character/BasicInfoSection/BasicInfoSection';
import {AppearanceForm} from 'components/forms/Appearance/Appearance';
import {StatsForm} from 'components/forms/Stats/Stats';

import models from 'enums/models';
import {DataCollection} from 'stores/DataCollection';
import {Character as CharacterModel} from 'stores/models';
import {transformForDropdown} from 'utils/dropdownSource';

import * as styles from './Character.scss';

@inject('data')
@observer
export class Character extends React.Component<{
  params: Array<any>
  data: DataCollection;
}, {}> {
  public character: CharacterModel;

  constructor(props) {
    super(props);

    const {data} = props;
    const characterId = parseInt(props.params[1], 10);

    this.onStatChange = this.onStatChange.bind(this);
    this.character = data.find(models.CHARACTER, characterId) as CharacterModel;
  }

  public onStatChange(stat: string) {
    return (e) => this.character.stats[stat] = e.target.value;
  }

  public render() {
    const {data} = this.props;

    if (!this.character) {
      return <h1>Not found!</h1>;
    }

    const alignments = transformForDropdown(data.alignment);
    const backgrounds = transformForDropdown(data.background);
    const classes = transformForDropdown(data.class);
    const races = transformForDropdown(data.race);
    const subraces = transformForDropdown(this.character.availableSubraces);

    return (
      <div>
        <div className={styles.content}>
          <BasicInfoSection
            character={this.character}
            options={{
              alignments,
              backgrounds,
              classes,
              races,
              subraces,
            }}
          />
          {/*<AppearanceForm appearance={this.character} />*/}
          <StatsForm
            character={this.character}
            onChange={this.onStatChange}
          />
        </div>
      </div>
    );
  }
}
