import { compose } from 'redux';
import PrivateRoute from './PrivateRoute';
import withAuth from '../../contexts/auth/consumerHOC';

export default compose(withAuth())(PrivateRoute);
