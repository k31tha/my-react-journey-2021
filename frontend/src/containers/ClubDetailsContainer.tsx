import * as React from 'react';
import {ProcessingStatusType} from '../types/nlstypes';
import useClubDetailApi from '../hooks/useClubDetailApi';
import ClubDetails from '../components/club/ClubDetails';

export type Props = {
  clubUrl: string;
};

const ClubDetailsContainer = ({clubUrl}: Props): JSX.Element => {
  // Hold Club Details in State
  const [{clubDetail, status}] = useClubDetailApi(clubUrl);

  if (status === ProcessingStatusType.pending) {
    return (
      <>
        <p>club details loading</p>
      </>
    );
  } else if (status === ProcessingStatusType.error) {
    return (
      <>
        <p>club details loading errored {status}</p>
      </>
    );
  } // TODO: sort out undefined | null
  else if (
    status === ProcessingStatusType.notfound ||
    clubDetail === undefined ||
    clubDetail === null
  ) {
    //-@ts-expect-error
    return (
      <>
        <p>club not found {clubUrl}</p>
      </>
    );
  } else if (status === ProcessingStatusType.loaded) {
    return (
      <>
        <ClubDetails {...clubDetail} />
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
