import React, { useState, useContext } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import { useHistory } from 'react-router-dom';
import { Link } from '../../config/navigation';
import { AuthContext, AuthProviderState } from '../../contexts/auth';
import { Navigation } from '../../config/navigation';

export type OwnProps = {
  brand: string;
  navModel: Partial<Navigation>;
  leftNavItemClick?: (event?: any, viewName?: string) => any;
  rightNavItemClick?: (event?: any, viewName?: string) => any;
};
type Props = OwnProps;

function NavigationBar({
  brand,
  navModel: { rightLinks },
  leftNavItemClick,
  rightNavItemClick,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const auth = useContext<AuthProviderState | null>(AuthContext);
  const history = useHistory();

  // #region navigation bar toggle
  const toggle = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event && event.preventDefault();
    setIsOpen(!isOpen);
  };
  // #endregion

  // #region handlesNavItemClick event
  const handlesNavItemClick = (link: string = '/') => (
    event: React.MouseEvent<HTMLButtonElement | any>,
  ) => {
    event?.preventDefault();
    history.push(link);
  };
  // #endregion

  // #region disconnect
  const handlesDisconnect = (
    event: React.MouseEvent<HTMLButtonElement | any>,
  ) => {
    event?.preventDefault();
    auth?.disconnectUser();
    history.push('/');
  };
  // #endregion

  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand href="/">{brand}</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          {(rightLinks as Array<Link>).map(({ label, link }, index) => (
            <NavItem key={`${index}`}>
              <NavLink href="#" onClick={handlesNavItemClick(link)}>
                {label}
              </NavLink>
            </NavItem>
          ))}
          {auth?.isAuthenticated && (
            <NavItem>
              <NavLink href="#" onClick={handlesDisconnect}>
                Disconnect
              </NavLink>
            </NavItem>
          )}
        </Nav>
      </Collapse>
    </Navbar>
  );
}

NavigationBar.displayName = 'NavigationBar';

export default NavigationBar;
