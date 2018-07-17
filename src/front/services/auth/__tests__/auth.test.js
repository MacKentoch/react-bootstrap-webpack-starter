// @flow

// #region imports
import auth from '../index';
// #endregion

describe('auth service', () => {
  it('should set token to localStorage (default store)', () => {
    const value = 'something to save';
    const tokenKey = 'test';

    // set token
    auth.setToken(value, null, tokenKey);
    const returnValue = auth.getToken(tokenKey);
    expect(returnValue).toBe(value);
  });
});
