import * as React from 'react';
import {browserHistory, Router} from 'react-router';
import {Route} from 'utils/route';

import {Home, Player} from 'containers';

export default (props) => (
  <Router history={browserHistory}>
    <Route path='/' component={Home} />
    <Route path='/player/:id' component={Player} />
  </Router>
);
