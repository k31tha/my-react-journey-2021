import {render, screen, cleanup} from '@testing-library/react';
import ClubDetailsContainer from '../ClubDetailsContainer';
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
  MinorClub: false,
  DisableAutoUpdate: false,
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
      status: 200,
    });
    render(<ClubDetailsContainer clubUrl={'woking-fc'} />);
    //await waitFor(() => screen.getByTestId('clubdetails'));
    //expect(screen.getByText(/woking/i)).toBeInTheDocument();
    //await waitForElementToBeRemoved(() => screen.getByText(/loading/i));
    expect(await screen.findByText(/woking/i)).toBeInTheDocument();
    expect(mockedAxios.get).toHaveBeenCalledTimes(1);
    //await waitForElementToBeRemoved(() => screen.getByText(/loading/i));
  });

  test('renders basic club details for unknown club message', async () => {
    // render is from react testing library, so don't need reactDOM.render if just using jest
    // can add component as second parameter but defaults to div
    mockedAxios.get.mockImplementationOnce(() =>
      Promise.reject({response: {status: 404}}),
    );
    //mockedAxios.get.mockRejectedValue({status: 404})unknown-fc-1'} />);
    //await waitFor(() => screen.getByTestId('clubdetails'));
    //await waitForElementToBeRemoved(() => screen.getByText(/loading/i));
    render(<ClubDetailsContainer clubUrl={'unknown'} />);
    expect(await screen.findByText(/club not found/i)).toBeInTheDocument();
    expect(mockedAxios.get).toHaveBeenCalledTimes(1);
    //await waitForElementToBeRemoved(() => screen.getByText(/loading/i));
    //expect(screen.getByText(/club not found/i)).toHaveTextContent(/react/i);
    //await waitForElementToBeRemoved(() => screen.getByText(/loading/i));
  });
});
