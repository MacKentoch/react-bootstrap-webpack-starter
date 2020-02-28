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

  return (
    <Route
      {...rest}
      render={({ location }) => {
        return auth?.isAuthenticated && !auth?.isExpiredToken ? (
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
