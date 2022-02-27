import { useState, useCallback } from 'react';
import auth from '../../../services/auth';
import { AuthProviderState } from '../index';
import { devToolsStore } from '../../withDevTools';

export const checkUserHasId = (user: User) => user.id;

export const initialContextState = Object.freeze({
  isAuthenticated: false,
  isExpiredToken: true,
  lastAuthDate: undefined,
  token: '',
  user: undefined,
});

export function authContextHook(): AuthProviderState {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    initialContextState.isAuthenticated,
  );
  const [isExpiredToken, setIsExpiredToken] = useState<boolean>(
    initialContextState.isExpiredToken,
  );
  const [lastAuthDate, setLastAuthDate] = useState<Date | undefined>(
    initialContextState.lastAuthDate,
  );
  const [token, privateSetToken] = useState<string>(initialContextState.token);
  const [user, setUser] = useState<User | undefined>(initialContextState.user);

  const checkIsAuthenticated = useCallback((): boolean => {
    const user = auth.getUserInfo();
    const _isAuthenticated = !!(auth.getToken() && checkUserHasId(user));

    setIsAuthenticated(_isAuthenticated);

    devToolsStore?.dispatch({
      type: 'AUTH_CHECK_IS_AUTHENTICATED',
      state: {
        isAuthenticated: _isAuthenticated,
        isExpiredToken,
        lastAuthDate,
        token,
        user,
      },
    });

    return _isAuthenticated;
  }, []);

  const checkTokenIsExpired = useCallback((): boolean => {
    const token = auth.getToken();
    const _isExpiredToken = auth.isExpiredToken(token);

    console.log('DEBUG checkTokenIsExpired : ', {
      token,
      _isExpiredToken,
    });
    setIsExpiredToken(_isExpiredToken);

    devToolsStore?.dispatch({
      type: 'AUTH_CHECK_TOKEN_IS_EXPIRED',
      state: {
        isAuthenticated,
        isExpiredToken: _isExpiredToken,
        lastAuthDate,
        token,
        user,
      },
    });

    return _isExpiredToken;
  }, []);

  const setToken = useCallback((token: string = ''): void => {
    auth.setToken(token);
    const _isExpiredToken = auth.isExpiredToken(token);
    const _isAuthenticated = true;

    setIsAuthenticated(_isAuthenticated);
    setIsExpiredToken(_isExpiredToken);
    privateSetToken(token);

    devToolsStore?.dispatch({
      type: 'AUTH_SET_TOKEN',
      state: {
        isAuthenticated: _isAuthenticated,
        isExpiredToken: _isExpiredToken,
        lastAuthDate,
        token,
        user,
      },
    });
  }, []);

  const setUserInfo = useCallback((newUser: User): void => {
    if (typeof user === 'object') {
      auth.setUserInfo(newUser);

      setUser({ ...newUser });

      devToolsStore?.dispatch({
        type: 'AUTH_SET_USER_INFO',
        state: {
          isAuthenticated,
          isExpiredToken,
          lastAuthDate,
          token,
          user: newUser,
        },
      });
    }
  }, []);

  const disconnectUser = useCallback((): void => {
    auth.clearAllAppStorage();

    setIsAuthenticated(initialContextState.isAuthenticated);
    setIsExpiredToken(initialContextState.isExpiredToken);
    setLastAuthDate(initialContextState.lastAuthDate);
    privateSetToken(initialContextState.token);
    setUser(initialContextState.user);

    devToolsStore?.dispatch({
      type: 'AUTH_DISCONNECT_USER',
      state: { ...initialContextState },
    });
  }, []);

  return {
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
  };
}

export default authContextHook;
