angular.module("app.controllers").controller("skillCtrl", ["$scope", "Profile",
    function($scope, Profile) {
        Profile.fetch().then(function(data){
        	$scope.profile = data;
        });
    }
]);
