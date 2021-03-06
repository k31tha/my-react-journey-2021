import {ProcessingStatus} from './nlstypes';
import {ClubDetail, ClubSearchAction, PyramidClubDetail} from './clubtypes';

export enum ClubPyramidStatusType {
  pending = 'pending',
  complete = 'complete',
  loaded = 'loaded',
  error = 'error',
  warning = 'warning',
  notfound = 'notfound',
  pyramidnotselected = 'pyramidnotselected',
  ok = 'ok',
}

export type ClubPyramidUpdateStatus =
  | ClubPyramidStatusType.pending
  | ClubPyramidStatusType.complete
  | ClubPyramidStatusType.loaded
  | ClubPyramidStatusType.error
  | ClubPyramidStatusType.warning
  | ClubPyramidStatusType.notfound
  | ClubPyramidStatusType.pyramidnotselected
  | ClubPyramidStatusType.ok;

export type PyramidLinkProps = {
  clubs: Array<PyramidClubDetail> | undefined;
  pyramidId: number;
  leagueName: string;
  pyramidStep: number;
  pyramidStepInactive: boolean;
  leagueSelected: boolean;
  handleLeagueSelected: (event: React.MouseEvent<HTMLElement>) => void;
};

export type PyramidDetail = {
  clubs: Array<PyramidClubDetail> | undefined;
  pyramidId: number;
  leagueName: string;
  pyramidStep: number;
  pyramidStepInactive: boolean;
};

export type PyramidDetails = {
  pyramidDetails: Array<PyramidDetail> | undefined | null;
  selectedPyramidId: number;
  handleLeagueSelected: (event: React.MouseEvent<HTMLElement>) => void;
};

export enum PyramidDetailsActionType {
  PyramidDetailsFetchInit = 'PYRAMIDDETAILS_FETCH_INIT',
  PyramidDetailsFetchSuccess = 'PYRAMIDDETAILS_FETCH_SUCCESS',
  PyramidDetailsFetchFailure = 'PYRAMIDDETAILS_FETCH_FAILURE',
  PyramidDetailsFetchNotFound = 'PYRAMIDDETAILS_FETCH_NOTFOUND',
  PyramidDetailsNew = 'PYRAMIDDETAILS_NEW',
  PyramidDetailsRemoveClub = 'PYRAMIDDETAILS_REMOVE_CLUB',
  PyramidDetailsAddClub = 'PYRAMIDDETAILS_ADD_CLUB',
  PyramidDetailsSelected = 'PYRAMIDDETAILS_SELECTED',
  PyramidDetailsNotSelected = 'PYRAMIDDETAILS_NOT_SELECTED',
  PyramidDetailsAddClubFailure = 'PYRAMIDDETAILS_ADD_CLUB_FAILURE',
}

export type PyramidDetailsAction = {
  type: PyramidDetailsActionType;
  payload?: Array<PyramidDetail> | null | undefined;
  actionPayload?:
    | {
        clubId?: number | null | undefined;
        pyramidId: number;
        newPyramidId?: number;
        club?: ClubDetail;
      }
    | null
    | undefined;
};

export type PyramidDetailsState = {
  pyramidDetails: Array<PyramidDetail> | null | undefined;
  pyramidDetailsStatus: ProcessingStatus;
  selectedPyramidId: number | null | undefined;
  clubPyramidUpdateStatus?: ClubPyramidUpdateStatus | null;
};

export type PyramidSearchByStepType = {
  pyramidStepSearch: {
    pyramidstepsearch1: boolean;
    pyramidstepsearch2: boolean;
    pyramidstepsearch3: boolean;
    pyramidstepsearch4: boolean;
    pyramidstepsearch5: boolean;
    pyramidstepsearch6: boolean;
  };
  handlePyramidStepSearchChange: (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => void;
  children?: React.ReactNode;
};

export type PyramidSearchByNameType = {
  nameSearch: string;
  handleNameSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  children?: React.ReactNode;
};

export type PyramidSearchByActiveFlagType = {
  activeFlag: boolean;
  handleActiveFlagSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  children?: React.ReactNode;
};

export type PyramidClubLinkedListPropType = {
  clubs: Array<PyramidClubDetail> | null | undefined;
  selectedPyramidId: number | null | undefined;
  clubSearchDispatch: React.Dispatch<ClubSearchAction>;
};
