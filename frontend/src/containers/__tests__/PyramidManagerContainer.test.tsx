import {render, screen, cleanup} from '@testing-library/react';
import PyramidManagerContainer from '../PyramidManagerContainer';
//import axiosMock from 'axios';
import axios from 'axios';

import {ClubDetail} from '../../types/clubtypes';

const wokingClubDetail: ClubDetail = {
  ClubID: -1,
  ClubName: 'Woking FC',
  ClubAddress: 'an address',
  ClubLogo: null,
  UrlFriendlyName: 'woking-fc',
  Active: true,
  MinorClub: true,
  DisableAutoUpdate: true,
};

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
beforeEach(() => {
  jest.clearAllMocks();
});

afterEach(cleanup);

describe('PyramidManager Container', () => {
  test('renders basic pyramid manager', async () => {
    // render is from react testing library, so don't need reactDOM.render if just using jest
    // can add component as second parameter but defaults to div
    mockedAxios.get.mockResolvedValue({
      data: wokingClubDetail,
      status: 200,
    });
    render(<PyramidManagerContainer />);
    expect(await screen.findByText(/should not get here/i)).toBeInTheDocument();
    expect(mockedAxios.get).toHaveBeenCalledTimes(1);
  });
});
