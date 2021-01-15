module.exports = { sortByTitle };
const indexFile = require("./index");

const fs = require("fs");

function sortByTitle(input, output, start) {
  fs.readFile(input, { encoding: "utf8" }, function (err, data) {
    if (err) {
      return console.error(err);
    }

    console.log("ordres ok");
    parsedJsonFile = JSON.parse(data);

    for (let i = 0; i < parsedJsonFile.length; i++) {
      var title = parsedJsonFile[i].title;
    }

    function swap(from, to) {
      let tmp = parsedJsonFile[to];
      parsedJsonFile[to] = parsedJsonFile[from];
      parsedJsonFile[from] = tmp;
    }

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
