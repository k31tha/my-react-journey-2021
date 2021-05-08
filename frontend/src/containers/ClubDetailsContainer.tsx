import * as React from 'react';
import ClubDetails, {ClubDetail} from '../components/club/ClubDetails';

export type Props = {
  clubUrl: string;
};

const clubDetail: Array<ClubDetail> = [
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
];

const ClubDetailsContainer = ({clubUrl}: Props): JSX.Element => {
  return (
    <>
      <ClubDetails {...clubDetail.find(club => club.clubUrl === clubUrl)} />
    </>
  );
};

export default ClubDetailsContainer;
