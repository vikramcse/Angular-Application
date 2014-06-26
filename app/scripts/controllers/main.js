'use strict';

/**
 * @ngdoc function
 * @name abhijitApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the abhijitApp
 */
angular.module('abhiApp')
  .controller('MainCtrl', function ($scope) {
  		$scope.submitForm = function (isValid) {


  			if (isValid) {
				alert('our form is amazing');
			}
			
  		};
  });
