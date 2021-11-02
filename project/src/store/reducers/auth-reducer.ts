import {AuthState} from '../../types/state';
import {Actions, ActionType} from '../../types/actions';
import {AuthorizationStatus} from '../../const';

const initialState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  authInfo: null,
  authLoading: false,
};

const authReducer = (state: AuthState = initialState, action: Actions): AuthState => {
  switch (action.type) {
    case ActionType.RequireAuthorization:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case ActionType.SetAuthInfo:
      return {
        ...state,
        authInfo: action.payload,
      };
    case  ActionType.RequireLogout:
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.NoAuth,
        authInfo: null,
      };
    case ActionType.SetAuthLoading: {
      return {
        ...state,
        authLoading: action.payload,
      };
    }
    default:
      return {...state};
  }
};

export {authReducer};
