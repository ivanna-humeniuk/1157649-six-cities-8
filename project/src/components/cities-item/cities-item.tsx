import cn from 'classnames';
import {useCallback} from 'react';
type CitiesItemProps = {
  city: string,
  activeCity: string,
  onActiveCity: (city:string) => void
}

function CitiesItem(props: CitiesItemProps) :JSX.Element {
  const {city, activeCity, onActiveCity} = props;
  const locationItemClasses= cn({
    'locations__item-link': true,
    'tabs__item': true,
    'tabs__item--active': activeCity === city,
  });

  const handleActiveCity = useCallback((event: React.MouseEvent) => {
    event.preventDefault();
    return onActiveCity(city);
  }, [onActiveCity, city]);

  return (
    <li className="locations__item">
      <a className={locationItemClasses} onClick={handleActiveCity} href="/">
        <span>{city}</span>
      </a>
    </li>
  );
}

export default CitiesItem;
