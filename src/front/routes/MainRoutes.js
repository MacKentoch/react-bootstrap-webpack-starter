// @flow

// #region imports
import React from 'react';
import { Route, Switch } from 'react-router';
import { Home, About, Protected, PrivateRoute, PageNotFound } from './routes';
// #endregion

const MainRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      {/* private views: need user to be authenticated */}
      <PrivateRoute path="/protected" component={Protected} />
      {/* page not found */}
      <Route component={PageNotFound} />
    </Switch>
  );
};

export default MainRoutes;
