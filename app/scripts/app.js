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
    'firebase',
    'routeSecurity',
    'simpleLoginTools'
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
      .when('/update', {
        templateUrl: 'views/update.html',
        controller: 'UpdateCtrl',
        authRequired: true
      })
      .when('/logout', {
        template: 'Logging out ...',
        controller: 'LogoutCtrl'
      })
      .when('/dash', {
        templateUrl: 'views/dashboard.html',
        controller:'DashCtrl',
        authRequired: true
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .constant('FBURL', 'https://intense-customer.firebaseio.com/')
  .constant('loginRedirectPath', '/login');
