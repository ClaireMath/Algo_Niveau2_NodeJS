module.exports = {addYear};

const fs = require("fs");

var parsedJsonFile;
var data2;

/**
 * Creates a New JSON file in which the release year is added to the title of the movie
 * @param {*} input The original JSON file
 * @param {*} output The newly created JSON file with additional release year
 */
function addYear (input, output, start) {
      
    fs.readFile(input, { encoding: "utf8" }, function (err, data) {
      if (err) {
        return console.error(err);
      }
      console.log("ordres ok");
      // indicates a valid command line was entered
     
      parsedJsonFile = JSON.parse(data);
      
        for (let i = 0; i < parsedJsonFile.length; i++) {
          var timestamp = parsedJsonFile[i].release_date;
          const milliseconds = timestamp * 1000;
          const dateObject = new Date(milliseconds);
          let year = dateObject.toLocaleString("en-US", { year: "numeric" }); // 2019
          // FOR loop running through the JSON file's release date to convert it to years
          parsedJsonFile[i].title = parsedJsonFile[i].title +=" ("+year+")";   
        }
     

        data2 = JSON.stringify(parsedJsonFile, null, 2);

        fs.writeFile(output, data2, function (err) {
          if (err) return console.error(err);
          console.log("Data written to file");
                    
      }); 
      let stop = new Date().getTime();
      console.log(
        "L'algo a mis : " + (stop - start) + " millisecondes à s'executer"
      );
    });
    
  };