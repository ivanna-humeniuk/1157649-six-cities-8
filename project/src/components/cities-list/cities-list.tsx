import CitiesItem from '../cities-item/cities-item';

type CitiesListProps = {
  activeCity: string;
  cities: string[];
  onActivateCity: (city: string) => void;
}

function CitiesList(props: CitiesListProps): JSX.Element {
  const {cities, activeCity, onActivateCity} = props;
  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => (
        <CitiesItem city={city} activeCity={activeCity} key={city} onActivateCity={onActivateCity}/>
      ))}
    </ul>
  );
}

export default CitiesList;
