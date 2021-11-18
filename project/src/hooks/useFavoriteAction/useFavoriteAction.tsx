import React, {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {submitFavoriteAction} from '../../store/actions/api-actions';
import {Offer} from '../../types/offers';


function useFavoriteAction (offer: Offer | null, id: number): React.MouseEventHandler<HTMLButtonElement> {
  const dispatch = useDispatch();

  const handleBookmarkButtonClick = useCallback(() => {
    const status = offer?.isFavorite ? 0 : 1;
    dispatch(submitFavoriteAction(id, status));
  }, [dispatch, id, offer?.isFavorite]);

  return handleBookmarkButtonClick;
}

export default useFavoriteAction;
