angular.module('ImdbRip').controller('PersonController', function ($scope, $route, $routeParams, $location, $http) {
    var personReq = {
        type: 'GET',
        url: 'https://api.themoviedb.org/3/person/' + $routeParams.id + '?api_key=4b9adfc40dafb4edd660a77a53f04129'
    };
    
    var personCredits = {
        type: 'GET',
        url: 'https://api.themoviedb.org/3/person/' + $routeParams.id + '/combined_credits?api_key=4b9adfc40dafb4edd660a77a53f04129'
    };
    
    $http(personReq).success(function(data){
        $scope.person = data;
        
        $http(personCredits).success(function(data){
            $scope.person.credits = data;
        });
        
        console.log($scope.person);
    });
    
    $scope.GetName = function(object){
        if (object.media_type === "tv") return object.name;
        if (object.media_type === "movie") return object.title;
    };
    
    $scope.Navigate = function (searchResult) {
        window.location = '#/'+ searchResult.media_type + '/' + searchResult.id;
    };
    
    
});
