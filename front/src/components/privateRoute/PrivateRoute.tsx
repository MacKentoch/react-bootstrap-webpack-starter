import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext, AuthProviderState } from '../../contexts/auth';

type OwnProps = {
  path: string;
  children: any;
};
type Props = OwnProps;

function PrivateRoute({ children, ...rest }: Props) {
  const auth = useContext<AuthProviderState | null>(AuthContext);
  const isAuthenticated = !!window && auth?.checkIsAuthenticated();
  const isExpiredToken = !!window && auth?.checkTokenIsExpired();

  return (
    <Route
      {...rest}
      render={({ location }) => {
        return isAuthenticated && !isExpiredToken ? (
          children
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: location } }} />
        );
      }}
    />
  );
}

PrivateRoute.displayName = 'PrivateRoute';

export default PrivateRoute;
