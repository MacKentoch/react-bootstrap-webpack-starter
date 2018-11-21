// @flow

// #region imports
import compose from 'recompose/compose';
import Protected from './Protected';
import withEnterAnimation from '../../hoc/withEnterAnimation';
import withSuspense from '../../hoc/withSuspense';
// #endregion

export default compose(
  withEnterAnimation(/* no option yet */),
  withSuspense(),
)(Protected);
