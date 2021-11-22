import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
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
  it('should render correctly', () => {
    const {container} = render(
      <Provider store={store}>
        <Router history={history}>
          <Sort />
        </Router>
      </Provider>);

    expect(screen.getByText(/Sort by/i)).toBeInTheDocument();
    expect(container.querySelector('.places__options')).toBeInTheDocument();
  });
});
