import 'babel-polyfill';

import 'styles/main.scss';

import * as React from 'react';
import {render} from 'react-dom';

import AppRouter from 'router';

render(<AppRouter />, document.querySelector('.app'));

console.log(process.env.NODE_ENV)
