angular.module('ImdbRip').controller('MovieController', function ($scope, $routeParams, $http, $sce) {

    var movieById = {
        type: 'GET',
        url: 'https://api.themoviedb.org/3/movie/' + $routeParams.id + '?api_key=4b9adfc40dafb4edd660a77a53f04129'
    };
    var creditsByMovie = {
        type: 'GET',
        url: 'https://api.themoviedb.org/3/movie/' + $routeParams.id + '/credits?api_key=4b9adfc40dafb4edd660a77a53f04129'
    };

    var reviewsByMovie = {
        type: 'GET',
        url: 'https://api.themoviedb.org/3/movie/' + $routeParams.id + '/reviews?api_key=4b9adfc40dafb4edd660a77a53f04129'
    };

    var trailersByMovie = {
        type: 'GET',
        url: 'https://api.themoviedb.org/3/movie/' + $routeParams.id + '/videos?api_key=4b9adfc40dafb4edd660a77a53f04129'
    };

    var similarMoviesByMovie = {
        type: 'GET',
        url: 'https://api.themoviedb.org/3/movie/' + $routeParams.id + '/similar?api_key=4b9adfc40dafb4edd660a77a53f04129'
    };

    $http(movieById).success(function (data) {
        $scope.movie = data;

        if ($scope.movie.backdrop_path)
            angular.element('#page-bg').css("background-image", "url('http://image.tmdb.org/t/p/original" + $scope.movie.backdrop_path + "')");

        $http(creditsByMovie).success(function (data) {
            $scope.movie.credits = data;

            $scope.movie.genresString = $scope.movie.genres.map(function (genre) {
                return genre['name'];
            });
        });

        $http(reviewsByMovie).success(function (data) {
            $scope.movie.reviews = data;
        });

        $http(trailersByMovie).success(function (data) {
            $scope.movie.trailers = data.results;
            $scope.movie.currentTrailer = data.results[0];
        });

        $http(similarMoviesByMovie).success(function (data) {
            $scope.movie.similarMovies = data.results;
        });

        $scope.getVideoSrc = function (trailer) {
            return 'https://www.youtube.com/embed/' + trailer.key + '?rel=0&amp;showinfo=0';
        };

        $scope.Navigate = function (searchResult) {
            window.location = '#/' + searchResult.media_type + '/' + searchResult.id;
        };

    });

    $scope.NavigateToPerson = function (castMember) {
        window.location = '#/person/' + castMember.id;
    };

    $scope.NavigateToMovie = function (movie) {
        window.location = '#/movie/' + movie.id;
    };
});
            