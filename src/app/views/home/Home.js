// @flow weak

import React, {
  PureComponent
}                     from 'react';
import PropTypes      from 'prop-types';
import {Jumbotron}    from '../../components';
import cx             from 'classnames';
import { Link }       from 'react-router-dom';
import AnimatedView   from '../../components/animatedView/AnimatedView';
import styles         from './home.scss';

class Home extends PureComponent {
  static propTypes= {
    // react-router 4:
    match:    PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history:  PropTypes.object.isRequired
  };

  render() {
    console.log('styles', styles);
    return(
      <AnimatedView>
        <Jumbotron>
          <div
            className={styles.homeInfo}
          >
            <h1
              className={styles.mainTitle}
            >
              ReactJS + Bootstrap
            </h1>
            <h2>
              with Hot Reload (<i>react-hot-loader 3.1+</i>)!!!
            </h2>
            <h2>
              and React Router v4
            </h2>
            <h2>
              and webpack 3.x
            </h2>
            <h2>
              and CSSModule (<i className={styles.lightNote}>so keep using SCSS as you did before but import your class in your components like it were JS files</i>)
            </h2>
            <h1>
              Starter
            </h1>
            <p>
              <Link
                className="btn btn-success btn-lg"
                to={'/about'}>
                <i className="fa fa-info" />
                &nbsp;
                go to about
              </Link>
            </p>
          </div>
        </Jumbotron>
      </AnimatedView>
    );
  }
}

export default Home;
