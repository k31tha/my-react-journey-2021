"use strict";

import { ClubDetail } from "./clubtypes";
export type PyramidClubDetail = {
  ClubID: number;
  ClubGuid: string;
  ClubName?: string;
  Active: boolean;
  UrlFriendlyName: string;
  PyramidId: string;
};

export type PyramidDetail = {
  pyramidId: number;
  leagueName: string;
  pyramidStep: number;
  pyramidStepInactive: boolean;
  clubs: Array<PyramidClubDetail> | undefined;
};
