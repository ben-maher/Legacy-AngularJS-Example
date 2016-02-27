angular.module('ImdbRip').controller('HomeController', function ($scope, $routeParams, $http) {
    $scope.name = "Home Controller";
    $scope.params = $routeParams;

    var latestReq = {
        method: 'GET',
        url: 'http://api.themoviedb.org/3/movie/now_playing?api_key=4b9adfc40dafb4edd660a77a53f04129'
    };

    $http(latestReq).success(function (data) {
        $scope.newFilms = data.results;
    });



    var popularReq = {
        method: 'GET',
        url: 'http://api.themoviedb.org/3/movie/popular?api_key=4b9adfc40dafb4edd660a77a53f04129'
    };

    $http(popularReq).success(function (data) {
        $scope.popularFilms = data.results;
    });

    $scope.NavigateToMovie = function (film) {
        window.location = "#/movie/" + film.id;
    };

});