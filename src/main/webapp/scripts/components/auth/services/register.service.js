'use strict';

angular.module('myhybridappApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


