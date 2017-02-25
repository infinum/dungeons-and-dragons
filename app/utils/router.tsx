import {observer} from 'mobx-react';
import * as React from 'react';

export const browserHistory = {
  push(path: string) {
    window.history.pushState(null, null, path);
    // tslint:disable-next-line:no-string-literal
    window.dispatchEvent(new window['PopStateEvent']('popstate'));
  },
};

export function Link({to, children}: {to: string, children?: any}) {
    const onClick = (event) => {
      event.preventDefault();
      browserHistory.push(to);
    };

    return <a href={to} onClick={onClick}>{children}</a>;
}

function matchPath(path, pathname) {
  const test = path.replace(/\/\:(\w)+/, '/([\\w|\\d]+)');
  const reg = new RegExp(`^${test}$`);
  return reg.exec(pathname);
}

export const Router = observer((
  {routes, location}: {routes: {[key: string]: Array<typeof React.Component>}, location: {pathname: string}},
): JSX.Element => {
  const paths = Object.keys(routes);
  const path = paths.find((p) => {
    const res = matchPath(p, location.pathname);
    return Boolean(res);
  });

  if (!path) {
    return null;
  }
  const params = matchPath(path, location.pathname);
  let el = null;
  for (let index = routes[path].length - 1; index >= 0; index--) {
    el = React.createElement(routes[path][index], {params}, el);
  }
  return el;
});
