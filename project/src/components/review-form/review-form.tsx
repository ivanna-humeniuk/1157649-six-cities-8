import React, {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {REVIEW_MIN_LENGTH, REVIEW_MAX_LENGTH} from '../../const';
import {ReviewPost} from '../../types/reviews';
import {setReview} from '../../store/actions/actions';
import {submitReviewAction} from '../../store/actions/api-actions';
import {getReview, getReviewLoadingStatus} from '../../store/offer-data/selectors';

const isValidComment = (review: ReviewPost): boolean =>
  (review && review.comment.length >= REVIEW_MIN_LENGTH &&
    review.comment.length <= REVIEW_MAX_LENGTH) && !!review.rating;

const ratingLabels = ['perfect', 'good', 'terribly', 'not bad', 'badly'];

function ReviewForm(): JSX.Element {
  const review = useSelector(getReview);
  const isReviewLoading = useSelector(getReviewLoadingStatus);
  const dispatch = useDispatch();
  const isValid = isValidComment(review);

  const handleRatingChange = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    dispatch(setReview({...review, rating: Number(e.currentTarget.value)}));
  }, [dispatch, review]);

  const handleReviewChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(setReview({...review, comment: e.currentTarget.value}));
  }, [dispatch, review]);

  const handleSubmitFormReview = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if(isValid) {
      dispatch(submitReviewAction());
    }
  }, [isValid, dispatch]);

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
