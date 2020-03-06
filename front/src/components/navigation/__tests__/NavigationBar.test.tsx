import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import NavigationBar from '../NavigationBar';
import { AuthProvider } from '../../../contexts/auth';


describe('MainLayout component', () => {
  let rootElement: any = null;

  beforeEach(() => {
    rootElement = document.createElement('div');
    document.body.appendChild(rootElement);
  });

  afterEach(() => {
    rootElement && document.body.removeChild(rootElement);
    rootElement = null;
  });

  it('renders as expected', () => {
    const props = {
      brand: 'test',
      leftNavItemClick: jest.fn(),
      rightNavItemClick: jest.fn(),
      navModel: {
        brand: 'test',
        leftLinks: [
          {
            link: '/',
            label: 'home',
            viewName: 'home',
            onClick: jest.fn(),
          },
        ],
        rightLinks: [
          {
            link: '/',
            label: 'home',
            viewName: 'home',
            onClick: jest.fn(),
          },
        ],
      },
    };

    const { container } = render(
      <AuthProvider>
        <MemoryRouter>
          <NavigationBar {...props} />
        </MemoryRouter>
      </AuthProvider>,
      rootElement,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
