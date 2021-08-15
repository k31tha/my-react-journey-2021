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
      return {...state, clubStatus: ProcessingStatusType.pending};
    case ClubSearchActionType.ClubSearchFetchSuccess: //'CLUB_FETCH_SUCCESS':
      return {
        ...state,
        clubStatus: ProcessingStatusType.loaded,
        clubs: action.payload,
      };
    case ClubSearchActionType.ClubSearchFetchNotFound: //'CLUB_FETCH_NOTFOUND':
      return {...state, clubStatus: ProcessingStatusType.notfound};
    case ClubSearchActionType.ClubSearchUpdatePyramid: // 'CLUB_FETCH_FAILURE':
      console.log('----');
      console.log(action.type);
      console.log(action.updateClub);
      console.log('----');
      let newClubList = state.clubs!.map((club, index) => {
        if (club.ClubID !== action.updateClub?.clubID) {
          // This isn't the item we care about - keep it as-is
          return club;
        }

        // Otherwise, this is the one we want - return an updated value
        return {
          ...club,
          PyramidId: action.updateClub.newPyramidId,
        };
      });
      return {
        ...state,
        clubs: newClubList!,
      };
    default:
      return {...state};
  }
};

export default clubSearchFetchReducer;
