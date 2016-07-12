//stream.js
var fs = require("fs");
var stream = fs.createReadStream("resource.json");

stream.on("data", function(chunk){
	console.log(chunk);
});

stream.on("end", function(chunk){
	console.log("finished");
});