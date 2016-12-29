import * as React from 'react';
import {Router, browserHistory} from 'react-router';
import {Route} from 'utils/route';

import {App, Home} from 'containers';

export default (props) => (
  <Router history={browserHistory}>
    <Route path="/" component={Home} />
    <Route path="/app" component={App} />
  </Router>
);
