angular.module("app.services").factory("Experiences", ["$http", "$q",
    function($http, $q) {
        return {
            fetch: function() {
                var defer = $q.defer();
                $http.get("JSON/experience.json").success(function(data) {
                    defer.resolve(data);
                }).error(function() {
                    alert("Fetch experience FAILED!!");
                });
                return defer.promise;
            }
        };
    }
]);
