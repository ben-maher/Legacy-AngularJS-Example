angular.module('ImdbRip').controller('TvAiringTodayController', function ($scope, $http) {
    var airingTodayReq = {
        type: 'GET',
        url: 'http://api.themoviedb.org/3/tv/airing_today?api_key=4b9adfc40dafb4edd660a77a53f04129'
    };

    $http(airingTodayReq).success(function (data) {
        $scope.airingTodayShows = data.results;
    });

    $scope.NavigateToShow = function (show) {
        window.location = '#/tv/' + show.id;
    };
});