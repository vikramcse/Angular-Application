/*global Firebase*/
'use strict';

(function (angular) {
	angular.module('abhiApp').
		controller('DashCtrl', function ($scope, FBURL, $timeout) {
			var custRef = new Firebase(FBURL);
  			var formRef = custRef.child('forms');
  			$scope.messages = [];
			
			formRef.on('value', function (snapshot) {
				$timeout(function () {
					var snapshotVal = snapshot.val();
					$scope.forms = snapshotVal;
				});
			});

			formRef.on('child_added', function (snapshot) {
				$timeout(function () {
					//var snapshotVal = snapshot.name();
					//console.log(snapshotVal);
					//console.log(snapshot.val());
					$scope.messages.push({
						val:snapshot.val()
					});
				});
			});

			$scope.toggleDetail = function (row) {
				$scope.$index = row;
				$scope.currentVal = $scope.messages[row].val;
				//console.log($scope.currentVal);
			};
			
		});
})(window.angular);