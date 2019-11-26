import React, { Component } from 'react';
// @ts-ignore
import wrapDisplayName from 'recompose/wrapDisplayName';
import { compose } from 'redux';
import { withRouter } from 'react-router';
import { RouteChildrenProps } from 'react-router';
import Container from 'reactstrap/lib/Container';
import NavigationBar from '../../components/navigation';
import BackToTop from '../../components/backToTop/BackToTop';
import navigationModel from '../../config/navigation';
import { Navigation } from '../../config/navigation';
import registerServiceWorker from '../../services/sw/registerServiceWorker';

// #region types
type Props = {} & RouteChildrenProps;

type State = {
  navModel: Navigation;
};
// #endregion

// #region withMainLayout HOC
function withMainLayout(/* no args option yet, but could pass them here */) {
  return (BaseComponent: any) => {
    // #region returned Component
    class WithMainLayout extends Component<Props, State> {
      state = { navModel: navigationModel };

      // #region lifecycle
      componentDidMount() {
        // register service worker (no worry about multiple attempts to register, browser will ignore when already registered)
        registerServiceWorker();
      }

      render() {
        /* eslint-disable no-unused-vars */
        const { history, location, match, ...passProps } = this.props;
        /* eslint-enable no-unused-vars */
        const { navModel } = this.state;

        return (
          <div id="appContainer">
            <NavigationBar
              brand={navModel.brand}
              navModel={navModel}
              handleLeftNavItemClick={this.handleLeftNavItemClick}
              handleRightNavItemClick={this.handleRightNavItemClick}
            />
            <Container fluid>
              <BaseComponent {...passProps} />
            </Container>
            <BackToTop minScrollY={40} scrollTo={'appContainer'} />
          </div>
        );
      }
      // #endregion

      /* eslint-disable no-unused-vars*/
      handleLeftNavItemClick = (event: any, viewName: string) => {
        // something to do here?
      };

      handleRightNavItemClick = (event: any, viewName: string) => {
        // something to do here?
      };
      /* eslint-enable no-unused-vars*/
    }

    // #region add static displayName for dev
    /* eslint-disable no-process-env */
    // @ts-ignore
    if (process.env.NODE_ENV !== 'production') {
      // HOC would obfuscate component name, this trick is helpful for dev (we don't care in production)
      // @ts-ignore
      WithMainLayout.displayName = wrapDisplayName(
        BaseComponent,
        'withMainLayout',
      );
    }
    /* eslint-enable no-process-env */
    // #endregion

    // @ts-ignore
    return compose(withRouter)(WithMainLayout);
  };
}
// #endregion

export default withMainLayout;
