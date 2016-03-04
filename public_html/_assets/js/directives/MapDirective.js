angular.module('ImdbRip').directive('mapCanvas', function ($scope, $rootScope) {
    var returnObj = {
        restrict: 'E',
        scope: {
            location: '='
        },
        template: '<div>{{location}}</div>',
        link: function (scope, element) {
            console.log($rootScope.currentLocation);
            var mapOptions = {
                zoom: 8,
                center: new google.maps.LatLng(scope.location.latitude, scope.location.longitude)
            };
            new google.maps.Map(element[0], mapOptions);
        }
    };
    return returnObj;
});