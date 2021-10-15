import {OffersType} from '../../types/offers';
import {Link} from 'react-router-dom';

type PlaceCardProps = OffersType & {
  cardClasses: {
    article: string;
    imageWrapper: string;
    info?: string;
  };
  handleHoverOn?: (id: number) => void;
  handleHoverOff?: () => void;
}

function PlaceCard(props: PlaceCardProps): JSX.Element {
  const {id, previewImage, title, price, type, rating, isPremium, isFavorite, handleHoverOn, handleHoverOff} = props;
  const {article, imageWrapper, info} = props.cardClasses;
  const startWidth = rating > 0 ? { width: `${rating * 20}%` } : { width: '0%'};

  return (
    <article
      className={`${article} place-card`}
      onMouseEnter={() => {
        if (handleHoverOn) {
          return handleHoverOn(id);
        }
      }}
      onMouseLeave={handleHoverOff}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={`${imageWrapper && imageWrapper} place-card__image-wrapper`}>
        <a href="/">
          <img className="place-card__image" src={previewImage} width="100%" height="100%" alt="Place apartment"/>
        </a>
      </div>
      <div className={`${info && info} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp; night</span>
          </div>
          <button className={`place-card__bookmark-button ${isFavorite && 'place-card__bookmark-button--active'} button`} type="button">
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
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
