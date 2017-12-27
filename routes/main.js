var fs = require("fs");

var data = fs.readFileSync('D:\\boeing proxy.txt');

console.log(data.toString());
console.log("Program Ended");



// var fs = require("fs");

// fs.readFile('D:\\boeing proxy.txt', function (err, data) {
//    if (err) return console.error(err);
//    console.log(data.toString());
// });

// console.log("Program Ended");