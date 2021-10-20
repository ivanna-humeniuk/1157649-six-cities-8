import {Review} from '../../types/reviews';

type ReviewProps = Review;

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

function ReviewItem({rating, user, id, comment, date}: ReviewProps): JSX.Element {
  const ratingWidth = rating > 0 ? { width: `${rating * 20}%` } : { width: '0%'};
  const dateTime = date.split('T')[0];
  const dateObj = new Date(date);
  const mm = dateObj.getMonth();
  const yy = dateObj.getFullYear();
  return (
    <li className="reviews__item" key={id}>
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={user.avatarUrl}
            width="54"
            height="54"
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{user.name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={ratingWidth}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{comment}</p>
        <time className="reviews__time" dateTime={dateTime}>{monthNames[mm]} {yy}</time>
      </div>
    </li>
  );
}

export default ReviewItem;
