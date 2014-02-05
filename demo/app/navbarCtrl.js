angular.module('ngDevConf')
    .controller('navbarCtrl', ['$scope', '$location', function ($scope, $location) {
        $scope.navigateto = function (path) {
            $location.path(path);
        }
    }]);
