import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext, AuthProviderState } from '../../contexts/auth';

type OwnProps = {
  path: string;
  children: any;
  checkUserIsConnected: () => { isAuthenticated: boolean };
};
type Props = OwnProps;

function PrivateRoute({ children }: Props) {
  const auth = useContext<AuthProviderState | null>(AuthContext);
  const isAuthenticated = !!window && auth?.checkIsAuthenticated();

  return (
    <Route
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: location } }} />
        )
      }
    />
  );
}

PrivateRoute.displayName = 'PrivateRoute';

export default PrivateRoute;
