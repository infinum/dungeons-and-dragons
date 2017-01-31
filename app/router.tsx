import * as React from 'react';
import {browserHistory, Router} from 'react-router';
import {Route} from 'utils/route';

import {Home} from 'containers';

export default (props) => (
  <Router history={browserHistory}>
    <Route path='/(:id)' component={Home} />
  </Router>
);
