import ReviewsForm from '../reviews-form/reviews-form';
import {ReviewsTypes} from '../../types/reviews';

type ReviewsProps = {
  reviews: ReviewsTypes[],
}

function Reviews({reviews}: ReviewsProps): JSX.Element {

  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review) => {
          const ratingWidth = review.rating > 0 ? { width: `${review.rating * 20}%` } : { width: '0%'};
          return (
            <li className="reviews__item" key={review.id}>
              <div className="reviews__user user">
                <div className="reviews__avatar-wrapper user__avatar-wrapper">
                  <img
                    className="reviews__avatar user__avatar"
                    src={review.user.avatarUrl}
                    width="54"
                    height="54"
                    alt="Reviews avatar"
                  />
                </div>
                <span className="reviews__user-name">{review.user.name}</span>
              </div>
              <div className="reviews__info">
                <div className="reviews__rating rating">
                  <div className="reviews__stars rating__stars">
                    <span style={ratingWidth}/>
                    <span className="visually-hidden">Rating</span>
                  </div>
                </div>
                <p className="reviews__text">{review.comment}</p>
                <time className="reviews__time" dateTime="2019-04-24">April 2019</time>
              </div>
            </li>
          );
        })}
      </ul>
      <ReviewsForm/>
    </>
  );
}

export default Reviews;
