angular.module("app.services").factory("Profile", ["$q", "$http",
    function($q, $http) {
        return {
            fetch: function() {
                var defer = $q.defer();
                $http.get("JSON/profile.json").success(function(data) {
                    defer.resolve(data);
                }).error(function() {
                    alert("Fetch profile FAILED!!");
                });
                return defer.promise;
            }
        }
    }
]);
