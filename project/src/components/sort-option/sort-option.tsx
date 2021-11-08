import cn from 'classnames';
import React, {useCallback} from 'react';
import {SortOptions} from '../../const';

type SortOptionProps = {
  option: SortOptions;
  currentOption: SortOptions;
  onOptionClick: (option: SortOptions) => void;
};

function SortOption(props: SortOptionProps):JSX.Element {
  const {option, currentOption, onOptionClick} = props;

  const handleOptionClick = useCallback((event: React.MouseEvent) => {
    event.stopPropagation();
    onOptionClick(option);
  }, [option, onOptionClick]);

  const placesOptionClass = cn({
    'places__option': true,
    'places__option--active': currentOption === option,
  });

  return (
    <li className={placesOptionClass}
      onClick={handleOptionClick}
      tabIndex={0}
    >
      {option}
    </li>
  );
}

export default SortOption;
