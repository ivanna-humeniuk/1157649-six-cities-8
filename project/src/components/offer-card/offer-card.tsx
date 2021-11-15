import {useCallback, useMemo} from 'react';
import {Link} from 'react-router-dom';
import cn from 'classnames';
import {Offer} from '../../types/offers';
import useFavoriteAction from '../../hooks/useFavoriteAction';

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

function OfferCard(props: PlaceCardProps): JSX.Element {
  const {cardClasses, onCardHover, onCardHoverOff, place} = props;
  const startWidth = useMemo(() => place.rating > 0 ? { width: `${place.rating * 20}%` } : { width: '0%'}, [place.rating]);

  const handleBookmarkButtonClick = useFavoriteAction( place, place.id);
  const handleCardMouseEnter = useCallback(()=> {
    if (onCardHover) {
      return onCardHover(place.id);
    }
  }, [onCardHover, place.id]);

  const bookmarkButtonClass = cn({
    'button': true,
    'place-card__bookmark-button': true,
    'place-card__bookmark-button--active': place.isFavorite,
  });

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
          <button className={bookmarkButtonClass} type="button" onClick={handleBookmarkButtonClick}>
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

export default OfferCard;
