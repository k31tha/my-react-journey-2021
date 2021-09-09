import {
  PyramidDetailsAction,
  PyramidDetailsActionType,
  PyramidDetailsState,
  ClubPyramidStatusType,
  PyramidDetail,
} from '../types/pyramidtypes';
import {ClubDetail} from '../types/clubtypes';
import {ProcessingStatusType} from '../types/nlstypes';
import {cloneDeep} from 'lodash';

const pyramidRemoveClub = (
  pyramidDetails: Array<PyramidDetail>,
  pyramidId: number,
  clubId: number,
): Array<PyramidDetail> => {
  //console.log('pyramidRemoveClub fired for club ' + clubId.toString());
  let foundPyramid = cloneDeep(
    pyramidDetails?.filter(
      pyramidItem => pyramidItem.pyramidId === pyramidId,
    )[0],
  );
  let newPyramidList = cloneDeep(
    pyramidDetails?.filter(pyramidItem => pyramidItem.pyramidId !== pyramidId),
  );
  let newClubList = cloneDeep(
    foundPyramid?.clubs!.filter(clubItem => clubItem.ClubID !== clubId),
  );
  foundPyramid!.clubs = newClubList;
  newPyramidList!.push(foundPyramid!);
  return newPyramidList;
};

//clubId: parseInt(ev.target.dataset.clubid),
//          club: club,
//          newPyramidId: parseInt(ev.target.dataset.selectedpyramidid),
//          pyramidId: parseInt(ev.target.dataset.oldpyramidid),

const pyramidAddClub = (
  pyramidDetails: Array<PyramidDetail>,
  newPyramidId: number,
  pyramidId: number,
  clubId: number,
  club: ClubDetail,
): Array<PyramidDetail> => {
  console.log('pyramidRemoveClub fired for club ' + clubId.toString());
  let foundNewPyramid = cloneDeep(
    pyramidDetails?.filter(
      pyramidItem => pyramidItem.pyramidId === newPyramidId,
    )[0],
  );
  let newPyramidList = cloneDeep(
    pyramidDetails?.filter(
      pyramidItem =>
        pyramidItem.pyramidId !== pyramidId &&
        pyramidItem.pyramidId !== newPyramidId,
    ),
  );
  foundNewPyramid!.clubs?.push({
    ClubID: club!.ClubID,
    ClubGuid: club!.ClubGuid!,
    ClubName: club!.ClubName!,
    Active: club!.Active!,
    UrlFriendlyName: club!.UrlFriendlyName!,
    PyramidId: newPyramidId!.toString(),
  });
  newPyramidList!.push(foundNewPyramid!);
  if (pyramidId > 0) {
    let foundOldPyramid = cloneDeep(
      pyramidDetails?.filter(
        pyramidItem => pyramidItem.pyramidId === pyramidId,
      )[0],
    );
    let newClubListOldPyramid = cloneDeep(
      foundOldPyramid?.clubs!.filter(clubItem => clubItem.ClubID !== clubId),
    );
    foundOldPyramid!.clubs = newClubListOldPyramid;
    newPyramidList!.push(foundOldPyramid!);
  }

  return newPyramidList;
};

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
      // let foundPyramid = pyramidDetailsState.pyramidDetails?.filter(
      //   pyramidItem =>
      //     pyramidItem.pyramidId === action.actionPayload?.pyramidId,
      // )[0];
      // let newPyramidList = pyramidDetailsState.pyramidDetails?.filter(
      //   pyramidItem =>
      //     pyramidItem.pyramidId !== action.actionPayload?.pyramidId,
      // );
      // let newClubList = foundPyramid?.clubs!.filter(
      //   clubItem => clubItem.ClubID !== action.actionPayload?.clubId,
      // );
      // foundPyramid!.clubs = newClubList;
      // newPyramidList!.push(foundPyramid!);
      let newPyramidList = pyramidRemoveClub(
        pyramidDetailsState.pyramidDetails!,
        action.actionPayload?.pyramidId!,
        action.actionPayload?.clubId!,
      );

      return {
        ...pyramidDetailsState,
        pyramidDetails: newPyramidList!,
      };
    case PyramidDetailsActionType.PyramidDetailsAddClub:
      //console.log(action.type);
      //console.log(action.actionPayload);
      let addClubToPyramid = pyramidAddClub(
        pyramidDetailsState.pyramidDetails!,
        action.actionPayload!.newPyramidId!,
        action.actionPayload!.pyramidId,
        action.actionPayload!.clubId!,
        action.actionPayload!.club!,
      );
      return {
        ...pyramidDetailsState,
        pyramidDetails: addClubToPyramid!,
      };

    case PyramidDetailsActionType.PyramidDetailsSelected:
      return {
        ...pyramidDetailsState,
        selectedPyramidId: action.actionPayload?.pyramidId,
        clubPyramidUpdateStatus: ClubPyramidStatusType.ok,
      };

    case PyramidDetailsActionType.PyramidDetailsAddClubFailure:
      return {
        ...pyramidDetailsState,
        clubPyramidUpdateStatus: ClubPyramidStatusType.error,
      };
    case PyramidDetailsActionType.PyramidDetailsNotSelected:
      return {
        ...pyramidDetailsState,
        clubPyramidUpdateStatus: ClubPyramidStatusType.pyramidnotselected,
      };

    //setListData({ ...listData, list: newList });
    //  return {
    //    ...pyramidDetailsState,
    //  };
    default:
      //console.log(action.type);
      //console.log(action.actionPayload);
      return {...pyramidDetailsState};
  }
};

export default pyramidDetailsReducer;
