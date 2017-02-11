import React        from 'react';
import {
  Route,
  IndexRoute
}                   from 'react-router';
import App          from '../containers/app/App';
import {
  Home,
  About
}                   from '../views';

const Routes = () => {
  return (
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/about" component={About} />
    </Route>
  );
};

export default Routes;
