angular.module("app.controllers").controller("expCtrl", ["$scope", "Experiences",
    function($scope, Experiences) {
        Experiences.fetch().then(function(data) {
            $scope.data = data;
        });
    }
]);
