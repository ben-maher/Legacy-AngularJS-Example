//    
//    $rootScope.currentLocation = {};
//
//    $scope.GetCurrentLocation = function () {
//        navigator.geolocation.getCurrentPosition(function (location) {
//            $rootScope.currentLocation.latitude = location.coords.latitude;
//            $rootScope.currentLocation.longitude = location.coords.longitude;
//            $scope.$apply();
//            getLocalShowings($rootScope.currentLocation);
//        });
//    };
//    $scope.GetCurrentLocation();
//    
//    $http.defaults.headers.jsonp = {'Content-Type':'application/json'};
//    
//    getLocalShowings = function(currentLocation) {
//        var localCinemasReq = {
//            type: 'GET',
//            url: 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location='+currentLocation.latitude+','+currentLocation.longitude+'&radius=5000&type=movie-theater&name=empire&key=AIzaSyD_a82mKcqnQuhYXRVLed640Ct3hZOupNE'
//        };
//        
//      $http(localCinemasReq).success(function(data){
//         console.log(data);
//      });
//    };

angular.module('ImdbRip').controller('LocalCinemasController', function ($scope, $rootScope, $routeParams, $http, $sce) {
   $rootScope.currentLocation = {};
   
   $scope.GetCurrentLocation = function () {
   navigator.geolocation.getCurrentPosition (function (location){
       $rootScope.currentLocation = location;
       $scope.$apply();
   });
   };
});