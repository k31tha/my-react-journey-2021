import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import ClubDetailsContainer from '../ClubDetailsContainer';

describe('ClubDetails Container', () => {
  test('renders basic club details for known club', async () => {
    // render is from react testing library, so don't need reactDOM.render if just using jest
    // can add component as second parameter but defaults to div
    render(<ClubDetailsContainer clubUrl={'woking-fc'} />);
    //await waitFor(() => screen.getByTestId('clubdetails'));
    //expect(screen.getByText(/woking/i)).toBeInTheDocument();
    await waitForElementToBeRemoved(() => screen.getByText(/loading/i));
    expect(await screen.findByText(/woking/i)).toBeInTheDocument();
    //await waitForElementToBeRemoved(() => screen.getByText(/loading/i));
  });

  test('renders basic club details for unknown club message', async () => {
    // render is from react testing library, so don't need reactDOM.render if just using jest
    // can add component as second parameter but defaults to div
    render(<ClubDetailsContainer clubUrl={'unknown'} />);
    //await waitFor(() => screen.getByTestId('clubdetails'));
    await waitForElementToBeRemoved(() => screen.getByText(/loading/i));
    expect(await screen.findByText(/club not found/i)).toBeInTheDocument();
    //expect(screen.getByText(/club not found/i)).toHaveTextContent(/react/i);
    //await waitForElementToBeRemoved(() => screen.getByText(/loading/i));
  });
});
