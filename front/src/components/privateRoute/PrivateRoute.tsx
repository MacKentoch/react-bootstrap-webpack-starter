import React, { useContext, useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext, AuthProviderState } from '../../contexts/auth';

type OwnProps = {
  path: string;
  children: any;
};
type Props = OwnProps;

function PrivateRoute({ children, ...rest }: Props) {
  const auth = useContext<AuthProviderState | null>(AuthContext);
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!window && auth?.checkIsAuthenticated(),
  );
  const [isExpiredToken, setIsExpiredToken] = useState(
    !!window && auth?.checkTokenIsExpired(),
  );

  // useEffect(() => {
  //   const _isAuthenticated = !!window && auth?.checkIsAuthenticated();
  //   const _isExpiredToken = !!window && auth?.checkTokenIsExpired();

  //   setIsAuthenticated(!!_isAuthenticated);
  //   setIsExpiredToken(!!_isExpiredToken);
  // }, [auth]);

  console.log('Private route: ', {
    auth,
    isAuthenticated,
    isExpiredToken,
  });

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
