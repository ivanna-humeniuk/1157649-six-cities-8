import cn from 'classnames';
import {useCallback} from 'react';
import {SortOptions} from '../../const';

type SortOptionProps = {
  option: SortOptions;
  currentOption: SortOptions;
  onOptionClick: (option: SortOptions) => void;
};

function SortOption(props: SortOptionProps):JSX.Element {
  const {option, currentOption, onOptionClick} = props;

  const handleOptionClick = useCallback(() => {
    onOptionClick(option);
  }, [option, onOptionClick]);

  const placesOptionClass = cn({
    'places__option': true,
    'places__option--active': currentOption === option,
  });

  return (
    <li className={placesOptionClass}
      key={option}
      onClick={handleOptionClick}
      tabIndex={0}
    >
      {option}
    </li>
  );
}

export default SortOption;
