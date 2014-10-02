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


/* Check browser and show alrt message is browser is not firefox or safari 
var browser = navigator.userAgent.toLowerCase();
var check = function(r) {
    return r.test(browser);
}
if (check(/opera/) || check(/chrome/) || check(/msie/)) {
    alert("Please use Safari or Firefox to see the content");
}
*/