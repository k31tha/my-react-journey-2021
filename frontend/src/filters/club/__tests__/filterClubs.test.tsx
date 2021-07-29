import {cleanup} from '@testing-library/react';
import {getClubIndex, filterByIndex} from '../filterClubs';
import {ClubDetail} from '../../../types/clubtypes';
const clubs: Array<ClubDetail> = [
  {
    ClubName: 'Knaphill',
    UrlFriendlyName: 'knaphill-fc',
    ClubID: 1,
    Active: true,
    MinorClub: false,
    DisableAutoUpdate: false,
  },
  {
    ClubName: 'Sutton Utd',
    UrlFriendlyName: 'sutton-utd',
    ClubID: 2,
    Active: false,
    MinorClub: false,
    DisableAutoUpdate: false,
  },
  {
    ClubName: 'Solihull Moors',
    UrlFriendlyName: 'solihull-moors',
    ClubID: 3,
    Active: true,
    MinorClub: false,
    DisableAutoUpdate: false,
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
