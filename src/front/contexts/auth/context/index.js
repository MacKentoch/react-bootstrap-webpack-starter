// @flow

// #region imports
import { createContext } from 'react';
// #endregion

// #region flow types
export type User = {
  email: string,
};

export type AuthData = {
  isAuthenticated: boolean,
  lastAuthDate?: Date,

  token: string,
  user: User,
  ...any,
};
// #endregion

// #region default context value
export const authDefault = {
  isAuthenticated: false,
  lastAuthDate: null,
};
// #endregion

// #region context
const AuthContext = createContext({
  ...authDefault,
});

export const AuthContextProvider = AuthContext.Provider;
export const AuthContextConsumer = AuthContext.Consumer;
// #endregion
