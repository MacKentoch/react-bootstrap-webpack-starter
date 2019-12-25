import React, { Component, Fragment } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import { compose } from 'redux';
import createHistory from 'history/createBrowserHistory';
import withMainLayout from './hoc/withMainLayout';
import MainRoutes from './routes/MainRoutes';
import ScrollToTop from './components/scrollToTop/ScrollToTop';
import LogoutRoute from './components/logoutRoute';
import AuthProvider from './contexts/auth/providerComponent';
import { devToolsStore } from './contexts/withDevTools';
import Login from './pages/login';
import GlobalStyle from './style/GlobalStyles';

// #region types
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
    devToolsStore && devToolsStore?.init();
  }

  componentDidCatch(error: any, info: any) {
    console.log('App error: ', error);
    console.log('App error info: ', info);
    //
  }

  render() {
    return (
      <Router history={history}>
        <Fragment>
          <GlobalStyle />
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
        </Fragment>
      </Router>
    );
  }
}

export default hot(Root);
