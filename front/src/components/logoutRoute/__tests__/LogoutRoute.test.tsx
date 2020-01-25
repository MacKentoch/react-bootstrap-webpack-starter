import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router';
import { AuthProvider } from '../../../contexts/auth';
import LogoutRoute from '../index';

describe('LogoutRoute component', () => {
  it('renders as expected', () => {
    const props = {};

    const component = shallow(
      <MemoryRouter initialEntries={['/']}>
        <AuthProvider>
          <LogoutRoute {...props} />
        </AuthProvider>
      </MemoryRouter>,
    );
    expect(component).toMatchSnapshot();
  });
});
