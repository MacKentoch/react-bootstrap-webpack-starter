// @flow

// #region imports
import React from 'react';
import renderer from 'react-test-renderer'; // needed both for snpashot testing but also to prevent errors from enzyme
import { Router, Switch } from 'react-router';
import { Route } from 'react-router';
import createHistory from 'history/createHashHistory';
import Login from '../../../pages/login';
import PrivateRoute from '../PrivateRoute';
// #endregion

// #region constants
const history = createHistory();
// window.location.pathname = '/';
// #enregion

describe('PrivateRoute component', () => {
  it('renders as expected', () => {
    const props = {
      checkIsAuthenticated: () => false,
      checkTokenIsExpired: () => false,
    };

    const component = renderer
      .create(
        <Router history={history}>
          <Switch>
            <PrivateRoute {...props} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </Router>,
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
