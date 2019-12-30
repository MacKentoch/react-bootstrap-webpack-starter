import React, { PureComponent } from 'react';
import { RouteComponentProps } from 'react-router';
import FadeInEntrance from '../../components/fadeInEntrance';
import { OwnProps, MappedDispatchToProps, MappedStateToProps } from './index';

// #region types
type Props = RouteComponentProps &
  OwnProps &
  MappedStateToProps &
  MappedDispatchToProps;
// #endregion

function Protected({}: Props) {
  return (
    <FadeInEntrance>
      <h1>Protected view</h1>
      <h3>If you can read, it means you are authenticated</h3>
    </FadeInEntrance>
  );
}

Protected.displayName = 'Protected';

export default Protected;
