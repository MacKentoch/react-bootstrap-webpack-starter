// @flow

// #region imports
import React, { PureComponent } from 'react';
import axios from 'axios';
import {
  type Match,
  type Location,
  type RouterHistory,
} from 'react-router-dom';
import { Row, Col, Button } from 'reactstrap';
import auth from '../../services/auth';
import { appConfig } from '../../config/appConfig';
import { getLocationOrigin } from '../../services/API/fetchTools';
import userInfoMock from '../../mock/userInfo.json';
// #endregion

// #region flow types
type Props = {
  // react-router 4:
  match: Match,
  location: Location,
  history: RouterHistory,

  ...any,
};

type State = {
  email: string,
  password: string,
  isLogging: boolean,

  ...any,
};
// #endregion

class Login extends PureComponent<Props, State> {
  state = {
    email: '',
    password: '',
    isLogging: false,
  };

  // #region lifecycle
  componentDidMount() {
    this.disconnectUser(); // diconnect user: remove token and user info
  }

  render() {
    const { email, password, isLogging } = this.state;

    return (
      <div className="content">
        <Row>
          <Col md={{ size: 4, offset: 4 }} xs={{ size: 10, offset: 1 }}>
            <form className="form-horizontal" noValidate>
              <fieldset>
                <legend>Login</legend>

                <div className="form-group">
                  <label
                    htmlFor="inputEmail"
                    className="col-lg-2 control-label"
                  >
                    Email
                  </label>
                  <Col lg={12}>
                    <input
                      type="text"
                      className="form-control"
                      id="inputEmail"
                      placeholder="Email"
                      value={email}
                      onChange={this.handlesOnEmailChange}
                    />
                  </Col>
                </div>

                <div className="form-group">
                  <label
                    htmlFor="inputPassword"
                    className="col-lg-2 control-label"
                  >
                    Password
                  </label>
                  <Col lg={12}>
                    <input
                      type="password"
                      className="form-control"
                      id="inputPassword"
                      placeholder="Password"
                      value={password}
                      onChange={this.handlesOnPasswordChange}
                    />
                  </Col>
                </div>

                <div className="form-group">
                  <Col lg={{ size: 12 }}>
                    <Button
                      className="login-button btn-block"
                      color="primary"
                      disabled={isLogging}
                      onClick={this.handlesOnLogin}
                    >
                      {isLogging ? (
                        <span>
                          login in... &nbsp;
                          <i className="fa fa-spinner fa-pulse fa-fw" />
                        </span>
                      ) : (
                        <span>Login</span>
                      )}
                    </Button>
                  </Col>
                </div>
              </fieldset>
            </form>
          </Col>
        </Row>
        <Row>
          <Col md={{ size: 4, offset: 4 }} xs={{ size: 10, offset: 1 }}>
            <div className="pull-right">
              <Button
                bsStyle="info"
                className="btn-block"
                onClick={this.goHome}
              >
                back to home
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
  // #endregion

  disconnectUser = () => {
    auth.clearAllAppStorage();
  };

  handlesOnEmailChange = (event: SyntheticEvent<>) => {
    event.preventDefault();
    // should add some validator before setState in real use cases
    this.setState({ email: event.target.value.trim() });
  };

  handlesOnPasswordChange = (event: SyntheticEvent<>) => {
    event.preventDefault();
    // should add some validator before setState in real use cases
    this.setState({ password: event.target.value.trim() });
  };

  handlesOnLogin = async (event: SyntheticEvent<>) => {
    if (event) {
      event.preventDefault();
    }

    const { history } = this.props;

    const { email, password } = this.state;

    const userLogin = {
      login: email,
      password: password,
    };

    try {
      this.setState({ isLogging: true });
      const response = await this.logUser(userLogin);
      const {
        data: { token, user },
      } = response;

      auth.setToken(token);
      auth.setUserInfo(user);
      this.setState({ isLogging: false });

      history.push({ pathname: '/' }); // back to Home
    } catch (error) {
      this.setState({ isLogging: false });
      /* eslint-disable no-console */
      console.log('login went wrong..., error: ', error);
      /* eslint-enable no-console */
    }
  };

  logUser = async (login: string = '', password: string = '') => {
    const __SOME_LOGIN_API__ = 'login';
    const url = `${getLocationOrigin()}/${__SOME_LOGIN_API__}`;
    const method = 'post';
    const headers = {};
    const options = {
      credentials: 'same-origin',
      data: {
        login,
        password,
      },
    };

    if (appConfig.DEV_MODE) {
      return new Promise(resolve =>
        setTimeout(resolve({ data: userInfoMock }), 3000),
      );
    }

    try {
      const response = await axios.request({
        method,
        url,
        withCredentials: true,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Acces-Control-Allow-Origin': '*',
          ...headers,
        },
        ...options,
      });

      return Promise.resolve(response);
    } catch (error) {
      return Promise.reject(error);
    }
  };

  goHome = (event: any) => {
    if (event) {
      event.preventDefault();
    }
    const { history } = this.props;
    history.push({ pathname: '/' });
  };
}

export default Login;
