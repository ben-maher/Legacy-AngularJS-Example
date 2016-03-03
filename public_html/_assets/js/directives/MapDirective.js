angular.module('ImdbRip').directive('mapCanvas', function () {
    var returnObj = {
        restrict: 'E',
        link: function (scope, element) {
            var mapOptions = {
                zoom: 8,
                center: new google.maps.LatLng(-34.397, 150.644)
            };
            new google.maps.Map(element[0], mapOptions);
        }
    };
    return returnObj;
});