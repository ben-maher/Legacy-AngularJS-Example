angular.module('ImdbRip').controller('ContactController', function ($scope, $routeParams) {
                $scope.params = $routeParams;
                $scope.contact = {
                    address: "6 Guild Street",
                    postCode: "SE21 1FS",
                    county: "Essex",
                    country: "United Kingdom",
                    tel: "077 1021 3968"
                };
            });
            