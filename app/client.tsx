import * as React from 'react';

import AppRouter from 'router';
import Theme from 'utils/Theme';

import * as store from 'stores';

/// #if DEV
import DevTools from 'mobx-react-devtools';
/// #endif

export default ({location}: {location: object}) => {
  let app = <AppRouter store={store} location={location} />;

  /// #if DEV
  app = (
    <div>
      <AppRouter store={store} location={location} />
      <DevTools />
    </div>
  );
  /// #endif

  return <Theme>{app}</Theme>;
};
