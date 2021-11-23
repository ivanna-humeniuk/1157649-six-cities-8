import React, {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {submitFavoriteAction} from '../../store/actions/api-actions';
import {Offer} from '../../types/offers';


function useFavoriteAction (offer: Offer | null, id: number): React.MouseEventHandler<HTMLButtonElement> {
  const dispatch = useDispatch();

  return useCallback(() => {
    const status = offer?.isFavorite ? 0 : 1;
    dispatch(submitFavoriteAction(id, status));
  }, [dispatch, id, offer?.isFavorite]);
}

export default useFavoriteAction;
