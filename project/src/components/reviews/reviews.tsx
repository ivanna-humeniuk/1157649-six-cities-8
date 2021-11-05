import ReviewForm from '../review-form/review-form';
import {Review} from '../../types/reviews';
import ReviewsList from '../reviews-list/reviews-list';
import {AuthStatus} from '../../const';

type ReviewsProps = {
  reviews: Review[],
  authStatus: AuthStatus;
}

function Reviews({reviews, authStatus}: ReviewsProps): JSX.Element {
  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ReviewsList reviews={reviews}/>
      {authStatus && <ReviewForm/>}
    </>
  );
}

export default Reviews;
