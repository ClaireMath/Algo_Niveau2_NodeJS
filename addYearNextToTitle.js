module.exports = {addYear, sortByYear};

const fs = require("fs");

var parsedJsonFile;
var data2;

function addYear (input, output) {
      
    fs.readFile(input, { encoding: "utf8" }, function (err, data) {
      if (err) {
        return console.error(err);
      }
      console.log("ordres ok");
      parsedJsonFile = JSON.parse(data);
      
        for (let i = 0; i < parsedJsonFile.length; i++) {
          var timestamp = parsedJsonFile[i].release_date;
          const milliseconds = timestamp * 1000;
          const dateObject = new Date(milliseconds);
          let year = dateObject.toLocaleString("en-US", { year: "numeric" }); // 2019
          parsedJsonFile[i].title = parsedJsonFile[i].title +=" ("+year+")";   
        }
        console.log(parsedJsonFile);

        data2 = JSON.stringify(parsedJsonFile, null, 2);

        fs.writeFile(output, data2, function (err) {
          if (err) return console.error(err);
          console.log("Data written to file");
                    
      });
    });
  };

  function sortByYear (input, output) {

    fs.readFile(input, { encoding: "utf8" }, function (err, data) {
      if (err) {
        return console.error(err);
      }
     
      console.log("ordres ok");
      parsedJsonFile = JSON.parse(data);
      
      
        for (let i = 0; i < parsedJsonFile.length; i++) {
          var timestamp = parsedJsonFile[i].release_date;
          const milliseconds = timestamp * 1000;
          const dateObject = new Date(milliseconds);
          let year = dateObject.toLocaleString("en-US", { year: "numeric" }); // 2019
          // parsedJsonFile[i].title = parsedJsonFile[i].title +=" ("+year+")";   
        } 


        function swap(from,to){
          let tmp = parsedJsonFile[to];
          parsedJsonFile[to]= parsedJsonFile[from];
          parsedJsonFile[from] = tmp;
      }

      function partitionner(premier,dernier,pivot){
          swap(pivot,dernier);
          j = premier;
          for (i = premier; i<=dernier-1; i++) {
              if(parsedJsonFile[i].release_date <= parsedJsonFile[dernier].release_date){
                  swap(i,j)
                  j++;
              }
          }
          swap(dernier,j)
          return j;
      }
      
      function tri_rapide(premier, dernier){
          if(premier<dernier){
              let pivot = Math.ceil((premier + dernier) / 2);
              pivot = partitionner(premier,dernier,pivot);
              tri_rapide(premier, pivot-1);
              tri_rapide(pivot+1,dernier);
          }
          return parsedJsonFile;
      }

      parsedJsonFile = tri_rapide(0, parsedJsonFile.length - 1);


    
        var data2 = JSON.stringify(parsedJsonFile, null, 2);

        fs.writeFile(output, data2, function (err) {
          if (err) return console.error(err);
          console.log("Data written to file");
                    
      });
    });
  }