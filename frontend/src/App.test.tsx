import React from 'react';
import {render, screen, cleanup} from '@testing-library/react';
import App from './App';

import axios from 'axios';

import {ClubDetail} from './types/clubtypes';

const wokingClubDetail: Array<ClubDetail> = [
  {
    ClubID: -1,
    ClubName: 'Woking FC',
    ClubAddress: 'an address',
    ClubLogo: null,
    UrlFriendlyName: 'woking-fc',
    Active: true,
    MinorClub: false,
    DisableAutoUpdate: false,
  },
  {
    ClubID: -2,
    ClubName: 'Sutton UTD',
    ClubAddress: 'an address',
    ClubLogo: null,
    UrlFriendlyName: 'sutton-utd',
    Active: false,
    MinorClub: false,
    DisableAutoUpdate: false,
  },
];

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
beforeEach(() => {
  jest.clearAllMocks();
});

afterEach(cleanup);

test('app entry page', async () => {
  mockedAxios.get.mockResolvedValue({
    data: wokingClubDetail,
    status: 200,
  });
  render(<App />);
  //expect(await screen.findAllByText(/woking/i)).toBeInTheDocument();
  expect(await screen.findAllByText(/woking/i)).toHaveLength(1);
  expect(mockedAxios.get).toHaveBeenCalledTimes(1);
});
