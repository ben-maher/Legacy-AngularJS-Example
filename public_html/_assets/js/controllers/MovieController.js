angular.module('ImdbRip').controller('MovieController', function ($scope, $routeParams, $http) {
    var movieById = {
        type: 'GET',
        url: 'http://api.themoviedb.org/3/movie/' + $routeParams.id + '?api_key=4b9adfc40dafb4edd660a77a53f04129'
    };
    var creditsByMovie = {
        type: 'GET',
        url: 'http://api.themoviedb.org/3/movie/' + $routeParams.id + '/credits?api_key=4b9adfc40dafb4edd660a77a53f04129'
    };

    $http(movieById).success(function (data) {
        $scope.movie = data;
        
            $http(creditsByMovie).success(function (data) {
        $scope.movie.credits = data;
        console.log($scope.movie);
    });
        
    });
    

    
});
            