import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import LoadingContent from '../LoadingContent';

let rootElement: any = null;

describe('LoadingContent component', () => {
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
