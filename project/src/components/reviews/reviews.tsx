import React from 'react';
import {useSelector} from 'react-redux';
import ReviewForm from '../review-form/review-form';
import ReviewsList from '../reviews-list/reviews-list';
import {AuthStatus} from '../../const';
import {getAuthStatus} from '../../store/auth-data/selectors';
import {getReviews} from '../../store/offer-data/selectors';

function Reviews(): JSX.Element {
  const reviews = useSelector(getReviews);
  const authStatus = useSelector(getAuthStatus);

  const sortReviews = reviews.slice(0,10).sort((reviewA, reviewB) => {
    const dateB = new Date(reviewB.date).getTime();
    const dateA = new Date(reviewA.date).getTime();
    return dateB - dateA;
  });

  return (
    <>
      {reviews.length > 0 && (
        <h2 className="reviews__title">Reviews &middot;
          <span className="reviews__amount">{reviews.length}</span>
        </h2>
      )}
      <ReviewsList reviews={sortReviews}/>
      {authStatus === AuthStatus.Auth && <ReviewForm/>}
    </>
  );
}

export default React.memo(Reviews);
