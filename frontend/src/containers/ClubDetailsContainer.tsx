import * as React from 'react';
import {ProcessingStatusType} from '../types/nlstypes';
import useClubDetailApi from '../hooks/useClubDetailApi';
import ClubDetails from '../components/club/ClubDetails';

export type Props = {
  clubUrl: string;
};

const ClubDetailsContainer = ({clubUrl}: Props): JSX.Element => {
  // Hold Club Details in State
  const [{clubDetail, clubDetailStatus}] = useClubDetailApi(clubUrl);

  if (clubDetailStatus === ProcessingStatusType.pending) {
    return (
      <>
        <p>club details loading</p>
      </>
    );
  } else if (clubDetailStatus === ProcessingStatusType.error) {
    return (
      <>
        <p>club details loading errored {clubDetailStatus}</p>
      </>
    );
  } // TODO: sort out undefined | null
  else if (
    clubDetailStatus === ProcessingStatusType.notfound ||
    clubDetail === undefined ||
    clubDetail === null
  ) {
    //-@ts-expect-error
    return (
      <>
        <p>club not found {clubUrl}</p>
      </>
    );
  } else if (clubDetailStatus === ProcessingStatusType.loaded) {
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
