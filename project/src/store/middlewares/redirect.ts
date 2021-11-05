import browserHistory from '../../browser-history';
import {Middleware} from 'redux';
import {ActionType} from '../../types/actions';
import {reducer} from '../store';

type Reducer = ReturnType<typeof reducer>;

export const redirect: Middleware<unknown, Reducer> =
  (_store) =>
    (next) =>
      (action) => {
        if (action.type === ActionType.RedirectToRoute) {
          browserHistory.push(action.payload);
        }
        return next(action);
      };
