exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    return arr.indexOf(item);
  },

  sum : function(arr) {
    return arr.reduce(function(curr, next) {
      return curr + next;
    });
  },

  remove : function(arr, item) {
    return arr.filter(function(el) {
      return el !== item;
    });
  },

  removeWithoutCopy : function(arr, item) {
    for (var i = arr.length - 1; i >= 0; i--) {
      if (arr[i] === item) {
        arr.splice(i, 1);
      }
    };

    return arr;
  },

  append : function(arr, item) {
    arr.push(item);

    return arr;
  },

  truncate : function(arr) {
    arr.pop();

    return  arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);

    return arr;
  },

  curtail : function(arr) {
    arr.shift();

    return  arr;
  },

  concat : function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);

    return arr;
  },

  count : function(arr, item) {
    var counter = 0;
    arr.forEach(function(el) {
      el === item && counter++;
    });

    return counter;
  },

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

  square : function(arr) {
    return arr.map(function(el) {
      return el*el;
    });
  },

  findAllOccurrences : function(arr, target) {
    var instances = [];
    arr.forEach(function(el, i) {
      el === target && instances.push(i);
    });
    return instances;
  }
};
