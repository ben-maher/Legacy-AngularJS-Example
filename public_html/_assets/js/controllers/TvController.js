angular.module('ImdbRip').controller('TvController', function ($scope, $routeParams, $http) {
    var showById = {
        type: 'GET',
        url: 'https://api.themoviedb.org/3/tv/' + $routeParams.id + '?api_key=4b9adfc40dafb4edd660a77a53f04129'
    };
    var creditsByShow = {
        type: 'GET',
        url: 'https://api.themoviedb.org/3/tv/' + $routeParams.id + '/credits?api_key=4b9adfc40dafb4edd660a77a53f04129'
    };
    

    $http(showById).success(function (data) {
        $scope.show = data;

        $http(creditsByShow).success(function (data) {
            $scope.show.credits = data;
            
           $scope.show.genresString = $scope.show.genres.map(function(genre) { return genre['name']; });
        });

    });

    $scope.NavigateToPerson = function (castMember) {
        window.location = '#/person/' + castMember.id;
    };

});
            