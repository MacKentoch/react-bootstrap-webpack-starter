// @flow

// #region imports
import React from 'react';
import renderer from 'react-test-renderer'; // needed both for snpashot testing but also to prevent errors from enzyme
import { MemoryRouter } from 'react-router';
import LeftNav from '../LeftNav';
// #endregion

describe('LeftNav component', () => {
  it('renders as expected', () => {
    const props = {
      link: '/',
      label: 'home',
      viewName: 'home',
      onClick: () => {},
    };

    const component = renderer
      .create(
        <div>
          <MemoryRouter>
            <LeftNav {...props} />
          </MemoryRouter>
        </div>,
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
