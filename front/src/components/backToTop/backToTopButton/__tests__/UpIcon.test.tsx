import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import UpIcon from '../UpIcon';

let rootElement: any = null;
const defaultProps = {
  color: '',
};

describe('UpIcon component', () => {
  beforeEach(() => {
    rootElement = document.createElement('div');
    document.body.appendChild(rootElement);
  });

  afterEach(() => {
    rootElement && document.body.removeChild(rootElement);
    rootElement = null;
  });

  it('renders as expected', () => {
    const props = { ...defaultProps };
    const { container } = render(<UpIcon {...props} />, rootElement);
    expect(container.firstChild).toMatchSnapshot();
  });
});
