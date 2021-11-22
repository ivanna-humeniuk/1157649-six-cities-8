import ReviewItem from '../review-item/review-item';
import {Review} from '../../types/reviews';
import {REVIEW_LENGTH} from '../../const';

type ReviewsListProps = {
  reviews: Review[],
}

function ReviewsList({reviews}: ReviewsListProps): JSX.Element {
  const sortedReviews = [...reviews].sort((reviewA, reviewB) => {
    const dateB = new Date(reviewB.date).getTime();
    const dateA = new Date(reviewA.date).getTime();
    return dateB - dateA;
  });
  const slicedReviews = sortedReviews.slice(0,REVIEW_LENGTH);
  return (
    <ul className="reviews__list">
      {slicedReviews.map((review) => (
        <ReviewItem key={review.id} review={review}/>
      ))}
    </ul>
  );
}

export default ReviewsList;
