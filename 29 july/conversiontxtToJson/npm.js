var fs = require('fs');
var data = fs.readFileSync("hema.txt");

var finalD = JSON.parse(data);
console.log(finalD);