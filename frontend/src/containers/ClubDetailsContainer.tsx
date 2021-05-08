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
  console.log('before set state ' + clubUrl);
  const [clubDetails, setClubDetails] = React.useState<Array<ClubDetail>>();
  console.log('after set state ' + clubUrl);
  React.useEffect(() => {
    console.log('in useeffect before set state club details ' + clubUrl);
    setClubDetails([
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
    console.log('in useeffect after set state club details ' + clubUrl);
  }, [clubUrl]);
  if (clubDetails === undefined) {
    console.log('clubDetails undefined ' + clubUrl);
    return (
      <>
        <p>club details not setup</p>
      </>
    );
  }
  const club = clubDetails.find(club => club.clubUrl === clubUrl);
  if (club === undefined) {
    console.log('club undefined ' + clubUrl);
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
