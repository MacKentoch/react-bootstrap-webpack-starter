import React, {
  Component
}                     from 'react';
import cx             from 'classnames';
import shallowCompare from 'react-addons-shallow-compare';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animated: true,
      viewEntersAnim: true
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const { animated, viewEntersAnim } = this.state;
    return(
      <div
        className={cx({
          'animatedViews': animated,
          'view-enter': viewEntersAnim
        })}>
        <h1>
          About
        </h1>
      </div>
    );
  }
}

export default About;
