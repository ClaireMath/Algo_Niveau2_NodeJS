// importing the paths to variables
const a = require("./addYearNextToTitle");
const b = require("./sortByYear");
const c = require("./sortByTitle");
const d = require("./search_dateUnsorted");
const e = require("./search_dateSorted");
const f = require("./search_key_word");

// variables for the CLI orders
var action = process.argv[2];
var typeOfAction = process.argv[3];
var fileInput = process.argv[4];
var arg5 = process.argv[5];
var arg6 = process.argv[6];

// if (process.argv[5] == Number) {
//   year = process.argv[5];
//  } else if (process.argv[5].endsWith(".json")){
//    fileOutput = process.argv[5];
//  } else {
//    keyword = process.argv[5];
//  }

// if the given arg is a number, arg = year, else arg = fileoutput
// if (process.argv[5] == Number) {
//   year = process.argv[5];
// }else if (process.argv[5].endsWith(".json")) {
// fileOutput = process.argv[5];
// } else {
//   key_word = process.argv[5];
// }

// if (process.argv[6] == Boolean) {
//   var sorted = process.argv[6];
// } else {
//   var genre = process.argv[6];
// }

// getting the time before starting the programm
let start = new Date().getTime();

// console.log(action + typeOfAction + fileInput + process.argv[5]);
// Check if the order has been provided.
if (!action) {
  // Extract the filename
  process.argv[1].split(require("path").sep).pop();
  console.error("Missing action argument! Example: -action transform");

  // We give the constraints of our CLI orders :
} else if (
  action === "-action" &&
  typeOfAction === "transform" &&
  fileInput != null &&
  fileInput.endsWith(".json") &&
  fileInput.length > 5 &&
  arg5 != null &&
  arg5.endsWith(".json") &&
  arg5.length > 5
) {
  a.addYear(fileInput, arg5, start);
} else if (
  action === "-action" &&
  typeOfAction === "sort_date" &&
  fileInput != null &&
  fileInput.endsWith(".json") &&
  fileInput.length > 5 &&
  arg5 != null &&
  arg5.endsWith(".json") &&
  arg5.length > 5
) {
  b.sortByYear(fileInput, arg5, start);
} else if (
  action === "-action" &&
  typeOfAction === "sort_title" &&
  fileInput != null &&
  fileInput.endsWith(".json") &&
  fileInput.length > 5 &&
  arg5 != null &&
  arg5.endsWith(".json") &&
  arg5.length > 5
) {
  c.sortByTitle(fileInput, arg5, start);
} else if (
  action === "-action" &&
  typeOfAction === "search_date" &&
  fileInput != null &&
  fileInput.endsWith(".json") &&
  fileInput.length > 5 &&
  arg5 != null &&
  isNaN(arg5) == false &&
  arg6 === "false"
) {
  d.search_dateUnsorted(fileInput, arg5, start);
} else if (
  action === "-action" &&
  typeOfAction === "search_date" &&
  fileInput != null &&
  fileInput.endsWith(".json") &&
  fileInput.length > 5 &&
  arg5 != null &&
  isNaN(arg5) == false &&
  arg6 === "true"
) {
  e.search_dateSorted(fileInput, arg5, start);
} else if (
  action === "-action" &&
  typeOfAction === "search_key_word" 
  // &&
  // fileInput != null &&
  // fileInput.endsWith(".json") &&
  // fileInput.length > 5 &&
  // arg5 != null &&
  // arg6 != null
) {
  f.search_key_word_with_genre(fileInput, arg5, arg6, start);
} else {
  console.log("Veuillez entrer une ligne de commande correcte.");
}
