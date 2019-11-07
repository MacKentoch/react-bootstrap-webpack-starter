// @flow

// #region imports
import React, { PureComponent } from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import {
  type Match,
  type Location,
  type RouterHistory,
} from 'react-router-dom';
import { type AuthContextProps } from '../../contexts/auth/consumerHOC';
// #endregion

// #region flow types
type Props = {
  // react-router 4:
  match: Match,
  location: Location,
  history: RouterHistory,

  ...any,
} & AuthContextProps;

type State = any;
// #endregion

class LogoutRoute extends PureComponent<Props, State> {
  // #region lifecycle
  componentDidMount() {
    const { disconnectUser } = this.props;
    disconnectUser();
  }

  render() {
    return (
      <Route {...this.props}>
        <Redirect to={{ pathname: '/login' }} />
      </Route>
    );
  }
  // #endregion
}

export default withRouter(LogoutRoute);
