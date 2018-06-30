// @flow

// #region imports
import compose from 'recompose/compose';
import LgoutRoute from './LogoutRoute';
import withAuth from '../../contexts/auth/consumerHOC';
// #endregion

export default compose(withAuth())(LgoutRoute);
