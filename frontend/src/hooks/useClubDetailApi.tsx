import * as React from 'react';
import axios from 'axios';
import {
  ClubDetail,
  ClubDetailState,
  ClubDetailActionType,
} from '../types/clubtypes';
import {ProcessingStatus, ProcessingStatusType} from '../types/nlstypes';
import clubDetailFetchReducer from '../reducers/clubDetailFetchReducer';

const initialClubDetailState: ClubDetailState = {
  clubDetail: null,
  status: ProcessingStatusType.pending,
};

const useClubDetailApi = (clubUrl: string): [ClubDetailState] => {
  //const [clubDetails, setClubDetails] = React.useState<ClubDetail | null>(null);
  //const [status, setStatus] = React.useState<ProcessingStatus>(
  //  ProcessingStatusType.pending,
  //);
  const [state, dispatch] = React.useReducer(
    clubDetailFetchReducer,
    initialClubDetailState,
  );

  // TODO: move to a constant file/environment file
  const endPoint = 'http://localhost:3090/clubs/';
  React.useEffect(() => {
    // TODO: can make more generic?
    async function fetchData() {
      try {
        const response = await axios.get(endPoint + clubUrl);
        if (response.status === 200) {
          //setClubDetails(response.data);
          //setStatus(ProcessingStatusType.loaded);
          dispatch({
            type: ClubDetailActionType.ClubFetchSuccess,
            payload: response.data,
          });
        }
      } catch (error) {
        if (error.response.status === 404) {
          dispatch({
            type: ClubDetailActionType.ClubFetchNotFound,
            //payload: null,
          });
        } else {
          dispatch({
            type: ClubDetailActionType.ClubFetchFailure,
            //payload: null,
          });
        }
      }
    }
    fetchData();
  }, [clubUrl]);

  return [state];
};
export default useClubDetailApi;
