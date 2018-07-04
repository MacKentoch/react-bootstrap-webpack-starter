// @flow

// #region imports
import React, { Component } from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import {
  type Match,
  type Location,
  type RouterHistory,
} from 'react-router-dom';
import { type AuthContextProps } from '../../contexts/auth/consumerHOC';
// #endregion

// #region flow types
type Props = {
  // react-router 4:
  match: Match,
  location: Location,
  history: RouterHistory,

  // parent
  component: any,
  path: string,

  ...any,
} & AuthContextProps;

type State = any;
// #endregion

class PrivateRoute extends Component<Props, State> {
  // #region lifecycle
  render() {
    const { component: InnerComponent, ...rest } = this.props;
    const { location } = this.props;

    const isUserAuthenticated = this.isAuthenticated();
    const isTokenExpired = false; // this.isExpired();

    return (
      <Route
        {...rest}
        render={props =>
          !isTokenExpired && isUserAuthenticated ? (
            <InnerComponent {...props} />
          ) : (
            <Redirect to={{ pathname: '/login', state: { from: location } }} />
          )
        }
      />
    );
  }
  // #endregion

  isAuthenticated() {
    const { checkIsAuthenticated } = this.props;
    const isAuthenticated = checkIsAuthenticated();
    return isAuthenticated;
  }

  isExpired() {
    const { checkTokenIsExpired } = this.props;
    const isExpired = checkTokenIsExpired();
    return isExpired;
  }
}

export default withRouter(PrivateRoute);
