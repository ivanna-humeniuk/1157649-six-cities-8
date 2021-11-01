import cn from 'classnames';
import {useCallback} from 'react';

type CitiesItemProps = {
  city: string;
  activeCity: string;
  onActivateCity: (city:string) => void;
}

function CitiesItem(props: CitiesItemProps) :JSX.Element {
  const {city, activeCity, onActivateCity} = props;
  const locationItemClass= cn({
    'locations__item-link': true,
    'tabs__item': true,
    'tabs__item--active': activeCity === city,
  });

  const handleActiveCity = useCallback((event: React.MouseEvent) => {
    event.preventDefault();
    onActivateCity(city);
  }, [onActivateCity, city]);

  return (
    <li className="locations__item">
      <a className={locationItemClass} onClick={handleActiveCity} href="/">
        <span>{city}</span>
      </a>
    </li>
  );
}

export default CitiesItem;
