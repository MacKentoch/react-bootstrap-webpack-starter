// @flow

// #region imports
import React, { Component } from 'react';
import { withRouter } from 'react-router';
import {
  type Match,
  type Location,
  type RouterHistory,
} from 'react-router-dom';
import { NavigationBar, BackToTop } from '../../components';
import navigationModel from '../../config/navigation';
import { type Navigation } from '../../config/navigation';
import MainRoutes from '../../routes/MainRoutes';
// #endregion

// #region flow types
type Props = {
  // react-router 4:
  match: Match,
  location: Location,
  history: RouterHistory,

  ...any,
};

type State = {
  navModel: Navigation,

  ...any,
};
// #endregion

class App extends Component<Props, State> {
  state = { navModel: navigationModel };

  // #region lifecycle
  render() {
    const { navModel } = this.state;

    return (
      <div id="appContainer">
        <NavigationBar
          brand={navModel.brand}
          navModel={navModel}
          handleLeftNavItemClick={this.handleLeftNavItemClick}
          handleRightNavItemClick={this.handleRightNavItemClick}
        />
        <div className="container-fluid">
          <MainRoutes />
        </div>
        <BackToTop minScrollY={40} scrollTo={'appContainer'} />
      </div>
    );
  }
  // #endregion

  /* eslint-disable no-unused-vars*/
  handleLeftNavItemClick = (event, viewName) => {
    // something to do here?
  };

  handleRightNavItemClick = (event, viewName) => {
    // something to do here?
  };
  /* eslint-enable no-unused-vars*/
}

export default withRouter(App);
