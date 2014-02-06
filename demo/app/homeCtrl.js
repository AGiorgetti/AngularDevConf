angular.module('ngDevConf').controller('homeCtrl', function ($scope, catalogService) {
    catalogService.getHomeData().then(function(homeData){
        $scope.vm = homeData;
        $scope.setDebugInfo($scope.vm);
    });
});
