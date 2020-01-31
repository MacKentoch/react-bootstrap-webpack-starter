import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import { MemoryRouter } from 'react-router';
import { AuthProvider } from '../../../contexts/auth';
import LogoutRoute from '../index';

let rootElement: any = null;

describe('LogoutRoute component', () => {
  beforeEach(() => {
    rootElement = document.createElement('div');
    document.body.appendChild(rootElement);
  });

  afterEach(() => {
    rootElement && document.body.removeChild(rootElement);
    rootElement = null;
  });

  it('renders as expected', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/']}>
        <AuthProvider>
          <LogoutRoute />
        </AuthProvider>
      </MemoryRouter>,
      rootElement,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
