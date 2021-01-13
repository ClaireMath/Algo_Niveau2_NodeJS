#!/usr/bin/env node

// L’application se ferme après avoir effectué l’action demandée.
// Une application en lignes de commande au format suivant:
// « node index.js –action <une_action> »

var action = process.argv[2];
var pathJson = "movies.json";
var parsedJsonFile;
const fs = require("fs");

// Check if the order hasn't been provided.
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
  fs.readFile(pathJson, { encoding: "utf8" }, function (err, data) {
    if (err) {
      return console.error(err);
    }
    console.log("ordres ok");
    parsedJsonFile = JSON.parse(data);
    var data2 = JSON.stringify(parsedJsonFile, null, 2);

    fs.writeFile("modifiedYear.json", data2, function (err) {
      if (err) return console.error(err);
      console.log("Data written to file");

      var parsedJSON2 = JSON.parse(data2);
      // console.log(parsedJSON2[0]);
      for (let i = 0; i < parsedJSON2.length; i++) {
        var timestamp = parsedJsonFile[i].release_date;
        const milliseconds = timestamp * 1000;
        const dateObject = new Date(milliseconds);
        let year = dateObject.toLocaleString("en-US", { year: "numeric" }); // 2019
        var newTitle = parsedJSON2[i].title;
        newTitle = newTitle.split(" ");
        //   console.log(typeof parsedJSON2[0].title);
        newTitle.push("(" + year + ")");
        newTitle = newTitle.toString();
        //  newTitle = newTitle.replace(",", " ");
        newTitle = newTitle.replace(/,/g, " ");
        console.log(newTitle);
      }
    });
  });
}
