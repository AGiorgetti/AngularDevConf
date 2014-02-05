angular
    .module('ngDevConf', ['ngRoute', 'ngAnimate', 'catalog', 'myDirectives'])
    .config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider.
            when('/', {
                templateUrl: 'home.html',
                controller: 'homeCtrl'
            }).
            when('/ctrldemos', {
                templateUrl: '../track/ctrldemos.html'
            }).
            when('/dirdemos', {
                templateUrl: '../track/dirdemos.html'
            }).
            when('/ctrldemo1', {
                templateUrl: '../track/01-scopeinheritance.html'
            }).
            when('/ctrldemo2', {
                templateUrl: '../track/02-scopeinheritance.html'
            }).
            when('/dirdemo1', {
                templateUrl: '../track/01-directive.html'
            }).
            when('/dirdemo2', {
                templateUrl: '../track/02-directive.html'
            }).
            when('/dirdemo3', {
                templateUrl: '../track/03-directive.html'
            }).
            when('/dirdemo4', {
                templateUrl: '../track/04-directive.html'
            }).
            otherwise({
                redirectTo: '/'
            });
        }]);