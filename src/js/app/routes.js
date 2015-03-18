'use strict';

var angular = require('angular'),
    app = require('./app');

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            controller: 'DashboardController',
            templateUrl: 'views/dashboard.html'
        })
        .when('/login', {
            controller: 'LoginController',
            templateUrl: 'views/login.html'
        })
        .otherwise({
            redirectTo: '/'
        });

    // TODO $locationProvider (HTML5) config
    $locationProvider.html5Mode(true);
});
