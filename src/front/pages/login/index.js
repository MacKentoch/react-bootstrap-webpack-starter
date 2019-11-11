// @flow

// #region imports
import { compose } from 'redux';
import Login from './Login';
import withEnterAnimation from '../../hoc/withEnterAnimation';
import withAuth from '../../contexts/auth/consumerHOC';
// #endregion

export default compose(
  withEnterAnimation(/* no option yet */),
  withAuth(),
)(Login);
