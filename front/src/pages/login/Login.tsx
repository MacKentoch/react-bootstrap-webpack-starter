import React, { useState, useEffect, useCallback, useContext } from 'react';
import axios from 'axios';
import { RouteComponentProps } from 'react-router';
import Button from 'reactstrap/lib/Button';
import Row from 'reactstrap/lib/Row';
import Col from 'reactstrap/lib/Col';
import { appConfig } from '../../config/appConfig';
import { getLocationOrigin } from '../../services/API/fetchTools';
import userInfoMock from '../../mock/userInfo';
import { AuthProviderState, AuthContext } from '../../contexts/auth';
import FadeInEntrance from '../../components/fadeInEntrance';

type OwnProps = {};
type Props = OwnProps & RouteComponentProps;

function Login({ history, location }: Props) {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLogging, setIsLogging] = useState<boolean>(false);
  const auth = useContext<AuthProviderState | null>(AuthContext);

  // #region on mount
  useEffect(() => {
    auth?.disconnectUser(); // diconnect user: remove token and user info
  }, []);
  // #endregion

  // #region input callbacks
  const goHome = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    event && event.preventDefault();
    history.push({ pathname: '/' });
  }, []);

  const handlesOnEmailChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      event && event.preventDefault();
      // should add some validator before setState in real use cases
      setEmail(event.target.value.trim());
    },
    [],
  );

  const handlesOnPasswordChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      event && event.preventDefault();
      // should add some validator before setState in real use cases
      setPassword(event.target.value.trim());
    },
    [],
  );

  const handlesOnLogin = useCallback(
    async (event: React.MouseEvent<HTMLButtonElement>) => {
      event && event.preventDefault();

      const { from } = location.state || { from: { pathname: '/' } };

      try {
        setIsLogging(true);
        const response = await logUser(email, password);
        const {
          data: { token, user },
        } = response;

        auth?.setToken(token);
        auth?.setUserInfo(user);

        history.replace(from); // back to previous private failed access page or by default to Home
      } catch (error) {
        /* eslint-disable no-console */
        console.log('login went wrong..., error: ', error);
        /* eslint-enable no-console */
      } finally {
        setIsLogging(false);
      }
    },
    [history, email, password, location],
  );
  // #endregion

  // #region log user request
  const logUser = useCallback(
    async (
      login: string = '',
      password: string = '',
    ): Promise<{ data: { user: User; token: string } }> => {
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
          setTimeout(() => resolve({ data: userInfoMock }), 3000),
        );
      }

      try {
        const response = await axios.request<{ token: string; user: any }>({
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

        return response;
      } catch (error) {
        throw error;
      }
    },
    [],
  );
  // #endregion

  return (
    <FadeInEntrance>
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
                      autoComplete="username email"
                      value={email}
                      onChange={handlesOnEmailChange}
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
                      autoComplete="current-password"
                      value={password}
                      onChange={handlesOnPasswordChange}
                    />
                  </Col>
                </div>

                <div className="form-group">
                  <Col lg={{ size: 12 }}>
                    <Button
                      className="login-button btn-block"
                      color="primary"
                      disabled={isLogging}
                      onClick={handlesOnLogin}
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
              <Button className="btn-block" onClick={goHome}>
                back to home
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </FadeInEntrance>
  );
}

Login.DisplayName = 'Login';

export default Login;
