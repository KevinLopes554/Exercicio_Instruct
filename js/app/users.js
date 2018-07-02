angular.module("users", []);
angular.module("users").controller("usersCtrl", function ($scope, $http, $interval, $timeout) {
    // função criada para o GET dos dados 
    $scope.getUsers = function () {
        $http.get("http://jsonplaceholder.typicode.com/users").then(function (response) {
                $scope.users = response.data;
        });
    };
    $scope.getUsers();
});