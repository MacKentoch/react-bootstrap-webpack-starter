import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router';
import Protected from '../Protected';

describe('Protected page', () => {
  it('renders as expected', () => {
    const component = shallow(
      <div>
        <MemoryRouter>
          <Protected />
        </MemoryRouter>
      </div>,
    );
    expect(component).toMatchSnapshot();
  });
});
