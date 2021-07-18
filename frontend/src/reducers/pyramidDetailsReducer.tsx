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
    default:
      return {...pyramidDetailsState};
  }
};

export default pyramidDetailsReducer;
