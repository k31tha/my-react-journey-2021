"use strict";
module.exports = function (app: any) {
  var pyramid = require("../controllers/nlsPyramidController");

  // todoList Routes
  // app.route("/api/PyramidApi/GetPyramid").get(pyramid.list_all_clubs);
  app.route("/api/PyramidApi/GetPyramid").get(pyramid.list_all_pyramiddata);
  //app.route("/clubs/:url").get(clubs.find_a_club);

  app.get("/api", function (req: any, res: any) {
    res.send({ hi: "there" });
  });

  app.get("/", function (req: any, res: any) {
    res.send({ hi: "there" });
  });
};
