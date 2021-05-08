import {render, screen} from '@testing-library/react';
import ClubDetails from '../ClubDetails';

describe('ClubDetails', () => {
  // not needed as react testing library cleans up dom
  //beforeEach(()=>{
  //    document.body.innerHTML = '';
  //})

  test('renders basic club details', () => {
    // render is from react testing library, so don't need reactDOM.render if just using jest
    // can add component as second parameter but defaults to div
    render(
      <ClubDetails
        clubId={1}
        clubName={'Woking'}
        clubLogo={null}
        clubAddress={'dummy street, dummy town, DD333MY'}
        clubUrl={'woking'}
      />,
    );
    const headingElement = screen.getByText(/Woking/i);
    expect(headingElement).toBeInTheDocument();
  });

  // Using jestdom .... for better checking
  // need to check the querySelector so as to pull back element!
  // screen ....
  test('renders 2nd basic club details', () => {
    const {container} = render(
      <ClubDetails
        clubId={1}
        clubName={'Knaphill'}
        clubLogo={null}
        clubUrl={'knaphill'}
        clubAddress={'dummy street, dummy town, DD333MY'}
      />,
    );
    const headingElement = container.querySelector('p');
    expect(headingElement).toHaveTextContent('Knaphill');
  });

  test('renders 3rd basic club details', () => {
    render(
      <ClubDetails
        clubId={1}
        clubName={'Knaphill'}
        clubLogo={null}
        clubUrl={'knaphill'}
        clubAddress={'dummy street, dummy town, DD333MY'}
      />,
    );
    screen.debug();
    // to avoid implementation details -- from testing course
    const newHeadingElement = screen.getByText(/club name:/i);
    expect(newHeadingElement).toHaveTextContent('Club name: Knaphill');
    // or
    expect(screen.getByText(/club name:/i)).toBeInTheDocument();
  });
});
