import cn from 'classnames';
import {Offer} from '../../types/offers';
import OfferCard from '../offer-card/offer-card';

type OffersListProps = {
  offers: Offer[],
  offerListClass?: string
  cardClasses: {
    article: string;
    imageWrapper: string;
    info?: string;
  };
  onCardHover?: (id: number) => void;
  onCardHoverOff?: () => void;
}

function OffersList(props: OffersListProps): JSX.Element {
  const {offers, offerListClass, cardClasses, onCardHover, onCardHoverOff} = props;
  return (
    <div className={cn(offerListClass, 'places__list')}>
      {offers.map((offer: Offer)=> (
        <OfferCard
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
