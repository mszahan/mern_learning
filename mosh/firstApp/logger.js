const EventEmitter = require("events");
const emitter = new EventEmitter();

var url = "http://mylogger.com/log";

function log(message) {
  // send an http request
  console.log(message);

  // Raise and event
  emitter.emit("messagedLogged", { id: 1, url: "https://" });
}

// you can name anything for exports.any_name_
// this use to export whole object
// module.exports.log = log;

// this is how you should do it to just export the function
module.exports = log;
module.exports.endPoint = url;
