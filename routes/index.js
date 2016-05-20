var express = require('express');
var router = express.Router();
var timesheet = require('../lib/amionService');
var moment = require('moment');
var tz = require('moment-timezone');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var residents = [
  {
    firstName: 'Delphine',
    lastName: 'Huang',

  },
  {
    firstName: 'Neil',
    lastName: 'Maheshwari'
  }
];

/* GET home page. */
// router.get('/hang', function(req, res, next) {
//   res.json(residents);
// });

// router.get("/hang/:name", function (req, res) {
//   console.log("Route param function is running")
//   res.send( "My name is " + req.params.name );
// });

router.get("/api/hang", function (req, res) {
    console.log("Query function is running")
    var query = req.query;
    var time = query.time;
    // TODO: Make time calculations more robust
    var pstTime = moment.unix(time).clone().tz("America/Los_Angeles");
    timesheet.requestTimesheet(
	query.programName,
	pstTime.format("M"),
	pstTime.format("YYYY"),
	function(body) {
	    res.json(timesheet.parseToJson(timesheet.attachHeadersToTimesheet(timesheet.cleanTimesheet(body))));
	    console.log("Handled query for query req");
	});
});


module.exports = router;
