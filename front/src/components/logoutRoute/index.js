// @flow

// #region imports
import { compose } from 'redux';
import LgoutRoute from './LogoutRoute';
import withAuth from '../../contexts/auth/consumerHOC';
// #endregion

export default compose(withAuth())(LgoutRoute);
