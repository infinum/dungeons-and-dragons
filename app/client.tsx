import * as React from 'react';

import AppRouter from 'router';
import Theme from 'utils/Theme';

import * as store from 'stores';

let app = <AppRouter store={store} />;

/// #if DEV
import DevTools from 'mobx-react-devtools';
app = (
  <div>
    <AppRouter store={store} />
    <DevTools />
  </div>
);
/// #endif

export default () => (<Theme>{app}</Theme>);
