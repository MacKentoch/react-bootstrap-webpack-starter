import { compose } from 'redux';
import withAuth from '../../contexts/auth/consumerHOC';
import { AuthProviderState } from '../../contexts/auth/providerComponent';
import NavigationBar from './NavigationBar';
import { Link } from '../../config/navigation';

export type OwnProps = {
  brand: string;
  navModel: { rightLinks: Array<Link> };
  leftNavItemClick: () => any;
  rightNavItemClick: () => any;
};

export type FromAuthContextProps = AuthProviderState;

export default compose(withAuth())(NavigationBar);
