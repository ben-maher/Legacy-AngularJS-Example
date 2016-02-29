angular.module('ImdbRip').controller('SearchController', function ($scope, $route, $routeParams, $location, $http) {
    $scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;
    $scope.search = $routeParams.query;

    var imdbReq = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/search/multi?query=' + $routeParams.query + '&api_key=4b9adfc40dafb4edd660a77a53f04129'
    };


    $scope.imdbItems = [];
    $http(imdbReq).success(function (data) {
        $scope.searchResults = data.results;

    });
    
    $scope.GetName = function(object){
        if (object.media_type === "tv") return object.name;
        if (object.media_type === "movie") return object.title;
        if (object.media_type === "person") return object.name;
    };
    
    $scope.Released = function (object){
        if (object.media_type === "tv") return object.first_air_date;
        if (object.media_type === "movie") return object.release_date;
    };
    
    $scope.Poster = function (object){
        if (object.media_type === "person") return object.profile_path;
        else return object.poster_path;
    };
    
    $scope.Navigate = function (searchResult) {
        window.location = '#/'+ searchResult.media_type + '/' + searchResult.id;
        //todo there can be cleanup using media_type instead of if
    };
});
