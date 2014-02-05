(function () {
    "use strict";
    angular.module('ngDevConf')
        .service('dirService', function () {
            return {
                email: '',
                password: ''
            };
        })
        .controller('directiveCtrl', ['$rootScope', '$scope', 'dirService',
            function ($rootScope, $scope, dirService) {
                $scope.data = dirService;
                $scope.submit = function (data) {
                    alert(JSON.stringify(data));
                };
                $scope.setDebugInfo(dirService);
            }]);
}());