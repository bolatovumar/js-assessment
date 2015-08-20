exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {
  // determine the location of an item in an array
  indexOf : function(arr, item) {
    return arr.indexOf(item);
  },

  // add the values of an array
  sum : function(arr) {
    return arr.reduce(function(curr, next) {
      return curr + next;
    });
  },

  // remove all instances of a value from an array
  remove : function(arr, item) {
    return arr.filter(function(el) {
      return el !== item;
    });
  },

  // remove all instances of a value from an array, returning the original array
  removeWithoutCopy : function(arr, item) {
    for (var i = arr.length - 1; i >= 0; i--) {
      if (arr[i] === item) {
        arr.splice(i, 1);
      }
    };

    return arr;
  },

  // add an item to the end of an array
  append : function(arr, item) {
    arr.push(item);

    return arr;
  },

  // remove the last item of an array
  truncate : function(arr) {
    arr.pop();

    return  arr;
  },

  // add an item to the beginning of an array
  prepend : function(arr, item) {
    arr.unshift(item);

    return arr;
  },

  // remove the first item of an array
  curtail : function(arr) {
    arr.shift();

    return  arr;
  },

  // join together two arrays
  concat : function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  // add an item anywhere in an array
  insert : function(arr, item, index) {
    arr.splice(index, 0, item);

    return arr;
  },

  // count the occurences of an item in an array
  count : function(arr, item) {
    var counter = 0;
    arr.forEach(function(el) {
      el === item && counter++;
    });

    return counter;
  },

  // find duplicates in an array
  duplicates : function(arr) {
    var duplicates = [];
    for (var i = 0; i < arr.length; i++) {
      var val = arr[i];
      arr.splice(0, 1);
      i--;
      if (arr.indexOf(val) !== -1 && duplicates.indexOf(val) === -1) {
        duplicates.push(val);
      }
    }

    return duplicates;
  },

  // square each number in an array
  square : function(arr) {
    return arr.map(function(el) {
      return el*el;
    });
  },

  // find all occurrences of an item in an array
  findAllOccurrences : function(arr, target) {
    var instances = [];
    arr.forEach(function(el, i) {
      el === target && instances.push(i);
    });
    return instances;
  }
};
