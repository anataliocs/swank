'use strict';

angular.module('swankApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


