import { compose } from 'redux';
import withAuth from '../../contexts/auth/consumerHOC';
import NavigationBar from './NavigationBar';
import { Link } from '../../config/navigation';

export type OwnProps = {
  brand: string;
  isAuthenticated: boolean;
  navModel: { rightLinks: Array<Link> };
  leftNavItemClick: () => any;
  rightNavItemClick: () => any;
  disconnectUser: () => any;
};

export default compose(withAuth())(NavigationBar);
