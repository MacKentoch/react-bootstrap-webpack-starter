import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import '@testing-library/react/cleanup-after-each';
import { AuthProvider } from '../../../contexts/auth';
import MainLayout from '../MainLayout';

let rootElement: any = null;

describe('MainLayout component', () => {
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
      <MemoryRouter>
        <MainLayout>
          <p>children here</p>
        </MainLayout>
      </MemoryRouter>,
      rootElement,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
