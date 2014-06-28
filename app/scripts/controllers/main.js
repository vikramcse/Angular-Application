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
  .controller('MainCtrl', function ($scope, FBURL, $firebase, $firebaseSimpleLogin, $timeout) {
  		var custRef = new Firebase(FBURL);

  		var formRef = custRef.child('forms');
  		var fireForm = $firebase(formRef);

      var siteRef = custRef.child('siteLocations');
      var pcityRef = custRef.child('siteCities');

  		$scope.simpleLogin = $firebaseSimpleLogin(custRef);
  		
  		$scope.firstName = null;
  		$scope.city = 'Not Specified';
      $scope.sites = [];
      $scope.cities = [];

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
  					budget: $scope.budget,
  					size: $scope.size,
            rentPurchase:$scope.rp,
            bedroom:$scope.bedroom,
            bathroom:$scope.bathroom,
            paddress:$scope.paddress,
            pcity:$scope.pcity,
            siteLocation:$scope.siteloc
  				};

  				fireForm.$add(currentForm);
			}
  		};

      siteRef.on('value', function (snapshot) {
        $scope.sites = [];
        $timeout(function () {
          snapshot.forEach(function(item) {
            $scope.sites.push(item.val());
          });
        });
      });

      pcityRef.on('value', function (snapshot) {
        $scope.cities = [];
        $timeout(function () {
          snapshot.forEach(function(item) {
            $scope.cities.push(item.val());
          });
        });
      });
  		
  });
