import {useMemo} from 'react';
import {Review} from '../../types/reviews';
import {MONTHS} from '../../const';

type ReviewProps = {
  review: Review;
};

function ReviewItem({review}: ReviewProps): JSX.Element {
  const ratingWidth = useMemo(() => review.rating > 0 ? { width: `${review.rating * 20}%` } : { width: '0%'}, [review.rating]);
  const dateTime = review.date.split('T')[0];
  const dateObj = new Date(review.date);
  const mm = dateObj.getMonth();
  const yy = dateObj.getFullYear();
  return (
    <li className="reviews__item" key={review.id} data-testId={review.id}>
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
        <time className="reviews__time" dateTime={dateTime}>{MONTHS[mm]} {yy}</time>
      </div>
    </li>
  );
}

export default ReviewItem;
