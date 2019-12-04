import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router';
import Login from '../Login';

describe('Login page', () => {
  it('renders as expected', () => {
    const props = {
      disconnectUser: () => {},
      setToken: () => {},
      setUserInfo: () => {},
      checkIsAuthenticated: () => {},
    };

    const component = shallow(
      <div>
        <MemoryRouter>
          <Login {...props} />
        </MemoryRouter>
      </div>,
    );
    expect(component).toMatchSnapshot();
  });
});
