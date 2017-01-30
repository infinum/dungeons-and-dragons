import 'babel-polyfill';

import 'styles/main.scss';

import * as React from 'react';
import {render} from 'react-dom';

import Theme from 'utils/Theme';
import AppRouter from 'router';

render(<Theme><AppRouter /></Theme>, document.querySelector('.app'));

console.log(process.env.NODE_ENV)
