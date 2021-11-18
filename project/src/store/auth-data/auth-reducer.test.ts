import {AuthStatus} from '../../const';
import {authReducer} from './auth-reducer';
import {requireLogout, setAuthInfo, setAuthLoading, setAuthStatus} from '../actions/actions';
import {fakeUser} from '../../mocks/user';

const initialState = {
  status: AuthStatus.Unknown,
  info: null,
  isLoading: false,
};

describe('Reducer: authReducer', () => {
  it('should return initial state without additional parameters', () =>{
    expect(authReducer(undefined, {type: 'UNKNOWN_ACTION'}))
      .toEqual({
        status: AuthStatus.Unknown,
        info: null,
        isLoading: false,
      });
  });

  it('should update authorizationStatus to "AUTH"', () =>{
    expect(authReducer(initialState, setAuthStatus(AuthStatus.Auth)))
      .toEqual({
        status: AuthStatus.Auth,
        info: null,
        isLoading: false,
      });
  });

  it('should update authorizationStatus to "NO_AUTH"', () =>{
    expect(authReducer(initialState, setAuthStatus(AuthStatus.NoAuth)))
      .toEqual({
        status: AuthStatus.NoAuth,
        info: null,
        isLoading: false,
      });
  });

  it('should update user authorization information', () =>{
    expect(authReducer(initialState, setAuthInfo(fakeUser)))
      .toEqual({
        status: AuthStatus.Unknown,
        info: fakeUser,
        isLoading: false,
      });
  });

  it('should update user info and auth status after logout', () =>{
    expect(authReducer(initialState, requireLogout()))
      .toEqual({
        status: AuthStatus.NoAuth,
        info: null,
        isLoading: false,
      });
  });

  it('should update auth loading status if it is true', () => {
    expect(authReducer(initialState, setAuthLoading(true)))
      .toEqual({
        status: AuthStatus.Unknown,
        info: null,
        isLoading: true,
      });
  });

  it('should update auth loading status if it is false', () => {
    const state = {
      status: AuthStatus.Unknown,
      info: null,
      isLoading: true,
    };
    expect(authReducer(state, setAuthLoading(false)))
      .toEqual({
        status: AuthStatus.Unknown,
        info: null,
        isLoading: false,
      });
  });

});
