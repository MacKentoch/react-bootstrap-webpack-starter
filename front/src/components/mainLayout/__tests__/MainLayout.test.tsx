import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { AuthProvider } from '../../../contexts/auth';
import MainLayout from '../MainLayout';

jest.mock('../../navigation');

describe('MainLayout component', () => {
  let rootElement: any = null;

  beforeEach(() => {
    rootElement = document.createElement('div');
    document.body.appendChild(rootElement);

    jest.restoreAllMocks();
  });

  afterEach(() => {
    rootElement && document.body.removeChild(rootElement);
    rootElement = null;
  });

  it('renders as expected', () => {
    const NavigationBar = require('../../navigation');
    // React component is default exported:
    NavigationBar.default.mockImplementationOnce(() => <span>navbar</span>);

    const { container } = render(
      <MemoryRouter>
        <AuthProvider>
          <MainLayout>
            <p>children here</p>
          </MainLayout>
        </AuthProvider>
      </MemoryRouter>,
      rootElement,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
