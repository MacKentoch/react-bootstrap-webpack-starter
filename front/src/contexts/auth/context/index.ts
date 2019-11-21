import { createContext } from 'react';

// #region types
export type User = {
  email: string;
};

export type AuthData = {
  isAuthenticated: boolean;
  isExpiredToken?: boolean;
  lastAuthDate?: Date;
  token?: string;
  user?: User;
};
// #endregion

// #region default context value
export const authDefault: AuthData = {
  isAuthenticated: false,
};
// #endregion

// #region context
const AuthContext = createContext<AuthData>({
  ...authDefault,
});

export const AuthContextProvider = AuthContext.Provider;
export const AuthContextConsumer = AuthContext.Consumer;
// #endregion
