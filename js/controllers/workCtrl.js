angular.module("app.controllers").controller('workCtrl', ['$scope', 'Works',
    function($scope, Works) {
        Works.fetch().then(function(data) {
            $scope.data = data;
        });
    }
])
