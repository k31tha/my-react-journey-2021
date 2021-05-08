import {render, screen} from '@testing-library/react';
import ClubDetailsContainer from '../ClubDetailsContainer';

describe('ClubDetails Container', () => {
  test('renders basic club details for known club', () => {
    // render is from react testing library, so don't need reactDOM.render if just using jest
    // can add component as second parameter but defaults to div
    render(<ClubDetailsContainer clubUrl={'woking'} />);
    expect(screen.getByText(/woking/i)).toBeInTheDocument();
  });

  test('renders basic club details for unknown club message', () => {
    // render is from react testing library, so don't need reactDOM.render if just using jest
    // can add component as second parameter but defaults to div
    render(<ClubDetailsContainer clubUrl={'unknown'} />);
    expect(screen.getByText(/club not found/i)).toBeInTheDocument();
  });
});
