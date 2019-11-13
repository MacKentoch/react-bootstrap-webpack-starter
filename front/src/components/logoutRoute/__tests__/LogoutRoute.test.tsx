import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router';
import LogoutRoute from '../index';

describe('LogoutRoute component', () => {
  it('renders as expected', () => {
    const props = {
      disconnectUser: jest.fn(),
    };

    const component = shallow(
      <MemoryRouter initialEntries={['/']}>
        <LogoutRoute {...props} />
      </MemoryRouter>,
    );
    expect(component).toMatchSnapshot();
  });
});
