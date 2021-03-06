import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {render} from '@testing-library/react';
import {Provider} from 'react-redux';
import userEvent from '@testing-library/user-event';
import {configureMockStore} from '@jedmao/redux-mock-store';
import Sort from './sort';
import {NameSpace, SortOptions} from '../../const';

const mockStore = configureMockStore();
const history = createMemoryHistory();

describe('Component: Sort', () => {
  const store = mockStore({
    [NameSpace.Offers]: {
      sortedOption : SortOptions.Popular,
    },
  });

  it('should open sort list when user click on it and close if user click choose sort option', () => {
    const {container} = render(
      <Provider store={store}>
        <Router history={history}>
          <Sort />
        </Router>
      </Provider>);

    expect(container.querySelector('.places__options--opened')).not.toBeInTheDocument();
    userEvent.click(container.querySelector('.places__sorting-type'));
    expect(container.querySelector('.places__options--opened')).toBeInTheDocument();

    const oneOption = container.querySelector('.places__option');
    userEvent.click(oneOption);
    expect(container.querySelector('.places__options--opened')).not.toBeInTheDocument();
  });
});
