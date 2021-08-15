import * as React from 'react';
import {ProcessingStatusType} from '../types/nlstypes';
import useClubSearchApi from '../hooks/useClubSearchApi';
import ClubSearch from '../components/club/ClubSearch';

export type Props = {
  //clubUrl: string;
  children?: React.ReactNode;
  resultType: 'List' | 'ByIndex';
  resultContext?: 'Search' | 'PyramidManager' | null | undefined;
};

const ClubSearchContainer = ({
  children,
  resultType,
  resultContext,
}: Props): JSX.Element => {
  // Hold Club Details in State
  //const [{clubs, clubStatus}] = useClubSearchApi(); //else if ( //  status === ProcessingStatusType.notfound ||
  //const status = ProcessingStatusType.loaded; // TODO: sort out undefined | null
  const [{clubs, clubStatus}, dispatch] = useClubSearchApi();
  if (clubStatus === ProcessingStatusType.pending) {
    return (
      <>
        <p>club details loading</p>
      </>
    );
  } else if (clubStatus === ProcessingStatusType.error) {
    return (
      <>
        <p>club search loading errored {clubStatus}</p>
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
    clubStatus === ProcessingStatusType.loaded ||
    clubStatus === ProcessingStatusType.notfound
  ) {
    return (
      <>
        <ClubSearch
          clubs={clubs}
          resultType={resultType}
          resultContext={resultContext}
          dispatch={dispatch}
        />
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
