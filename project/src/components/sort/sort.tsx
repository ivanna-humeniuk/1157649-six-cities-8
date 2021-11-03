import {useCallback, useEffect, useRef, useState} from 'react';
import cn from 'classnames';
import {SortOptions} from '../../const';
import SortOption from '../sort-option/sort-option';

type SortProps = {
  sortedOption: SortOptions;
  handleSortedOffers: (option: SortOptions) => void;
};

function Sort(props: SortProps):JSX.Element {
  const {sortedOption, handleSortedOffers} = props;
  const [openOptions, setOpenOptions] = useState<boolean>(false);
  const sortRef = useRef<HTMLSpanElement>(null);
  const options = Object.values(SortOptions);

  const handleOptionsClick = useCallback(() => {
    setOpenOptions((prevState) => !prevState);
  }, [setOpenOptions]);

  const handleOptionClick = useCallback((option: SortOptions) => {
    if(option !== sortedOption) {
      handleSortedOffers(option);
    }
    setOpenOptions((prevState) => !prevState);
  }, [sortedOption, handleSortedOffers]);

  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      if(sortRef.current &&
        sortRef.current !== event.target &&
        sortRef.current.nextSibling === event.target) {
        setOpenOptions((prevState) => !prevState);
      }
    }
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [sortRef]);

  const placesOptionsClass = cn({
    'places__options': true,
    'places__options--custom': true,
    'places__options--opened': openOptions,
  });

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span ref={sortRef}
        className="places__sorting-type"
        tabIndex={0}
        onClick={handleOptionsClick}
      >
        &nbsp;{sortedOption}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"/>
        </svg>
      </span>
      <ul className={placesOptionsClass}>
        {options.map((option) => (
          <SortOption
            key={option}
            option={option}
            currentOption={sortedOption}
            onOptionClick={handleOptionClick}
          />
        ))}
      </ul>
    </form>
  );
}

export default Sort;
