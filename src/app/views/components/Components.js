import React, {
  Component
}                     from 'react';
import cx             from 'classnames';
import shallowCompare from 'react-addons-shallow-compare';

class Components extends Component {
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
          Components
        </h1>
        <div
          style={{
            backgroundColor: '#F1F1F1F1',
            height: 1200
          }}>
          <h2>
            <strong>
              TODO:
            </strong>
            &nbsp;
            List of Components to add
          </h2>
        </div>
      </div>
    );
  }
}

export default Components;
