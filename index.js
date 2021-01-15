// importing the paths to variables
const a = require("./addYearNextToTitle");
const b = require("./sortByYear");
const c = require("./sortByTitle");
const d = require("./search_dateUnsorted");
const e = require("./search_dateSorted");


var action = process.argv[2];
var typeOfAction = process.argv[3];
var fileInput = process.argv[4];
var fileOutput;
var year;
// if the given arg is a number, arg = year, else arg = fileoutput
if (isNaN(process.argv[5]) == true) {
 fileOutput = process.argv[5];
} else {
  year = process.argv[5];
}
var sorted = process.argv[6];

// console.log(action + typeOfAction + fileInput + process.argv[5]);
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

  // We give the constraints of our
} else if (
  action === "-action" &&
  typeOfAction === "transform" &&
  fileInput != null && fileInput.endsWith(".json") && fileInput.length > 5 &&
  fileOutput != null && fileOutput.endsWith(".json") && fileOutput.length > 5
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
  fileInput != null && fileInput.endsWith(".json") && fileInput.length > 5 &&
  fileOutput != null && fileOutput.endsWith(".json") && fileOutput.length > 5
) {
  // console.log(fileInput.length);
  let start = new Date().getTime();
  b.sortByYear(fileInput, fileOutput);
  let stop = new Date().getTime();
  console.log(
    "L'algo a mis : " + (stop - start) + " millisecondes à s'executer"
  );
} else if (
  action === "-action" &&
  typeOfAction === "sort_title" &&
  fileInput != null && fileInput.endsWith(".json")  && fileInput.length > 5 &&
  fileOutput != null && fileOutput.endsWith(".json") && fileOutput.length > 5
) {
  let start = new Date().getTime();
  c.sortByTitle(fileInput, fileOutput);
  let stop = new Date().getTime();
  console.log(
    "L'algo a mis : " + (stop - start) + " millisecondes à s'executer"
  );
} else if (
  action === "-action" &&
  typeOfAction === "search_date" &&
  fileInput != null && fileInput.endsWith(".json") && fileInput.length > 5 &&
  process.argv[5] != null && isNaN(process.argv[5]) == false && 
  sorted === "false"
) {
  let start = new Date().getTime();
  d.search_dateUnsorted(fileInput, year);
  let stop = new Date().getTime();
  console.log(
    "L'algo a mis : " + (stop - start) + " millisecondes à s'executer"
  );
}
else if (
  action === "-action" &&
  typeOfAction === "search_date" &&
  fileInput != null && fileInput.endsWith(".json") && fileInput.length > 5 &&
  process.argv[5] != null && isNaN(process.argv[5]) == false && 
  process.argv[6] === "true"
) {
  let start = new Date().getTime();
  e.search_dateSorted(fileInput, year);
  let stop = new Date().getTime();
  console.log(
    "L'algo a mis : " + (stop - start) + " millisecondes à s'executer"
  );
}
else {
  console.log("Veuillez entrer une ligne de commande correcte.");
};
