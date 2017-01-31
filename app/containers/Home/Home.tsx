import * as React from 'react';

import {AppearanceForm} from 'components/forms/Appearance/Appearance';
import {BasicForm} from 'components/forms/Basic/Basic';
import {StatsForm} from 'components/forms/Stats/Stats';
import {Header} from 'components/Header/Header';

import models from 'enums/models';
import {IAppearance, IBasic, IStat} from 'interfaces';
import {data} from 'stores';
import {Player} from 'stores/models';

const stats: Array<IStat> = [
  {name: 'Strength'},
  {name: 'Dexterity'},
  {name: 'Constitution'},
  {name: 'Intelligence'},
  {name: 'Wisdom'},
  {name: 'Charisma'},
];

const basic: IBasic = {
  aligement: '',
  background: '',
  class: '',
  name: '',
  playerName: '',
  race: '',
};

const appearance: IAppearance = {};

export class Home extends React.Component<{
  id: number;
}, {}> {
  public render() {
    const {id} = this.props;
    let player = data.find<Player>(models.PLAYER, id);

    if (!player) {
      player = data.add<Player>({stats}, 'player');
    }

    return (
      <div>
        <Header />
        <div>
          <BasicForm basic={player} />
          <AppearanceForm appearance={player} />
          <StatsForm stats={player.stats} />
        </div>
      </div>
    );
  }
}
