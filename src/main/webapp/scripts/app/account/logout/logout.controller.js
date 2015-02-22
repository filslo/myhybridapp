'use strict';

angular.module('myhybridappApp')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });
