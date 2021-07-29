"use strict";

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

//var mongoose = require('mongoose'),
//  Task = mongoose.model('Tasks');
const pyramidListData: Array<PyramidDetail> = [
  {
    pyramidId: 1112,
    leagueName: "National League",
    pyramidStep: 1,
    pyramidStepInactive: false,
    clubs: [
      {
        ClubID: 2128,
        ClubName: "Woking",
        UrlFriendlyName: "woking",
        PyramidId: "1112",
        Active: true,
        ClubGuid: "3cefd4b0-110c-4f98-9a41-6b288713f9d9",
      },
    ],
  },
];

exports.list_all_pyramiddata = function (req: any, res: any) {
  //Task.find({}, function(err, task) {
  //  if (err)
  //    res.send(err);
  //  res.json(task);
  //});
  res.json(pyramidListData);
};
