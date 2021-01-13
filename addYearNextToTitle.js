module.exports = {addYear};

const fs = require("fs");

var parsedJsonFile;

function addYear (input, output) {
      
    fs.readFile(input, { encoding: "utf8" }, function (err, data) {
      if (err) {
        return console.error(err);
      }
      console.log("ordres ok");
      parsedJsonFile = JSON.parse(data);
      var data2 = JSON.stringify(parsedJsonFile, null, 2);
  
      fs.writeFile(output, data2, function (err) {
        if (err) return console.error(err);
        console.log("Data written to file");
  
        var parsedJSON2 = JSON.parse(data2);
        // console.log(parsedJSON2[0]);
        for (let i = 0; i < parsedJSON2[2]; i++) {
          var timestamp = parsedJsonFile[i].release_date;
          const milliseconds = timestamp * 1000;
          const dateObject = new Date(milliseconds);
          let year = dateObject.toLocaleString("en-US", { year: "numeric" }); // 2019
          var newTitle = parsedJSON2[i].title;
          // I turn my string into an array
          newTitle = newTitle.split(" ");
          //   console.log(typeof parsedJSON2[0].title);
          // I add the year at the end of my title
          newTitle.push("(" + year + ")");
          // I turn my array to a string
          newTitle = newTitle.toString();
          // Je remplace les virgules par des espaces
          newTitle = newTitle.replace(/,/g, " ");
          console.log(newTitle);
        }
      });
    });
  }