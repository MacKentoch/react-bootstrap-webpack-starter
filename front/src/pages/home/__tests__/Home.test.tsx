import React from 'react';
import { MemoryRouter } from 'react-router';
import { render } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import Home from '../Home';

let rootElement: any = null;

describe('Home page', () => {
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
        <Home />
      </MemoryRouter>,
      rootElement,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
