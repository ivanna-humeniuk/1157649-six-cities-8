import ReviewItem from '../review-item/review-item';
import {Review} from '../../types/reviews';

type ReviewsListProps = {
  reviews: Review[],
}

function ReviewsList({reviews}: ReviewsListProps): JSX.Element {
  const sortReviews = [...reviews];
  sortReviews.sort((reviewA, reviewB) => {
    const dateB = new Date(reviewB.date).getTime();
    const dateA = new Date(reviewA.date).getTime();
    return dateB - dateA;
  }).slice(0,10);

  return (
    <ul className="reviews__list">
      {sortReviews.map((review) => (
        <ReviewItem key={review.id} review={review}/>
      ))}
    </ul>
  );
}

export default ReviewsList;
