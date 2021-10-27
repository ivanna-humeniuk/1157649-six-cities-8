import cn from 'classnames';
import {connector, PropsFromRedux} from './ main-screen-connected';
import Header from '../header/header';
import {AuthorizationStatus, CITIES} from '../../const';
import OffersList from '../offers-list/offers-list';
import Map from '../map/map';
import CitiesList from '../cities-list/cities-list';
import useActivePoint from '../../hooks/useActivePoint';

const mainClasses = {
  article: 'cities__place-card',
  imageWrapper: 'cities__image-wrapper',
};

function MainScreen(props: PropsFromRedux): JSX.Element {
  const { filteredOffers, city, handleActiveCity } = props;
  const { activePoint, handleCardHoverOff, handleCardHoverOn } = useActivePoint(0);

  const mainPageClasses = cn({
    'page__main': true,
    'page__main--index': true,
    'page__main--index-empty': filteredOffers.length === 0,
  });

  const citiesContainerClasses = cn({
    'cities__places-container': true,
    'cities__places-container--empty': filteredOffers.length === 0,
    'container': true,
  });

  return (
    <div className="page page--gray page--main">
      <Header authorizationStatus={AuthorizationStatus.Auth}/>
      <main className={mainPageClasses}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList activeCity={city} cities={CITIES} onActivateCity={handleActiveCity}/>
          </section>
        </div>
        <div className="cities">
          <div className={citiesContainerClasses}>
            {filteredOffers.length !== 0 ? (
              <>
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">{filteredOffers.length} places to stay in {city}</b>
                  <form className="places__sorting" action="#" method="get">
                    <span className="places__sorting-caption">Sort by</span>
                    <span className="places__sorting-type" tabIndex={0}>
                      Popular
                      <svg className="places__sorting-arrow" width="7" height="4">
                        <use xlinkHref="#icon-arrow-select"/>
                      </svg>
                    </span>
                    <ul className="places__options places__options--custom places__options--opened">
                      <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                      <li className="places__option" tabIndex={0}>Price: low to high</li>
                      <li className="places__option" tabIndex={0}>Price: high to low</li>
                      <li className="places__option" tabIndex={0}>Top rated first</li>
                    </ul>
                  </form>
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
export {MainScreen};
export default connector(MainScreen);
