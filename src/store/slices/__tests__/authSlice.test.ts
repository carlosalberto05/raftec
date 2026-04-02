import authReducer, { loginRequest, authSuccess, authFailure, logout } from '../authSlice';

describe('authSlice reducer', () => {
  const initialState = {
    user: null,
    isAuthenticated: false,
    isLoading: false,
    error: null,
  };

  it('should return the initial state', () => {
    expect(authReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  it('should handle loginRequest', () => {
    const actual = authReducer(initialState, loginRequest({ email: 'test@test.com', password: '123' }));
    expect(actual.isLoading).toBe(true);
    expect(actual.error).toBeNull();
  });

  it('should handle authSuccess', () => {
    const user = { id: '1', email: 'test@test.com', name: 'Leo', level: 1, energyPoints: 100 };
    const actual = authReducer(initialState, authSuccess(user));
    expect(actual.isLoading).toBe(false);
    expect(actual.isAuthenticated).toBe(true);
    expect(actual.user).toEqual(user);
    expect(actual.error).toBeNull();
  });

  it('should handle authFailure', () => {
    const actual = authReducer(initialState, authFailure('Error msg'));
    expect(actual.isLoading).toBe(false);
    expect(actual.isAuthenticated).toBe(false);
    expect(actual.error).toBe('Error msg');
  });

  it('should handle logout', () => {
    const loggedInState = {
      user: { id: '1', email: 'test@test.com', name: 'Leo', level: 1, energyPoints: 100 },
      isAuthenticated: true,
      isLoading: false,
      error: null,
    };
    const actual = authReducer(loggedInState, logout());
    expect(actual.user).toBeNull();
    expect(actual.isAuthenticated).toBe(false);
  });
});
