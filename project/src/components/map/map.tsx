import {useEffect, useRef} from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {City, Offer} from '../../types/offers';
import useMap from '../../hooks/useMap';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../../const';

type MapProps = {
  city: City,
  points: Offer[],
  activePoint: number,
}

function Map(props: MapProps): JSX.Element {
  const {city, points, activePoint} = props;
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [27, 39],
    iconAnchor: [13.5, 39],
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_CURRENT,
    iconSize: [27, 39],
    iconAnchor: [13.5, 39],
  });

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        leaflet.marker({
          lat: point.location.latitude,
          lng: point.location.longitude,
        }, {
          icon: activePoint !== undefined && activePoint === point.id ? currentCustomIcon : defaultCustomIcon,
        })
          .addTo(map);
      });
    }
  },[map, points, activePoint, currentCustomIcon, defaultCustomIcon]);

  return(
    <div style={{height: '600px'}} ref={mapRef}/>
  );
}
export default Map;
