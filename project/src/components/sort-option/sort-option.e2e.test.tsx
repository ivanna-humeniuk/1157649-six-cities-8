import {render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SortOption from './sort-option';
import { SortOptions } from '../../const';


describe('Component: SortOptionItem', () => {
  it('should call function if user click on option', () => {
    const fakeFunction = jest.fn();
    const {container} = render(
      <SortOption
        option={SortOptions.Popular}
        currentOption={SortOptions.FromHighToLowPrice}
        onOptionClick={fakeFunction}
      />,
    );

    const oneOption = container.querySelector('.places__option');
    userEvent.click(oneOption);
    expect(fakeFunction).toBeCalled();
  });
});
