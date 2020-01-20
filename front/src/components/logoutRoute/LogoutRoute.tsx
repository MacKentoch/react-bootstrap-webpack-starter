import React from 'react';
import { useEffect, useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import { AuthProviderState, AuthContext } from '../../contexts/auth';

type OwnProps = {};
type Props = OwnProps & RouteComponentProps;

function LogoutRoute(props: Props) {
  const auth = useContext<AuthProviderState | null>(AuthContext);

  useEffect(() => {
    auth && auth.disconnectUser();
  }, []);

  return (
    <Route {...props}>
      <Redirect to={{ pathname: '/login' }} />
    </Route>
  );
}

LogoutRoute.displayName = 'LogoutRoute';

export default LogoutRoute;
