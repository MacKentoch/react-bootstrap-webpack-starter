// @flow

// #region imports
import { compose } from 'redux';
import Protected from './Protected';
import withEnterAnimation from '../../hoc/withEnterAnimation';
// #endregion

export default compose(withEnterAnimation(/* no option yet */))(Protected);
