angular.module('ImdbRip').controller('PopularMoviesController', function ($scope, $routeParams, $http, $sce) {
    var popularMoviesReq = {
        type: 'GET',
        url: 'http://api.themoviedb.org/3/movie/popular?api_key=4b9adfc40dafb4edd660a77a53f04129'
    };

    $http(popularMoviesReq).success(function (data) {
        $scope.popularMovies = data.results;
    });

    $scope.NavigateToMovie = function (movie) {
        window.location = '#/movie/' + movie.id;
    };
});