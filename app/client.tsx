import * as React from 'react';

import AppRouter from 'router';
import Theme from 'utils/Theme';

let app = <AppRouter />;

/// #if DEV
import DevTools from 'mobx-react-devtools';
app = (
  <div>
    <AppRouter />
    <DevTools />
  </div>
);
/// #endif

export default () => (<Theme>{app}</Theme>);
