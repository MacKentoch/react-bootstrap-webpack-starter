import React from 'react';
import { MemoryRouter } from 'react-router';
import { render } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import Login from '../Login';

let rootElement: any = null;

describe('Login page', () => {
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
      disconnectUser: jest.fn(),
      setToken: jest.fn(),
      setUserInfo: jest.fn(),
      checkIsAuthenticated: jest.fn(),
    };

    const { container } = render(
      <MemoryRouter>
        <Login {...props} />
      </MemoryRouter>,
      rootElement,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
