exports = (typeof window === 'undefined') ? global : window;

exports.logicalOperatorsAnswers = {
  // should be able to work with logical or
  or : function(a, b) {
    return a || b;
  },

  // should be able to work with logical and
  and : function(a, b) {
    return a && b;
  }
};
