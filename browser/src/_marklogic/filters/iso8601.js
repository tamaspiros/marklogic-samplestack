define(['_marklogic/module', 'moment'], function (module, moment) {

  /**
   * @ngdoc filter
   * @name toIso8601
   * @description
   * TBD
   */
  module.filter('toIso8601', function () {
    return function (date) {
      if (!date) {
        return undefined;
      }
      else {
        return moment(date).toISOString();
      }
    };
  });

  /**
   * @ngdoc filter
   * @name fromIso8601
   * @description
   * TBD
   */
  module.filter('fromIso8601', function () {
    return function (str) {
      if (!str) {
        return undefined;
      }
      else {
        return moment(str).toDate();
      }
    };
  });

});