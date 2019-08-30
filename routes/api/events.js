const db = require("../../models");
const router = require("express").Router();

router.route("/")
    .post(function(req, res) {
       
        db.Events.create(req.body).then(function(dbEvent) {
          res.json(dbEvent);
        });
    })
    
    .get(function(req,res){
      
      db.Events.findAll(req.query)
      .then(dbEvent => {        
        res.json(dbEvent)})
      .catch(err => res.status(422).json(err));
    });

module.exports = router;