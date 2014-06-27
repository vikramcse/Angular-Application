/*global Firebase*/
'use strict';

angular.module('abhiApp')
  .controller('LoginCtrl', function ($scope, FBURL, $firebaseSimpleLogin, $window, $rootScope) {
  		var custRef = new Firebase(FBURL);

  		$scope.errors = [];
  		$scope.simpleLogin = $firebaseSimpleLogin(custRef);
  		$scope.user = {
  			email:'',
  			password:''
  		};

  		$scope.login = function() {
  			$scope.errors = [];

  			if($scope.user.email === '') {
  				$scope.errors.push('Please Enter your email');
  			}
  			if($scope.user.password === '') {
  				$scope.errors.push('Please Enter your password');
  			}
  			if($scope.errors.length > 0) {
  				return;
  			}

	  		
	  		var promise = $scope.simpleLogin.$login('password', {
	  			email:$scope.user.email,
	  			password:$scope.user.password
  			});
	  		

	  		promise.then(function (user) {
	  			$rootScope.user = user;
	  			$window.location.href='/#/dash';
	  		}, function (error) {
	  			if(error.code === 'INVALID_EMAIL' || error.code === 'INVALID_PASSWORD') {
	  				$scope.errors.push('The email or password may be wrong. Please try again !');
	  			}
	  		});
  	};
  		
  		
  });
