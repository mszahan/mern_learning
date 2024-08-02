const os = require("os");

var total = os.totalmem();
var free = os.freemem();

console.log(`Total memory is ${total} and free memory is ${free}`);
