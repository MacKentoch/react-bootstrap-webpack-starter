import { compose } from 'redux';
import Login from './Login';
import withAuth from '../../contexts/auth/consumerHOC';

export default compose(withAuth())(Login);
