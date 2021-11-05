import {AuthStatus} from '../const';

export const checkIfAuthUnknown = (authStatus: AuthStatus): boolean =>
  authStatus === AuthStatus.Unknown;
