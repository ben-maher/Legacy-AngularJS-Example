angular.module('ImdbRip').controller('HomeController', function ($scope, $routeParams, $http) {
    $scope.name = "Home Controller";
    $scope.params = $routeParams;

    //todo create array of movies to render on the homepage (api to fetch details only supplying their imdbid.
    $scope.newFilms = [];
    $scope.popularFilms = [];

    ["tt2404233", "tt1431045"].forEach(function (value) {

        var imdbReq = {
            method: 'GET',
            url: 'https://omdbapi.com/?i=' + value + '&v=1'
        };

        $http(imdbReq).success(function (data) {
            $scope.newFilms.push(data);

        });

    });

    ["tt2975590", "tt1608290", "tt1663202", "tt4263482", "tt2488496", "tt2379713"].forEach(function (value) {

        var imdbReq = {
            method: 'GET',
            url: 'https://omdbapi.com/?i=' + value + '&v=1'
        };

        $http(imdbReq).success(function (data) {
            $scope.popularFilms.push(data);

        });

    });
    
    
    $scope.Navigate = function(imdbItem) {
        window.location = "#/details/" + imdbItem.imdbID;
};


});