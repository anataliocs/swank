'use strict';

angular.module('swankApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('profile', {
                parent: 'account',
                url: '/profile',
                data: {
                    roles: ['ROLE_USER'],
                    pageTitle: 'Profile'
                },
                views: {
                    'content@': {
                        templateUrl: 'scripts/app/account/profile/profile.html',
                        controller: 'ProfileController'
                    }
                },
                resolve: {}
            });
    });
