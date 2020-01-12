import { createContext } from 'react';

// #region types
export type AuthData = {
  isAuthenticated: boolean;
  isExpiredToken?: boolean;
  lastAuthDate?: Date;
  token?: string;
  user?: User;
};

export type AuthProviderState = {
  checkIsAuthenticated: () => boolean;
  checkTokenIsExpired: () => boolean;
  setToken: (token: string) => any;
  setUserInfo: (user: User) => any;
  disconnectUser: () => boolean;
} & AuthData;
// #endregion

// #region default context value
// export const authDefault: AuthProviderState = {
//   isAuthenticated: false,
//   isExpiredToken: undefined,
//   lastAuthDate: undefined,
//   token: '',
//   user: undefined,
// };
// #endregion

// #region context
export const AuthContext = createContext<AuthProviderState>();

export default AuthContext;

export const AuthContextProvider = AuthContext.Provider;
export const AuthContextConsumer = AuthContext.Consumer;
// #endregion
