import React, {useCallback} from 'react';
import { REVIEW_MIN_LENGTH, REVIEW_MAX_LENGTH} from '../../const';
import {ReviewPost} from '../../types/reviews';

type ReviewFormProps = {
  onSubmitReview: () => void;
  onChangeReview: (review: ReviewPost) => void;
  review: ReviewPost;
  isReviewLoading: boolean;
}

const isValidComment = (review: ReviewPost): boolean =>
  (review && review.comment.length >= REVIEW_MIN_LENGTH &&
    review.comment.length <= REVIEW_MAX_LENGTH) && !!review.rating;

const ratingLabels = ['perfect', 'good', 'terribly', 'not bad', 'badly'];

function ReviewForm(props: ReviewFormProps): JSX.Element {
  const {onSubmitReview, onChangeReview, review, isReviewLoading} = props;
  const isValid = isValidComment(review);

  const handleRatingChange = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    onChangeReview({...review, rating: Number(e.currentTarget.value)});
  }, [onChangeReview, review]);

  const handleReviewChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChangeReview({...review, comment: e.currentTarget.value});
  }, [onChangeReview, review]);

  const handleSubmitFormReview = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if(isValid) {
      onSubmitReview();
    }
  }, [isValid, onSubmitReview]);

  const stars = ratingLabels.map((item, index)=> (
    <React.Fragment key={item}>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        value={ratingLabels.length - index}
        id={`${ratingLabels.length - index}-stars`}
        type="radio"
        checked={review.rating === ratingLabels.length - index}
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
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmitFormReview}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {stars}
      </div>
      <textarea className="reviews__textarea form__textarea"
        id="review"
        name="review"
        value={review.comment}
        onChange={handleReviewChange}
        placeholder="Tell how was your stay, what you like and what can be improved"
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and
          describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit"  disabled={!isValid || isReviewLoading}>Submit</button>
      </div>
    </form>
  );
}

export default ReviewForm;
