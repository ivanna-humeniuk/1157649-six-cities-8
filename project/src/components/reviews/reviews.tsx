import ReviewForm from '../review-form/review-form';
import {Review} from '../../types/reviews';
import ReviewItem from '../review-item/review-item';

type ReviewsProps = {
  reviews: Review[],
}

function Reviews({reviews}: ReviewsProps): JSX.Element {
  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review) => (
          <ReviewItem key={review.id} {...review}/>
        ))}
      </ul>
      <ReviewForm/>
    </>
  );
}

export default Reviews;
