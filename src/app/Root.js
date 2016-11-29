import React, {
  PropTypes,
  Component
}               from 'react';
import {
  Router,
  hashHistory // ,
  // browserHistory
}               from 'react-router';

class Root extends Component {
  render() {
    const { routes } = this.props;
    return (
      <Router history={hashHistory}>
        {routes()}
      </Router>
    );
  }
}

Root.propTypes = {
  routes: PropTypes.any
};

export default Root;
