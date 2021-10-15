import {useState} from 'react';
import {OffersType} from '../../types/offers';
import PlaceCard from '../place-card/place-card';

type OffersListProps = {
  offers: OffersType[],
  cardClasses: {
    article: string;
    imageWrapper: string;
    info?: string;
  };
}

function OffersList({offers, cardClasses}: OffersListProps): JSX.Element {

  /* eslint-disable @typescript-eslint/no-unused-vars */
  const [activeCard, setActiveCard] = useState(0);

  const handleHoverOn = (id: number) => {
    setActiveCard(id);
  };

  const handleHoverOff = () => {
    setActiveCard(0);
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map(({id, ...rest}: OffersType)=> (
        <PlaceCard
          key={id}
          id={id}
          {...rest}
          handleHoverOn={handleHoverOn}
          handleHoverOff={handleHoverOff}
          cardClasses={cardClasses}
        />
      ))}
    </div>
  );
}

export default OffersList;
