const db = require("../../models");
const router = require("express").Router();

router.route("/")
    .post(function(req, res) {
        console.log(req.body);
        db.Events.create(req.body).then(function(dbEvent) {
          res.json(dbEvent);
        });
    });

module.exports = router;