// this file access all other routes files in api folder
// routes from routes.js is directed to this.

const path = require ("path");
const router = require("express").Router();
const eventRoutes = require("./events");
const todoRouters = require("./todos");

router.use("/events", eventRoutes);
router.use("/todos",todoRouters);

// For anything else, render the html page
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../../client/build/index.html"));
  });
  
  module.exports = router;
  