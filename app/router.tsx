import {Provider} from 'mobx-react';
import * as React from 'react';
// import {browserHistory, IndexRoute, Route, Router} from 'react-router';
import {Router} from 'utils/router';

import {Home, Layout, Player} from 'containers';

export default ({store, location}) => (
  <Provider data={store.data} location={location}>
    <Router
      routes={{
        '/': [Layout, Home],
        '/player/:id': [Layout, Player],
      }}
      location={location}
    />
    {/*<Router history={browserHistory}>
      <Route path='/' component={Layout}>
        <IndexRoute component={Home} />
        <Route path='/player/:id' component={Player} />
      </Route>
    </Router>*/}
  </Provider>
);
