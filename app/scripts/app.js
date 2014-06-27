'use strict';

/**
 * @ngdoc overview
 * @name abhijitApp
 * @description
 * # abhijitApp
 *
 * Main module of the application.
 */
angular
  .module('abhiApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/logout', {
        template: 'Logging out ...',
        controller: 'LogoutCtrl'
      })
      .when('/dash', {
        template: 'HI there',
        controller:'DashCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .constant('FBURL', 'https://intense-customer.firebaseio.com/');
