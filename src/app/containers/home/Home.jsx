import React      from 'react';
import Jumbotron  from '../../components/jumbotron/Jumbotron.jsx';
import classNames from 'classnames';
import { Link }   from 'react-router';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.init();
  }

  init() {
    this.state = {
      animated    : true,
      viewEnters  : false
    };
  }

  componentWillMount() {
    this.state = {
      viewEnters  : true
    };
  }

  processViewAnimationClasses() {
    const homeViewClasses = classNames({
      'animatedViews'    : this.state.animated,
      'view-enter'       : this.state.viewEnters
    });
    return homeViewClasses;
  }

  render() {
    return(
      <div
        key="homeView"
        className={this.processViewAnimationClasses()}>
        <Jumbotron>
          <h1>
            React + Bootstrap
          </h1>
          <p>
            starter
          </p>
          <p>
            react + react-router + classnames + bootstrap + react-bootstrap + animate.css + webpack
          </p>
          <p>
            <Link
              className="btn btn-success btn-lg"
              to={'/about'}>
              <i className="fa fa-info"></i>
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
