import cn from 'classnames';
import {useEffect, useMemo} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import OfferCard from '../offer-card/offer-card';
import Header from '../header/header';
import {Offer} from '../../types/offers';
import './favorites-screen.css';
import {getFavoriteOffers, getLoadingFavoriteStatus} from '../../store/favorite-offers-data/selectors';
import {fetchFavoriteOffersAction} from '../../store/api-actions';
import {CITIES} from '../../const';
import {Listing} from '../../types/listings';
import LoadingScreen from '../loading-screen/loading-screen';

const favoritesClasses = {
  article: 'favorites__card',
  imageWrapper: 'favorites__image-wrapper',
  info: 'favorites__card-info',
};


function FavoritesScreen(): JSX.Element {
  const favoriteOffers = useSelector(getFavoriteOffers);
  const isLoading = useSelector(getLoadingFavoriteStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFavoriteOffersAction());
  }, [dispatch]);

  const listings =  useMemo(() => {
    if(favoriteOffers.length !== 0) {
      return CITIES.reduce((acc: Listing[], cur) => (
        [
          ...acc,
          {
            city: cur,
            offers: favoriteOffers.filter((item) => item.city.name === cur),
          },
        ]
      ), []);
    }
    return [];
  }, [favoriteOffers]);

  if(isLoading) {
    return <LoadingScreen/>;
  }

  const pageClass = cn({
    'page': true,
    'page--favorites-empty': listings.length === 0,
  });

  const mainPageClass = cn({
    'page__main': true,
    'page__main--favorites': true,
    'page__main--favorites-empty': listings.length === 0,
  });

  return (
    <div className={pageClass}>
      <Header/>
      <main className={mainPageClass}>
        <div className="page__favorites-container container">
          {listings.length !== 0 ? (
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {listings.map((listing) => {
                  if (listing.offers.length === 0) {
                    return false;
                  }
                  return (
                    <li className="favorites__locations-items" key={listing.city}>
                      <div className="favorites__locations locations locations--current">
                        <div className="locations__item">
                          <a className="locations__item-link" href="/">
                            <span>{listing.city}</span>
                          </a>
                        </div>
                      </div>
                      <div className="favorites__places">
                        {listing.offers.map((place: Offer)=> (
                          <OfferCard key={place.id} place={place} cardClasses={favoritesClasses}/>
                        ))}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </section>
          ):(
            <section className="favorites favorites--empty">
              <h1 className="visually-hidden">Favorites (empty)</h1>
              <div className="favorites__status-wrapper">
                <b className="favorites__status">Nothing yet saved.</b>
                <p className="favorites__status-description">Save properties to narrow down search or plan your future trips.</p>
              </div>
            </section>
          )}
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </a>
      </footer>
    </div>
  );
}

export default FavoritesScreen;
