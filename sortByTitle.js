module.exports = { sortByTitle };
const indexFile = require("./index");

const fs = require("fs");

/**
 * Takes the movies from a file and return them alphabetically sorted into a new file
 * @param {*} input JSON file containing the movies to start with
 * @param {*} output JSON file created to recieve the movies in alphabetical order
 * @param {*} start The start variable we went to get from index file to calculate the execution time of our function 
 */
function sortByTitle(input, output, start) {
  fs.readFile(input, { encoding: "utf8" }, function (err, data) {
    if (err) {
      return console.error(err);
    }

    console.log("ordres ok");
    parsedJsonFile = JSON.parse(data);

    function swap(from, to) {
      let tmp = parsedJsonFile[to];
      parsedJsonFile[to] = parsedJsonFile[from];
      parsedJsonFile[from] = tmp;
    }

    /**
     * takes the Parsed JSON from one file and take it to another
     * @param {*} from origin Parsed JSON
     * @param {*} to New Parsed JSON
     */
    function partitionner(premier, dernier, pivot) {
      swap(pivot, dernier);
      j = premier;
      for (i = premier; i <= dernier - 1; i++) {
        if (parsedJsonFile[i].title <= parsedJsonFile[dernier].title) {
          swap(i, j);
          j++;
        }
      }
      swap(dernier, j);
      return j;
    }
    /**
     * Sorts the data in the JSON file and returns it in alphabatical order
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
