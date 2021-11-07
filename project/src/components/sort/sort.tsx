import {useCallback, useEffect, useRef, useState} from 'react';
import cn from 'classnames';
import {SortOptions} from '../../const';
import SortOption from '../sort-option/sort-option';

type SortProps = {
  sortedOption: SortOptions;
  onSortedOffers: (option: SortOptions) => void;
};

function Sort(props: SortProps):JSX.Element {
  const {sortedOption, onSortedOffers} = props;
  const [openOptions, setOpenOptions] = useState<boolean>(false);
  const sortRef = useRef<HTMLSpanElement>(null);
  const options = Object.values(SortOptions);

  const handleOptionsClick = useCallback(() => {
    setOpenOptions((prevState) => !prevState);
  }, [setOpenOptions]);

  const handleOptionClick = useCallback((option: SortOptions) => {
    if(option !== sortedOption) {
      onSortedOffers(option);
    }
    setOpenOptions((prevState) => !prevState);
  }, [sortedOption, onSortedOffers]);

  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      if(sortRef.current && !sortRef.current.contains(event.target as Node)) {
        setOpenOptions(false);
      }
    }
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [sortRef]);

  useEffect(() => {
    function closeSortByEscape(event: KeyboardEvent) {
      if(event.code === 'Escape') {
        setOpenOptions(false);
      }
    }
    document.addEventListener('keydown', closeSortByEscape);
    return () => {
      document.removeEventListener('keydown', closeSortByEscape);
    };
  });

  const placesOptionsClass = cn({
    'places__options': true,
    'places__options--custom': true,
    'places__options--opened': openOptions,
  });

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span ref={sortRef}>
        <span
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
      </span>
    </form>
  );
}

export default Sort;
