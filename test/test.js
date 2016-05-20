var assert = require('assert');
var timesheet = require('../lib/amionService');

describe('AmionService', function() {
  describe('requestTimehseet', function () {
    it('request the timesheet', function () {
	timesheet.requestTimesheet("UCSFEM", 5, 2015, function(body) {console.log("WE MADE IT")});
	assert.equal(-1, 1);
    });
  });
});
