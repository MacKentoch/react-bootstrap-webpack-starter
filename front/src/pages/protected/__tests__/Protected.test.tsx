import React from 'react';
import { MemoryRouter } from 'react-router';
import { render } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import Protected from '../Protected';

let rootElement: any = null;

describe('Protected page', () => {
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
        <Protected />
      </MemoryRouter>,
      rootElement,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
