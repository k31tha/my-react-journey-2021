import * as React from 'react';
import {ProcessingStatusType} from '../types/nlstypes';
import ClubSearchContainer from '../containers/ClubSearchContainer';
import PyramidSearch from '../components/pyramid/PyramidSearch';
import usePyramidDetailApi from '../hooks/usePyramidDetailApi';
//import useClubSearchApi from '../hooks/useClubSearchApi';
//import ClubSearch from '../components/club/ClubSearch';

export type Props = {
  //clubUrl: string;
  children?: React.ReactNode;
};

const PyramidManagerContainer = ({children}: Props): JSX.Element => {
  // Hold Club Details in State
  const [{pyramidDetails, pyramidDetailsStatus}] = usePyramidDetailApi();
  //const [{clubs, clubStatus}] = useClubSearchApi();

  if (pyramidDetailsStatus === ProcessingStatusType.pending) {
    return (
      <>
        <p>pyramid details loading</p>
      </>
    );
  } else if (pyramidDetailsStatus === ProcessingStatusType.error) {
    return (
      <>
        <p>pyramid details loading errored {pyramidDetailsStatus}</p>
      </>
    );
  }

  return (
    <>
      <p>Pyramid</p>
      <PyramidSearch
        pyramidDetails={pyramidDetails}
        pyramidDetailsStatus={pyramidDetailsStatus}
      />
      <ClubSearchContainer resultType={'List'} />
    </>
  );
};

//<PyramidSearch
//pyramidDetails={pyramidDetails}
//pyramidDetailsStatus={pyramidDetailsStatus}
///>

export default PyramidManagerContainer;
