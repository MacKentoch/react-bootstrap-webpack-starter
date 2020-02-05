import React from 'react';
import { MemoryRouter } from 'react-router';
import { render } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import About from '../About';

let rootElement: any = null;

describe('About page', () => {
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
        <About />
      </MemoryRouter>,
      rootElement,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
