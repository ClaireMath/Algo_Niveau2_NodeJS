#!/usr/bin/env node

// const { stringify } = require("querystring");
const d = require("./addYearNextToTitle");
const date = require("./sortDate");

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

  let start = new Date().getTime();
//ici le code à mesurer
d.addYear(fileInput, fileOutput);
let stop = new Date().getTime();
console.log("L'algo a mis : " + (stop - start) +" millisecondes à s'executer");

}
else if (action === "-action" && process.argv[3] === "sortDate") {
  let start = new Date().getTime();
//ici le code à mesurer
d.addYear(fileInput, fileOutput);
let stop = new Date().getTime();
console.log("L'algo a mis : " + (stop - start) +" millisecondes à s'executer");

}
    
