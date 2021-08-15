"use strict";

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
  MinorClub?: boolean | null;
  DisableAutoUpdate: boolean | null;
  StatusTypeId?: number | null;
};
