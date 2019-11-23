import React, { Component } from 'react';
// @ts-ignore
import wrapDisplayName from 'recompose/wrapDisplayName';
import { AuthContextConsumer } from '../context/index';
import { AuthProviderState } from '../providerComponent';

// #region types
export type AuthContextProps = {} & AuthProviderState;
// #endregion

export default function withAuth(/* additionnal args if needed */) {
  return (BaseComponent: any) => {
    class WithAuth extends Component<any, any> {
      render() {
        const { ...passProps } = this.props;

        return (
          <AuthContextConsumer>
            {(fromAuthProps: Partial<AuthContextProps>) => (
              <BaseComponent {...fromAuthProps} {...passProps} />
            )}
          </AuthContextConsumer>
        );
      }
    }

    // #region add static displayName for dev
    /* eslint-disable no-process-env */
    if (process.env.NODE_ENV !== 'production') {
      // @ts-ignore
      WithAuth.displayName = wrapDisplayName(BaseComponent, 'WithAuth');
    }
    /* eslint-enable no-process-env */
    // #endregion

    return WithAuth;
  };
}
