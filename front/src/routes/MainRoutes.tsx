import React from 'react';
import { Route, Switch } from 'react-router';
import PrivateRoute from '../components/privateRoute';
import WithSuspense from '../components/withSuspense';

// #region constants
const AsyncHome = React.lazy(() => import('../pages/home'));
const AsyncAbout = React.lazy(() => import('../pages/about'));
const AsyncProtected = React.lazy(() => import('../pages/protected'));
const AsyncPageNotFound = React.lazy(() => import('../pages/pageNotFound'));
// #endregion

const MainRoutes = () => {
  return (
    <WithSuspense>
      <Switch>
        {/* public views: */}
        <Route exact path="/" component={AsyncHome} />
        <Route path="/about" component={AsyncAbout} />
        {/* private views: need user to be authenticated */}
        <PrivateRoute path="/protected" component={AsyncProtected} />
        <Route component={AsyncPageNotFound} />
      </Switch>
    </WithSuspense>
  );
};

export default MainRoutes;
