import { compose } from 'redux';
import Login from './Login';
import withAuth from '../../contexts/auth/consumerHOC';

export type OwnProps = {};
export type MappedDispatchToProps = {};
export type MappedStateToProps = {};

export default compose(withAuth())(Login);
