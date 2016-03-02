angular.module('ImdbRip').directive('autoComplete', function ($timeout, $http) {
    return {
        restrict: 'A',
        link: function (scope, iElement) {
            var titles = function (request, response) {
                var searchReq = {
                    method: 'GET',
                    url: 'https://api.themoviedb.org/3/search/multi?query=' + request.term + '&api_key=4b9adfc40dafb4edd660a77a53f04129'
                };

                $http(searchReq).success(function (data) {
                    var titles = (data.results || []).slice(0,10).map(function (obj) {
                        return {
                            label: GetName(obj),
                            value: obj
                        };
                    });
                    response(titles.filter(function (word) {
                        return word.label.normalise().contains(request.term.normalise());
                    }));
                });
            };

            GetName = function (object) {
                if (object.media_type === "tv")
                    return object.name;
                if (object.media_type === "movie")
                    return object.title;
                if (object.media_type === "person")
                    return object.name;
            };
            
           Navigate = function (searchResult) {
        window.location = '#/'+ searchResult.media_type + '/' + searchResult.id;
        //todo there can be cleanup using media_type instead of if
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
                    Navigate(ui.item.value);
                    return false;
                }
            });
            iElement.autocomplete('instance')._renderItem = function (ul, item) {
                return $("<li>").html('<img width="50" src="http://image.tmdb.org/t/p/w300'+item.value.poster_path+'"> <span>'+item.label+'</span>').appendTo(ul);
            };
        }
    };
});
