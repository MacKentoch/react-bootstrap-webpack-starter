import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import FadeInEntrance from '../../components/fadeInEntrance';

type Props = {} & RouteComponentProps<any, any>;

function About({}: Props) {
  return (
    <FadeInEntrance>
      <h1>About</h1>
    </FadeInEntrance>
  );
}

About.displayName = 'About';

export default About;
