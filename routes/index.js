var express = require('express');
var router = express.Router();

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
router.get('/hang', function(req, res, next) {
  res.json(residents);
});

router.get("/hang/:name", function (req, res) {
  res.send( "My name is " + req.params.name );
});


module.exports = router;
