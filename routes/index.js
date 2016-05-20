var express = require('express');
var router = express.Router();
var timesheet = require('../lib/amionService');

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
    
    timesheet.requestTimesheet(
	"UCSFEM",
	3,
	2015,
	function(body) {
	    res.json(timesheet.parseToJson(timesheet.attachHeadersToTimesheet(timesheet.cleanTimesheet(body))));
	    console.log("Handled query for query req");
	});
});


module.exports = router;
