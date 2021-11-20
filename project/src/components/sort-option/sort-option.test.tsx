import {render, screen} from '@testing-library/react';
import SortOption from './sort-option';
import { SortOptions } from '../../const';


describe('Component: SortOptionItem', () => {

  it('should render correctly with same current sort option', () => {
    const fakeFunction = jest.fn();
    const {container} = render(
      <SortOption
        option={SortOptions.Popular}
        currentOption={SortOptions.Popular}
        onOptionClick={fakeFunction}
      />,
    );

    expect(screen.getByText(SortOptions.Popular)).toBeInTheDocument();
    expect(container.querySelector('.places__option')).toBeInTheDocument();
    expect(container.querySelector('.places__option--active')).toBeInTheDocument();

  });

  it('should render correctly with other current sort option', () => {
    const fakeFunction = jest.fn();
    const {container} = render(
      <SortOption
        option={SortOptions.Popular}
        currentOption={SortOptions.FromHighToLowPrice}
        onOptionClick={fakeFunction}
      />,
    );

    expect(screen.getByText(SortOptions.Popular)).toBeInTheDocument();
    expect(container.querySelector('.places__option')).toBeInTheDocument();
    expect(container.querySelector('.places__option--active')).not.toBeInTheDocument();

  });
});
