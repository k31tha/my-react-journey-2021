import * as React from 'react';
import axios from 'axios';
import {ClubSearchState, ClubSearchActionType} from '../types/clubtypes';
import {ProcessingStatusType} from '../types/nlstypes';
import clubSearchFetchReducer from '../reducers/clubSearchFetchReducer';

const initialClubSearchState: ClubSearchState = {
  clubs: null,
  status: ProcessingStatusType.pending,
};

const useClubSearchApi = (): [ClubSearchState] => {
  const [state, dispatch] = React.useReducer(
    clubSearchFetchReducer,
    initialClubSearchState,
  );

  // TODO: move to a constant file/environment file
  const endPoint = 'http://localhost:3090/clubs/';
  React.useEffect(() => {
    // TODO: can make more generic?
    async function fetchData() {
      try {
        const response = await axios.get(endPoint);
        if (response.status === 200) {
          dispatch({
            type: ClubSearchActionType.ClubSearchFetchSuccess,
            payload: response.data,
          });
        }
      } catch (error) {
        if (error.response.status === 404) {
          dispatch({
            type: ClubSearchActionType.ClubSearchFetchNotFound,
          });
        } else {
          dispatch({
            type: ClubSearchActionType.ClubSearchFetchFailure,
          });
        }
      }
    }
    fetchData();
  }, []);

  return [state];
};
export default useClubSearchApi;
