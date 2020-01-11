import React from 'react';
import { useEffect, useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import { FromAuthContextProps, OwnProps } from './index';
import AuthContext from '../../contexts/auth/context';
import { AuthProviderState } from '../../contexts/auth/providerComponent';

// TODO: fix context hook in TS: https://stackoverflow.com/questions/53335907/using-react-context-with-react-hooks-in-typescript
// #region types
type Props = {} & RouteComponentProps & FromAuthContextProps & OwnProps;
// #endregion

function LogoutRoute(props: Props) {
  const auth = useContext(AuthContext);

  useEffect(() => {
    auth.disconnectUser();
  }, []);

  return (
    <Route {...props}>
      <Redirect to={{ pathname: '/login' }} />
    </Route>
  );
}

LogoutRoute.displayName = 'LogoutRoute';

export default LogoutRoute;
