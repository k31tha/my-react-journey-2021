import * as React from 'react';
import {ProcessingStatusType} from '../types/nlstypes';
import useClubSearchApi from '../hooks/useClubSearchApi';
import ClubSearch from '../components/club/ClubSearch';

export type Props = {
  //clubUrl: string;
  children?: React.ReactNode;
};

const ClubSearchContainer = ({children}: Props): JSX.Element => {
  // Hold Club Details in State
  const [{clubs, status}] = useClubSearchApi(); //else if ( //  status === ProcessingStatusType.notfound ||
  //const status = ProcessingStatusType.loaded; // TODO: sort out undefined | null
  if (status === ProcessingStatusType.pending) {
    return (
      <>
        <p>club details loading</p>
      </>
    );
  } else if (status === ProcessingStatusType.error) {
    return (
      <>
        <p>club search loading errored {status}</p>
      </>
    );
  } //  clubDetail === undefined ||
  //  clubDetail === null
  //) {
  //-@ts-expect-error
  //return (
  //  <>
  //    <p>club not found {clubUrl}</p>
  //  </>
  //);
  //}
  //
  //<ClubLinkList clubs={clubs} />
  else if (
    status === ProcessingStatusType.loaded ||
    status === ProcessingStatusType.notfound
  ) {
    return (
      <>
        <ClubSearch clubs={clubs} />
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

export default ClubSearchContainer;
