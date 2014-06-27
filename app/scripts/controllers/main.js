/*global Firebase*/
'use strict';

/**
 * @ngdoc function
 * @name abhijitApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the abhijitApp
 */
angular.module('abhiApp')
  .controller('MainCtrl', function ($scope, FBURL, $firebase) {
  		var custRef = new Firebase(FBURL);
  		var formRef = custRef.child('forms');
  		var fireForm = $firebase(formRef);
  		
  		$scope.firstName = null;
  		$scope.lastName = 'Not Specified';
  		$scope.city = 'Not Specified';
  		$scope.address = 'Not Specified';

  		$scope.submitForm = function (isValid) {
  			if (isValid) {
  				var currentForm = {
  					firstName: $scope.firstName,
  					lastName: $scope.lastName,
  					email: $scope.email,
  					sex: $scope.sex,
  					wife: $scope.wife,
  					tel: $scope.tel,
  					city: $scope.city,
  					address: $scope.address,
  					budget: $scope.budget,
  					size: $scope.size
  				};

  				fireForm.$add(currentForm);
			}
  		};

  		
  });
