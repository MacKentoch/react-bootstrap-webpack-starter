import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import FadeInEntrance from '../../components/fadeInEntrance';

type OwnProps = any;
type Props = OwnProps & RouteComponentProps;

function About() {
  return (
    <FadeInEntrance>
      <h1>About</h1>
    </FadeInEntrance>
  );
}

About.displayName = 'About';

export default About;
