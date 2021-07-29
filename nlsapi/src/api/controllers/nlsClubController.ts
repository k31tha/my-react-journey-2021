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
  MinorClub: boolean;
  DisableAutoUpdate: boolean;
  StatusTypeId?: number | null;
};

const clubListData1: Array<ClubDetail> = [
  {
    ClubID: 2733,
    ClubName: "Knaphill FC",
    UrlFriendlyName: "knaphill-fc",
    Active: true,
    PyramidId: "1117",
    MainWebsite: "http://www.pitchero.com/clubs/knaphillfootballclub/",
    ClubAddress:
      "Brookwood Country Park Football Ground, Redding Way, Knaphill, Woking, Surrey, GU21 2AY",
    MinorClub: false,
    DisableAutoUpdate: false,
  },
];

//var mongoose = require('mongoose'),
//  Task = mongoose.model('Tasks');
const clubListData: Array<ClubDetail> = [
  {
    ClubID: 1,
    ClubName: "Woking FC",
    UrlFriendlyName: "woking-fc",
    Active: true,
    MainWebsite: "https://wokingfc.co.uk/",
    ClubLogo: "WokingLogo.png",
    ClubAddress: "",
    MinorClub: false,
    DisableAutoUpdate: false,
  },
  {
    ClubID: 2,
    ClubName: "Leyton Orient FC",
    UrlFriendlyName: "leyton-orient-fc",
    Active: false,
    MainWebsite: "",
    ClubLogo: "",
    ClubAddress: "",
    MinorClub: false,
    DisableAutoUpdate: false,
  },
  {
    ClubID: 3,
    ClubName: "Knaphill FC",
    UrlFriendlyName: "knaphill-fc",
    Active: true,
    MainWebsite: "https://knaphill.co.uk/",
    ClubLogo: "",
    ClubAddress: "",
    MinorClub: false,
    DisableAutoUpdate: false,
  },
  {
    ClubID: 4,
    ClubName: "Hastings UTD",
    UrlFriendlyName: "hastings-utd",
    Active: true,
    MainWebsite: "",
    ClubLogo: "",
    ClubAddress: "",
    MinorClub: false,
    DisableAutoUpdate: false,
  },
  {
    ClubID: 5,
    ClubName: "Sutton UTD",
    UrlFriendlyName: "sutton-utd",
    Active: false,
    MainWebsite: "",
    ClubLogo: "",
    ClubAddress: "",
    MinorClub: false,
    DisableAutoUpdate: false,
  },
  {
    ClubID: 6,
    ClubName: "Solihull Moors",
    UrlFriendlyName: "solihull-moors",
    Active: true,
    MainWebsite: "",
    ClubLogo: "",
    ClubAddress: "",
    MinorClub: false,
    DisableAutoUpdate: false,
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
    (x) => x.UrlFriendlyName!.toLowerCase() === req.params.url.toLowerCase()
  );
  if (clubRes === undefined || clubRes === null)
    //res.status(404).send("Not found").json(clubRes);
    res.status(404).send("Not found");
  else {
    res.json(clubRes);
  }
};
