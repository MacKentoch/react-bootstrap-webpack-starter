// @flow

// #region imports
import compose from 'recompose/compose';
import Login from './Login';
import withEnterAnimation from '../../hoc/withEnterAnimation';
// #endregion

export default compose(withEnterAnimation(/* no option yet */))(Login);
