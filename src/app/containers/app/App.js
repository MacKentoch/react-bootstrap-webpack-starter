// @flow weak

import React, {
  Component,
  PropTypes
}                         from 'react';
import {
  NavigationBar,
  BackToTop
}                         from '../../components';
import navigationModel    from '../../models/navigation.json';

class App extends Component {
  static propTypes = {
    children: PropTypes.node,
    history:  PropTypes.object,
    location: PropTypes.object
  };

  state = { navModel: navigationModel };

  render() {
    const { navModel } = this.state;
    const { children } = this.props;

    return (
      <div id="appContainer">
        <NavigationBar
          brand={navModel.brand}
          navModel={navModel}
          handleLeftNavItemClick={this.handleLeftNavItemClick}
          handleRightNavItemClick={this.handleRightNavItemClick}
        />
        <div className="container-fluid">
          {children}
        </div>
        <BackToTop
          minScrollY={40}
          scrollTo={'appContainer'}
        />
      </div>
    );
  }

  /* eslint-disable no-unused-vars*/
  handleLeftNavItemClick = (event, viewName) => {
    // something to do here?
  }

  handleRightNavItemClick = (event, viewName) => {
    // something to do here?
  }
  /* eslint-enable no-unused-vars*/
}

export default App;
