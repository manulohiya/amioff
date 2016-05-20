var request = require('request');

var requestTimesheet =
    function (program, month, year, onSuccess) {
	console.log("REQUESTING TIMESHEET");
	var url = "http://www.amion.com/cgi-bin/ocs?Lo=" + program + "&Rpt=625c&Month=" + month + "&Year=" + year;
	request.get(url, function(error, response, body) {
	    if(!error & response.statusCode == 200) {
		console.log(body);
		onSuccess(body);
	    }
	    else {
		console.log("Error on request, month = " + month +
			    ", year = " + year,
			    ", program = " + program);
	    }
	});
    };

module.exports.requestTimesheet = requestTimesheet
