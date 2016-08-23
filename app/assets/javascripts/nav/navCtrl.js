angular.module('projectDj')
.controller('NavCtrl', ['$scope', 'Auth', 'locationService', function($scope, Auth, locationService){
      $scope.signedIn = Auth.isAuthenticated;
      $scope.logout = Auth.logout;

      $scope.isHome = function() {
        var currentPath = locationService.get;
        if (currentPath == '/') {
          return true;
        };
      };

      Auth.currentUser().then(function (user){
        $scope.user = user;
      });

      $scope.$on('devise:new-registration', function (e, user){
        $scope.user = user;
      });

      $scope.$on('devise:login', function (e, user){
        $scope.user = user;
      });

      $scope.$on('devise:logout', function (e, user){
        $scope.user = {};
      });
}]);
