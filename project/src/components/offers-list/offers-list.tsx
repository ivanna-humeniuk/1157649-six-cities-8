import {useCallback, useState} from 'react';
import {Offer} from '../../types/offers';
import PlaceCard from '../place-card/place-card';

type OffersListProps = {
  offers: Offer[],
  cardClasses: {
    article: string;
    imageWrapper: string;
    info?: string;
  };
}

function OffersList({offers, cardClasses}: OffersListProps): JSX.Element {

  /* eslint-disable @typescript-eslint/no-unused-vars */
  const [activeCard, setActiveCard] = useState(0);

  const handleHoverOn = useCallback( (id: number) => {
    setActiveCard(id);
  }, [setActiveCard]);

  const handleHoverOff = useCallback(() => {
    setActiveCard(0);
  }, [setActiveCard]);

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
