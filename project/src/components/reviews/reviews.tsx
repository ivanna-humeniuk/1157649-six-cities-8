import ReviewForm from '../review-form/review-form-connected';
import {Review} from '../../types/reviews';
import ReviewsList from '../reviews-list/reviews-list';
import {AuthStatus} from '../../const';

type ReviewsProps = {
  reviews: Review[],
  authStatus: AuthStatus;
}

function Reviews({reviews, authStatus}: ReviewsProps): JSX.Element {
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

export default Reviews;
