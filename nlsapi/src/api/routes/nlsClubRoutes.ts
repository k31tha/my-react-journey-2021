"use strict";
module.exports = function (app: any) {
  var clubs = require("../controllers/nlsClubController");

  // todoList Routes
  app.route("/clubs").get(clubs.list_all_clubs);
  app.route("/clubs/:url").get(clubs.find_a_club);

  app.get("/", function (req: any, res: any) {
    res.send({ hi: "there" });
  });
};
