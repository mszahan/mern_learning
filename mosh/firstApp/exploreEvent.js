const EventEmitter = require("events");
const emitter = new EventEmitter();

// register an event listenner
// the order is important
// the register should be on the top
// you can name anything for event argument
emitter.on("messageEmit", function (arg) {
  console.log("The emitter has been called", arg);
});

// raise an event
// you can pass some event argument...
// directly or as an object
emitter.emit("messageEmit", { id: 1, url: "https://hoola.com" });
