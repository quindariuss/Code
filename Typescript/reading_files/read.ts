var fs = require('fs');

var data = fs.readFileSync('test.txt');
console.log("Synchronous read: " + data.toString());