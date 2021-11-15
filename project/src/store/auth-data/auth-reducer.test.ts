import {AuthStatus} from '../../const';
import {authReducer} from './auth-reducer';
import {requireLogout, setAuthInfo, setAuthLoading, setAuthStatus} from '../actions/actions';
import {fakeUser} from '../../mocks/user';

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
    const state = {
      status: AuthStatus.Unknown,
      info: null,
      isLoading: false,
    };
    expect(authReducer(state, setAuthStatus(AuthStatus.Auth)))
      .toEqual({
        status: AuthStatus.Auth,
        info: null,
        isLoading: false,
      });
  });

  it('should update authorizationStatus to "NO_AUTH"', () =>{
    const state = {
      status: AuthStatus.Unknown,
      info: null,
      isLoading: false,
    };
    expect(authReducer(state, setAuthStatus(AuthStatus.NoAuth)))
      .toEqual({
        status: AuthStatus.NoAuth,
        info: null,
        isLoading: false,
      });
  });

  it('should update user authorization information', () =>{
    const state = {
      status: AuthStatus.Unknown,
      info: null,
      isLoading: false,
    };
    expect(authReducer(state, setAuthInfo(fakeUser)))
      .toEqual({
        status: AuthStatus.Unknown,
        info: fakeUser,
        isLoading: false,
      });
  });

  it('should update user info and auth status after logout', () =>{
    const state = {
      status: AuthStatus.Unknown,
      info: null,
      isLoading: false,
    };
    expect(authReducer(state, requireLogout()))
      .toEqual({
        status: AuthStatus.NoAuth,
        info: null,
        isLoading: false,
      });
  });

  it('should update auth loading status if it is true', () => {
    const state = {
      status: AuthStatus.Unknown,
      info: null,
      isLoading: false,
    };
    expect(authReducer(state, setAuthLoading(true)))
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
