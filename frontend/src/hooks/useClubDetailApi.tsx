import * as React from 'react';
import axios from 'axios';
import {
  //ClubDetail,
  ClubDetailState,
  ClubDetailActionType,
} from '../types/clubtypes';
import {ProcessingStatusType} from '../types/nlstypes';
import clubDetailFetchReducer from '../reducers/clubDetailFetchReducer';

const initialClubDetailState: ClubDetailState = {
  clubDetail: null,
  clubDetailStatus: ProcessingStatusType.pending,
};

const useClubDetailApi = (clubUrl: string): [ClubDetailState] => {
  const [state, dispatch] = React.useReducer(
    clubDetailFetchReducer,
    initialClubDetailState,
  );

  // TODO: move to a constant file/environment file
  // not sure re mounted
  const endPoint = 'http://localhost:3090/clubs/';
  React.useEffect(() => {
    let mounted = true;
    // TODO: can make more generic?
    async function fetchData() {
      try {
        const response = await axios.get(endPoint + clubUrl);
        if (response.status === 200 && mounted === true) {
          dispatch({
            type: ClubDetailActionType.ClubFetchSuccess,
            payload: response.data,
          });
        }
      } catch (error) {
        if (error.response.status === 404) {
          dispatch({
            type: ClubDetailActionType.ClubFetchNotFound,
          });
        } else {
          dispatch({
            type: ClubDetailActionType.ClubFetchFailure,
          });
        }
      }
    }
    fetchData();
    //return () => (mounted = false);
  }, [clubUrl]);

  return [state];
};
export default useClubDetailApi;
