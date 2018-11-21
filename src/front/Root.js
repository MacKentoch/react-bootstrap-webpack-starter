// @flow

// #region imports
import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import compose from 'recompose/compose';
import createHistory from 'history/createBrowserHistory';
import withMainLayout from './hoc/withMainLayout';
import MainRoutes from './routes/MainRoutes';
import ScrollToTop from './components/scrollToTop/ScrollToTop';
import LogoutRoute from './components/logoutRoute';
import AuthProvider from './contexts/auth/providerComponent';
import { devToolsStore } from './contexts/withDevTools';
import Login from './pages/login';
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
  componentDidMount() {
    // init devTools (so that will be visible in Chrome redux devtools tab):
    devToolsStore && devToolsStore.init();
  }

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
            </Switch>
          </ScrollToTop>
        </AuthProvider>
      </Router>
    );
  }
}

export default Root;
