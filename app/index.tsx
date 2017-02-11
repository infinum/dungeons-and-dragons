import 'babel-polyfill';

import * as React from 'react';
import {render} from 'react-dom';
import {AppContainer} from 'react-hot-loader';

import Client from 'client';
import AppRouter from 'router';
import {data, keys} from 'stores';
import {debugVars} from 'utils/debug';
import Theme from 'utils/Theme';

debugVars({data, keys});

render(<AppContainer><Client /></AppContainer>, document.querySelector('.app'));

if ('hot' in module) {
  // tslint:disable-next-line:no-string-literal
  module['hot'].accept('./client', () => {
    const Client = require('./client').default;
    render(<AppContainer><Client /></AppContainer>, document.querySelector('.app'));
  });
}
