import 'babel-polyfill';

import 'styles/main.scss';

import * as React from 'react';
import {render} from 'react-dom';

import App from 'containers/App/App';

render(<App />, document.querySelector('.app'));

console.log('Test');
