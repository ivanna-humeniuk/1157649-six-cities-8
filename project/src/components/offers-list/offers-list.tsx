import {Offer} from '../../types/offers';
import PlaceCard from '../place-card/place-card';

type OffersListProps = {
  offers: Offer[],
  cardClasses: {
    article: string;
    imageWrapper: string;
    info?: string;
  };
  handleHoverOn?: (id: number) => void;
  handleHoverOff?: () => void;
}

function OffersList(props: OffersListProps): JSX.Element {
  const {offers, cardClasses, handleHoverOn, handleHoverOff} = props;
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer: Offer)=> (
        <PlaceCard
          key={offer.id}
          place={offer}
          handleHoverOn={handleHoverOn}
          handleHoverOff={handleHoverOff}
          cardClasses={cardClasses}
        />
      ))}
    </div>
  );
}

export default OffersList;
