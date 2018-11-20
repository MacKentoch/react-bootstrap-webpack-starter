// @flow

// #region imports
import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import compose from 'recompose/compose';
import loadable from '@loadable/component';
// #region import createHistory from hashHistory or BrowserHistory:
// import createHistory from 'history/createHashHistory';
import createHistory from 'history/createBrowserHistory';
// #endregion
import withMainLayout from './hoc/withMainLayout';
import MainRoutes from './routes/MainRoutes';
import ScrollToTop from './components/scrollToTop/ScrollToTop';
import LogoutRoute from './components/logoutRoute';
import AuthProvider from './contexts/auth/providerComponent';
import { devToolsStore } from './contexts/withDevTools';
// #endregion

// #region flow types
type Props = any;
type State = any;
// #endregion

// #region constants
const MainApp = compose(withMainLayout())(MainRoutes);
const history = createHistory();
// we lazy load pages:
const LoadableLogin = loadable(() => import('./pages/login'));
const LoadablePageNotFound = loadable(() => import('./pages/pageNotFound'));
// #endregion

class Root extends Component<Props, State> {
  componentDidMount() {
    // init devTools (so that will be visible in Chrome redux devtools tab):
    devToolsStore && devToolsStore.init();
  }

  componentWillUnmount() {
    // disconnect devTools here at top level application:
    devToolsStore && devToolsStore.disconnect();
  }

  render() {
    return (
      <Router history={history}>
        <AuthProvider>
          <ScrollToTop>
            <Switch>
              <Route exact path="/login" component={LoadableLogin} />
              {/* Application with main layout (could have multiple applications with different layouts) */}
              <MainApp />
              {/* logout: just redirects to login (App will take care of removing the token) */}
              <LogoutRoute path="/logout" />
              <Route component={LoadablePageNotFound} />
            </Switch>
          </ScrollToTop>
        </AuthProvider>
      </Router>
    );
  }
}

export default Root;
