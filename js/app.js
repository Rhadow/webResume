var app = angular.module("app", ["ngRoute", "app.services", "app.controllers", "ui.bootstrap"]);

app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: "templates/intro.html"
        }).when('/skill', {
            templateUrl: "templates/profile.html"
        }).when('/experience', {
            templateUrl: "templates/experience.html"
        }).when('/work', {
            templateUrl: "templates/work.html"
        }).otherwise({
            redirectTo: '/'
        });
    }
]);
