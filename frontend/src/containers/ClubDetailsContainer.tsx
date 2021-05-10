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
  //console.log('before setClubDetails state ' + clubUrl);
  const [clubDetails, setClubDetails] = React.useState<Array<ClubDetail>>();
  //console.log('after setClubDetails state ' + clubUrl);
  //console.log('before setIsLoading state ' + clubUrl);
  const [isLoading, setIsLoading] = React.useState<Boolean>(true);
  //console.log('after setIsLoading state ' + clubUrl);
  React.useEffect(() => {
    //console.log('in useeffect before setTimeout ' + clubUrl);
    const timeout = setTimeout(() => {
      //console.log('in setTimeout before set state club details ' + clubUrl);
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
      setIsLoading(false);
    }, 900);
    //console.log('in useeffect after set setTimeout ' + clubUrl);
  }, [clubUrl]);
  if (isLoading) {
    //console.log('clubDetails loading ' + clubUrl);
    return (
      <>
        <p>club details loading</p>
      </>
    );
  } else {
    //console.log('find club details ' + clubUrl);
    //@ts-expect-error
    const club = clubDetails.find(club => club.clubUrl === clubUrl);
    if (club === undefined) {
      //console.log('club undefined ' + clubUrl);
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
  }
};

export default ClubDetailsContainer;
