angular.module('projectDj')
.controller('HomeCtrl', ['$scope', 'Auth', function($scope, Auth) {
    $scope.test = 'PROJECT DJ';
    $scope.auth = Auth.isAuthenticated;
}]);
