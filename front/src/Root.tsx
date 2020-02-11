import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import MainRoutes from './routes/MainRoutes';
import ScrollToTop from './components/scrollToTop/ScrollToTop';
import LogoutRoute from './components/logoutRoute';
import { AuthProvider } from './contexts/auth';
import { devToolsStore } from './contexts/withDevTools';
import Login from './pages/login';
import GlobalStyle from './style/GlobalStyles';
import registerServiceWorker from './services/sw/registerServiceWorker';

type Props = any;
type State = any;

class Root extends Component<Props, State> {
  componentDidMount() {
    // init devTools (so that will be visible in Chrome redux devtools tab):
    devToolsStore && devToolsStore?.init();
    // register service worker (no worry about multiple attempts to register, browser will ignore when already registered)
    registerServiceWorker();
  }

  componentDidCatch(error: any, info: any) {
    console.log('App error: ', error);
    console.log('App error info: ', info);
    //
  }

  render() {
    return (
      <Router>
        <Fragment>
          <GlobalStyle />
          <AuthProvider>
            <ScrollToTop>
              <Switch>
                <Route exact path="/login">
                  <Login />
                </Route>
                {/* Application with main layout (could have multiple applications with different layouts) */}
                <MainRoutes />
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
