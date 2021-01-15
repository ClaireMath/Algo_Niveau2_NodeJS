module.exports = { sortByYear };

const fs = require("fs");
var parsedJsonFile;

/**
 * Takes the movies from a file and return them chronogically sorted into a new file
 * @param {*} input JSON file containing the movies to start with
 * @param {*} output JSON file created to recieve the movies in chronological order
 * @param {*} start The start variable we went to get from index file to calculate the execution time of our function 
 */
function sortByYear(input, output, start) {
  fs.readFile(input, { encoding: "utf8" }, function (err, data) {
    if (err) {
      return console.error(err);
    }

    console.log("ordres ok");
    parsedJsonFile = JSON.parse(data);

    // FOR loop running through the JSON file's release date to convert it to years
    for (let i = 0; i < parsedJsonFile.length; i++) {
      var timestamp = parsedJsonFile[i].release_date;
      const milliseconds = timestamp * 1000;
      const dateObject = new Date(milliseconds);
      let year = dateObject.toLocaleString("en-US", { year: "numeric" }); // 2019
    }

    /**
     * takes the Parsed JSON from one file and take it to another
     * @param {*} from origin Parsed JSON
     * @param {*} to New Parsed JSON
     */
    function swap(from, to) {
      let tmp = parsedJsonFile[to];
      parsedJsonFile[to] = parsedJsonFile[from];
      parsedJsonFile[from] = tmp;
    }

    /**
     * Sorts the files in the JSON file chronologically
     * @param {*} premier The first element checked in the JSON file
     * @param {*} dernier The last element checked in the JSON file
     * @param {*} pivot The element allowing to reduce the search area
     */
    function partitionner(premier, dernier, pivot) {
      swap(pivot, dernier);
      j = premier;
      for (i = premier; i <= dernier - 1; i++) {
        if (
          parsedJsonFile[i].release_date <= parsedJsonFile[dernier].release_date
        ) {
          swap(i, j);
          j++;
        }
      }
      swap(dernier, j);
      return j;
    }

    /**
     * Returns the JSON file in chronological order
     * @param {*} premier The first element checked in the JSON file
     * @param {*} dernier The last element checked in the JSON file
     */
    function tri_rapide(premier, dernier) {
      if (premier < dernier) {
        let pivot = Math.ceil((premier + dernier) / 2);
        pivot = partitionner(premier, dernier, pivot);
        tri_rapide(premier, pivot - 1);
        tri_rapide(pivot + 1, dernier);
      }
      return parsedJsonFile;
    }

    parsedJsonFile = tri_rapide(0, parsedJsonFile.length - 1);

    var data2 = JSON.stringify(parsedJsonFile, null, 2);

    //Create the New JSON file with sorted datas
    fs.writeFile(output, data2, function (err) {
      if (err) return console.error(err);
      console.log("Data written to file");
    });
    let stop = new Date().getTime();
    console.log(
      "L'algo a mis : " + (stop - start) + " millisecondes à s'executer"
    );
  });
}
