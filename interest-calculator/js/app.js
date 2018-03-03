var InterestCalculator = angular.module("InterestCalculator", ['ngMaterial', 'ngRoute', 'ngAnimate', 'ngSanitize', 'ngMessages', 'md.data.table']);

//Our app configuration
InterestCalculator.config(function ($routeProvider, $mdThemingProvider) {
    //Routing declration
    $routeProvider
        .when('/', {
            templateUrl: './views/home.html',
            title : 'Interest Calculator'
        })
        .when('/simple', {
            templateUrl: './views/SimpleInterestTemplate.html',
            controller: 'SimpleInterestCtrl',
            title : 'Simple Interest',
        })
        .when('/compound', {
            templateUrl: './views/CompoundInterestTemplate.html',
            controller: 'CompoundInterestCtrl',
            title : 'Compound Interest'
        });
    //App theme configuration
    $mdThemingProvider.theme('default').primaryPalette('blue').accentPalette('pink');
});


/*-----------------Start Navigation Toolbar-----------------*/
InterestCalculator.run(['$rootScope', '$route', '$location', function ($rootScope, $route, $location) {
    //Navigate to homepage on app start
    $location.path('/');
    //Method used for navigation from the top navbar, accepts one param which is the page name (path/url name)
    $rootScope.goTo = function (page) {
        $location.path(page);
    }
    //Listed to route change and assign page_name varible (used to define a unique id for each view)
    $rootScope.$on('$routeChangeSuccess', function () {
        $rootScope.page_name = $route.current.$$route.title.replace(/ /g, '');
    });
}]);