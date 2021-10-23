import ReviewForm from '../review-form/review-form';
import {Review} from '../../types/reviews';
import ReviewsList from '../reviews-list/reviews-list';

type ReviewsProps = {
  reviews: Review[],
}

function Reviews({reviews}: ReviewsProps): JSX.Element {
  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ReviewsList reviews={reviews}/>
      <ReviewForm/>
    </>
  );
}

export default Reviews;
