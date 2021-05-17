import * as React from 'react';
import useClubDetailApi from '../hooks/useClubDetailApi';
import ClubDetails from '../components/club/ClubDetails';

export type Props = {
  clubUrl: string;
};

const ClubDetailsContainer = ({clubUrl}: Props): JSX.Element => {
  // Hold Club Details in State
  const [clubDetails, status] = useClubDetailApi(clubUrl);

  if (status === 'pending') {
    return (
      <>
        <p>club details loading</p>
      </>
    );
  } else if (status === 'error') {
    return (
      <>
        <p>club details loading errored {status}</p>
      </>
    );
  } // TODO: sort out undefined | null
  else if (
    status === 'notfound' ||
    clubDetails === undefined ||
    clubDetails === null
  ) {
    //-@ts-expect-error
    return (
      <>
        <p>club not found {clubUrl}</p>
      </>
    );
  } else if (status === 'loaded') {
    return (
      <>
        <ClubDetails {...clubDetails} />
      </>
    );
  } else {
    return (
      <>
        <p>should not get here</p>
      </>
    );
  }
};

export default ClubDetailsContainer;
