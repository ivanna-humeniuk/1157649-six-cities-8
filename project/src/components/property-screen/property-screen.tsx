import cn from 'classnames';
import {useMemo} from 'react';
import {Redirect, useParams} from 'react-router-dom';
import useActivePoint from '../../hooks/useActivePoint';
import Header from '../header/header';
import Reviews from '../reviews/reviews';
import {Offer} from '../../types/offers';
import {Review} from '../../types/reviews';
import {AppRoute, AuthorizationStatus} from '../../const';
import Map from '../map/map';
import {city} from '../../mocks/offers';
import OffersList from '../offers-list/offers-list';

const propertyClasses = {
  article: 'near-places__card',
  imageWrapper: 'near-places__image-wrapper',
};

type PropertyScreenProps = {
  offers: Offer[],
  reviews: Review[],
}

function PropertyScreen(props: PropertyScreenProps): JSX.Element {
  const {offers, reviews} = props;
  const {id} = useParams<{ id?: string }>();
  const data = offers.find((item) => item.id === Number(id));
  const { activePoint, handleCardHoverOff, handleCardHoverOn } = useActivePoint(Number(id));
  const ratingWidth = useMemo(() => data && data.rating > 0 ? {width: `${data.rating * 20}%`} : {width: '0%'}, [data]);
  const nearOffers = offers.filter((item) =>  item.city.name === data?.city.name);

  if (!data) {
    return <Redirect to={AppRoute.Main}/>;
  }

  const bookmarkBtnClasses = cn({
    'property__bookmark-button': true,
    'property__bookmark-button--active': data.isFavorite,
    'button': true,
  });
  const avatarWrapperClasses = cn({
    'property__avatar-wrapper': true,
    'property__avatar-wrapper--pro': data.host?.isPro,
    'user__avatar-wrapper': true,
  });
  return (
    <div className="page">
      <Header authorizationStatus={AuthorizationStatus.Auth}/>

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              <div className="property__image-wrapper">
                <img className="property__image" src="img/room.jpg" alt="Studio"/>
              </div>
              <div className="property__image-wrapper">
                <img className="property__image" src="img/apartment-01.jpg" alt="Studio"/>
              </div>
              <div className="property__image-wrapper">
                <img className="property__image" src="img/apartment-02.jpg" alt="Studio"/>
              </div>
              <div className="property__image-wrapper">
                <img className="property__image" src="img/apartment-03.jpg" alt="Studio"/>
              </div>
              <div className="property__image-wrapper">
                <img className="property__image" src="img/studio-01.jpg" alt="Studio"/>
              </div>
              <div className="property__image-wrapper">
                <img className="property__image" src="img/apartment-01.jpg" alt="Studio"/>
              </div>
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {data.isPremium && (
                <div className="property__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {data.title}
                </h1>
                <button className={bookmarkBtnClasses} type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={ratingWidth}/>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{data.rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {data.type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {data.bedrooms} {data.bedrooms === 1 ? 'Bedroom' : 'Bedrooms'}
                </li>
                <li className="property__feature property__feature--adults">
                  Max {data.maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro; {data.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {data.goods && data.goods.map((good) => (
                    <li key={good} className="property__inside-item">
                      {good}
                    </li>
                  ))}
                </ul>
              </div>
              {data.host && (
                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div className={avatarWrapperClasses}>
                      <img
                        className="property__avatar user__avatar"
                        src={data.host.avatarUrl}
                        width="74"
                        height="74"
                        alt="Host avatar"
                      />
                    </div>
                    <span className="property__user-name">
                      {data.host.name}
                    </span>
                    {data.host.isPro && (
                      <span className="property__user-status">
                        Pro
                      </span>
                    )}
                  </div>
                  <div className="property__description">
                    <p className="property__text">
                      {data.description}
                    </p>
                  </div>
                </div>
              )}
              <section className="property__reviews reviews">
                <Reviews reviews={reviews}/>
              </section>
            </div>
          </div>
          <section className="property__map map">
            <Map points={nearOffers} city={city} activePoint={activePoint}/>
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <OffersList
              offers={nearOffers}
              cardClasses={propertyClasses}
              onCardHover={handleCardHoverOn}
              onCardHoverOff={handleCardHoverOff}
              offerListClass="near-places__list"
            />
          </section>
        </div>
      </main>
    </div>
  );
}

export default PropertyScreen;

