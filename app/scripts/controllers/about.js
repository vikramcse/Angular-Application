'use strict';

/**
 * @ngdoc function
 * @name abhijitApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the abhijitApp
 */
angular.module('abhiApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
