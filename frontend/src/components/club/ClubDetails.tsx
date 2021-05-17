import * as React from 'react';
import {ClubDetail} from '../../types/clubtypes';
/* 
export type ClubDetail = {
  clubId: number;
  clubName: string;
  clubAddress: string;
  clubLogo: string | null;
  clubUrl: string;
}; */

const ClubDetails = ({
  clubId,
  clubName,
  clubAddress,
  clubLogo,
  clubUrl,
}: ClubDetail): JSX.Element => {
  return (
    <div data-testid="clubdetail">
      <p>Club name: {clubName}</p>
      <p>Club address: {clubAddress}</p>
    </div>
  );
};

export default ClubDetails;
