import {observer} from 'mobx-react';
import * as React from 'react';

import {AppearanceForm} from 'components/forms/Appearance/Appearance';
import {BasicForm} from 'components/forms/Basic/Basic';
import {StatsForm} from 'components/forms/Stats/Stats';
import {Header} from 'components/Header/Header';

import models from 'enums/models';
import {data} from 'stores';
import {Player as PlayerModel} from 'stores/models';
import {transformForDropdown} from 'utils/dropdownSource';

import * as styles from './Player.scss';

@observer
export class Player extends React.Component<{
  params: {id: string};
}, {}> {
  public player: PlayerModel;

  constructor(props) {
    super(props);
    this.onStatChange = this.onStatChange.bind(this);
    this.player = data.find<PlayerModel>(models.PLAYER, parseInt(props.params.id, 10));
  }

  public onStatChange(stat) {
    return (value) => this.player.stats[stat] = value;
  }

  public render() {

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
        <Header />
        <div className={styles.content}>
          <BasicForm
            alignments={alignments}
            basic={this.player}
            backgrounds={backgrounds}
            classes={classes}
            races={races}
            subraces={subraces}
          />
          <AppearanceForm appearance={this.player} />
          <StatsForm
            player={this.player}
            onChange={this.onStatChange}
          />
        </div>
      </div>
    );
  }
}
