import {
  PyramidDetailsAction,
  PyramidDetailsActionType,
  PyramidDetailsState,
} from '../types/pyramidtypes';
import {ProcessingStatusType} from '../types/nlstypes';

const pyramidDetailsReducer = (
  pyramidDetailsState: PyramidDetailsState,
  action: PyramidDetailsAction,
): PyramidDetailsState => {
  switch (action.type) {
    case PyramidDetailsActionType.PyramidDetailsFetchInit: //'CLUB_FETCH_INIT':
      return {
        ...pyramidDetailsState,
        pyramidDetailsStatus: ProcessingStatusType.pending,
      };
    case PyramidDetailsActionType.PyramidDetailsFetchSuccess: //'CLUB_FETCH_SUCCESS':
      return {
        ...pyramidDetailsState,
        pyramidDetailsStatus: ProcessingStatusType.loaded,
        pyramidDetails: action.payload,
      };
    case PyramidDetailsActionType.PyramidDetailsFetchNotFound: //'CLUB_FETCH_NOTFOUND':
      return {
        ...pyramidDetailsState,
        pyramidDetailsStatus: ProcessingStatusType.notfound,
      };
    case PyramidDetailsActionType.PyramidDetailsFetchFailure: // 'CLUB_FETCH_FAILURE':
      return {
        ...pyramidDetailsState,
        pyramidDetailsStatus: ProcessingStatusType.error,
      };
    case PyramidDetailsActionType.PyramidDetailsRemoveClub:
      console.log(action.type);
      console.log(action.actionPayload);
      const foundPyramid = pyramidDetailsState.pyramidDetails?.filter(
        pyramidItem =>
          pyramidItem.pyramidId === action.actionPayload?.pyramidId,
      )[0];
      const newPyramidList = pyramidDetailsState.pyramidDetails?.filter(
        pyramidItem =>
          pyramidItem.pyramidId !== action.actionPayload?.pyramidId,
      );
      const newClubList = foundPyramid?.clubs!.filter(
        clubItem => clubItem.ClubID !== action.actionPayload?.clubId,
      );
      foundPyramid!.clubs = newClubList;
      newPyramidList!.push(foundPyramid!);
      return {
        ...pyramidDetailsState,
        pyramidDetails: newPyramidList!,
      };

    //setListData({ ...listData, list: newList });
    //  return {
    //    ...pyramidDetailsState,
    //  };
    default:
      console.log(action.type);
      console.log(action.actionPayload);
      return {...pyramidDetailsState};
  }
};

export default pyramidDetailsReducer;
