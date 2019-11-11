// @flow

// #region imports
import { compose } from 'redux';
import Home from './Home';
import withEnterAnimation from '../../hoc/withEnterAnimation';
// #endregion

export default compose(withEnterAnimation(/* no option yet */))(Home);
