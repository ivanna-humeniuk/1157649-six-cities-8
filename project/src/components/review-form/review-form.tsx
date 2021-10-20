import React, {useCallback, useState} from 'react';
import { REVIEW_MIN_LENGTH, REVIEW_MAX_LENGTH} from '../../const';

const ratingLabels = ['perfect', 'good', 'terribly', 'not bad', 'badly'];

function ReviewForm(): JSX.Element {
  const [review, setReview] = useState<string>();
  const [rating, setRating] = useState<string>();
  const isInvalid = !(review && review.length >= REVIEW_MIN_LENGTH && review.length <= REVIEW_MAX_LENGTH) || !rating;

  const handleRatingChange = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    setRating(e.currentTarget.value);
  }, []);
  const handleReviewChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReview(e.target.value);
  }, []);

  const stars = ratingLabels.map((item, index)=> (
    <React.Fragment key={item}>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        value={ratingLabels.length - index}
        id={`${ratingLabels.length - index}-stars`}
        type="radio"
        checked={rating === `${ratingLabels.length - index}`}
        onChange={handleRatingChange}
      />
      <label htmlFor={`${ratingLabels.length - index}-stars`} className="reviews__rating-label form__rating-label" title={item}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </React.Fragment>
  ));

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {stars}
      </div>
      <textarea className="reviews__textarea form__textarea"
        id="review"
        name="review"
        value={review}
        onChange={handleReviewChange}
        placeholder="Tell how was your stay, what you like and what can be improved"
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and
          describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit"  disabled={isInvalid}>Submit</button>
      </div>
    </form>
  );
}

export default ReviewForm;
