import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

type Props = {} & RouteComponentProps<any, any>;

function About({}: Props) {
  return (
    <div>
      <h1>About</h1>
    </div>
  );
}

About.displayName = 'About';

export default About;
