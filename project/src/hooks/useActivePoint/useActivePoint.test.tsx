import {renderHook, act} from '@testing-library/react-hooks';
import useActivePoint from './useActivePoint';


describe('Hook: useActivePoint', () => {

  it('should return array with 3 elements', () => {

    const defaultPoint = 0;
    const {result} = renderHook(() =>
      useActivePoint(defaultPoint),
    );

    const [activePoint, handleCardHoverOn, handleCardHoverOff] = result.current;

    expect(result.current).toHaveLength(3);
    expect(activePoint).toEqual(defaultPoint);
    expect(handleCardHoverOn).toBeInstanceOf(Function);
    expect(handleCardHoverOff).toBeInstanceOf(Function);
  });

  it('should be correctly change state', () => {

    const defaultPoint = 0;
    const {result} = renderHook(() =>
      useActivePoint(defaultPoint),
    );

    const [,handleCardHoverOn] = result.current;
    act(() => handleCardHoverOn(5));
    const [activePointOn] = result.current;
    expect(activePointOn).toBe(5);

    const [,,handleCardHoverOff] = result.current;
    act(() => handleCardHoverOff());
    const [activePointOff] = result.current;
    expect(activePointOff).toBe(defaultPoint);

  });
});
