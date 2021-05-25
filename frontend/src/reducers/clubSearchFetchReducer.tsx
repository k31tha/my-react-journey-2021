import {
  ClubSearchAction,
  ClubSearchActionType,
  ClubSearchState,
} from '../types/clubtypes';
import {ProcessingStatusType} from '../types/nlstypes';

const clubSearchFetchReducer = (
  state: ClubSearchState,
  action: ClubSearchAction,
): ClubSearchState => {
  switch (action.type) {
    case ClubSearchActionType.ClubSearchFetchInit: //'CLUB_FETCH_INIT':
      return {...state, status: ProcessingStatusType.pending};
    case ClubSearchActionType.ClubSearchFetchSuccess: //'CLUB_FETCH_SUCCESS':
      return {
        ...state,
        status: ProcessingStatusType.loaded,
        clubs: action.payload,
      };
    case ClubSearchActionType.ClubSearchFetchNotFound: //'CLUB_FETCH_NOTFOUND':
      return {...state, status: ProcessingStatusType.notfound};
    case ClubSearchActionType.ClubSearchFetchFailure: // 'CLUB_FETCH_FAILURE':
      return {...state, status: ProcessingStatusType.error};
    default:
      return {...state};
  }
};

export default clubSearchFetchReducer;
