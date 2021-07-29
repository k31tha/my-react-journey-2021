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
  ClubID,
  ClubName,
  ClubAddress,
  ClubLogo,
  UrlFriendlyName,
}: ClubDetail): JSX.Element => {
  return (
    <div data-testid="clubdetail">
      <p>Club name: {ClubName}</p>
      <p>Club address: {ClubAddress}</p>
    </div>
  );
};

export default ClubDetails;
