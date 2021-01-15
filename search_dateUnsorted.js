module.exports = { search_dateUnsorted };

const fs = require("fs");

/**
 * Prints in the console all movies released a specified year in a not chronologically sorted file
 * @param {*} input JSON file containing the movies to search
 * @param {*} year The year searched for in the file
 */
function search_dateUnsorted(input, year, start) {
  fs.readFile(input, { encoding: "utf8" }, function (err, data) {
    if (err) {
      return console.error(err);
    }

    // console.log("ordres ok");
    parsedJsonFile = JSON.parse(data);

    for (let i = 0; i < parsedJsonFile.length; i++) {
      if (
        new Date(parsedJsonFile[i].release_date * 1000).toLocaleString(
          "en-US",
          { year: "numeric" }
        ) == year
      ) {
        console.log(parsedJsonFile[i].title);
      }
    }

    let stop = new Date().getTime();
    console.log(
      "L'algo a mis : " + (stop - start) + " millisecondes à s'executer"
    );
  });
}
