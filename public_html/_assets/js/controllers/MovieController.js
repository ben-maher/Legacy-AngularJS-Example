angular.module('ImdbRip').controller('MovieController', function ($scope, $routeParams, $http) {                
                var movieById = {
                    type: 'GET',
                    url: 'http://api.themoviedb.org/3/movie/'+$routeParams.id+'?api_key=4b9adfc40dafb4edd660a77a53f04129'
                };
                
                $http(movieById).success(function(data){
                   $scope.movie = data; 
                });
                
            });
            