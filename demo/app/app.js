angular
    .module('ngDevConf', ['ngRoute', 'ngAnimate', 'catalog', 'myDirectives'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'home.html',
                controller: 'homeCtrl'
            }).
            when('/ctrldemos', {
                templateUrl: '../Track/ctrldemos.html'
            }).
            when('/dirdemos', {
                templateUrl: '../Track/dirdemos.html'
            }).
            when('/ctrldemo1', {
                templateUrl: '../Track/01-scopeinheritance.html'
            }).
            when('/ctrldemo2', {
                templateUrl: '../Track/02-scopeinheritance.html'
            }).
            when('/dirdemo1', {
                templateUrl: '../Track/01-directive.html'
            }).
            when('/dirdemo2', {
                templateUrl: '../Track/02-directive.html'
            }).
            when('/dirdemo3', {
                templateUrl: '../Track/03-directive.html'
            }).
            when('/dirdemo4', {
                templateUrl: '../Track/04-directive.html'
            }).
            otherwise({
                redirectTo: '/'
            });
    }]);