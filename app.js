var weatherApp = angular.module('weatherApp', [])

weatherApp.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'pages/home.html',
        controller: 'homeController'
    })
    .when('/forecast', {
        templateUrl: 'pages/forecast.html',
        controller: 'forecastController'
    });
});

weatherApp.controller('homeController', [function() {

}]);

weatherApp.controller('forecastController', [function() {

}]);