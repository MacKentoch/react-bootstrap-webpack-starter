import { compose } from 'redux';
import LogoutRoute from './LogoutRoute';
import withAuth from '../../contexts/auth/consumerHOC';

export default compose(withAuth())(LogoutRoute);
