import Sort from './sort';
import {connect} from 'react-redux';
import {State} from '../../types/state';
import {SortOptions} from '../../const';
import {ThunkAppDispatch} from '../../types/actions';
import {setSortedOffers} from '../../store/actions';

const mapStateToProps = (state: State) => ({
  sortedOption: state.sortedOption,
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  handleSortedOffers: (option: SortOptions) => dispatch(setSortedOffers(option)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sort);
