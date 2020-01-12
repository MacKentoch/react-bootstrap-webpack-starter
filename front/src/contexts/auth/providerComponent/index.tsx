import React, { Component } from 'react';
import { AuthContextProvider, AuthData } from '../context';
import auth from '../../../services/auth';
import { devToolsStore } from '../../withDevTools';

// #region types
export type AuthProviderProps = {
  initialState: {} & AuthData;
};
// #endregion

// #region constants
const initialState: AuthData = {
  token: '',
  user: undefined,
  isAuthenticated: false,
  isExpiredToken: true,
  lastAuthDate: undefined,
};
// #endregion

// #region PROVIDER component
export default class AuthProvider extends Component<
  AuthProviderProps,
  AuthProviderState
> {
  static defaultProps = {
    initialState: {
      ...initialState,
    },
  };

  // #region lifecyle
  constructor(props: AuthProviderProps) {
    super(props);

    // initialize state in constructor (otherwise function won't be passed)
    this.state = {
      ...this.props.initialState,
      checkIsAuthenticated: this.checkIsAuthenticated,
      checkTokenIsExpired: this.checkTokenIsExpired,
      disconnectUser: this.disconnectUser,
      setToken: this.setToken,
      setUserInfo: this.setUserInfo,
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
        {children}
      </AuthContextProvider>
    );
  }
  // #endregion

  checkIsAuthenticated = (): boolean => {
    const checkUserHasId = (user: User) => user.id;
    const user = auth.getUserInfo() ? auth.getUserInfo() : null;
    const isAuthenticated = !!(auth.getToken() && checkUserHasId(user));

    devToolsStore &&
      devToolsStore.dispatch({
        type: 'AUTH_CHECK_IS_AUTHENTICATED',
        state: { ...this.state, isAuthenticated },
      });

    this.setState({ isAuthenticated });
    return isAuthenticated;
  };

  checkTokenIsExpired = (): boolean => {
    const token = auth.getToken();
    const isExpiredToken = auth.isExpiredToken(token);

    devToolsStore &&
      devToolsStore.dispatch({
        type: 'AUTH_CHECK_TOKEN_IS_EXPIRED',
        state: { ...this.state, isExpiredToken },
      });

    this.setState({ isExpiredToken });
    return isExpiredToken;
  };

  setToken = (token: string = '') => {
    auth.setToken(token);

    devToolsStore &&
      devToolsStore.dispatch({
        type: 'AUTH_SET_TOKEN',
        state: { ...this.state, token, isAuthenticated: true },
      });

    this.setState({ token, isAuthenticated: true });
  };

  setUserInfo = (user: User) => {
    if (typeof user === 'object') {
      auth.setUserInfo(JSON.stringify(user));

      devToolsStore &&
        devToolsStore.dispatch({
          type: 'AUTH_SET_USER_INFO',
          state: { ...this.state, user },
        });

      this.setState({ user });
    }
  };

  disconnectUser = (): boolean => {
    auth.clearAllAppStorage();
    this.checkIsAuthenticated();

    devToolsStore &&
      devToolsStore.dispatch({
        type: 'AUTH_DISCONNECT_USER',
        state: { ...initialState },
      });

    this.setState({ ...initialState });

    return true;
  };
}
// #endregion
