import {createReducer} from '@reduxjs/toolkit';
import {AuthStatus} from '../../const';
import {
  requireLogout,
  setAuthInfo,
  setAuthLoading,
  setAuthStatus
} from '../actions/actions';
import {AuthState} from '../../types/state';

const initialState: AuthState= {
  status: AuthStatus.Unknown,
  info: null,
  isLoading: false,
};

const authReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setAuthStatus, (state, action) => {
      state.status = action.payload;
    })
    .addCase(setAuthInfo, (state, action) => {
      state.info = action.payload;
    })
    .addCase(requireLogout, (state, action) => {
      state.status = AuthStatus.NoAuth;
      state.info = null;
    })
    .addCase(setAuthLoading, (state, action) => {
      state.isLoading = action.payload;
    });
});

export {authReducer};
