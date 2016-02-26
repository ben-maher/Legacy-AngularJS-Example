angular.module('ImdbRip').controller('SearchController', function ($scope, $route, $routeParams, $location, $http) {
    $scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;
    $scope.search = $routeParams.query;

    var imdbReq = {
        method: 'GET',
        url: 'https://omdbapi.com/?s=' + $routeParams.query + '&v=1',
        headers: {
            'User-Agent', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2564.116 Safari/537.36'
        }
        }
    };
$scope.imdbItems = [];
    $http(imdbReq).success(function (data) {
        data.Search.forEach(function (value) {
            $scope.imdbItems.push(
                    {
                        title: value.Title,
                        year: value.Year,
                        rated: value.Rated,
                        released: value.Released,
                        runtime: value.Runtime,
                        genre: value.Genre,
                        director: value.Director,
                        writer: value.Writer,
                        actors: value.Actors,
                        plot: value.Plot,
                        language: value.Language,
                        country: value.Country,
                        awards: value.Awards,
                        poster: value.Poster.replace("http://", "https://"),
                        metascore: value.Metascore,
                        imdbRating: value.imdbRating,
                        imdbVotes: value.imdbVotes,
                        imdbId: value.imdbID,
                        type: value.Type,
                        tomatoMeter: value.tomatoMeter,
                        tomatoImage: value.tomatoImage,
                        tomatoRating: value.tomatoRating,
                        tomatoReviews: value.tomatoReviews,
                        tomatoFresh: value.tomatoFresh,
                        tomatoRotten: value.tomatoRotten,
                        tomatoConsensus: value.tomatoConesnsus,
                        tomatoUserMeter: value.tomatoUserMeter,
                        tomatoUserRating: value.tomatoUserRating,
                        tomatoUserReviews: value.tomatoUserREviews,
                        tomatoUrl: value.tomatoURL,
                        dvd: value.DVD,
                        boxOffice: value.BoxOffice,
                        production: value.Production,
                        website: value.Website
                    }
            )
        });
        //todo .replace("http://","https://")

    });

    $scope.Navigate = function (imdbItem) {
        window.location = "#/details/" + imdbItem.imdbId;
    };
});
