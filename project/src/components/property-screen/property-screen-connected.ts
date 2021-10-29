import {connect, ConnectedProps} from 'react-redux';
import {State} from '../../types/state';
import {Review} from '../../types/reviews';
import {PropertyScreen} from './property-screen';

type PropertyScreenProps = {
  reviews: Review[],
}
const mapStateToProps = (state: State) => ({
  city: state.city,
  offers: state.offers,
});

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

export type ConnectedComponentProps = PropsFromRedux & PropertyScreenProps;
export default connector(PropertyScreen);
