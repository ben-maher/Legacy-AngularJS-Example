(function () {

    if (!String.prototype.startsWith)
        String.prototype.startsWith = function (str) {
            return this.indexOf(str) === 0;
        };
    if (!String.prototype.contains)
        String.prototype.contains = function (str) {
            return this.indexOf(str) > -1;
        };
    String.prototype.normalise = function () {
        return this.replace(/([^a-z0-9]|\s)*/gi, '').toLowerCase();
    };
    angular.module('ImdbRip', ["ngRoute", "ngResource"])

            .config(function ($routeProvider, $sceDelegateProvider) {
                $sceDelegateProvider.resourceUrlWhitelist([
                    'self',
                    'https://www.youtube.com/**'
                ]);
                $routeProvider
                        .when('/details/:imdbId', {
                            name: 'details',
                            templateUrl: 'templates/details.html',
                            controller: 'DetailsController'
                        })
                        .when('/contact', {
                            name: 'contact',
                            templateUrl: 'templates/contact.html',
                            controller: 'ContactController'
                        })
                        .when('/search/:query', {
                            name: 'search',
                            templateUrl: 'templates/search.html',
                            controller: 'SearchController'
                        })
                        .when('/movie/just-released', {
                            name: 'movie_just-released',
                            templateUrl: 'templates/movie/just-released.html',
                            controller: 'MoviesJustReleasedController'
                        })
                        .when('/movie/:id', {
                            name: 'movie',
                            templateUrl: 'templates/movie.html',
                            controller: 'MovieController'
                        })
                        .when('/tv/:id', {
                            name: 'movie',
                            templateUrl: 'templates/tv.html',
                            controller: 'TvController'
                        })
                        .when('/person/:id', {
                            name: 'movie',
                            templateUrl: 'templates/person.html',
                            controller: 'PersonController'
                        })
                        .otherwise({
                            name: 'home',
                            templateUrl: 'templates/home.html',
                            controller: 'HomeController'
                        });
            });
})();