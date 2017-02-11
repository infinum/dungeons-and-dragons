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

export class Player extends React.Component<{
  params: {id: string};
}, {}> {
  public render() {
    const {params} = this.props;
    let player = data.find<PlayerModel>(models.PLAYER, parseInt(params.id, 10));

    if (!player) {
      return <h1>Not found!</h1>;
    }

    const alignments = transformForDropdown(data.alignment);
    const classes = transformForDropdown(data.class);
    const races = transformForDropdown(data.race);

    return (
      <div>
        <Header />
        <div className={styles.content}>
          <BasicForm basic={player} classes={classes} alignments={alignments} races={races} />
          <AppearanceForm appearance={player} />
          <StatsForm stats={player.stats} />
        </div>
      </div>
    );
  }
}
