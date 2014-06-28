/*global Firebase*/
'use strict';

(function (angular) {
	angular.module('abhiApp')
		.controller('LogoutCtrl', function ($scope, FBURL, $firebaseSimpleLogin, $window) {
			var custRef = new Firebase(FBURL);

	  		$scope.errors = [];
	  		$scope.simpleLogin = $firebaseSimpleLogin(custRef);

	  		$scope.simpleLogin.$logout();
        	$window.location.reload();
	  		console.log('logging out....');
	  		$window.location.href='/#/';
		});
})(window.angular);