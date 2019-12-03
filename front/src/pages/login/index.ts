import { compose } from 'redux';
import Login from './Login';
import withEnterAnimation from '../../hoc/withEnterAnimation';
import withAuth from '../../contexts/auth/consumerHOC';
s;

export default compose(
  withEnterAnimation(/* no option yet */),
  withAuth(),
)(Login);
