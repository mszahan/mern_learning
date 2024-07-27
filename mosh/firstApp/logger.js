var url = "http://mylogger.com/log";

function log(message) {
  // send an http request
  console.log(message);
}

// you can name anything for exports.any_name_
// this use to export whole object
// module.exports.log = log;

// this is how you should do it to just export the function
module.exports = log;
module.exports.endPoint = url;
