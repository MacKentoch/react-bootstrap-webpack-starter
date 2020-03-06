import React from 'react';
import { MemoryRouter } from 'react-router';
import { render } from '@testing-library/react';
import PageNotFound from '../PageNotFound';

describe('PageNotFound page', () => {
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
    const { container } = render(
      <MemoryRouter>
        <PageNotFound />
      </MemoryRouter>,
      rootElement,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
