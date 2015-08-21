exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  async : function(value) {
    return $.Deferred().resolve(value);
  },

  manipulateRemoteData : function(url) {
    return $.get(url).then(
        function(data) {
            return data.people.map(function(el) {
              return el.name;
            })
            .sort();
        }
    );
  }
};
