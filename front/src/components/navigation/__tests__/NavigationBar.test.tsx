import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router';
import { getMockRouterProps } from '../../../../test/mockedRouter';
import NavigationBar from '../NavigationBar';
import { AuthProvider } from '../../../contexts/auth';

describe('NavigationBar component', () => {
  it('renders as expected', () => {
    const props = getMockRouterProps<any>({
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
        <AuthProvider>
          <MemoryRouter>
            <NavigationBar {...props} />
          </MemoryRouter>
        </AuthProvider>
      </div>,
    );
    expect(component).toMatchSnapshot();
  });
});
