import { useEffect, useState, MutableRefObject } from 'react';
import {Map, TileLayer} from 'leaflet';
import {City} from '../types/offers';
import {MAP_LAYER, MAP_LAYER_OPTIONS} from '../const';

function useMap(mapRef: MutableRefObject<HTMLElement | null>, city: City): Map | null {
  const [map, setMap] = useState<Map | null>(null);

  useEffect(() => {
    if(mapRef.current !== null && map === null) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: city.location.latitude,
          lng: city.location.longitude,
        },
        zoom: city.location.zoom,
        zoomControl: false,
      });

      const layer = new TileLayer(MAP_LAYER, MAP_LAYER_OPTIONS);
      instance.addLayer(layer);
      instance.scrollWheelZoom.disable();
      setMap(instance);
    }

  }, [mapRef, map, city]);

  return map;
}

export default useMap;
