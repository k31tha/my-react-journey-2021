import {
  render,
  screen,
  waitForElementToBeRemoved,
  cleanup,
} from '@testing-library/react';
import ClubDetailsContainer from '../ClubDetailsContainer';
//import axiosMock from 'axios';
import axios from 'axios';

import {ClubDetail} from '../../types/clubtypes';

const wokingClubDetail: ClubDetail = {
  clubId: -1,
  clubName: 'Woking FC',
  clubAddress: 'an address',
  clubLogo: null,
  clubUrl: 'woking-fc',
};

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
beforeEach(() => {
  jest.clearAllMocks();
});

afterEach(cleanup);

describe('ClubDetails Container', () => {
  test('renders basic club details for known club', async () => {
    // render is from react testing library, so don't need reactDOM.render if just using jest
    // can add component as second parameter but defaults to div
    mockedAxios.get.mockResolvedValue({
      data: wokingClubDetail,
    });
    render(<ClubDetailsContainer clubUrl={'woking-fc'} />);
    //await waitFor(() => screen.getByTestId('clubdetails'));
    //expect(screen.getByText(/woking/i)).toBeInTheDocument();
    await waitForElementToBeRemoved(() => screen.getByText(/loading/i));
    expect(await screen.findByText(/woking/i)).toBeInTheDocument();
    expect(mockedAxios.get).toHaveBeenCalledTimes(1);
    //await waitForElementToBeRemoved(() => screen.getByText(/loading/i));
  });

  test('renders basic club details for unknown club message', async () => {
    // render is from react testing library, so don't need reactDOM.render if just using jest
    // can add component as second parameter but defaults to div
    //mockedAxios.get.mockImplementation(() => Promise.resolve({status: 500}));
    mockedAxios.get.mockRejectedValue({status: 504});
    render(<ClubDetailsContainer clubUrl={'woking-fc-1'} />);
    //await waitFor(() => screen.getByTestId('clubdetails'));
    await waitForElementToBeRemoved(() => screen.getByText(/loading/i));
    expect(await screen.findByText(/club not found/i)).toBeInTheDocument();
    expect(mockedAxios.get).toHaveBeenCalledTimes(1);
    //expect(screen.getByText(/club not found/i)).toHaveTextContent(/react/i);
    //await waitForElementToBeRemoved(() => screen.getByText(/loading/i));
  });
});
