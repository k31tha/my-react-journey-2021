import * as React from 'react';
import {ProcessingStatusType} from '../types/nlstypes';
import {ClubSearchState, ClubSearchAction} from '../types/clubtypes';
import useClubSearchApi from '../hooks/useClubSearchApi';
import ClubSearch from '../components/club/ClubSearch';

export type Props = {
  //clubUrl: string;
  children?: React.ReactNode;
  resultType: 'List' | 'ByIndex';
  resultContext?: 'Search' | 'PyramidManager' | null | undefined;
  clubSearchState: ClubSearchState;
  clubSearchDispatch: React.Dispatch<ClubSearchAction>;
};

const PyramidManagerClubSearchContainer = ({
  children,
  resultType,
  resultContext,
  clubSearchState,
  clubSearchDispatch,
}: Props): JSX.Element => {
  // Hold Club Details in State
  //const [{clubs, clubStatus}] = useClubSearchApi(); //else if ( //  status === ProcessingStatusType.notfound ||
  //const status = ProcessingStatusType.loaded; // TODO: sort out undefined | null
  //const {clubs, clubStatus} = clubSearchState;
  if (clubSearchState.clubStatus === ProcessingStatusType.pending) {
    return (
      <>
        <p>club details loading</p>
      </>
    );
  } else if (clubSearchState.clubStatus === ProcessingStatusType.error) {
    return (
      <>
        <p>club search loading errored {clubSearchState.clubStatus}</p>
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
    clubSearchState.clubStatus === ProcessingStatusType.loaded ||
    clubSearchState.clubStatus === ProcessingStatusType.notfound
  ) {
    return (
      <>
        <ClubSearch
          clubs={clubSearchState.clubs}
          resultType={resultType}
          resultContext={resultContext}
          dispatch={clubSearchDispatch}
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

export default PyramidManagerClubSearchContainer;
