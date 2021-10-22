import {useEffect, useRef} from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {City, Offer} from '../../types/offers';
import useMap from '../../hooks/useMap';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT, POINT_SIZE, POINT_ANCHOR} from '../../const';
import './map.css';

type MapProps = {
  city: City,
  points: Offer[],
  activePoint: number,
}

const defaultCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: POINT_SIZE,
  iconAnchor: POINT_ANCHOR,
});

const currentCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: POINT_SIZE,
  iconAnchor: POINT_ANCHOR,
});

function Map(props: MapProps): JSX.Element {
  const {city, points, activePoint} = props;
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

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
  },[map, points, activePoint]);

  return(
    <div className="map" ref={mapRef}/>
  );
}
export default Map;
