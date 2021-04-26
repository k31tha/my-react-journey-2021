import * as React from 'react';

export type ClubDetail = {
clubId: number,
clubName: string,
clubAddress: string,
clubLogo:string | null
};

const ClubDetails = ({clubId, clubName, clubAddress, clubLogo}:ClubDetail): JSX.Element =>  {
    return (<>
    <p>Club name: {clubName}</p>
    <p>Club address: {clubAddress}</p>
    </>);
}

export default ClubDetails;