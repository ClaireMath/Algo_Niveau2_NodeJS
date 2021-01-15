// importing the paths to variables
const a = require("./addYearNextToTitle");
const b = require("./sortByYear");
const c = require("./sortByTitle");
const d = require("./search_dateUnsorted");
const e = require("./search_dateSorted");
const f = require("./search_key_word");

var action = process.argv[2];
var typeOfAction = process.argv[3];
var fileInput = process.argv[4];
var fileOutput;
var year;
var key_word;
// if the given arg is a number, arg = year, else arg = fileoutput
if (isNaN(process.argv[5]) == true && process.argv[5].endsWith(".json")) {
 fileOutput = process.argv[5];
} else if (isNaN(process.argv[5]) == true) {
  key_word = process.argv[5];
} else {
  year = process.argv[5];
}
if (process.argv[6] == Boolean) {
  var sorted = process.argv[6];
} else {
  var genre = process.argv[6];
}


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
  fileInput != null && fileInput.endsWith(".json") && fileInput.length > 5 &&
  fileOutput != null && fileOutput.endsWith(".json") && fileOutput.length > 5
) {
  
  a.addYear(fileInput, fileOutput, start);
 
  
} else if (
  action === "-action" &&
  typeOfAction === "sort_date" &&
  fileInput != null && fileInput.endsWith(".json") && fileInput.length > 5 &&
  fileOutput != null && fileOutput.endsWith(".json") && fileOutput.length > 5
) {
  
  b.sortByYear(fileInput, fileOutput, start);
  
} else if (
  action === "-action" &&
  typeOfAction === "sort_title" &&
  fileInput != null && fileInput.endsWith(".json")  && fileInput.length > 5 &&
  fileOutput != null && fileOutput.endsWith(".json") && fileOutput.length > 5
) {
  
  c.sortByTitle(fileInput, fileOutput, start);
  
} else if (
  action === "-action" &&
  typeOfAction === "search_date" &&
  fileInput != null && fileInput.endsWith(".json") && fileInput.length > 5 &&
  process.argv[5] != null && isNaN(process.argv[5]) == false && 
  sorted === "false"
) {
 
  d.search_dateUnsorted(fileInput, year, start);
  
}
else if (
  action === "-action" &&
  typeOfAction === "search_date" &&
  fileInput != null && fileInput.endsWith(".json") && fileInput.length > 5 &&
  process.argv[5] != null && isNaN(process.argv[5]) == false && 
  process.argv[6] === "true"
) {
  e.search_dateSorted(fileInput, year, start);
  
}
else if (
  action === "-action" &&
  typeOfAction === "search_key_word" &&
  fileInput != null && fileInput.endsWith(".json") && fileInput.length > 5 &&
  key_word != null && 
  genre != null
) {
  // f.search_key_word_with_genre(fileInput, year);
  
}
else {
  console.log("Veuillez entrer une ligne de commande correcte.");
};
