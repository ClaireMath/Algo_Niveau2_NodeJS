module.exports = {search_dateUnsorted};

const fs = require("fs");

function search_dateUnsorted (input, year) {
    fs.readFile(input, { encoding: "utf8" }, function (err, data) {
        if (err) {
          return console.error(err);
        }
       
        console.log("ordres ok");
        parsedJsonFile = JSON.parse(data);
        
          for (let i = 0; i < parsedJsonFile.length; i++) {
            if (new Date((parsedJsonFile[i].release_date)*1000).toLocaleString("en-US", { year: "numeric" }) == year) {
                console.log(parsedJsonFile[i].title);
            }    
          } 
        })
    }