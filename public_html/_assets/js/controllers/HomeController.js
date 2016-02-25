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

    ["tt0120655", "tt0077415", "tt0087800", "tt0317740", "tt0099685", "tt2278871"].forEach(function (value) {

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