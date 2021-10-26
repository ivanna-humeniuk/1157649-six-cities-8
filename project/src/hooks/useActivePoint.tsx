import {useState, useCallback} from 'react';

function useActivePoint(defaultPoint: number): {
  activePoint: number,
  handleCardHoverOn: (id: number) => void,
  handleCardHoverOff: () => void,
} {
  const [activePoint, setActivePoint] = useState(defaultPoint);

  const handleCardHoverOn = useCallback( (id: number) => {
    setActivePoint(id);
  }, []);

  const handleCardHoverOff = useCallback(() => {
    setActivePoint(defaultPoint);
  }, [defaultPoint]);

  return {
    activePoint,
    handleCardHoverOn,
    handleCardHoverOff,
  };
}

export default useActivePoint;
