import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
// import { useSelector } from 'react-redux';

import store from './store';

export default function RouteWrapper({
  component: Component,
  isPrivate = false,
  ...rest
}) {
  // const { signed } = store.getState().auth;

  // const { isLogged } = store.getState();

  // console.log('getstate', store.getState());

  // if (!isLogged && isPrivate) {
  //   return <Redirect to="/" />;
  // }

  // if (isLogged && !isPrivate) {
  //   return <Redirect to="/home" />;
  // }

  // const Layout = signed ? DefaultLayout : AuthLayout;

  return <Route {...rest} component={Component} />;
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};
