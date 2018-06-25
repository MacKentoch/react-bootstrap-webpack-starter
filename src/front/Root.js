// @flow

// #region imports
import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import compose from 'recompose/compose';
// #region import createHistory from hashHistory or BrowserHistory:
// import createHistory from 'history/createHashHistory';
import createHistory from 'history/createBrowserHistory';
// #endregion
import withMainLayout from './hoc/withMainLayout';
import MainRoutes from './routes/MainRoutes';
import ScrollToTop from './components/scrollToTop/ScrollToTop';
import Login from './pages/login';
import { PageNotFound } from './routes/routes';
import LogoutRoute from './components/logoutRoute/LogoutRoute';
import AuthProvider from './contexts/auth/providerComponent';
// #endregion

// #region flow types
type Props = any;
type State = any;
// #endregion

// #region constants
const MainApp = compose(withMainLayout())(MainRoutes);
const history = createHistory();
// #endregion

class Root extends Component<Props, State> {
  render() {
    return (
      <Router history={history}>
        <AuthProvider>
          <ScrollToTop>
            <Switch>
              <Route exact path="/login" component={Login} />
              {/* Application with main layout (could have multiple applications with different layouts) */}
              <MainApp />
              {/* logout: just redirects to login (App will take care of removing the token) */}
              <LogoutRoute path="/logout" />
              <Route component={PageNotFound} />
            </Switch>
          </ScrollToTop>
        </AuthProvider>
      </Router>
    );
  }
}

export default Root;
