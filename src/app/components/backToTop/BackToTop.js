/* global $:true */

import React, {
  Component,
  PropTypes
}                       from 'react';
import {smoothScroll}   from '../../services';
import BackToTopButton  from './backToTopButton/BackToTopButton';

class BackToTop extends Component {
  constructor(props) {
    super(props);
    this.state = {windowScrollY: 0};
    this.handleWindowScroll = this.handleWindowScroll.bind(this);
    this.scrollDone = this.scrollDone.bind(this);
    this.handlesOnBackButtonClick = this.handlesOnBackButtonClick.bind(this);
  }

  componentWillMount() {
    window.addEventListener('scroll', this.handleWindowScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleWindowScroll);
  }

  render() {
    return (
      <div>
        <BackToTopButton
          position={'bottom-right'}
          onClick={this.handlesOnBackButtonClick}
        />
      </div>
    );
  }

  handleWindowScroll() {
    if ($) {
      const { windowScrollY } = this.state;
      const currentWindowScrollY = $(window).scrollTop();
      if (windowScrollY !== currentWindowScrollY) {
        // console.log('scrollTop: ', currentWindowScrollY);
        this.setState({windowScrollY: currentWindowScrollY});
      }
    } else {
      /* eslint-disable no-throw-literal*/
      throw 'BackToTop component requires jQuery';
      /* eslint-enable no-throw-literal*/
    }
  }

  scrollDone() {
    const { onScrollDone } = this.props;
    if (onScrollDone) {
      onScrollDone();
    }
  }

  handlesOnBackButtonClick(event) {
    event.preventDefault();
    const { scrollTo, minScrollY } = this.props;
    const { windowScrollY } = this.state;

    if (windowScrollY && windowScrollY > minScrollY) {
      smoothScroll.scrollTo(scrollTo, this.scrollDone);
    }
  }
}

BackToTop.propTypes = {
  minScrollY: PropTypes.number,
  scrollTo: PropTypes.string.isRequired,
  onScrollDone: PropTypes.func
};

BackToTop.defaultProps = {
  minScrollY: 120
};

export default BackToTop;
