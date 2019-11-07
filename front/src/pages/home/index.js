// @flow

// #region imports
import compose from 'recompose/compose';
import Home from './Home';
import withEnterAnimation from '../../hoc/withEnterAnimation';
// #endregion

export default compose(withEnterAnimation(/* no option yet */))(Home);
