var request = require('request');
var papaParse = require('papaparse');

// Request timesheet file from amion
var requestTimesheet =
    function (program, month, year, onSuccess) {
	var url = "http://www.amion.com/cgi-bin/ocs?Lo=" + program + "&Rpt=625c&Month=" + month + "&Year=" + year;
	console.log("Requesting amion, url = " + url);
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

// Attach the headers to the raw data from amion
var attachHeadersToTimesheet =
    function(timesheetArray) {
	var headers = "staffName,staffUniqueId,staffBackupId,assignmentName,assUniqueId,assBackupId,dateAssignment,timeAssignmentStart,timeAssignmentEnd,staffType,pager,tel,email,messagable,shiftNote,assignmentType,grouping";
	timesheetArray.unshift(headers);
	timesheetArray.pop();
	return timesheetArray.join('\n');
    };

var parseToJson =
    function(blob) {
	return papaParse.parse(blob, {"header": true, "dynamicTyping": true});
    };

module.exports.requestTimesheet = requestTimesheet;
module.exports.cleanTimesheet = cleanTimesheet;
module.exports.attachHeadersToTimesheet = attachHeadersToTimesheet;
module.exports.parseToJson = parseToJson;
