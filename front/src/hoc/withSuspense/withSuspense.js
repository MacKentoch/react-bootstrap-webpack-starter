// @flow

// #region imports
import React, { Component, Suspense } from 'react';
import wrapDisplayName from 'recompose/wrapDisplayName';
import LoadingContent from '../../components/loadingContent';
// #endregion

// #region flow types
type Props = any;

type State = any;
// #endregion

function withSuspense() {
  return (BaseComponent: any) => {
    class WithSuspense extends Component<Props, State> {
      render() {
        const { ...passProps } = this.props;

        return (
          <Suspense fallback={<LoadingContent />}>
            <BaseComponent {...passProps} />
          </Suspense>
        );
      }
    }

    /* eslint-disable no-process-env */
    if (process.env.NODE_ENV !== 'production') {
      // HOC would obfuscate component name, this trick is helpful for dev (we don't care in production)
      WithSuspense.displayName = wrapDisplayName(BaseComponent, 'withSuspense');
    }
    /* eslint-enable no-process-env */

    return WithSuspense;
  };
}

export default withSuspense;
