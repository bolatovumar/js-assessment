exports = (typeof window === 'undefined') ? global : window;

exports.objectsAnswers =  {
  // alter the context in which a method runs
  alterContext : function(fn, obj) {
    return fn.call(obj);
  },

  // alter multiple objects at once
  alterObjects : function(constructor, greeting) {
    constructor.prototype.greeting = greeting;
  },

  // iterate over an object's "own" properties
  // using underscore function since it's included in the repo
  iterate : function(obj) {
    var props = [];
    _.mapObject(obj, function(val, key) {
      props.push(key + ": " + val);
    });
    return props;
  }
};
