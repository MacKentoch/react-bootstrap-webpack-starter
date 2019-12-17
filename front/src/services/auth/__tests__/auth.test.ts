import auth from '../index';


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
  });

  it('should get token from localStorage (default store)', () => {
    const tokenKey = 'test';

    // set token
    auth.getToken('localStorage', tokenKey);
    expect(localStorage.getItem).toHaveBeenLastCalledWith(tokenKey);
  });
});
