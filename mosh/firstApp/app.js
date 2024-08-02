// const EventEmitter = require("events");
// const emitter = new EventEmitter();

// Register a listener

// emitter.on("messagedLogged", (arg) => {
//   console.log("Listener called", arg);
// });

const Logger = require("./logger");
const logger = new Logger();

logger.on("messagedLogged", (arg) => {
  console.log("Listener called", arg);
});

logger.log("message");

// this is how you can import both objects and functions
// const logger = require("./logger");

// just using the functions here not from whole module
// logger("message");

// you could use imported function within object
// logger.log("message");
