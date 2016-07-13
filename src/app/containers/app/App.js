/* global $:true */

import React, {
  Component,
  PropTypes
}                         from 'react';
import { NavigationBar }  from '../../components';
import navigationModel    from '../../models/navigation.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navModel : navigationModel,
      windowScrollY: 0
    };
    // bind callbacks here (rather than in render()) for better performance
    this.handleLeftNavItemClick = this.handleLeftNavItemClick.bind(this);
    this.handleRightNavItemClick = this.handleRightNavItemClick.bind(this);
    this.handleWindowScroll = this.handleWindowScroll.bind(this);
  }

  componentWillMount() {
    window.addEventListener('scroll', this.handleWindowScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleWindowScroll);
  }

  render() {
    const { navModel } = this.state;
    const { children } = this.props;
    return (
      <div>
        <NavigationBar
          brand={navModel.brand}
          navModel={navModel}
          handleLeftNavItemClick={this.handleLeftNavItemClick}
          handleRightNavItemClick={this.handleRightNavItemClick}
        />
        <div className="container-fluid">
          {children}
        </div>
      </div>
    );
  }

  handleWindowScroll() {
    const { windowScrollY } = this.state;
    const currentWindowScrollY = $(window).scrollTop();
    if (windowScrollY !== currentWindowScrollY) {
      this.setState({windowScrollY: currentWindowScrollY});
    }
  }

  /* eslint-disable no-unused-vars*/
  handleLeftNavItemClick(event, viewName) {
    // something to do here?
  }

  handleRightNavItemClick(event, viewName) {
    // something to do here?
  }
  /* eslint-enable no-unused-vars*/
}

// statics :
App.propTypes = {
  children: PropTypes.node,
  history:  PropTypes.object,
  location: PropTypes.object
};

export default App;
