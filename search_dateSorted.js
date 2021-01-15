module.exports = { search_dateSorted };

const fs = require("fs");

/**
 * Prints in the console all movies released a specified year in a chronologically sorted file
 * @param {*} input JSON file containing the movies to search
 * @param {*} year The year searched for in the file
 * @param {*} start The start variable we went to get from index file to calculate the execution time of our function 
 */
function search_dateSorted(input, year, start) {
  fs.readFile(input, { encoding: "utf8" }, function (err, data) {
    if (err) {
      return console.error(err);
    }

    parsedJsonFile = JSON.parse(data);

    //recherche Dichotomique

    function rechercheDichotomoque(a, start, end) {
      let m = start + Math.ceil((end - start) / 2);

      var timestamp = parsedJsonFile[m].release_date;
      const milliseconds = timestamp * 1000;
      const dateObject = new Date(milliseconds);
      let yearJson = dateObject.toLocaleString("en-US", { year: "numeric" }); // 2019

      if (a == yearJson) {
        return m;
      } else if (a < yearJson) {
        return rechercheDichotomoque(a, start, m - 1);
      } else {
        return rechercheDichotomoque(a, m + 1, end);
      }
    }

    //recupération du m dichotomique
    M = rechercheDichotomoque(year, 0, parsedJsonFile.length - 1);
    W = M - 1;

    //affichage des années antérieures si jammais il y en a
    for (; W > W - 10; W--) {
      var timestamp = parsedJsonFile[W].release_date;
      const milliseconds = timestamp * 1000;
      const dateObject = new Date(milliseconds);
      let yearJson = dateObject.toLocaleString("en-US", { year: "numeric" }); // 2019
      if (yearJson == year) {
        console.log(parsedJsonFile[W].title);
      } else {
        break;
      }
    }
    //affichage des années suivantes si jammais il y en a
    for (; M < parsedJsonFile.length; M++) {
      var timestamp = parsedJsonFile[M].release_date;
      const milliseconds = timestamp * 1000;
      const dateObject = new Date(milliseconds);
      let yearJson = dateObject.toLocaleString("en-US", { year: "numeric" }); // 2019
      if (yearJson == year) {
        console.log(parsedJsonFile[M].title);
      } else {
        break;
      }
    }
    let stop = new Date().getTime();
    console.log(
      "L'algo a mis : " + (stop - start) + " millisecondes à s'executer"
    );
  });
}
