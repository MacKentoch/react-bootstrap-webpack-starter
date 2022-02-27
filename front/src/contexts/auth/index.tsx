import React, {
  ReactNode,
  useState,
  useCallback,
  useMemo,
  createContext,
} from 'react';
import { authContextHook } from './hook/authContextHook';

// #region types
export type AuthProviderState = {
  isAuthenticated: boolean;
  isExpiredToken: boolean;
  lastAuthDate?: Date;
  token: string;
  user?: User;
  checkIsAuthenticated: () => boolean;
  checkTokenIsExpired: () => boolean;
  setToken: (token: string) => void;
  setUserInfo: (newUser: User) => void;
  disconnectUser: () => void;
};

type Props = {
  children: ReactNode;
};
// #endregion

// #region context
export const AuthContext = createContext<AuthProviderState | null>(null);
AuthContext.displayName = 'AuthContext'; // NOTE: displayName will be sugar ;) if you use react context devtools in your browser
// #endregion

export function AuthProvider({ children }: Props) {
  const {
    isAuthenticated,
    isExpiredToken,
    token,
    lastAuthDate,
    user,

    checkIsAuthenticated,
    checkTokenIsExpired,
    setToken,
    setUserInfo,
    disconnectUser,
  } = authContextHook();

  const value = useMemo(
    () => ({
      isAuthenticated,
      isExpiredToken,
      token,
      lastAuthDate,
      user,

      checkIsAuthenticated,
      checkTokenIsExpired,
      setToken,
      setUserInfo,
      disconnectUser,
    }),
    [
      isAuthenticated,
      isExpiredToken,
      lastAuthDate,
      token,
      user,

      checkIsAuthenticated,
      checkTokenIsExpired,
      setToken,
      setUserInfo,
      disconnectUser,
    ],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
