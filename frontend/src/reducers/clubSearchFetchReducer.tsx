import {
  ClubSearchAction,
  ClubSearchActionType,
  ClubSearchState,
} from '../types/clubtypes';
import {ProcessingStatusType} from '../types/nlstypes';
import {cloneDeep} from 'lodash';

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
    case ClubSearchActionType.ClubAdd: // 'CLUB_FETCH_FAILURE':
      let newClubs = cloneDeep(state.clubs!);
      newClubs!.push(action.clubDetail!);
      return {
        ...state,
        clubs: newClubs, // action.clubDetail,
      };
    default:
      return {...state};
  }
};

export default clubSearchFetchReducer;
