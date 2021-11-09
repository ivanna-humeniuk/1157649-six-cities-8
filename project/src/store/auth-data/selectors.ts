import {State} from '../../types/state';
import {AuthStatus, NameSpace} from '../../const';
import {AuthInfo} from '../../types/users';

export const getAuthStatus = (state: State): AuthStatus=> state[NameSpace.auth].status;
export const getAuthInfo= (state: State): AuthInfo | null => state[NameSpace.auth].info;
export const getAuthLoading = (state: State): boolean => state[NameSpace.auth].isLoading;
