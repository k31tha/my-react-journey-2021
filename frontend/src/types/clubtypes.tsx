import {ProcessingStatus} from './nlstypes';

export type ClubDetail = {
  clubId: number;
  clubName: string;
  clubAddress: string;
  clubLogo: string | null;
  clubUrl: string;
};

export enum ClubDetailActionType {
  ClubFetchInit = 'CLUB_FETCH_INIT',
  ClubFetchSuccess = 'CLUB_FETCH_SUCCESS',
  ClubFetchFailure = 'CLUB_FETCH_FAILURE',
  ClubFetchNotFound = 'CLUB_FETCH_NOTFOUND',
}

export type ClubDetailAction = {
  type: ClubDetailActionType;
  payload?: ClubDetail | null | undefined;
};

export type ClubDetailState = {
  clubDetail: ClubDetail | null | undefined;
  status: ProcessingStatus;
};
