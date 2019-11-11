// @flow

// #region imports
import { compose } from 'redux';
import withAuth from '../../contexts/auth/consumerHOC';
import NavigationBar from './NavigationBar';
// #endregion

export default compose(withAuth())(NavigationBar);
