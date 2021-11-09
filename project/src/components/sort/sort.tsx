import cn from 'classnames';
import {useCallback, useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {SortOptions} from '../../const';
import SortOption from '../sort-option/sort-option';
import {setSortedOption} from '../../store/actions';
import {getSortedOption} from '../../store/offers-data/selectors';

function Sort():JSX.Element {
  const sortedOption = useSelector(getSortedOption);
  const [openOptions, setOpenOptions] = useState<boolean>(false);
  const sortRef = useRef<HTMLSpanElement>(null);
  const options = Object.values(SortOptions);
  const dispatch = useDispatch();

  const handleOptionsClick = useCallback(() => {
    setOpenOptions((prevState) => !prevState);
  }, [setOpenOptions]);

  const handleOptionClick = useCallback((option: SortOptions) => {
    if(option !== sortedOption) {
      dispatch(setSortedOption(option));
    }
    setOpenOptions((prevState) => !prevState);
  }, [sortedOption, dispatch]);

  useEffect(() => {
    if (!openOptions) {return;}
    function handleOutsideClick(event: MouseEvent) {
      if(sortRef.current && !sortRef.current.contains(event.target as Node)) {
        setOpenOptions(false);
      }
    }
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [sortRef, openOptions]);

  useEffect(() => {

    if (!openOptions) {return;}
    function closeSortByEscape(event: KeyboardEvent) {
      if(event.code === 'Escape') {
        setOpenOptions(false);
      }
    }
    document.addEventListener('keydown', closeSortByEscape);
    return () => {
      document.removeEventListener('keydown', closeSortByEscape);
    };
  }, [openOptions]);

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
