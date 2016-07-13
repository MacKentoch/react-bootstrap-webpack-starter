import React        from 'react';
import {
  Router,
  Route,
  IndexRoute,
  hashHistory
  // browserHistory
}                   from 'react-router';
import { App }      from '../containers';
import {
  Home,
  About,
  Components
}                   from '../views';

export const Routes = () => {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/components" component={Components} />
        <Route path="/about" component={About} />
      </Route>
    </Router>
  );
};
