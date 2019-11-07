// @flow

// #region imports
import React from 'react';
import renderer from 'react-test-renderer'; // needed both for snpashot testing but also to prevent errors from enzyme
import { MemoryRouter } from 'react-router';
import withMainLayout from '../withMainLayout';
// #endregion

describe('withMainLayout HOC', () => {
  it('renders as expected', () => {
    const DummyComponent = () => <p>component</p>;
    const Component = withMainLayout()(DummyComponent);

    const component = renderer
      .create(
        <MemoryRouter>
          <Component />
        </MemoryRouter>,
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
