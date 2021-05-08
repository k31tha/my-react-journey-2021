import * as React from 'react';
import ClubDetails, {ClubDetail} from '../components/club/ClubDetails';

export type Props = {
  clubUrl: string;
};

const ClubDetailsContainer = ({clubUrl}: Props): JSX.Element => {
  const clubDetail: ClubDetail = {
    clubId: 1,
    clubName: 'woking',
    clubAddress: 'address',
    clubLogo: null,
  };
  return (
    <>
      <ClubDetails {...clubDetail} />
    </>
  );
};

export default ClubDetailsContainer;
