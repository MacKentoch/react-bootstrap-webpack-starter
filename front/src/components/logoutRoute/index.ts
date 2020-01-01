import { compose } from 'redux';
import LogoutRoute from './LogoutRoute';
import withAuth from '../../contexts/auth/consumerHOC';
import { AuthProviderState } from '../../contexts/auth/providerComponent';

export type OwnProps = {};
export type FromAuthContextProps = AuthProviderState;

export default compose(withAuth())(LogoutRoute);
