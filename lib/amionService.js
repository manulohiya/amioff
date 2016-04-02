var request = require('request');

var requestTimesheet =
  function () {
    var result =
      request.get({
        url: 'http://www.amion.com/cgi-bin/ocs?Lo=UCSFEM&Rpt=625c&Month=3&Year=2015',
        method: 'GET'
      });
    return result
  }

module.exports.requestTimesheet = requestTimesheet
