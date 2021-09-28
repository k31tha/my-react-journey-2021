import * as React from 'react';
import {ProcessingStatusType} from '../types/nlstypes';
import PyramidManagerClubSearchContainer from '../containers/PyramidManagerClubSearchContainer';
import PyramidSearch from '../components/pyramid/PyramidSearch';
import usePyramidDetailApi from '../hooks/usePyramidDetailApi';
import useClubSearchApi from '../hooks/useClubSearchApi';
import {
  //ClubDetail,
  PyramidDetailsState,
  PyramidDetailsAction,
  ClubPyramidStatusType,
} from '../types/pyramidtypes';
import pyramidDetailsReducer from '../reducers/pyramidDetailsReducer';
import Grid from '@material-ui/core/Grid';
import {Typography} from '@material-ui/core';
import {PyramidContext} from '../App';

//import useClubSearchApi from '../hooks/useClubSearchApi';
//import ClubSearch from '../components/club/ClubSearch';

export type Props = {
  //clubUrl: string;
  children?: React.ReactNode;
};

/* // added as part of context refactoring to test
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
*/
const PyramidManagerContainer = ({children}: Props): JSX.Element => {
  /*
  // added as part of context refactoring to test
  const [state, dispatchPyramidDetail] = React.useReducer(
    pyramidDetailsReducer,
    initialPyramidDetailsState,
  );

  const contextProviderValue = {state, dispatchPyramidDetail};

  usePyramidDetailApi(
    //state,
    dispatchPyramidDetail,
  );

  const {pyramidDetails, pyramidDetailsStatus} = state; */

  //
  const [{clubs, clubStatus}, clubSearchDispatch] = useClubSearchApi();

  const pyramidContext = React.useContext(PyramidContext);

  /*
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
  */

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="body1">Pyramid</Typography>
      </Grid>
      <Grid item xs={6}>
        <PyramidSearch
          pyramidDetails={pyramidContext.state.pyramidDetails}
          pyramidDetailsStatus={pyramidContext.state.pyramidDetailsStatus}
          clubSearchDispatch={clubSearchDispatch}
        />
      </Grid>
      <Grid item xs={6}>
        <PyramidManagerClubSearchContainer
          resultType={'List'}
          resultContext={'PyramidManager'}
          clubSearchState={{clubs, clubStatus}}
          clubSearchDispatch={clubSearchDispatch}
        />
      </Grid>
    </Grid>
  );
};

//<PyramidSearch
//pyramidDetails={pyramidDetails}
//pyramidDetailsStatus={pyramidDetailsStatus}
///>

export default PyramidManagerContainer;
