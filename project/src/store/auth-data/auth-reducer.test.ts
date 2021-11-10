import {AuthStatus} from '../../const';
import {authReducer} from './auth-reducer';
import {requireLogout, setAuthInfo, setAuthLoading, setAuthStatus} from '../actions';
import {user} from '../../mocks/user';

const initialAuthState = {
  status: AuthStatus.Unknown,
  info: null,
  isLoading: false,
};

describe('Reducer: authReducer', () => {
  it('should return initial state without additional parameters', () =>{
     expect(authReducer(undefined, {type: 'UNKNOWN_ACTION'}))
       .toEqual(initialAuthState);
  });

  it('should update authorizationStatus to "AUTH"', () =>{
    expect(authReducer(initialAuthState, setAuthStatus(AuthStatus.Auth)))
      .toEqual({...initialAuthState, status: AuthStatus.Auth});
  });

  it('should update authorizationStatus to "NO_AUTH"', () =>{
    expect(authReducer(initialAuthState, setAuthStatus(AuthStatus.NoAuth)))
      .toEqual({...initialAuthState, status: AuthStatus.NoAuth});
  });

  it('should update user authorization information', () =>{
    const mockUserInfo = {...user};
    expect(authReducer(initialAuthState, setAuthInfo(mockUserInfo)))
      .toEqual({...initialAuthState, info: mockUserInfo});
  });

  it('should update user info and auth status after logout', () =>{
    expect(authReducer(initialAuthState, requireLogout()))
      .toEqual({...initialAuthState, info: null, status: AuthStatus.NoAuth});
  });

  it('should update auth loading status if it is true', () => {
    expect(authReducer(initialAuthState, setAuthLoading(true)))
      .toEqual({...initialAuthState, isLoading: true});
  });

  it('should update auth loading status if it is false', () => {
    expect(authReducer(initialAuthState, setAuthLoading(false)))
      .toEqual({...initialAuthState, isLoading: false});
  });

});
