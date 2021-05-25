import React from 'react';
import {render, screen, cleanup} from '@testing-library/react';
import App from './App';

import axios from 'axios';

import {ClubDetail} from './types/clubtypes';

const wokingClubDetail: ClubDetail = {
  clubId: -1,
  clubName: 'Woking FC',
  clubAddress: 'an address',
  clubLogo: null,
  clubUrl: 'woking-fc',
  clubActive: true,
};

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
beforeEach(() => {
  jest.clearAllMocks();
});

afterEach(cleanup);

test('renders learn react link', async () => {
  mockedAxios.get.mockResolvedValue({
    data: wokingClubDetail,
    status: 200,
  });
  render(<App />);
  const linkElement = await screen.findByText(/woking/i);
  expect(linkElement).toBeInTheDocument();
});
