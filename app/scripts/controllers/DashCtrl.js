/*global Firebase*/
'use strict';

(function (angular) {
	angular.module('abhiApp').
		controller('DashCtrl', function($scope, $timeout, FBURL) {
			var custRef = new Firebase(FBURL);
  			var formRef = custRef.child('forms');
			
			formRef.on('value', function (snapshot) {
				$timeout(function () {
					var snapshotVal = snapshot.val();
					$scope.forms = snapshotVal;
				});
			});
		});
})(window.angular);