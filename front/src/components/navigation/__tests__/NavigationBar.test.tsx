import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router';
import NavigationBar from '../NavigationBar';

describe('NavigationBar component', () => {
  it('renders as expected', () => {
    const props = {
      brand: 'test',
      handleLeftNavItemClick: () => {},
      handleRightNavItemClick: () => {},
      navModel: {
        leftLinks: [
          {
            link: '/',
            label: 'home',
            viewName: 'home',
            onClick: () => {},
          },
        ],
        rightLinks: [
          {
            link: '/',
            label: 'home',
            viewName: 'home',
            onClick: () => {},
          },
        ],
      },
    };

    const component = shallow(
      <div>
        <MemoryRouter>
          <NavigationBar {...props} />
        </MemoryRouter>
      </div>,
    );
    expect(component).toMatchSnapshot();
  });
});
