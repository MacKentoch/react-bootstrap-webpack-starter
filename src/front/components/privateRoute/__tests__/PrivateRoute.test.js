// @flow

// #region imports
import React from 'react';
import renderer from 'react-test-renderer'; // needed both for snpashot testing but also to prevent errors from enzyme
import { Router, Switch } from 'react-router';
import { Route } from 'react-router';
import createHistory from 'history/createHashHistory';
import PrivateRoute from '../PrivateRoute';
// #endregion

// #region constants
const history = createHistory();

const Home = p => {
  p.history.push('/protected');
  return <p>home</p>;
};
// #enregion

describe('PrivateRoute component', () => {
  it('renders as expected', () => {
    const props = {
      checkIsAuthenticated: () => false,
    };

    const component = renderer
      .create(
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={Home} />
            <PrivateRoute
              {...props}
              path="/protected"
              component={() => <p>private</p>}
            />
            <Route exact path="/login" component={() => <p>login</p>} />
          </Switch>
        </Router>,
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
