import React from 'react';
import { Route, Switch } from 'react-router';
import PrivateRoute from '../components/privateRoute';
import WithSuspense from '../components/withSuspense';
import MainLayout from '../components/mainLayout';
import {
  Home as AsyncHome,
  About as AsyncAbout,
  PageNotFound as AsyncPageNotFound,
  Protected as AsyncProtected,
} from './routes';

const MainRoutes = () => {
  return (
    <MainLayout>
      <Switch>
        {/* public views: */}
        <Route exact path="/">
          <AsyncHome />
        </Route>

        <Route path="/about">
          <AsyncAbout />
        </Route>

        {/* private views: need user to be authenticated */}
        <PrivateRoute path="/protected">
          <AsyncProtected />
        </PrivateRoute>

        <Route path="*">
          <AsyncPageNotFound />
        </Route>
      </Switch>
    </MainLayout>
  );
};

export default MainRoutes;
