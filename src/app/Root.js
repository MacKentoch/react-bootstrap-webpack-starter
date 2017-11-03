// @flow weak

// #region imports
import React, {
  Component
}                               from 'react';
import {
  Router,
  Switch,
  Route
}                               from 'react-router-dom';
// #region import createHistory from hashHistory or BrowserHistory:
import createHistory            from 'history/createHashHistory';
// import createHistory            from 'history/createBrowserHistory';
// #endregion
import App                      from './containers/app/App';
import ScrollToTop              from './components/scrollToTop/ScrollToTop';
import Login                    from './views/login/Login';
import PageNotFound             from './views/pageNotFound/PageNotFound'; // not connected to redux (no index.js)
import LogoutRoute              from './components/logoutRoute/LogoutRoute';
// #endregion

// #region flow types
type Props = any;
type State = any;
// #endregion

const history = createHistory();

class Root extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/login" component={Login} />
          <App />
          {/* logout: just redirects to login (App will take care of removing the token) */}
          <LogoutRoute path="/logout" />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    );
  }
}

export default Root;
