angular.module('projectDj')
  .factory('locationService', ['$location', function($location) {

    return {
      get: $location.path()
    }
  }]);
