import * as React from 'react';

import {AppearanceForm} from 'components/forms/Appearance/Appearance';
import {BasicForm} from 'components/forms/Basic/Basic';
import {StatsForm} from 'components/forms/Stats/Stats';
import {Header} from 'components/Header/Header';

import {IAppearance, IBasic, IStat} from 'interfaces';

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

export class Home extends React.Component<{}, {}> {
  public render() {
    return (
      <div>
        <Header />
        <div>
          <BasicForm basic={basic} />
          <AppearanceForm appearance={appearance} />
          <StatsForm stats={stats} />
        </div>
      </div>
    );
  }
}
