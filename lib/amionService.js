var request = require('request');

// Request timesheet file from amion
var requestTimesheet =
    function (program, month, year, onSuccess) {
	var url = "http://www.amion.com/cgi-bin/ocs?Lo=" + program + "&Rpt=625c&Month=" + month + "&Year=" + year;
	request.get(url, function(error, response, body) {
	    if(!error & response.statusCode == 200) {
		onSuccess(body);
	    }
	    else {
		console.log("Error on request, month = " + month +
			    ", year = " + year,
			    ", program = " + program);
	    }
	});
    };

// Turn raw file from amion into valid csv
var cleanTimesheet =
    function(rawTimesheet) {
	var headerSize = 8;
	return rawTimesheet.split('\n').splice(headerSize);
    };

module.exports.requestTimesheet = requestTimesheet
module.exports.cleanTimesheet = cleanTimesheet
