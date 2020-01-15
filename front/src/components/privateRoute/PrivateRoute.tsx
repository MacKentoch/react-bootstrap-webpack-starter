import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import { AuthContext, AuthProviderState } from '../../contexts/auth';

// #region types
export type OwnProps = {
  component: any;
  checkUserIsConnected: () => { isAuthenticated: boolean };
};
type Props = RouteComponentProps & OwnProps;
// #endregion

function PrivateRoute(props: Props) {
  const auth = useContext<AuthProviderState | null>(AuthContext);
  const { component: InnerComponent, ...rest } = props;
  const { location } = props;

  const isAuthenticated = !!window && auth?.checkIsAuthenticated();

  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          <InnerComponent {...props} />
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: location } }} />
        )
      }
    />
  );
}

PrivateRoute.displayName = 'PrivateRoute';

export default PrivateRoute;
