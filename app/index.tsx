import 'babel-polyfill';
import 'manifest.json';
require('offline-plugin/runtime').install();

import * as React from 'react';
import {render} from 'react-dom';
// import {AppContainer} from 'react-hot-loader';

import Client from 'client';
import AppRouter from 'router';
import {data, keys} from 'stores';
import {debugVars} from 'utils/debug';
import Theme from 'utils/Theme';

debugVars({data, keys});

function init() {
  const Client = require('./client').default;
  render(<Client />, document.querySelector('.app'));
}

init();

if ('hot' in module) {
  // tslint:disable-next-line:no-string-literal
  module['hot'].accept('./client', init);
}
