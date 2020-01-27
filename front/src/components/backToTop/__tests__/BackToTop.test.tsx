import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import BackToTop from '../BackToTop';

let rootElement: any = null;
const defaultProps = {
  minScrollY: 10,
  onScrollDone: jest.fn(),
}

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
    const props = {...defaultProps}
    const { container } = render(<BackToTop {...props} />, rootElement);
    expect(container.firstChild).toMatchSnapshot();
  });
});
