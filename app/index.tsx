import 'babel-polyfill';

import 'styles/main.scss';

import * as React from 'react';
import {render} from 'react-dom';

import AppRouter from 'router';
import Theme from 'utils/Theme';

render(<Theme><AppRouter /></Theme>, document.querySelector('.app'));
