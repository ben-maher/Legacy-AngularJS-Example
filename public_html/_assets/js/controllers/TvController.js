angular.module('ImdbRip').controller('TvController', function ($scope, $routeParams, $http) {
    var showById = {
        type: 'GET',
        url: 'https://api.themoviedb.org/3/tv/' + $routeParams.id + '?api_key=4b9adfc40dafb4edd660a77a53f04129'
    };
    var creditsByShow = {
        type: 'GET',
        url: 'https://api.themoviedb.org/3/tv/' + $routeParams.id + '/credits?api_key=4b9adfc40dafb4edd660a77a53f04129'
    };

    var similiarShowsByShow = {
        type: 'GET',
        url: 'http://api.themoviedb.org/3/tv/' + $routeParams.id + '/similar?api_key=4b9adfc40dafb4edd660a77a53f04129'
    };

    $http(showById).success(function (data) {
        $scope.show = data;

        if ($scope.show.backdrop_path)
            angular.element('#page-bg').css("background-image", "url('http://image.tmdb.org/t/p/original" + $scope.show.backdrop_path + "')");

        $http(creditsByShow).success(function (data) {
            $scope.show.credits = data;

            $scope.show.genresString = $scope.show.genres.map(function (genre) {
                return genre['name'];
            });
        });

        $http(similiarShowsByShow).success(function (data) {
            $scope.show.similarShows = data.results;
        });

    });


    $scope.NavigateToShow = function (similarShow) {
        window.location = '#/tv/' + similarShow.id;
    };
    $scope.NavigateToPerson = function (castMember) {
        window.location = '#/person/' + castMember.id;
    };

});
            