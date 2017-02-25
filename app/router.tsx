import {Provider} from 'mobx-react';
import * as React from 'react';
import {browserHistory, Route, Router} from 'react-router';

import {Home, Player} from 'containers';

export default ({store}) => (
  <Provider data={store.data}>
    <Router history={browserHistory}>
      <Route path='/' component={Home} />
      <Route path='/player/:id' component={Player} />
    </Router>
  </Provider>
);
