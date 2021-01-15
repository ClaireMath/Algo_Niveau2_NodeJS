module.exports = {addYear};

const fs = require("fs");

var parsedJsonFile;
var data2;

function addYear (input, output, start) {
      
    fs.readFile(input, { encoding: "utf8" }, function (err, data) {
      if (err) {
        return console.error(err);
      }
      parsedJsonFile = JSON.parse(data);
      
        for (let i = 0; i < parsedJsonFile.length; i++) {
          var timestamp = parsedJsonFile[i].release_date;
          const milliseconds = timestamp * 1000;
          const dateObject = new Date(milliseconds);
          let year = dateObject.toLocaleString("en-US", { year: "numeric" }); // 2019
          parsedJsonFile[i].title = parsedJsonFile[i].title +=" ("+year+")";   
        }
        // console.log(parsedJsonFile);

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