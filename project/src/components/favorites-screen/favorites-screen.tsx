import PlaceCard from '../place-card/place-card';
import {AuthorizationStatus} from '../../const';
import Header from '../header/header';

const favoritesClasses = {
  article: 'favorites__card',
  imageWrapper: 'favorites__image-wrapper',
  info: 'favorites__card-info',
};

function FavoritesScreen(): JSX.Element {
  return (
    <div className="page">
      <Header authorizationStatus={AuthorizationStatus.Auth}/>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="/">
                      <span>Amsterdam</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  <PlaceCard cardClasses={favoritesClasses}/>
                  <PlaceCard cardClasses={favoritesClasses}/>
                </div>
              </li>

              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="/">
                      <span>Cologne</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  <PlaceCard cardClasses={favoritesClasses}/>
                </div>
              </li>
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
