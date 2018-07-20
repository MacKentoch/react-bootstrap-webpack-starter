// @flow

// #region imports
import auth from '../index';
// #endregion

describe('auth service', () => {
  it('localStorage should exist', () => {
    expect(localStorage).toBeDefined();
  });

  it('should set token to localStorage (default store)', () => {
    const value = 'something to save';
    const tokenKey = 'test';

    // set token
    auth.setToken(value, 'localStorage', tokenKey);
    expect(localStorage.setItem).toHaveBeenLastCalledWith(tokenKey, value);
    // const returnValue = auth.getToken(null, tokenKey);
    // expect(returnValue).toBe(value);
  });
});
