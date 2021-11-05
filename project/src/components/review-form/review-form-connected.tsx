import {connect} from 'react-redux';
import ReviewForm from './review-form';
import {ThunkAppDispatch} from '../../types/actions';
import {fetchReviewAction} from '../../store/api-actions';
import {State} from '../../types/state';
import {ReviewPost} from '../../types/reviews';
import {setReview} from '../../store/actions';

const mapStateToProps = (state: State) => ({
  review: state.offer.review,
  isReviewLoading: state.offer.isReviewLoading,
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  onSubmitReview: (offerId: string, review: ReviewPost ) => dispatch(fetchReviewAction(offerId, review)),
  onChangeReview: (review: ReviewPost) => dispatch(setReview(review)),
});

export default  connect(mapStateToProps, mapDispatchToProps)(ReviewForm);

