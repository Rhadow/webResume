angular.module("app.controllers").controller("profileCtrl", ["$scope", "Profile",
    function($scope, Profile) {
        Profile.fetch().then(function(data){
        	$scope.profile = data;
        });
    }
]);
