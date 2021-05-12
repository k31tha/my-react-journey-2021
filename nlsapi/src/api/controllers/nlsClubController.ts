"use strict";

export type ClubDetail = {
  clubId: number;
  clubName: string;
  clubAddress: string;
  clubLogo: string | null;
  clubUrl: string;
  clubActive: boolean;
  clubOfficialWebsite: string;
};

//var mongoose = require('mongoose'),
//  Task = mongoose.model('Tasks');
const clubListData: Array<ClubDetail> = [
  {
    clubId: 1,
    clubName: "Woking FC",
    clubUrl: "woking-fc",
    clubActive: true,
    clubOfficialWebsite: "https://wokingfc.co.uk/",
    clubLogo: "WokingLogo.png",
    clubAddress: "",
  },
  {
    clubId: 2,
    clubName: "Leyton Orient FC",
    clubUrl: "leyton-orient-fc",
    clubActive: false,
    clubOfficialWebsite: "",
    clubLogo: "",
    clubAddress: "",
  },
  {
    clubId: 3,
    clubName: "Knaphill FC",
    clubUrl: "knaphill-fc",
    clubActive: true,
    clubOfficialWebsite: "https://knaphill.co.uk/",
    clubLogo: "",
    clubAddress: "",
  },
  {
    clubId: 4,
    clubName: "Hastings UTD",
    clubUrl: "hastings-utd",
    clubActive: true,
    clubOfficialWebsite: "",
    clubLogo: "",
    clubAddress: "",
  },
];

exports.list_all_clubs = function (req: any, res: any) {
  //Task.find({}, function(err, task) {
  //  if (err)
  //    res.send(err);
  //  res.json(task);
  //});
  res.json(clubListData);
};

exports.find_a_club = function (req: any, res: any) {
  //Task.findById(req.params.taskId, function(err, task) {
  //  if (err)
  //    res.send(err);
  //  res.json(task);
  //});
  const clubRes = clubListData.find(
    (x) => x.clubUrl.toLowerCase() === req.params.url.toLowerCase()
  );
  if (clubRes === undefined || clubRes === null)
    res.status(404).send("Not found");
  else {
    res.json(clubRes);
  }
};
