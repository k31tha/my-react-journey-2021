import * as React from 'react';
import {ProcessingStatusType} from '../types/nlstypes';
import PyramidManagerClubSearchContainer from '../containers/PyramidManagerClubSearchContainer';
import PyramidSearch from '../components/pyramid/PyramidSearch';
import usePyramidDetailApi from '../hooks/usePyramidDetailApi';
import useClubSearchApi from '../hooks/useClubSearchApi';
import {
  //ClubDetail,
  PyramidDetailsState,
  PyramidDetailsActionType,
  PyramidDetailsAction,
  ClubPyramidStatusType,
} from '../types/pyramidtypes';
import pyramidDetailsReducer from '../reducers/pyramidDetailsReducer';

//import useClubSearchApi from '../hooks/useClubSearchApi';
//import ClubSearch from '../components/club/ClubSearch';

export type Props = {
  //clubUrl: string;
  children?: React.ReactNode;
};

// added as part of context refactoring to test
const initialPyramidDetailsState: PyramidDetailsState = {
  pyramidDetails: null,
  pyramidDetailsStatus: ProcessingStatusType.pending,
  selectedPyramidId: null,
  clubPyramidUpdateStatus: ClubPyramidStatusType.ok,
};

export const PyramidContext = React.createContext<{
  state: PyramidDetailsState;
  dispatchPyramidDetail: React.Dispatch<PyramidDetailsAction>;
}>({
  state: initialPyramidDetailsState,
  dispatchPyramidDetail: () => undefined,
});

const PyramidManagerContainer = ({children}: Props): JSX.Element => {
  // added as part of context refactoring to test
  const [state, dispatchPyramidDetail] = React.useReducer(
    pyramidDetailsReducer,
    initialPyramidDetailsState,
  );

  const contextProviderValue = {state, dispatchPyramidDetail};

  // Hold Club Details in State
  //const [{pyramidDetails, pyramidDetailsStatus}] = usePyramidDetailApi(
  usePyramidDetailApi(
    //state,
    dispatchPyramidDetail,
  );

  const {pyramidDetails, pyramidDetailsStatus} = state;

  //
  const [{clubs, clubStatus}, clubSearchDispatch] = useClubSearchApi();

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
    <PyramidContext.Provider value={contextProviderValue}>
      <p>Pyramid</p>
      <PyramidSearch
        pyramidDetails={pyramidDetails}
        pyramidDetailsStatus={pyramidDetailsStatus}
        clubSearchDispatch={clubSearchDispatch}
      />
      <PyramidManagerClubSearchContainer
        resultType={'List'}
        resultContext={'PyramidManager'}
        clubSearchState={{clubs, clubStatus}}
        clubSearchDispatch={clubSearchDispatch}
      />
    </PyramidContext.Provider>
  );
};

//<PyramidSearch
//pyramidDetails={pyramidDetails}
//pyramidDetailsStatus={pyramidDetailsStatus}
///>

export default PyramidManagerContainer;
