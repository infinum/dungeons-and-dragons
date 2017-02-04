import 'babel-polyfill';

require('styles/main.scss');

import * as React from 'react';
import {render} from 'react-dom';

import AppRouter from 'router';
import {data, keys} from 'stores';
import {debugVars} from 'utils/debug';
import Theme from 'utils/Theme';

debugVars({data, keys});

render(<Theme><AppRouter /></Theme>, document.querySelector('.app'));
