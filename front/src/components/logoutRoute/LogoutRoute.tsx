import React from 'react';
import { useEffect, useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import { FromAuthContextProps, OwnProps } from './index';
import { AuthContext } from '../../contexts/auth';

// #region types
type Props = OwnProps & RouteComponentProps & FromAuthContextProps;
// #endregion

function LogoutRoute(props: Props) {
  const auth = useContext<FromAuthContextProps | null>(AuthContext);

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
