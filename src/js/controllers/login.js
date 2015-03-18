'use strict';

var angular = require('angular'),
    app = require('../app/app');

app.controller('LoginController', function ($scope) {
    $scope.login = function () {
        alert('Logging in...');
    };
});
