angular.module('ImdbRip').controller('AppController', function ($route, $location) {
    this.onRoute = function (routeName) {
        var routeChecks = routeName instanceof Array ? routeName : arguments;
        var currentRouteName = $route.current && $route.current.name ? $route.current.name : null;
        var isPrefix = routeName.substr(-1)==='*';
        if(isPrefix) routeName = routeName.replace('*','');
        if (currentRouteName)
        {
            for (var i = 0, c = routeChecks.length; i < c; i++)
            {
                if (routeChecks[i] === currentRouteName || (isPrefix && currentRouteName.startsWith(routeChecks[i])))
                    return true;
            }
            return false;
        } else
            return false;
    };
    
    this.search = function() {
        $location.path('/search/'+this.searchTerm);
    };
    
});
            