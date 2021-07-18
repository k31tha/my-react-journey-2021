import {ProcessingStatus} from './nlstypes';

export type ClubDetail = {
  clubId: number;
  clubName?: string;
  clubAddress?: string;
  clubLogo?: string | null;
  clubUrl: string;
  clubActive: boolean;
};

export type PyramidClubDetail = {
  ClubID: number;
  ClubGuid: string;
  ClubName?: string;
  Active: boolean;
  UrlFriendlyName: string;
};

export enum ClubDetailActionType {
  ClubFetchInit = 'CLUB_FETCH_INIT',
  ClubFetchSuccess = 'CLUB_FETCH_SUCCESS',
  ClubFetchFailure = 'CLUB_FETCH_FAILURE',
  ClubFetchNotFound = 'CLUB_FETCH_NOTFOUND',
}

export enum ClubSearchActionType {
  ClubSearchFetchInit = 'CLUB_FETCH_INIT',
  ClubSearchFetchSuccess = 'CLUB_FETCH_SUCCESS',
  ClubSearchFetchFailure = 'CLUB_FETCH_FAILURE',
  ClubSearchFetchNotFound = 'CLUB_FETCH_NOTFOUND',
}

export type ClubDetailAction = {
  type: ClubDetailActionType;
  payload?: ClubDetail | null | undefined;
};

export type ClubSearchAction = {
  type: ClubSearchActionType;
  payload?: Array<ClubDetail> | null | undefined;
};

export type ClubDetailState = {
  clubDetail: ClubDetail | null | undefined;
  clubDetailStatus: ProcessingStatus;
};

export type ClubSearchState = {
  clubs: Array<ClubDetail> | null | undefined;
  clubStatus: ProcessingStatus;
};

export type ClubLinkType = {
  url: string;
  name?: string;
  active: boolean;
  id?: number;
};

export type ClubLinkedListPropType = {
  clubs: Array<ClubDetail> | null | undefined;
};

export type ClubSearchPropType = {
  clubs: Array<ClubDetail> | null | undefined;
  resultType: 'List' | 'ByIndex';
};

export type ClubSearchByNameType = {
  nameSearch: string;
  handleNameSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  children?: React.ReactNode;
};

export type ClubSearchByActiveFlagType = {
  activeFlag: boolean;
  handleActiveFlagSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  children?: React.ReactNode;
};
