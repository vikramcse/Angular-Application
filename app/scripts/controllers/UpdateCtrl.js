/*global Firebase*/
'use strict';

(function (angular) {
	angular.module('abhiApp')
		.controller('UpdateCtrl', function ($scope, FBURL, $firebase, $timeout) {
			var custRef = new Firebase(FBURL);

  			var siteRef = custRef.child('siteLocations');
  			var fireSite = $firebase(siteRef);

  			var pcityRef = custRef.child('siteCities');
  			var fireCity = $firebase(pcityRef);

  			$scope.addLocation = function () {
  				var currentLoc = $scope.location;
  				fireSite.$add(currentLoc);
  				$scope.location = '';
  			};

  			$scope.addCity = function () {
  				var currentCity = $scope.pcity;
  				fireCity.$add(currentCity);
  				$scope.pcity = '';
  			};

  			siteRef.on('value', function (snapshot) {
				$timeout(function () {
					var snapshotVal = snapshot.val();
					$scope.sites = snapshotVal;
				});
			});

			pcityRef.on('value', function (snapshot) {
				$timeout(function () {
					var snapshotVal = snapshot.val();
					$scope.cities = snapshotVal;
				});
			});

		});
})(window.angular);