angular.module('ImdbRip').controller('DetailsController', function ($scope, $routeParams, $http) {
    $scope.params = $routeParams;
    //$route.current.params.imdbId
    var imdbReq = {
        method: 'GET',
        url: 'https://omdbapi.com/?i=' + $routeParams.imdbId + '&tomatoes=true&v=1&plot=full&r=json'
    };

    $http(imdbReq).success(function (data) {
        $scope.imdbItem = {
            title: data.Title,
            year: data.Year,
            rated: data.Rated,
            released: data.Released,
            runtime: data.Runtime,
            genre: data.Genre,
            director: data.Director,
            writer: data.Writer,
            actors: data.Actors,
            plot: data.Plot,
            language: data.Language,
            country: data.Country,
            awards: data.Awards,
            poster: data.Poster.replace("http://","https://"),
            metascore: data.Metascore,
            imdbRating: data.imdbRating,
            imdbVotes: data.imdbVotes,
            imdbId: data.imdbID,
            type: data.Type,
            tomatoMeter: data.tomatoMeter,
            tomatoImage: data.tomatoImage,
            tomatoRating: data.tomatoRating,
            tomatoReviews: data.tomatoReviews,
            tomatoFresh: data.tomatoFresh,
            tomatoRotten: data.tomatoRotten,
            tomatoConsensus: data.tomatoConsensus,
            tomatoUserMeter: data.tomatoUserMeter,
            tomatoUserRating: data.tomatoUserRating,
            tomatoUserReviews: data.tomatoUserREviews,
            tomatoUrl: data.tomatoURL,
            dvd: data.DVD,
            boxOffice: data.BoxOffice,
            production: data.Production,
            website: data.Website
        };


    });
});
