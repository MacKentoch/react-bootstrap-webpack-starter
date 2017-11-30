// @flow weak

import React, {
  PureComponent
}                     from 'react';
import PropTypes      from 'prop-types';
import {Jumbotron}    from '../../components';
import styles         from './pageNotFound.scss';
import AnimatedView   from '../../components/animatedView/AnimatedView';

class PageNotFound extends PureComponent {
  static propTypes= {
    // react-router 4:
    match:    PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history:  PropTypes.object.isRequired
  };

  render() {
    return(
      <AnimatedView>
        <Jumbotron>
          <h1>
            Sorry this page does not exists...
          </h1>
        </Jumbotron>
      </AnimatedView>
    );
  }
}

export default PageNotFound;
