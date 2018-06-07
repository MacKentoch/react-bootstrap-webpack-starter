// @flow

// #region imports
import React from 'react';
import renderer from 'react-test-renderer'; // needed both for snpashot testing but also to prevent errors from enzyme
import Jumbotron from '../Jumbotron';
// #endregion

describe('Jumbotron component', () => {
  it('renders as expected', () => {
    const component = renderer
      .create(
        <div>
          <Jumbotron>
            <p>a jumbotron child</p>
          </Jumbotron>
        </div>,
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
