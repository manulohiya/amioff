var assert = require('assert');
var timesheet = require('../lib/amionService');

describe('Array', function() {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    });
  });
});

describe('TestFunction', function () {
  describe('myTest', function () {
    it('should be ok', function () {
      assert.equal(timesheet.requestTimesheet(), 1);
    });
  });
});
