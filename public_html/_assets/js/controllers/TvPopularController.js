angular.module('ImdbRip').controller('TvPopularController', function ($scope, $http) {
    var popularShowsReq = {
        type: 'GET',
        url: 'http://api.themoviedb.org/3/tv/popular?api_key=4b9adfc40dafb4edd660a77a53f04129'
    };

    $http(popularShowsReq).success(function (data) {
        $scope.popularShows = data.results;
    });

    $scope.NavigateToShow = function (show) {
        window.location = '#/tv/' + show.id;
    };
});