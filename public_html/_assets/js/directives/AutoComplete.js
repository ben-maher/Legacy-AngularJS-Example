angular.module('ImdbRip').directive('autoComplete', function ($timeout, $http) {
        return {
            restrict: 'A',
            link: function (scope, iElement) {
                var titles = function (request, response) {
                    var req = {
                        method: 'GET',
                        url: 'https://omdbapi.com/?s=' + request.term
                    };

                    $http(req).success(function (data) {
                        var titles = (data.Search || []).map(function (obj) {
                            return {
                                label: obj.Title,
                                value: obj.imdbID
                            };
                        });
                        response(titles.filter(function (word) {
                            return word.label.normalise().contains(request.term.normalise());
                        }));
                    });
                };

                iElement.autocomplete({
                    source: titles,
                    focus: function (event, ui) {
                        event.preventDefault();
                        iElement.val(ui.item.label);
                        return false;
                    },
                    select: function (event, ui) {
                        event.preventDefault();
                        iElement.val(ui.item.label);
                        window.location = "#/details/" + ui.item.value;
                        return false;
                    }
                });
            }
        };
    });
