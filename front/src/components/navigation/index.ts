import { compose } from 'redux';
import withAuth from '../../contexts/auth/consumerHOC';
import NavigationBar from './NavigationBar';

export default compose(withAuth())(NavigationBar);
