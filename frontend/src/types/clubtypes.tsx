import {ProcessingStatus} from './nlstypes';

export type ClubDetail = {
  ClubID: number;
  ClubName?: string | null;
  ClubAddress?: string | null;
  ContactEmailAddr?: string | null;
  ClubLogo?: string | null;
  MainWebsite?: string | null;
  LongLat?: string | null;
  Source?: string | null;
  ClubPostcode?: string | null;
  UrlFriendlyName?: string | null;
  PyramidId?: string | null;
  Nicknames?: string | null;
  Active: boolean | null;
  ClubGuid?: string | null;
  MinorClub: boolean;
  DisableAutoUpdate: boolean;
  StatusTypeId?: number | null;
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
  url?: string | null | undefined;
  name?: string | null;
  active?: boolean | null;
  id?: number | null;
  handleChange?: any;
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
