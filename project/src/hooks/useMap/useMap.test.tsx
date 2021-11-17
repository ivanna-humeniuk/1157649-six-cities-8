import {renderHook} from '@testing-library/react-hooks';
import useMap from './useMap';
import { useRef } from 'react';
import {city} from '../../mocks/offers';

describe('Hook: useMap', () => {
  it('should render correctly', () => {
    const mapRef = renderHook(() => useRef(null)).result.current;

    const {result} = renderHook(() => useMap(mapRef, city));
    expect(result).toBeInstanceOf(Object);
  });
});
