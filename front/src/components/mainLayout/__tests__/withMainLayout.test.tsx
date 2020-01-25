import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router';
import MainLayout from '../MainLayout';

describe('withMainLayout HOC', () => {
  it('renders as expected', () => {
    const component = shallow(
      <MemoryRouter>
        <MainLayout>
          <p>children here</p>
        </MainLayout>
      </MemoryRouter>,
    );

    expect(component).toMatchSnapshot();
  });
});