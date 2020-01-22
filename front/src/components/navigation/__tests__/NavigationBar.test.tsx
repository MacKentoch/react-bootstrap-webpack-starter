import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router';
import { getMockRouterProps } from '../../../../test/mockedRouter';
import NavigationBar from '../NavigationBar';

describe('NavigationBar component', () => {
  it('renders as expected', () => {
    const props = getMockRouterProps<any>({
      isAuthenticated: false,
      checkIsAuthenticated: () => true,
      checkTokenIsExpired: () => false,
      setToken: (token: string) => {},
      setUserInfo: (user: User) => {},
      disconnectUser: () => true,

      brand: 'test',
      leftNavItemClick: () => {},
      rightNavItemClick: () => {},
      navModel: {
        leftLinks: [
          {
            link: '/',
            label: 'home',
            viewName: 'home',
            onClick: () => {},
          },
        ],
        rightLinks: [
          {
            link: '/',
            label: 'home',
            viewName: 'home',
            onClick: () => {},
          },
        ],
      },
    });

    const component = shallow(
      <div>
        <MemoryRouter>
          <NavigationBar {...props} />
        </MemoryRouter>
      </div>,
    );
    expect(component).toMatchSnapshot();
  });
});
