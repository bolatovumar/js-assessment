exports = (typeof window === 'undefined') ? global : window;

exports.recursionAnswers = {
  // return a list of files in a subdir
  listFiles: function(data, dirName) {
    var files = [];
    if (typeof(dirName) === "undefined") {
        var dirName = data.dir;
    }

    (function getFiles(newData) {
        _.mapObject(newData, function(val, key) {
            if (val !== dirName) {
                newData.files.forEach(function(el) {
                    if (typeof(el) !== "string") {
                        getFiles(el);
                    }
                });
            } else {
                newData.files.forEach(function(el) {
                    dirName = el.dir;
                    typeof(el) === "string" ? files.push(el) : getFiles(el);
                });
            }
        });
    })(data);

    return files;
  },

  // return permutations of an array
  // didn't wanna think about this for too long so the answer was adapted from here:
  // http://stackoverflow.com/questions/9960908/permutations-in-javascript
  permute: function(arr) {
    var permArr = [],
        usedChars = [];

    (function permute(input) {
    var i, ch;
      for (i = 0; i < input.length; i++) {
        ch = input.splice(i, 1)[0];
        usedChars.push(ch);
        if (input.length == 0) {
          permArr.push(usedChars.slice());
        }
        permute(input);
        input.splice(i, 0, ch);
        usedChars.pop();
      }
    })(arr);

    return permArr;
  },

  // return fibonacci number
  // didn't wanna think about this for too long so the answer was adapted from here:
  // https://blog.nraboy.com/2015/01/fibonacci-sequence-printed-javascript/
  fibonacci: function(n) {
    if (n <= 2) {
      return 1;
    } else {
      return this.fibonacci(n - 1) + this.fibonacci(n - 2);
    }
  },

  // return the set of all valid combinations of n pairs of parentheses
  // didn't wanna think about this for too long so the answer was adapted from here:
  // https://gist.github.com/seemaullal/c504de50ab42a57b59c1
  validParentheses: function(n) {
    var combos = [];

    (function getCombinations(openNum,closingNum,curr) {
        if (openNum === 0 && closingNum === 0) {
          combos.push(curr);
        }
        if (openNum > 0) {
          getCombinations(openNum-1, closingNum + 1, curr + "(");
        }
        if (closingNum > 0) {
          getCombinations(openNum, closingNum - 1, curr + ")");
        }
    })(n, 0, "");

    return combos;
  }
};
