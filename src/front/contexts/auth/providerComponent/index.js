// @flow

// #region imports
import React, { Component } from 'react';
import { AuthContextProvider, type AuthData, type User } from '../context';
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
    initialState: {
      token: null,
      user: null,
      isAuthenticated: false,
      lastAuthDate: null,
    },
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
      <AuthContextProvider
        value={{
          ...this.state,
        }}
      >
        {' '}
        {children}{' '}
      </AuthContextProvider>
    );
  }
  // #endregion

  checkIsAuthenticated = () => {
    const isAuthenticated = auth.isAuthenticated();
    this.setState({
      isAuthenticated,
    });
    return isAuthenticated;
  };

  setToken = (token: string = '') => {
    auth.setToken(token);
    this.setState({ token, isAuthenticated: true });
  };

  setUserInfo = (user: User = null) => {
    if (typeof user === 'object') {
      auth.setUserInfo(user);
      this.setState({ user });
    }
  };
}
// #endregion
