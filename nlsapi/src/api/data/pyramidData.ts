import { PyramidDetail, PyramidClubDetail } from "../types/pyramidtypes";
import { ClubDetail } from "../types/clubtypes";
import { clubListData, filterByPyramidId } from "../data/clubData";

const convertClubToPyramidClub = (clubs: Array<ClubDetail>) => {
  let pyramidClubs: Array<PyramidClubDetail> = [];
  clubs.forEach((o) =>
    pyramidClubs.push({
      ClubID: o.ClubID,
      ClubGuid: o.ClubGuid!,
      ClubName: o.ClubName!,
      Active: o.Active!,
      UrlFriendlyName: o.UrlFriendlyName!,
      PyramidId: o.PyramidId!,
    })
  );
  return pyramidClubs;
};

export const pyramidListData: Array<PyramidDetail> = [
  {
    pyramidId: 1112,
    leagueName: "National League",
    pyramidStep: 1,
    pyramidStepInactive: false,
    clubs: convertClubToPyramidClub(filterByPyramidId("1112", clubListData)),
  },
  {
    pyramidId: 1084,
    leagueName: "National League South",
    pyramidStep: 2,
    pyramidStepInactive: false,
    clubs: convertClubToPyramidClub(filterByPyramidId("1084", clubListData)),
  },
  {
    pyramidId: 1117,
    leagueName: "Combined Counties Football League Premier Division North",
    pyramidStep: 5,
    pyramidStepInactive: false,
    clubs: convertClubToPyramidClub(filterByPyramidId("1117", clubListData)),
  },
  {
    pyramidId: 1193,
    leagueName: "Combined Counties Football League Premier Division South",
    pyramidStep: 5,
    clubs: convertClubToPyramidClub(filterByPyramidId("1193", clubListData)),
    pyramidStepInactive: false,
  },
];

// [
//   {
//     ClubID: 2128,
//     ClubName: "Woking",
//     UrlFriendlyName: "woking",
//     PyramidId: "1112",
//     Active: true,
//     ClubGuid: "3cefd4b0-110c-4f98-9a41-6b288713f9d9",
//   },
//   {
//     ClubID: 2106,
//     ClubName: "Aldershot Town",
//     UrlFriendlyName: "aldershot-town",
//     PyramidId: "1112",
//     Active: true,
//     ClubGuid: "472cd85a-8341-4444-97c2-959a0a4c07c9",
//   },
// ],
