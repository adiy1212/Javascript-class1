var app = angular.module("footballApp", []);

app.controller("fooballController", function($scope, $http, playerData) {
	$scope.setTeam = function(teamName) {
		$http.get(teamName).success(function(teamData) {
			$scope.myplayers = teamData;
		}).error(function(data, status, headers, config) {
			console.log(data, status, headers, config);
		});
	};
	
	$scope.setTeam('barcelona.json');
	
	playerData.findPlayer("Timor");
});

app.directive("players", function() {
	return {
		restrict : "E",
		templateUrl : "pla.html"
	};
});

app.service("playerData", function($http){
	return {
		findPlayer: function(playerName){
			console.log("OK");
			$http.get("barcelona.json").success(function(responseData){
				console.log("Data",responseData);
			}).error(function(data, status, headers, config){
				console.log("error", data, status, headers, config);
			});
		}
	};
});