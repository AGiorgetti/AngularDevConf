angular.module('ngDevConf')
    .controller('shell', ['$rootScope', '$scope',
        function ($rootScope, $scope) {
            $scope.title1 = "$scope inheritance & primitive types";
            
            // create the data on the $rootScope
            // the scopes prototipally inherit from their parent scope
            // the ultimate root (the first scope) it's called $rootScope
            
            $rootScope.text = '...'; // <- this is a primitive type!!! a primitive type is copied in child scopes and overrides this one!.
            // so if you wanna be sure to share data between controllers and retain the proper references to
            // your objects, beware of the 'dots'.
            
            $scope.title2 = "$scope prototipal inheritance";
            $rootScope.data = { text: '...' }; // <- this is a reference type!!!
    }])
    .controller('controller1', ['$scope',
        function ($scope) {

    }])
    .controller('controller2', ['$scope',
        function ($scope) {

    }]);