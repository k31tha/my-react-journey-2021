"use strict";

import { clubListData } from "../data/clubData";

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
