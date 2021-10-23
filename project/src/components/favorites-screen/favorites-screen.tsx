import OfferCard from '../offer-card/offer-card';
import {AuthorizationStatus} from '../../const';
import Header from '../header/header';
import {Offer} from '../../types/offers';
import {Listing} from '../../types/listings';
import './favorites-screen.css';

const favoritesClasses = {
  article: 'favorites__card',
  imageWrapper: 'favorites__image-wrapper',
  info: 'favorites__card-info',
};

type FavoritesScreenProps = {
  listings: Listing[],
}

function FavoritesScreen({listings}: FavoritesScreenProps): JSX.Element {
  return (
    <div className="page">
      <Header authorizationStatus={AuthorizationStatus.Auth}/>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {listings.map((listing) => (
                <li className="favorites__locations-items" key={listing.id}>
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <a className="locations__item-link" href="/">
                        <span>{listing.title}</span>
                      </a>
                    </div>
                  </div>
                  <div className="favorites__places">
                    {listing.places.map((place: Offer)=> (
                      <OfferCard key={place.id} place={place} cardClasses={favoritesClasses}/>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </section>
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
