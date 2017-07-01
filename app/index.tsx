import 'babel-polyfill';
import 'manifest.json';
require('offline-plugin/runtime').install();

import {action, observable} from 'mobx';
import * as React from 'react';
import {render} from 'react-dom';
// import {AppContainer} from 'react-hot-loader';

import Client from 'client';
import AppRouter from 'router';
import {data, keys} from 'stores';
import {debugVars} from 'utils/debug';
import Theme from 'utils/Theme';

const location = observable({
  pathname: window.location.pathname,
});

import * as mobx from 'mobx';
debugVars({data, keys, location, mobx});

window.addEventListener('popstate', action(() => {
  location.pathname = window.location.pathname;
}));

function init() {
  const Client = require('./client').default;
  render(<Client location={location} />, document.querySelector('.app'));
}

init();

if ('hot' in module) {
  // tslint:disable-next-line:no-string-literal
  module['hot'].accept('./client', init);
}
