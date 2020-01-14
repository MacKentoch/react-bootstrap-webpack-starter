import { compose } from 'redux';
import { AuthProviderState } from '../../contexts/auth';
import NavigationBar from './NavigationBar';
import { Link } from '../../config/navigation';

export type OwnProps = {
  brand: string;
  navModel: { rightLinks: Array<Link>; leftLinks?: Array<Link> };
  leftNavItemClick: () => any;
  rightNavItemClick: () => any;
};

export type FromAuthContextProps = AuthProviderState;

export default compose()(NavigationBar);
