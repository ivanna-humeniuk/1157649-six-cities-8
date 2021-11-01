import ReviewForm from '../review-form/review-form';
import {Review} from '../../types/reviews';
import ReviewsList from '../reviews-list/reviews-list';

type ReviewsProps = {
  reviews: Review[],
  authorizationStatus: boolean;
}

function Reviews({reviews, authorizationStatus}: ReviewsProps): JSX.Element {
  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ReviewsList reviews={reviews}/>
      {authorizationStatus && <ReviewForm/>}
    </>
  );
}

export default Reviews;
