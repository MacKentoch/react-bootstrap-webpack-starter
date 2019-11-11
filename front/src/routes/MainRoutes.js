// @flow

// #region imports
import React from 'react';
import { compose } from 'redux';
import withSuspense from '../hoc/withSuspense';
import { Route, Switch } from 'react-router';
import PrivateRoute from '../components/privateRoute';
// #endregion

// #region constants
const AsyncHome = React.lazy(() => import('../pages/home'));
const Home = compose(withSuspense())(AsyncHome);

const AsyncAbout = React.lazy(() => import('../pages/about'));
const About = compose(withSuspense())(AsyncAbout);

const AsyncProtected = React.lazy(() => import('../pages/protected'));
const Protected = compose(withSuspense())(AsyncProtected);

const AsyncPageNotFound = React.lazy(() => import('../pages/pageNotFound'));
const PageNotFound = compose(withSuspense())(AsyncPageNotFound);
// #endregion

const MainRoutes = () => {
  return (
    <Switch>
      {/* public views: */}
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      {/* private views: need user to be authenticated */}
      <PrivateRoute path="/protected" component={Protected} />
      <Route component={PageNotFound} />
    </Switch>
  );
};

export default MainRoutes;
