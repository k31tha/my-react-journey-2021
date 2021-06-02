import React from 'react';
import {render, screen, cleanup} from '@testing-library/react';
import App from './App';

import axios from 'axios';

import {ClubDetail} from './types/clubtypes';

const wokingClubDetail: Array<ClubDetail> = [
  {
    clubId: -1,
    clubName: 'Woking FC',
    clubAddress: 'an address',
    clubLogo: null,
    clubUrl: 'woking-fc',
    clubActive: true,
  },
  {
    clubId: -2,
    clubName: 'Sutton UTD',
    clubAddress: 'an address',
    clubLogo: null,
    clubUrl: 'sutton-utd',
    clubActive: false,
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
  expect(await screen.findAllByText(/woking/i)).toHaveLength(2);
  expect(mockedAxios.get).toHaveBeenCalledTimes(1);
});
