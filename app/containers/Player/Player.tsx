import {inject, observer} from 'mobx-react';
import * as React from 'react';

import {AppearanceForm} from 'components/forms/Appearance/Appearance';
import {BasicForm} from 'components/forms/Basic/Basic';
import {StatsForm} from 'components/forms/Stats/Stats';

import models from 'enums/models';
import {DataCollection} from 'stores/DataCollection';
import {Player as PlayerModel} from 'stores/models';
import {transformForDropdown} from 'utils/dropdownSource';

import * as styles from './Player.scss';

@inject('data')
@observer
export class Player extends React.Component<{
  params: Array<any>
  data: DataCollection;
}, {}> {
  public player: PlayerModel;

  constructor(props) {
    super(props);

    const {data} = props;
    const playerId = parseInt(props.params[1], 10);

    this.onStatChange = this.onStatChange.bind(this);
    this.player = data.find(models.PLAYER, playerId) as PlayerModel;
  }

  public onStatChange(stat: string) {
    return (value) => this.player.stats[stat] = value;
  }

  public render() {
    const {data} = this.props;

    if (!this.player) {
      return <h1>Not found!</h1>;
    }

    const alignments = transformForDropdown(data.alignment);
    const backgrounds = transformForDropdown(data.background);
    const classes = transformForDropdown(data.class);
    const races = transformForDropdown(data.race);
    const subraces = transformForDropdown(this.player.availableSubraces);

    return (
      <div>
        <div className={styles.content}>
          <BasicForm
            alignments={alignments}
            basic={this.player}
            backgrounds={backgrounds}
            classes={classes}
            races={races}
            subraces={subraces}
          />
          {/*<AppearanceForm appearance={this.player} />*/}
          <StatsForm
            player={this.player}
            onChange={this.onStatChange}
          />
        </div>
      </div>
    );
  }
}
