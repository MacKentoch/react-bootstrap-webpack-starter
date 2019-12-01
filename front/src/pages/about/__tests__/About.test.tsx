import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router';
import About from '../About';

describe('About page', () => {
  it('renders as expected', () => {
    const component = shallow(
      <div>
        <MemoryRouter>
          <About />
        </MemoryRouter>
      </div>,
    );
    expect(component).toMatchSnapshot();
  });
});
