import {useCallback, useMemo} from 'react';
import {Link} from 'react-router-dom';
import cn from 'classnames';
import {Offer} from '../../types/offers';

type PlaceCardProps = {
  cardClasses: {
    article: string;
    imageWrapper: string;
    info?: string;
  };
  onCardHover?: (id: number) => void;
  onCardHoverOff?: () => void;
  place: Offer;
};

function PlaceCard(props: PlaceCardProps): JSX.Element {
  const {cardClasses, onCardHover, onCardHoverOff, place} = props;
  const startWidth = useMemo(() => place.rating > 0 ? { width: `${place.rating * 20}%` } : { width: '0%'}, [place.rating]);
  const handleCardMouseEnter = useCallback(()=> {
    if (onCardHover) {
      return onCardHover(place.id);
    }
  }, [onCardHover, place.id]);
  return (
    <article
      className={cn(cardClasses.article, 'place-card')}
      onMouseEnter={handleCardMouseEnter}
      onMouseLeave={onCardHoverOff}
    >
      {place.isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={cn(cardClasses.imageWrapper, 'place-card__image-wrapper')}>
        <Link to={`/offer/${place.id}`}>
          <img className="place-card__image" src={place.previewImage} width="100%" height="100%" alt="Place apartment"/>
        </Link>
      </div>
      <div className={cn(cardClasses.info, 'place-card__info')}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{place.price}</b>
            <span className="place-card__price-text">&#47;&nbsp; night</span>
          </div>
          <button className={`place-card__bookmark-button ${place.isFavorite && 'place-card__bookmark-button--active'} button`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"/>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={startWidth}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${place.id}`}>{place.title}</Link>
        </h2>
        <p className="place-card__type">{place.type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
