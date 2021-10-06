type PlaceCardProps = {
  cardClasses: {
    article: string;
    imageWrapper: string;
    info?: string;
  };
}

const startWidth = {
  width: '80%',
};

function PlaceCard(props: PlaceCardProps): JSX.Element {
  const {article, imageWrapper, info} = props.cardClasses;

  return (
    <article className={`${article} place-card`}>
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
      <div className={`${imageWrapper} place-card__image-wrapper`}>
        <a href="/">
          <img className="place-card__image" src="img/apartment-01.jpg" width="260" height="200" alt="Place apartment"/>
        </a>
      </div>
      <div className={`${info} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;120</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
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
          <a href="/">Beautiful &amp; luxurious apartment at great location</a>
        </h2>
        <p className="place-card__type">Apartment</p>
      </div>
    </article>
  );
}

export default PlaceCard;
