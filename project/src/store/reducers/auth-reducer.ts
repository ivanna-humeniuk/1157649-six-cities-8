import {AuthState} from '../../types/state';
import {Actions, ActionType} from '../../types/actions';
import {AuthStatus} from '../../const';

const initialState = {
  status: AuthStatus.Unknown,
  info: null,
  isLoading: false,
};

const authReducer = (state: AuthState = initialState, action: Actions): AuthState => {
  switch (action.type) {
    case ActionType.SetAuthStatus:
      return {
        ...state,
        status: action.payload,
      };
    case ActionType.SetAuthInfo:
      return {
        ...state,
        info: action.payload,
      };
    case  ActionType.RequireLogout:
      return {
        ...state,
        status: AuthStatus.NoAuth,
        info: null,
      };
    case ActionType.SetAuthLoading: {
      return {
        ...state,
        isLoading: action.payload,
      };
    }
    default:
      return {...state};
  }
};

export {authReducer};
