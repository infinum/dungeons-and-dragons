import {observer} from 'mobx-react';
import * as React from 'react';

import {Header} from 'containers';

import models from 'enums/models';
import {DataCollection} from 'stores/DataCollection';

@observer
export class Layout extends React.Component<{
  params: {id: string};
  children?: JSX.Element;
}, {}> {
  public render() {
    return (
      <div>
        <Header characterId={this.props.params.id} />
        {this.props.children}
      </div>
    );
  }
}
