angular.module('ImdbRip').controller('TopRatedMoviesController', function ($scope, $routeParams, $http, $sce) {
    
    var topRatedMoviesReq = {
        type: 'GET',
        url: 'http://api.themoviedb.org/3/movie/top_rated?api_key=4b9adfc40dafb4edd660a77a53f04129'
    };

    $http(topRatedMoviesReq).success(function (data) {
        $scope.topRatedMovies = data.results;
    });

    $scope.NavigateToMovie = function (movie) {
        window.location = '#/movie/' + movie.id;
    };
});