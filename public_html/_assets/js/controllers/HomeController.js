angular.module('ImdbRip').controller('HomeController', function ($scope, $routeParams, $http) {
    $scope.name = "Home Controller";
    $scope.params = $routeParams;

    //todo create array of movies to render on the homepage (api to fetch details only supplying their imdbid.
    $scope.newFilms = [];
    $scope.popularFilms = [];

    ["tt2404233", "tt1431045"].forEach(function (value) {

        var imdbReq = {
            method: 'GET',
            url: 'https://omdbapi.com/?i=' + value + '&v=1'
        };

        $http(imdbReq).success(function (data) {
            $scope.newFilms.push(
                    {
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
                        poster: data.Poster.replace("http://", "https://"),
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
                        tomatoConsensus: data.tomatoConesnsus,
                        tomatoUserMeter: data.tomatoUserMeter,
                        tomatoUserRating: data.tomatoUserRating,
                        tomatoUserReviews: data.tomatoUserREviews,
                        tomatoUrl: data.tomatoURL,
                        dvd: data.DVD,
                        boxOffice: data.BoxOffice,
                        production: data.Production,
                        website: data.Website});

        });

    });

    ["tt2975590", "tt1608290", "tt1663202", "tt4263482", "tt2488496", "tt2379713"].forEach(function (value) {

        var imdbReq = {
            method: 'GET',
            url: 'https://omdbapi.com/?i=' + value + '&v=1'
        };

        $http(imdbReq).success(function (data) {
            $scope.popularFilms.push(
                    {
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
                        poster: data.Poster.replace("http://", "https://"),
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
                        tomatoConsensus: data.tomatoConesnsus,
                        tomatoUserMeter: data.tomatoUserMeter,
                        tomatoUserRating: data.tomatoUserRating,
                        tomatoUserReviews: data.tomatoUserREviews,
                        tomatoUrl: data.tomatoURL,
                        dvd: data.DVD,
                        boxOffice: data.BoxOffice,
                        production: data.Production,
                        website: data.Website}
            );

        });

    });


    $scope.Navigate = function (imdbItem) {
        window.location = "#/details/" + imdbItem.imdbId;
    };


});