import {clone, find, noop} from 'lodash';
import {IndexRoute as ReactIndexRoute, Route as ReactRoute} from 'react-router';

import store from 'stores';

/**
 * Wrap a promise based function to make it use callbakc function
 *
 * @param {String} name - Function to be wrapped
 * @param {Object} ctx - Context that should be used when calling the function
 * @param {Mixed[]} args - Arguments that should be passed to the function
 * @param {Function} cb - Function to be called when the original function resolves or rejects
 * @return {undefined}
 */
function cbWrapper(name, ctx, args, cb = noop) {
  ctx[name](store, ...args)
    .then((data) => cb(null, data))
    .catch((e) => {
      if (store) {
        store.keys.setItem('error', e || {
          status: 500,
          title: 'Server error',
        });
      }
      cb();
    });
}

/**
 * Wrap the component hook (router specific)
 *
 * @param {String} name - Hook name
 * @param {Component} component - Component containing the hook
 * @return {Function} Wrapped hook function
 */
function promiseWrapper(name, component) {
  if (name === 'onEnter') {
    return (nextState, replace, cb) => cbWrapper(name, component, [nextState, replace], cb);
  } else if (name === 'onChange') {
    return (prevState, nextState, replace, cb) => cbWrapper(name, component, [prevState, nextState, replace], cb);
  }
  return (prevState) => cbWrapper(name, component, [prevState]);
}

/**
 * Add hook to the component props
 *
 * @param {String} name - Name of the hook
 * @param {Component} component - Component which contains the hook function
 * @param {Component} element - Router element
 * @return {Componenr} Updated router element
 */
function extendProps(name, component, element) {
  const el = clone(element);
  el.props = clone(el.props);
  el.props[name] = promiseWrapper(name, component);
  return el;
}

function bindHooks(RouteComponent) {

  /**
   * Override the internal react-router createRouteFromReactElement method in order to add the hooks
   *
   * @param {Component} element - Main component for the route
   * @param {String} parentRoute - Parent route
   * @return {Component} Updated router element
   */
  return (element, parentRoute) => {
    const {component} = element.props;
    let el = element;
    if (component.onEnter) {
      el = extendProps('onEnter', component, element);
    }
    if (component.onChange) {
      el = extendProps('onChange', component, element);
    }
    if (component.onLeave) {
      el = extendProps('onLeave', component, element);
    }
    return RouteComponent.createRouteFromReactElement(el, parentRoute);
  };
}

export class Route extends ReactRoute {
  public static createRouteFromReactElement = bindHooks(ReactRoute);
}

// tslint:disable-next-line:max-classes-per-file
export class IndexRoute extends ReactIndexRoute {
  public static createRouteFromReactElement = bindHooks(ReactIndexRoute);
}
