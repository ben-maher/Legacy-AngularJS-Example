angular.module('ImdbRip').controller('MoviesJustReleasedController', function ($scope, $routeParams, $http, $sce) {
    var justReleasedReq = {
        type: 'GET',
        url: 'http://api.themoviedb.org/3/movie/now_playing?api_key=4b9adfc40dafb4edd660a77a53f04129'
    };

    $http(justReleasedReq).success(function (data) {
        $scope.justReleasedMovies = data.results;
    });

    $scope.NavigateToMovie = function (movie) {
        window.location = '#/movie/' + movie.id;
    };
});