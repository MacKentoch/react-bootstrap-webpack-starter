// @flow

// #region imports
import compose from 'recompose/compose';
import Login from './Login';
import withEnterAnimation from '../../hoc/withEnterAnimation';
import withAuth from '../../contexts/auth/consumerHOC';
import withSuspense from '../../hoc/withSuspense';
// #endregion

export default compose(
  withEnterAnimation(/* no option yet */),
  withSuspense(),
  withAuth(),
)(Login);
