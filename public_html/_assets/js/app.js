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

            .config(function ($routeProvider) {
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
                        .otherwise({
                            name: 'home',
                            templateUrl: 'templates/home.html',
                            controller: 'HomeController'
                        });
            });
})();