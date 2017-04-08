angular.module('clientApp',[])
	.controller('mainController',['$scope', '$http', '$sce', function($scope, $http, $sce) {
		$scope.getTime = function() {
			$scope.preloader = true;
			$http.jsonp($sce.trustAsResourceUrl('https://g0ward-time-server.herokuapp.com/'))
				.then(function (data) {
					var time = new Date(data.data);
					$scope.serverTime = time;
					Materialize.toast('Time has been successfully received', 3000);
					$scope.preloader = false;
				})
				.catch(function (error) {
					console.error(error);
					Materialize.toast('Receive error', 3000);
					$scope.preloader = false;
				});
		};
	}]);