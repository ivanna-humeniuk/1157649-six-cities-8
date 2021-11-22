import {State} from '../../types/state';
import {AuthStatus, NameSpace} from '../../const';
import {AuthInfo} from '../../types/users';

export const getAuthStatus = (state: State): AuthStatus=> state[NameSpace.Auth].status;
export const getAuthInfo= (state: State): AuthInfo | null => state[NameSpace.Auth].info;
export const getAuthLoadingStatus = (state: State): boolean => state[NameSpace.Auth].isLoading;
