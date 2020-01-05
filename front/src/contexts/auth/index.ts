import _withAuth from './consumerHOC';
import { AuthData as AuthDataContext } from './context';
import _AuthProvider from './providerComponent';
import { AuthProviderState as AuthProviderStateProvider } from './providerComponent';

export type AuthData = AuthDataContext;
export type AuthProviderState = AuthProviderStateProvider;

export const withAuth = _withAuth;

export const AuthProvider = _AuthProvider;
