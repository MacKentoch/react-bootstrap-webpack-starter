import React, { Component } from 'react';
// @ts-ignore
import wrapDisplayName from 'recompose/wrapDisplayName';
import AnimatedDiv from './styled/AnimatedDiv';

// #region types
type Props = any;

type State = any;
// #endregion

function withEnterAnimation() {
  return (BaseComponent: any) => {
    class WithEnterAnimation extends Component<Props, State> {
      render() {
        const { ...passProps } = this.props;

        return (
          // @ts-ignore
          <AnimatedDiv viewEnter>
            <BaseComponent {...passProps} />
          </AnimatedDiv>
        );
      }
    }

    /* eslint-disable no-process-env */
    // @ts-ignore
    if (process.env.NODE_ENV !== 'production') {
      // HOC would obfuscate component name, this trick is helpful for dev (we don't care in production)
      (WithEnterAnimation as any).displayName = wrapDisplayName(
        BaseComponent,
        'withEnterAnimation',
      );
    }
    /* eslint-enable no-process-env */

    return WithEnterAnimation;
  };
}

export default withEnterAnimation;
