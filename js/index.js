/**
 *  Module
 *
 * Description
 */
var app = angular.module('myResume', []);

app.controller('navCtrl', ['$scope',
    function($scope) {
        $scope.navHeaders = [{
            name: "Intro",
            active: false
        }, {
            name: "Skills",
            active: false
        }, {
            name: "Contact Information",
            active: false
        }, ];

        $scope.clickHandler = function(index) {
            $scope.navHeaders[index].active = true;
        }
    }
])
