angular.module('ImdbRip').controller('SearchController', function ($scope, $route, $routeParams, $location, $http) {
    $scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;
    $scope.search = $routeParams.query;

    var imdbReq = {
        method: 'GET',
        url: 'https://omdbapi.com/?s=' + $routeParams.query + '&v=1'
    };

    $http(imdbReq).success(function (data) {
        $scope.imdbItems = data.Search;
        console.log(data);
        
    });
    
    $scope.Navigate = function(imdbItem) {
        window.location = "#/details/" + imdbItem.imdbID;
};
});
