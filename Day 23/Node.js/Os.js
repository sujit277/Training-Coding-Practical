var os = require("os");
console.log("OS Architecture: "+os.arch());
console.log("No of CPU's : "+JSON.stringify(os.cpus));
console.log("Free Memory in Bytes: "+os.freemem());