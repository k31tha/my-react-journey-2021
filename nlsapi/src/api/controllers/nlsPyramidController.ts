"use strict";

import { pyramidListData } from "../data/pyramidData";

//var mongoose = require('mongoose'),
//  Task = mongoose.model('Tasks');

exports.list_all_pyramiddata = function (req: any, res: any) {
  //Task.find({}, function(err, task) {
  //  if (err)
  //    res.send(err);
  //  res.json(task);
  //});
  res.json(pyramidListData);
};
