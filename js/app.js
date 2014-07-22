var app = angular.module("app", ["ngRoute"]);

app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: "templates/intro.html"
        }).when('/skill', {
            templateUrl: "templates/skill.html"
        }).when('/experience', {
            templateUrl: "templates/experience.html"
        }).when('/contact', {
            templateUrl: "templates/contact.html"
        }).when('/work', {
            templateUrl: "templates/work.html"
        }).otherwise({
            redirectTo: '/'
        });
    }
]);
