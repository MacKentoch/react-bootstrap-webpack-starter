
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import BackToTopButton, { BackButtonPosition } from '../BackToTopButton';

let rootElement: any = null;

describe('BackToTopButton component', () => {
  beforeEach(() => {
    rootElement = document.createElement('div');
    document.body.appendChild(rootElement);
  });

  afterEach(() => {
    rootElement && document.body.removeChild(rootElement);
    rootElement = null;
  });

  it('renders as expected', () => {
    const position: BackButtonPosition = 'bottom-left';
    const props = {
      position,
      onClick: () => {},
      motionStyle: {},
    };

    const { container } = render(<BackToTopButton {...props}>
      <p>a child</p>
    </BackToTopButton>, rootElement);
    expect(container.firstChild).toMatchSnapshot();
  });
});


