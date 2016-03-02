angular.module('ImdbRip').controller('TvTopRatedController', function ($scope, $http) {
    var topRatedShowsReq = {
        type: 'GET',
        url: 'http://api.themoviedb.org/3/tv/top_rated?api_key=4b9adfc40dafb4edd660a77a53f04129'
    };

    $http(topRatedShowsReq).success(function (data) {
        $scope.topRatedShows = data.results;
    });

    $scope.NavigateToShow = function (show) {
        window.location = '#/tv/' + show.id;
    };
});