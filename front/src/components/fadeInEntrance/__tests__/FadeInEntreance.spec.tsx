import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import FadeInEntrance from '../FadeInEntrance';

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
    const props = {};

    const { container } = render(
      <FadeInEntrance {...props}>
        <p>a child</p>
      </FadeInEntrance>,
      rootElement,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
