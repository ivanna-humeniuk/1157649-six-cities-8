import {render} from '@testing-library/react';
import Map from './map';
import {CITY_AMSTERDAM, mockOffers} from '../../mocks/offers';

describe('Component: Map', () => {
  const activeCity = CITY_AMSTERDAM;
  const activePoint = 2;

  it('should render correctly in main screen', () => {
    const {container} = render(
      <Map city={activeCity} points={mockOffers} activePoint={activePoint}/>,
    );

    expect(container.querySelector('.map-container')).toBeInTheDocument();
    expect(container.querySelector('.property__map')).not.toBeInTheDocument();
  });
});
