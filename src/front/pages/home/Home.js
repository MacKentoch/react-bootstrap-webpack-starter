// @flow

// #region imports
import React, { PureComponent } from 'react';
import {
  type Match,
  type Location,
  type RouterHistory,
} from 'react-router-dom';
import styled from 'styled-components';
import { Jumbotron } from '../../components';
import { Link } from 'react-router-dom';
// #endregion

// #region flow types
type Props = {
  // react-router 4:
  match: Match,
  location: Location,
  history: RouterHistory,

  ...any,
};
type State = any;
// #endregion

// #region styled-components
const HomeInfo = styled.div``;

const MainTitle = styled.h1`
  color: #222 !important;
  font-weight: 800;
`;

const LightNote = styled.i`
  font-size: 0.7em;
`;
// #endregion

class Home extends PureComponent<Props, State> {
  // #region lifecycle
  render() {
    return (
      <div>
        <Jumbotron>
          <HomeInfo>
            <MainTitle>ReactJS 16 + Bootstrap</MainTitle>
            <h2>
              with Hot Reload (<i>react-hot-loader 3.1+</i>)!!!
            </h2>
            <h2>and React Router v4</h2>
            <h2>and webpack 3.x</h2>
            <h2>
              and CSSModule (<LightNote>
                so keep using SCSS as you did before but import your class in
                your components like it were JS files
              </LightNote>)
            </h2>
            <h1>Starter</h1>
            <p>
              <Link className="btn btn-success btn-lg" to={'/about'}>
                <i className="fa fa-info" />
                &nbsp; go to about
              </Link>
            </p>
          </HomeInfo>
        </Jumbotron>
      </div>
    );
  }
  // #endregion
}

export default Home;
