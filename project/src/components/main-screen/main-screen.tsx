import cn from 'classnames';
import {useEffect} from 'react';
import Header from '../header/header';
import {CITIES} from '../../const';
import OffersList from '../offers-list/offers-list';
import Map from '../map/map';
import CitiesList from '../cities-list/cities-list';
import useActivePoint from '../../hooks/useActivePoint';
import LoadingScreen from '../loading-screen/loading-screen';
import Sort from '../sort/sort-connected';
import {Offer} from '../../types/offers';

export type MainScreenProps = {
  filteredOffers: Offer[];
  city: string;
  isDataLoaded: boolean;
  handleActiveCity: (city: string) => void;
  getOffers: () => void;
  authorizationStatus: boolean;
};


const mainClasses = {
  article: 'cities__place-card',
  imageWrapper: 'cities__image-wrapper',
};

function MainScreen(props: MainScreenProps): JSX.Element {
  const { filteredOffers, city, isDataLoaded, authorizationStatus, handleActiveCity, getOffers } = props;
  const { activePoint, handleCardHoverOff, handleCardHoverOn } = useActivePoint(0);

  useEffect(() => {
    getOffers();
  }, [getOffers]);

  if(!isDataLoaded) {
    return <LoadingScreen/>;
  }

  const mainPageClass = cn({
    'page__main': true,
    'page__main--index': true,
    'page__main--index-empty': filteredOffers.length === 0,
  });

  const citiesContainerClass = cn({
    'cities__places-container': true,
    'cities__places-container--empty': filteredOffers.length === 0,
    'container': true,
  });

  return (
    <div className="page page--gray page--main">
      <Header authorizationStatus={authorizationStatus}/>
      <main className={mainPageClass}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList activeCity={city} cities={CITIES} onActivateCity={handleActiveCity}/>
          </section>
        </div>
        <div className="cities">
          <div className={citiesContainerClass}>
            {filteredOffers.length !== 0 ? (
              <>
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">{filteredOffers.length} places to stay in {city}</b>
                  <Sort/>
                  <OffersList
                    offers={filteredOffers}
                    cardClasses={mainClasses}
                    onCardHover={handleCardHoverOn}
                    onCardHoverOff={handleCardHoverOff}
                    offerListClass="cities__places-list"
                  />
                </section>
                <div className="cities__right-section">
                  <section className="cities__map map">
                    <Map city={filteredOffers[0].city} points={filteredOffers} activePoint={activePoint}/>
                  </section>
                </div>
              </>
            ) : (
              <>
                <section className="cities__no-places">
                  <div className="cities__status-wrapper tabs__content">
                    <b className="cities__status">No places to stay available</b>
                    <p className="cities__status-description">We could not find any property available at the moment in Dusseldorf</p>
                  </div>
                </section>
                <div className="cities__right-section"></div>
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
export default MainScreen;
