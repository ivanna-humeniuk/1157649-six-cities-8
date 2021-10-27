import {connect, ConnectedProps} from 'react-redux';
import {State} from '../../types/state';
import {Review} from '../../types/reviews';

type PropertyScreenProps = {
  reviews: Review[],
}
const mapStateToProps = (state: State) => ({
  city: state.city,
  offers: state.offers,
});

export const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
export type ConnectedComponentProps = PropsFromRedux & PropertyScreenProps;
