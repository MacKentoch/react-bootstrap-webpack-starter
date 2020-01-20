import React, { useState, useCallback } from 'react';
import { withRouter } from 'react-router';
import { RouteComponentProps } from 'react-router';
import Container from 'reactstrap/lib/Container';
import NavigationBar from '../../components/navigation';
import BackToTop from '../../components/backToTop/BackToTop';
import navigationModel from '../../config/navigation';
import { Navigation } from '../../config/navigation';

type Props = {
  children: any;
} & RouteComponentProps;

function MainLayout({ children }: Props) {
  const [navModel] = useState<Navigation>(navigationModel);

  // #region callbacks
  /* eslint-disable no-unused-vars*/
  const handleLeftNavItemClick = useCallback(
    (event?: any, viewName?: string) => {
      // something to do here?
    },
    [],
  );

  const handleRightNavItemClick = useCallback(
    (event?: any, viewName?: string) => {
      // something to do here?
    },
    [],
  );
  /* eslint-enable no-unused-vars*/
  // #endregion
  return (
    <div id="appContainer">
      <NavigationBar
        brand={navModel.brand}
        navModel={navModel}
        leftNavItemClick={handleLeftNavItemClick}
        rightNavItemClick={handleRightNavItemClick}
      />
      <Container fluid>{children}</Container>
      <BackToTop minScrollY={40} scrollTo={'appContainer'} />
    </div>
  );
}

MainLayout.displayName = 'MainLayout';

export default withRouter(MainLayout);
