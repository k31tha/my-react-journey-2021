import {
  ClubDetailAction,
  ClubDetailActionType,
  ClubDetailState,
} from '../types/clubtypes';
import {ProcessingStatusType} from '../types/nlstypes';

const clubDetailFetchReducer = (
  state: ClubDetailState,
  action: ClubDetailAction,
): ClubDetailState => {
  switch (action.type) {
    case ClubDetailActionType.ClubFetchInit: //'CLUB_FETCH_INIT':
      return {...state, status: ProcessingStatusType.pending};
    case ClubDetailActionType.ClubFetchSuccess: //'CLUB_FETCH_SUCCESS':
      return {
        ...state,
        status: ProcessingStatusType.loaded,
        clubDetail: action.payload,
      };
    case ClubDetailActionType.ClubFetchNotFound: //'CLUB_FETCH_NOTFOUND':
      return {...state, status: ProcessingStatusType.notfound};
    case ClubDetailActionType.ClubFetchFailure: // 'CLUB_FETCH_FAILURE':
      return {...state, status: ProcessingStatusType.error};
    default:
      return {...state};
  }
};

export default clubDetailFetchReducer;
