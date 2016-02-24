angular.module('ImdbRip').controller('HomeController', function ($scope, $routeParams) {
                $scope.name = "Home Controller";
                $scope.params = $routeParams;

                //todo create array of movies to render on the homepage (api to fetch details only supplying their imdbid.
                $scope.newFilms = [];
                $scope.popularFilms = [];

            });