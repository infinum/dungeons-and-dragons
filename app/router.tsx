import {Provider} from 'mobx-react';
import * as React from 'react';
import {browserHistory, IndexRoute, Route, Router} from 'react-router';

import {Home, Layout, Player} from 'containers';

export default ({store}) => (
  <Provider data={store.data}>
    <Router history={browserHistory}>
      <Route path='/' component={Layout}>
        <IndexRoute component={Home} />
        <Route path='/player/:id' component={Player} />
      </Route>
    </Router>
  </Provider>
);
