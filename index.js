#!/usr/bin/env node

// const { stringify } = require("querystring");
const d = require("./addYearNextToTitle");
var action = process.argv[2];
var transform = process.argv[3];
var fileInput = process.argv[4];
var fileOutput = process.argv[5];
// var fileOutput = process.argv[6];
console.log(action + transform + fileInput + fileOutput );
// Check if the order has been provided.
if (!action) {
  // Extract the filename
  process.argv[1].split(require("path").sep).pop();
  console.error("Missing action argument! Example: -action transform");
  process.exit(1);
  // Exit the app (success: 0, error: 1).
  // An error will stop the execution chain. For example:
  //   ./app.js && ls       -> won't execute ls
  //   ./app.js David && ls -> will execute ls
  // process.exit(1);
} else if (action === "-action" && process.argv[3] === "transform") {
console.log(process.argv[0] + process.argv[1] + process.argv[2] + process.argv[3] + process.argv[4] +process.argv[5]);
    d.addYear(fileInput, fileOutput);

}
    
