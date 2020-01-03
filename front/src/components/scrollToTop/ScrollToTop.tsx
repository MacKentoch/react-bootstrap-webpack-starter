import React, { Fragment, useEffect, useRef } from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import { Location } from 'history';

// #region types
type OwnProps = {
  children: any;
};
type Props = OwnProps & RouteComponentProps;
// #endregion

function useScrollToTopOnLocationChange(location: any) {
  const prevLocation = useRef<Location | null>(null);

  useEffect(() => {
    prevLocation.current = location;
  }, []);

  useEffect(() => {
    if (prevLocation.current !== location) {
      window && window.scrollTo(0, 0);
      prevLocation.current = location;
    }
  }, [location]);
}

function ScrollToTop({ children, location }: Props) {
  useScrollToTopOnLocationChange(location);

  return <Fragment>{children}</Fragment>;
}

ScrollToTop.displayName = 'ScrollToTop';

export default withRouter(ScrollToTop);
