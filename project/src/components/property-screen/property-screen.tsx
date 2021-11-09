import cn from 'classnames';
import {useEffect, useMemo} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import useActivePoint from '../../hooks/useActivePoint';
import Header from '../header/header';
import Reviews from '../reviews/reviews';
import Map from '../map/map';
import OffersList from '../offers-list/offers-list';
import LoadingScreen from '../loading-screen/loading-screen';
import {
  fetchNearbyOffersAction,
  fetchOfferAction,
  fetchReviewsAction
} from '../../store/api-actions';
import {
  getLoadingOffer,
  getNearbyList,
  getOffer
} from '../../store/offer-data/selectors';


const propertyClasses = {
  article: 'near-places__card',
  imageWrapper: 'near-places__image-wrapper',
};

function PropertyScreen(): JSX.Element {
  const offer = useSelector(getOffer);
  const nearbyList = useSelector(getNearbyList);
  const isLoading = useSelector(getLoadingOffer);
  const dispatch = useDispatch();
  const {id} = useParams<{ id: string }>();
  const { activePoint, handleCardHoverOff, handleCardHoverOn } = useActivePoint(Number(id));
  const ratingWidth = useMemo(() => offer && offer.rating > 0 ? {width: `${offer.rating * 20}%`} : {width: '0%'}, [offer]);

  useEffect(() => {
    if(id) {
      dispatch(fetchOfferAction(id));
      dispatch(fetchNearbyOffersAction(id));
      dispatch(fetchReviewsAction(id));
    }
  }, [id, dispatch]);

  useEffect(() => {
    if(window.scrollY !== 0) {
      window.scrollTo(0, 0);
    }
  }, [id]);

  if(isLoading) {
    return <LoadingScreen/>;
  }

  const points = [...nearbyList];
  if(offer) {
    points.push(offer);
  }

  const bookmarkBtnClass = cn({
    'property__bookmark-button': true,
    'property__bookmark-button--active': offer?.isFavorite,
    'button': true,
  });
  const avatarWrapperClass = cn({
    'property__avatar-wrapper': true,
    'property__avatar-wrapper--pro': offer?.host?.isPro,
    'user__avatar-wrapper': true,
  });
  return (
    <div className="page">
      <Header/>
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
              {offer?.isPremium && (
                <div className="property__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {offer?.title}
                </h1>
                <button className={bookmarkBtnClass} type="button">
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
                <span className="property__rating-value rating__value">{offer?.rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {offer?.type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {offer?.bedrooms} {offer?.bedrooms === 1 ? 'Bedroom' : 'Bedrooms'}
                </li>
                <li className="property__feature property__feature--adults">
                  Max {offer?.maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro; {offer?.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {offer?.goods && offer?.goods.map((good) => (
                    <li key={good} className="property__inside-item">
                      {good}
                    </li>
                  ))}
                </ul>
              </div>
              {offer?.host && (
                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div className={avatarWrapperClass}>
                      <img
                        className="property__avatar user__avatar"
                        src={offer.host.avatarUrl}
                        width="74"
                        height="74"
                        alt="Host avatar"
                      />
                    </div>
                    <span className="property__user-name">
                      {offer.host.name}
                    </span>
                    {offer.host.isPro && (
                      <span className="property__user-status">
                        Pro
                      </span>
                    )}
                  </div>
                  <div className="property__description">
                    <p className="property__text">
                      {offer.description}
                    </p>
                  </div>
                </div>
              )}
              <section className="property__reviews reviews">
                <Reviews/>
              </section>
            </div>
          </div>
          {points.length !== 0 && offer?.city && (
            <section className="property__map map">
              <Map points={points} city={offer?.city} activePoint={activePoint}/>
            </section>
          )}
        </section>
        <div className="container">
          {nearbyList.length !== 0 && (
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <OffersList
                offers={nearbyList}
                cardClasses={propertyClasses}
                onCardHover={handleCardHoverOn}
                onCardHoverOff={handleCardHoverOff}
                offerListClass="near-places__list"
              />
            </section>
          )}
        </div>
      </main>
    </div>
  );
}

export default PropertyScreen;

