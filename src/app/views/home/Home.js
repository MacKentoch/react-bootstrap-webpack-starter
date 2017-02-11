import React, {
  PureComponent
}                       from 'react';
import {Jumbotron}      from '../../components';
import cx             from 'classnames';
import { Link }       from 'react-router';

class Home extends PureComponent {
  state = {
    animated: true,
    viewEntersAnim: true
  };

  render() {
    const { animated, viewEntersAnim } = this.state;
    return(
      <div
        key="homeView"
        className={cx({
          'animatedViews': animated,
          'view-enter': viewEntersAnim
        })}>
        <Jumbotron>
          <h1>
            Full ES2015 ReactJS + Bootstrap
          </h1>
          <h2>
            with Hot Reload!!!
          </h2>
          <h2>
            with React Router (SPA)
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
        </Jumbotron>
      </div>
    );
  }
}

export default Home;
