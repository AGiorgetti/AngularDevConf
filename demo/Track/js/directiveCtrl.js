angular.module('ngDevConf')
    .controller('directiveCtrl', ['$rootScope', '$scope',
        function ($rootScope, $scope) {
            $scope.data = {
                email: '',
                password: ''
            };
            $scope.submit = function (data) {
                alert(JSON.stringify(data));
            };
            $scope.setDebugInfo($scope.data);
        }]);