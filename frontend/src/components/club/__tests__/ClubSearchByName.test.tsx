import {render, cleanup} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ClubSearchByName from '../ClubSearchByName';

describe('ClubSearchByName', () => {
  afterEach(cleanup);

  test('shows the search box', () => {
    const spy = jest.fn();
    const {getByText} = render(
      <ClubSearchByName nameSearch={''} handleNameSearch={spy}>
        {'Search by:'}
      </ClubSearchByName>,
    );
    expect(getByText('Search by:')).toBeInTheDocument();
  });

  test('shows the search box with an initial value', () => {
    const spy = jest.fn();
    const {queryByLabelText} = render(
      <ClubSearchByName nameSearch={'Woking'} handleNameSearch={spy}>
        {'Search by:'}
      </ClubSearchByName>,
    );
    expect((queryByLabelText('club-search') as HTMLInputElement).value).toBe(
      'Woking',
    );
  });

  test('shows the search box after change', () => {
    const spy = jest.fn();
    const clubName = 'Woking';
    const {getByLabelText} = render(
      <ClubSearchByName nameSearch={clubName} handleNameSearch={spy}>
        {'Search by:'}
      </ClubSearchByName>,
    );
    const input = getByLabelText('club-search') as HTMLInputElement;
    expect(input).toHaveValue('Woking');
    //fireEvent.change(input, {target: {value: 'Knaphill'}});
    userEvent.type(getByLabelText('club-search'), 'Knaphill');
    expect(spy).toHaveBeenCalledTimes(8);
    //const newinput = getByLabelText('club-search') as HTMLInputElement;
    //expect(newinput).toHaveValue('Knaphill1');
  });
});
