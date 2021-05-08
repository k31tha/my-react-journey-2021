import { render, screen } from '@testing-library/react';
import ClubDetailsContainer from '../ClubDetailsContainer';

describe('ClubDetails', () => {

    test('renders basic club details', () => {
        // render is from react testing library, so don't need reactDOM.render if just using jest
        // can add component as second parameter but defaults to div
      render( <ClubDetailsContainer clubUrl={"woking"} />);
      expect(screen.getByText(/woking/i)).toBeInTheDocument();
    });

});