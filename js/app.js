var app = angular.module("app", ["ngRoute"]);

app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: "../templates/home.html"
        }).when('/contact', {
            templateUrl: "../templates/contact.html"
        }).otherwise({
            redirectTo: '/'
        });
    }
]);
