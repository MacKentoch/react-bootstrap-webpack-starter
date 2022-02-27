import { renderHook, act } from '@testing-library/react-hooks';
import { initialContextState, authContextHook } from '../authContextHook';
import auth from '../../../../services/auth';

jest.mock('../../../../services/auth');
jest.mock('../../../withDevTools');

describe('authContextHook', () => {
  test('authcontext state is equal to initialState by default', () => {
    const { result } = renderHook(() => authContextHook());

    const {
      isAuthenticated,
      isExpiredToken,
      token,
      lastAuthDate,
      user,
    } = result.current;

    expect(isAuthenticated).toBe(initialContextState.isAuthenticated);
    expect(isExpiredToken).toBe(initialContextState.isExpiredToken);
    expect(token).toBe(initialContextState.token);
    expect(lastAuthDate).toBe(initialContextState.lastAuthDate);
    expect(user).toBe(initialContextState.user);
  });

  test('checkTokenIsExpired should update matching state property isExpiredToken according to user information and token', async () => {
    // #region mock
    // @ts-ignore
    auth.getUserInfo.mockImplementationOnce(() => ({
      id: 'some user fake id',
    }));
    // @ts-ignore
    auth.getToken.mockImplementationOnce(() => 'fake auth token');
    // @ts-ignore
    auth.isExpiredToken.mockImplementationOnce(() => false);
    // #endregion

    const { result } = renderHook(() => authContextHook());
    expect(result.current.isExpiredToken).toBe(
      initialContextState.isExpiredToken,
    );

    act(() => {
      result.current.checkTokenIsExpired();
    });
    expect(result.current.isExpiredToken).toBe(false);
  });
});
