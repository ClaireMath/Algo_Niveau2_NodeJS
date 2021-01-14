#!/usr/bin/env node

// exports

// const { stringify } = require("querystring");
const a = require("./addYearNextToTitle");
const b = require("./sortByYear");
const c = require("./sortByTitle");

var action = process.argv[2];
var typeOfAction = process.argv[3];
var fileInput = process.argv[4];
var fileOutput = process.argv[5];
// var fileOutput = process.argv[6];
// console.log(action + typeOfAction + fileInput + fileOutput);
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
} else if (
  action === "-action" &&
  typeOfAction === "transform" &&
  fileInput != null && fileInput.endsWith(".json") &&
  fileOutput != null && fileOutput.endsWith(".json")
) {
  let start = new Date().getTime();
  //ici le code à mesurer
  a.addYear(fileInput, fileOutput);
  let stop = new Date().getTime();
  console.log(
    "L'algo a mis : " + (stop - start) + " millisecondes à s'executer"
  );
  
} else if (
  action === "-action" &&
  typeOfAction === "sort_date" &&
  fileInput != null && fileInput.endsWith(".json") &&
  fileOutput != null && fileOutput.endsWith(".json")
) {
  let start = new Date().getTime();
  b.sortByYear(fileInput, fileOutput);
  let stop = new Date().getTime();
  console.log(
    "L'algo a mis : " + (stop - start) + " millisecondes à s'executer"
  );
} else if (
  action === "-action" &&
  typeOfAction === "sort_title" &&
  fileInput != null && fileInput.endsWith(".json")  &&
  fileOutput != null && fileOutput.endsWith(".json")
) {
  let start = new Date().getTime();
  sort_titleFILE.sortByTitle(fileInput, fileOutput);
  let stop = new Date().getTime();
  console.log(
    "L'algo a mis : " + (stop - start) + " millisecondes à s'executer"
  );
}
else {
  console.log("Veuillez entrer une ligne de commande correcte.");
};
