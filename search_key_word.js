module.exports = { search_key_word_with_genre };

const fs = require("fs");

function search_key_word_with_genre(input, keyWord, genre, start) {
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

    function swap(from, to) {
      let tmp = parsedJsonFile[to];
      parsedJsonFile[to] = parsedJsonFile[from];
      parsedJsonFile[from] = tmp;
    }

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

    function search_word(text, word) {
      var x = 0;
      var y = 0;
      for (i = 0; i < text.length; i++) {
        if (text[i] == word[0]) {
          for (j = i; j < i + word.length; j++) {
            if (text[j] == word[j - i]) {
              y++;
            }
            if (y == word.length) {
              x++;
            }
          }
          y = 0;
        }
      }
      if (x > 0) {
        return true;
      } else {
        return false;
      }
    }

    for (L = parsedJsonFile.length - 1; L > 0; L--) {
      l = parsedJsonFile[L].genres.length - 1;
      bool = false;

      if (l == -1) {
        continue;
      }
      for (i = 0; i < l; i++) {
        if (parsedJsonFile[L].genres[i] == genre) {
          bool = true;
        }
      }
      if (bool == true) {
        bool2 = search_word(parsedJsonFile[L].overview, keyWord);

        if (bool2 == true) {
          console.log(parsedJsonFile[L].title);
          break;
        }
      }
    }
    let stop = new Date().getTime();
    console.log(
      "L'algo a mis : " + (stop - start) + " millisecondes à s'executer"
    );
  });
}
