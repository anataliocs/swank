'use strict';

angular.module('swankApp')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });
