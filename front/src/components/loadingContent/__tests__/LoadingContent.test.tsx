import React from 'react';
import { render } from '@testing-library/react';
import LoadingContent from '../LoadingContent';

describe('LoadingContent component', () => {
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
    const { container } = render(<LoadingContent />, rootElement);
    expect(container.firstChild).toMatchSnapshot();
  });
});
