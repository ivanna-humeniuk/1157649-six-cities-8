import {useEffect, useRef, useState} from 'react';
import leaflet, {Marker} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {City, Offer} from '../../types/offers';
import useMap from '../../hooks/useMap';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT, POINT_SIZE, POINT_ANCHOR} from '../../const';
import './map.css';

type MapProps = {
  city: City,
  points: Offer[],
  activePoint?: number,
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
  const [markers, setMarkers] = useState<Marker[]>([]);

  useEffect(() => {
    if (map) {
      if(markers.length > 0) {
        for(let i = 0; i < markers.length ; i++) {
          /* eslint-disable no-console */
          console.log('remove');
          map.removeLayer(markers[i]);
        }
      }
      points.forEach((point) => {
        /* eslint-disable no-console */
        console.log(point);
        const marker = leaflet.marker({
          lat: point.location.latitude,
          lng: point.location.longitude,
        }, {
          icon: activePoint !== undefined && activePoint === point.id ? currentCustomIcon : defaultCustomIcon,
        }).addTo(map);
        setMarkers((prevMarkers) => {
          if(prevMarkers.length === 0) {
            return [marker];
          }
          return [...prevMarkers, marker];
        });
      });
    }
  },[map, points, activePoint]);

  return(
    <div className="map-container" ref={mapRef}/>
  );
}
export default Map;
