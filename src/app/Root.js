// @flow weak

import React, {
  Component
}                   from 'react';
import PropTypes    from 'prop-types';
import {
  Router,
  hashHistory // ,
  // browserHistory
}                   from 'react-router';

class Root extends Component {
  static propTypes = {
    routes: PropTypes.any
  };

  render() {
    const { routes } = this.props;
    return (
      <Router history={hashHistory}>
        {routes()}
      </Router>
    );
  }
}

export default Root;
