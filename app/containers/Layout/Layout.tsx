import {observer} from 'mobx-react';
import * as React from 'react';

import {Header} from 'containers';

import models from 'enums/models';
import {DataCollection} from 'stores/DataCollection';
import {Player as PlayerModel} from 'stores/models';

@observer
export class Layout extends React.Component<{
  params: {id: string};
  children?: JSX.Element;
}, {}> {
  public render() {
    return (
      <div>
        <Header playerId={this.props.params.id} />
        {this.props.children}
      </div>
    );
  }
}
