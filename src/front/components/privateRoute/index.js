// @flow

// #region imports
import compose from 'recompose/compose';
import PrivateRoute from './PrivateRoute';
import withAuth from '../../contexts/auth/consumerHOC';
// #endregion

export default compose(withAuth())(PrivateRoute);
