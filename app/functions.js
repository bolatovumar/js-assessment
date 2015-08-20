exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  // use an array as arguments when calling a function
  argsAsArray : function(fn, arr) {
    return fn.apply(this, arr);
  },

  // change the context in which a function is called
  speak : function(fn, obj) {
    return fn.call(obj);
  },

  // return a function from a function
  functionFunction : function(str) {
    return function(another_str) {
      return str + ", " + another_str;
    }
  },

  // should be able to use closures
  makeClosures : function(arr, fn) {
    return arr.map(function(el) {
      return function() {
        return fn(el);
      };
    });
  },

  // create a "partial" function
  partial : function(fn, str1, str2) {
    return function(punctuation) {
      return fn(str1, str2, punctuation);
    };
  },

  // use arguments keyword
  useArguments : function() {
    return Array.prototype.slice.call(arguments).reduce(function(curr, next) {
      return curr + next;
    });
  },

  // apply functions with arbitrary numbers of arguments
  callIt : function(fn) {
    var args = Array.prototype.slice.call(arguments, 1);
    return fn.apply(fn, args);
  },

  // "partial" function for variable number of applied arguments
  partialUsingArguments : function(fn) {
    var origArgs = Array.prototype.slice.call(arguments, 1);
    return function() {
      var args = Array.prototype.slice.call(arguments);
      return fn.apply(this, origArgs.concat(args));
    };
  },

  // curry existing functions
  curryIt : function(fn) {
    return function(a) {
      return function(b) {
        return function(c) {
          return fn(a, b, c);
        }
      }
    }

  }
};
