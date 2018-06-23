// @flow

// #region imports
import React, { Component } from 'react';
import { AuthContextProvider, type AuthData } from '../context';
import auth from '../../../services/auth';
// #endregion

// #region flow types
export type AuthProviderProps = {
  initialState: {} & AuthData,
};
export type AuthProviderState = {
  checkIsAuthenticated: () => boolean,
  ...any,
} & AuthData;
// #endregion

// #region PROVIDER component
export default class AuthProvider extends Component<
  AuthProviderProps,
  AuthProviderState,
> {
  static defaultProps = {
    initialState: { isAuthenticated: false, lastAuthDate: null },
  };

  // #region lifecyle
  constructor(props) {
    super(props);

    // initialize state in constructor (otherwise function won't be passed)
    this.state = {
      ...this.props.initialState,
      checkIsAuthenticated: this.checkIsAuthenticated,
    };
  }

  render() {
    const { children } = this.props;

    return (
      <AuthContextProvider value={{ ...this.state }}>
        {children}
      </AuthContextProvider>
    );
  }
  // #endregion

  checkIsAuthenticated = () => {
    const isAuthenticated = auth.isAuthenticated();
    this.setState({ isAuthenticated });
    return isAuthenticated;
  };
}
// #endregion
