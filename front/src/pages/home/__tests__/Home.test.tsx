import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router';
import Home from '../Home';

describe('Home page', () => {
  it('renders as expected', () => {
    const component = shallow(
      <div>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </div>,
    );
    expect(component).toMatchSnapshot();
  });
});
