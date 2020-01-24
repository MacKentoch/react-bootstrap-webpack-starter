import React from 'react';
// import {  } from 'react-router-dom';
import Jumbotron from 'reactstrap/lib/Jumbotron';
import { Link } from 'react-router-dom';
import HomeInfo from './styled/HomeInfo';
import MainTitle from './styled/MainTitle';
import LightNote from './styled/LightNote';
import FadeInEntrance from '../../components/fadeInEntrance';

type OwnProps = any;
type Props = OwnProps;

function Home() {
  return (
    <FadeInEntrance>
      <Jumbotron>
        <HomeInfo>
          <MainTitle>ReactJS 16.4+ Bootstrap 4</MainTitle>
          <h2>
            with Hot Reload (<i>react-hot-loader 4+</i>
            )!!!
          </h2>
          <h2>and React 16+ Context API</h2>
          <h2>and React Router v4</h2>
          <h2>and webpack 4.x</h2>
          <h2>and Typescript</h2>
          <h2>
            and styled-components (
            <LightNote>
              so keep using SCSS like styles and benefit performant css-in-js
            </LightNote>
            )
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
    </FadeInEntrance>
  );
}

Home.displayName = 'Home';

export default Home;
