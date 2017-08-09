// @flow weak

import React, {
  Component
}                               from 'react';
// import PropTypes    from 'prop-types';
import {
  // BrowserRouter as Router,
  HashRouter as Router,
  Switch,
  Route
}                               from 'react-router-dom';
import { createBrowserHistory } from 'history';
import App                      from './containers/app/App';
import ScrollToTop              from './components/scrollToTop/ScrollToTop';
import Login                    from './views/login/Login';
import PageNotFound             from './views/pageNotFound/PageNotFound'; // not connected to redux (no index.js)
import LogoutRoute              from './components/logoutRoute/LogoutRoute';

const browserHistory = createBrowserHistory();

class Root extends Component {
  render() {
    return (
      <Router history={browserHistory}>
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
