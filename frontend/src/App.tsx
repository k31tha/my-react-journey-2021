import * as React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {SiteRoutes} from './routes/SiteRoutes';
//import './App.css';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import {ProcessingStatusType} from './types/nlstypes';
import {
  //ClubDetail,
  PyramidDetailsState,
  PyramidDetailsAction,
  ClubPyramidStatusType,
} from './types/pyramidtypes';
import pyramidDetailsReducer from './reducers/pyramidDetailsReducer';
import usePyramidDetailApi from './hooks/usePyramidDetailApi';
import Header from './components/structure/header';

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

function App() {
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
    <Router>
      <CssBaseline />
      <Container maxWidth="lg">
        <PyramidContext.Provider value={contextProviderValue}>
          <Header />
          <SiteRoutes />
        </PyramidContext.Provider>
      </Container>
    </Router>
  );
}
//<ClubDetailsContainer clubUrl={'knaphill-fc'} />
export default App;
