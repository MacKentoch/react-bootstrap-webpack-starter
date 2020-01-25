import React from 'react';
import { mount, shallow } from 'enzyme';
import { Router, Switch } from 'react-router';
import { Route } from 'react-router';
import createHistory from 'history/createHashHistory';
import PrivateRoute from '../PrivateRoute';
import { AuthProvider } from '../../../contexts/auth';

// #region constants
const history = createHistory();

const Home = (p: any) => {
  p.history.push('/protected');
  return <p>home</p>;
};
// #enregion

describe('PrivateRoute component', () => {
  it('renders as expected', () => {
    const props = {};
    const Child = () => <p>private</p>;

    const component = shallow(
      <AuthProvider>
        <Router history={history}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <PrivateRoute {...props} path="/protected">
              <Child />
            </PrivateRoute>
            <Route exact path="/login" component={() => <p>login</p>} />
          </Switch>
        </Router>
        ,
      </AuthProvider>,
    );
    expect(component).toMatchSnapshot();
  });

  it('redirects to login when not authenticated', () => {
    const props = {};
    const PrivatePage = () => <p id="private">private</p>;
    const LoginPage = () => <p id="login">login</p>;

    const wrapper = mount(
      <AuthProvider>
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={Home} />
            <PrivateRoute {...props} path="/protected">
              <PrivatePage />
            </PrivateRoute>
            <Route exact path="/login">
              <LoginPage />
            </Route>
          </Switch>
        </Router>
        ,
      </AuthProvider>,
    );

    expect(wrapper.find('#login')).toHaveLength(1);
  });
});
