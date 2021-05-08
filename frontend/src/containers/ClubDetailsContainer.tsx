import * as React from 'react';
import ClubDetails, {ClubDetail} from '../components/club/ClubDetails';

export type Props = {
  clubUrl: string;
};

// const clubDetail: Array<ClubDetail> = [
//   {
//     clubId: 1,
//     clubName: 'woking',
//     clubAddress: 'address',
//     clubLogo: null,
//     clubUrl: 'woking',
//   },
//   {
//     clubId: 2,
//     clubName: 'knaphill fc',
//     clubAddress: 'address',
//     clubLogo: null,
//     clubUrl: 'knaphill-fc',
//   },
// ];

const ClubDetailsContainer = ({clubUrl}: Props): JSX.Element => {
  // Hold Club Details in State
  // set type
  const [clubDetails, setClubDetails] = React.useState<Array<ClubDetail>>([
    {
      clubId: 1,
      clubName: 'woking',
      clubAddress: 'address',
      clubLogo: null,
      clubUrl: 'woking',
    },
    {
      clubId: 2,
      clubName: 'knaphill fc',
      clubAddress: 'address',
      clubLogo: null,
      clubUrl: 'knaphill-fc',
    },
  ]);

  const club = clubDetails.find(club => club.clubUrl === clubUrl);
  if (club === undefined) {
    return (
      <>
        <p>club not found {clubUrl}</p>
      </>
    );
  }
  return (
    <>
      <ClubDetails {...club} />
    </>
  );
};

export default ClubDetailsContainer;
