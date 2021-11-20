import {useState, useCallback} from 'react';

type UseActiveReturnProps = [
  activePoint: number,
  handleCardHoverOn: (id: number) => void,
  handleCardHoverOff: () => void,
]

function useActivePoint(defaultPoint: number): UseActiveReturnProps {
  const [activePoint, setActivePoint] = useState(defaultPoint);

  const handleCardHoverOn = useCallback( (id: number) => {
    setActivePoint(id);
  }, []);

  const handleCardHoverOff = useCallback(() => {
    setActivePoint(defaultPoint);
  }, [defaultPoint]);

  return [
    activePoint,
    handleCardHoverOn,
    handleCardHoverOff,
  ];
}

export default useActivePoint;
