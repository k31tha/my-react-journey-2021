import {cleanup} from '@testing-library/react';
import {getClubIndex, filterByIndex} from '../filterClubs';
import {ClubDetail} from '../../../types/clubtypes';
const clubs: Array<ClubDetail> = [
  {
    clubName: 'Knaphill',
    clubUrl: 'knaphill-fc',
    clubId: 1,
    clubActive: true,
  },
  {
    clubName: 'Sutton Utd',
    clubUrl: 'sutton-utd',
    clubId: 2,
    clubActive: false,
  },
  {
    clubName: 'Solihull Moors',
    clubUrl: 'solihull-moors',
    clubId: 3,
    clubActive: true,
  },
];
describe('filterClubByIndex', () => {
  afterEach(cleanup);

  test('check count of distinct club indexes', () => {
    const filteredClubs = getClubIndex(clubs);
    //console.log(filteredClubs);
    expect(filteredClubs.length).toBe(2);
    //expect(getByText('Search by:')).toBeInTheDocument();
  });

  test('check get clubs for a specific index', () => {
    const filteredClubs = filterByIndex('S', clubs);
    //console.log(filteredClubs);
    expect(filteredClubs.length).toBe(2);
    //expect(getByText('Search by:')).toBeInTheDocument();
  });
});
