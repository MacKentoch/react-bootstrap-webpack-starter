// @flow

// #region imports
import { compose } from 'redux';
import PrivateRoute from './PrivateRoute';
import withAuth from '../../contexts/auth/consumerHOC';
// #endregion

export default compose(withAuth())(PrivateRoute);
