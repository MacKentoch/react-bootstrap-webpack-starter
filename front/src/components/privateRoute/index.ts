import { compose } from 'redux';
import PrivateRoute from './PrivateRoute';
import withAuth from '../../contexts/auth/consumerHOC';
import { AuthProviderState } from '../../contexts/auth/providerComponent';

export type OwnProps = {
  component: any;
  checkUserIsConnected: () => { isAuthenticated: boolean };
};

export type FromAuthContextProps = AuthProviderState;

export default compose(withAuth())(PrivateRoute);
