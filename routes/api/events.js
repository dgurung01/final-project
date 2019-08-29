const db = require("../../models");
const router = require("express").Router();

router.route("/")
    .post(function(req, res) {
        console.log(req.body);
        db.Events.create(req.body).then(function(dbEvent) {
          res.json(dbEvent);
        });
    })
    
    .get(function(req,res){
      console.log("q"+ req.query);
      db.Events.findAll(req.query)
      .then(dbEvent => {
        console.log(dbEvent);
        res.json(dbEvent)})
      .catch(err => res.status(422).json(err));
    });

module.exports = router;