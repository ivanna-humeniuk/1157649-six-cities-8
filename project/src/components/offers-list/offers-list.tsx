import {Offer} from '../../types/offers';
import PlaceCard from '../place-card/place-card';

type OffersListProps = {
  offers: Offer[],
  cardClasses: {
    article: string;
    imageWrapper: string;
    info?: string;
  };
  onCardHover?: (id: number) => void;
  onCardHoverOff?: () => void;
}

function OffersList(props: OffersListProps): JSX.Element {
  const {offers, cardClasses, onCardHover, onCardHoverOff} = props;
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer: Offer)=> (
        <PlaceCard
          key={offer.id}
          place={offer}
          onCardHover={onCardHover}
          onCardHoverOff={onCardHoverOff}
          cardClasses={cardClasses}
        />
      ))}
    </div>
  );
}

export default OffersList;
